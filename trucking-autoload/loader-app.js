/* Transport Tycoon User App — self storage auto loader (NUI automation). */
(function () {
  "use strict";

  const LS_KEY = "tt_self_storage_loader_v1";

  const OUTER_OPEN = "Open Storage";
  const OUTER_TRUNK = "Take to Trunk";
  const OUTER_DUMP = "Dump from Trunk";
  const INNER_TAKE = "Take";

  const defaultConfig = () => ({
    enabled: false,
    shortfallMode: "take_all",
    nui: {
      retries: 300,
      timeoutMs: 10,
      submitRetries: 200,
      submitTimeoutMs: 5,
      extraDelayMs: 10,
    },
    lines: [],
  });

  let config = loadConfig();
  const cache = {};
  let lastTriggerCheck = 0;
  let executing = false;
  let runGeneration = 0;
  /** Prevent immediate second run while outer menu still open after completion. */
  let cooldownUntil = 0;

  function loadConfig() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultConfig();
      const o = JSON.parse(raw);
      return { ...defaultConfig(), ...o, nui: { ...defaultConfig().nui, ...(o.nui || {}) } };
    } catch {
      return defaultConfig();
    }
  }

  function saveConfig() {
    localStorage.setItem(LS_KEY, JSON.stringify(config));
  }

  function post(msg) {
    try {
      window.parent.postMessage(msg, "*");
    } catch (e) {
      log("postMessage failed: " + (e && e.message), "err");
    }
  }

  function notify(text) {
    post({ type: "notification", text: String(text).slice(0, 200) });
  }

  const logEl = () => document.getElementById("log");
  function log(msg, cls) {
    const el = logEl();
    if (!el) return;
    const line = document.createElement("div");
    line.className = "log-line" + (cls ? " " + cls : "");
    const t = new Date().toLocaleTimeString();
    line.textContent = "[" + t + "] " + msg;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
    if (el.children.length > 400) el.removeChild(el.firstChild);
  }

  function sleep(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function stripHtml(s) {
    return String(s || "").replace(/(<.+?>)|(&#.+?;)/g, "").trim();
  }

  function parseMenuChoices(raw) {
    if (!raw) return [];
    if (Array.isArray(raw)) return raw;
    if (typeof raw === "string") {
      try {
        return JSON.parse(raw);
      } catch {
        return [];
      }
    }
    return [];
  }

  function boolish(v) {
    return v === true || v === "true" || v === 1;
  }

  function parseJsonMap(raw) {
    if (!raw) return {};
    if (typeof raw === "object") return raw;
    try {
      return JSON.parse(raw);
    } catch {
      return {};
    }
  }

  function getSelfStorageChestKey() {
    const c = String(cache.chest || "");
    if (c.startsWith("self_storage:")) {
      return "chest_" + c;
    }
    for (const k of Object.keys(cache)) {
      if (k.startsWith("chest_self_storage:")) return k;
    }
    return null;
  }

  function getStorageCounts() {
    const k = getSelfStorageChestKey();
    if (!k) return {};
    return parseJsonMap(cache[k]);
  }

  function getPlayerInvCounts() {
    return parseJsonMap(cache.inventory);
  }

  function trunkChestKey() {
    const uid = cache.user_id;
    const trailer = cache.trailer;
    if (uid == null || !trailer) return null;
    return "chest_u" + uid + "veh_trailer_" + trailer;
  }

  function getTrunkCounts() {
    const k = trunkChestKey();
    if (!k || cache[k] == null) return {};
    return parseJsonMap(cache[k]);
  }

  function amountIn(map, itemId) {
    const e = map[itemId];
    if (!e) return 0;
    return Number(e.amount) || 0;
  }

  function isOuterSelfStorageMenu() {
    if (!boolish(cache.menu_open)) return false;
    if (!String(cache.chest || "").startsWith("self_storage:")) return false;
    const rows = parseMenuChoices(cache.menu_choices);
    const strips = rows.map((r) => stripHtml(r && r[0]));
    return strips.includes(OUTER_OPEN) && strips.includes(OUTER_TRUNK) && strips.includes(OUTER_DUMP);
  }

  async function waitFor(pred, label) {
    const { retries, timeoutMs } = config.nui;
    let n = retries;
    while (n-- > 0) {
      if (pred()) return true;
      await sleep(timeoutMs);
    }
    throw new Error("Timeout waiting: " + label);
  }

  async function waitMenuChange(prevSig) {
    const { submitRetries, submitTimeoutMs } = config.nui;
    let n = submitRetries;
    while (n-- > 0) {
      const sig =
        String(cache.menu || "") +
        "|" +
        boolish(cache.menu_open) +
        "|" +
        boolish(cache.prompt) +
        "|" +
        JSON.stringify(cache.menu_choices || []);
      if (sig !== prevSig) return sig;
      await sleep(submitTimeoutMs);
    }
    throw new Error("Timeout waiting for menu change");
  }

  async function forceMenuBackStep() {
    post({ type: "forceMenuBack" });
    await sleep(config.nui.extraDelayMs);
  }

  async function closeToOuterOrIdle(maxSteps) {
    for (let i = 0; i < maxSteps; i++) {
      if (isOuterSelfStorageMenu()) return;
      if (!boolish(cache.menu_open)) return;
      await forceMenuBackStep();
    }
  }

  function findChoiceExact(plainLabel) {
    const rows = parseMenuChoices(cache.menu_choices);
    for (const row of rows) {
      if (!row || !row[0]) continue;
      if (stripHtml(row[0]) === plainLabel) return row[0];
    }
    return null;
  }

  function findChoiceCargoRow(vrpName) {
    const rows = parseMenuChoices(cache.menu_choices);
    for (const row of rows) {
      if (!row || !row[0]) continue;
      const st = stripHtml(row[0]);
      if (st === vrpName || st.includes(vrpName)) return row[0];
    }
    return null;
  }

  async function pickMenuChoiceByPlain(plain, label) {
    await waitFor(
      () => boolish(cache.menu_open) && !!findChoiceExact(plain),
      label + " visible"
    );
    const full = findChoiceExact(plain);
    if (!full) throw new Error("Choice not found: " + plain);
    const prevSig =
      String(cache.menu || "") +
      "|" +
      boolish(cache.menu_open) +
      "|" +
      boolish(cache.prompt) +
      "|" +
      JSON.stringify(cache.menu_choices || []);
    post({ type: "forceMenuChoice", choice: full, mod: 0 });
    await sleep(config.nui.extraDelayMs);
    await waitMenuChange(prevSig);
  }

  async function submitPromptAmount(amount) {
    const { submitRetries, submitTimeoutMs, extraDelayMs } = config.nui;
    await waitFor(() => boolish(cache.prompt), "amount prompt");
    let n = submitRetries;
    while (n-- > 0) {
      post({ type: "forceSubmitValue", value: String(amount) });
      await sleep(extraDelayMs);
      if (!boolish(cache.prompt)) return;
      await sleep(submitTimeoutMs);
    }
    throw new Error("Prompt submit failed for amount " + amount);
  }

  async function pickVehicleRow() {
    const trailer = String(cache.trailer || "").trim();
    const rows = parseMenuChoices(cache.menu_choices);
    if (rows.length === 0) throw new Error("No menu rows for vehicle select");

    let full = null;
    if (trailer) {
      for (const row of rows) {
        if (!row || !row[0]) continue;
        const st = stripHtml(row[0]);
        if (st.includes("(" + trailer + ")") || st.toLowerCase().endsWith(trailer.toLowerCase())) {
          full = row[0];
          break;
        }
      }
    }
    if (!full) {
      for (const row of rows) {
        if (!row || !row[0]) continue;
        const st = stripHtml(row[0]);
        if (/\([^)]+\)/.test(st) && !/^put\b/i.test(st) && !/^take\b/i.test(st) && !st.startsWith("Truck Cargo:")) {
          full = row[0];
          break;
        }
      }
    }
    if (!full && rows[0] && rows[0][0]) full = rows[0][0];
    if (!full) throw new Error("Could not pick vehicle row");

    const prevSig =
      String(cache.menu || "") +
      "|" +
      boolish(cache.menu_open) +
      "|" +
      boolish(cache.prompt) +
      "|" +
      JSON.stringify(cache.menu_choices || []);
    post({ type: "forceMenuChoice", choice: full, mod: 0 });
    await sleep(config.nui.extraDelayMs);
    await waitMenuChange(prevSig);
  }

  async function maybePickVehicleAfterTakeToTrunk() {
    await sleep(config.nui.extraDelayMs * 3);
    const rows = parseMenuChoices(cache.menu_choices);
    const strips = rows.map((r) => stripHtml(r && r[0])).filter(Boolean);
    if (!strips.length) return;
    const allCargo = strips.every((s) => s.startsWith("Truck Cargo:"));
    if (allCargo) return;
    const hasVehicleLike = strips.some(
      (s) => /\([^)]+\)/.test(s) && !s.startsWith("Truck Cargo:") && !/^put\b/i.test(s) && !/^take\b/i.test(s)
    );
    if (hasVehicleLike) await pickVehicleRow();
  }

  async function pickCargoLine(vrpName) {
    await waitFor(
      () =>
        boolish(cache.menu_open) &&
        parseMenuChoices(cache.menu_choices).some((r) => stripHtml(r && r[0]).includes(vrpName)),
      "cargo line: " + vrpName
    );
    const full = findChoiceCargoRow(vrpName);
    if (!full) throw new Error("Cargo line not found: " + vrpName);
    const prevSig =
      String(cache.menu || "") +
      "|" +
      boolish(cache.menu_open) +
      "|" +
      boolish(cache.prompt) +
      "|" +
      JSON.stringify(cache.menu_choices || []);
    post({ type: "forceMenuChoice", choice: full, mod: 0 });
    await sleep(config.nui.extraDelayMs);
    await waitMenuChange(prevSig);
  }

  async function runTakeToTrunkForItem(itemId, take) {
    const meta = window.TT_TRUCKING_ITEMS[itemId];
    if (!meta) throw new Error("Unknown item id: " + itemId);
    const vrp = meta.vrpName;

    await closeToOuterOrIdle(12);
    if (!isOuterSelfStorageMenu()) throw new Error("Lost outer self storage menu (trunk)");

    await pickMenuChoiceByPlain(OUTER_TRUNK, "Take to Trunk");
    await maybePickVehicleAfterTakeToTrunk();
    await pickCargoLine(vrp);
    await submitPromptAmount(take);
    await sleep(config.nui.extraDelayMs * 2);
    await closeToOuterOrIdle(8);
    post({ type: "getData" });
    await sleep(config.nui.extraDelayMs * 4);
  }

  async function runTakeToInventoryForItem(itemId, take) {
    const meta = window.TT_TRUCKING_ITEMS[itemId];
    if (!meta) throw new Error("Unknown item id: " + itemId);
    const vrp = meta.vrpName;
    const w = Number(cache.weight) || 0;
    const maxW = Number(cache.max_weight) || 0;
    const addW = (Number(meta.weight) || 0) * take;
    if (maxW > 0 && w + addW > maxW) {
      notify("~r~[SSL]~w~ Inventory full (weight). Stop.");
      throw new Error("Inventory full: weight " + w + " + " + addW + " > " + maxW);
    }

    await closeToOuterOrIdle(12);
    if (!isOuterSelfStorageMenu()) throw new Error("Lost outer self storage menu (inv)");

    await pickMenuChoiceByPlain(OUTER_OPEN, "Open Storage");
    await pickMenuChoiceByPlain(INNER_TAKE, "Take");
    await pickCargoLine(vrp);
    await submitPromptAmount(take);
    await sleep(config.nui.extraDelayMs * 2);
    await closeToOuterOrIdle(8);
    post({ type: "getData" });
    await sleep(config.nui.extraDelayMs * 4);
  }

  function plannedTake(need, available, mode) {
    if (need <= 0) return { take: 0, note: "skip" };
    if (available >= need) return { take: need, note: "ok" };
    if (mode === "abort") return { take: 0, note: "abort_shortfall", short: need - available };
    return { take: available, note: "partial", short: need - available };
  }

  async function executeRun(gen) {
    if (executing) return;
    executing = true;
    log("— Run started —", "ok");
    try {
      const lines = (config.lines || []).filter((l) => l && l.itemId);
      if (!lines.length) {
        notify("~o~[SSL]~w~ No items configured.");
        return;
      }
      if (!String(cache.trailer || "").trim()) {
        notify("~r~[SSL]~w~ No trailer in cache — park trailer / spawn before trunk pulls.");
        throw new Error("No trailer");
      }

      post({ type: "getData" });
      await sleep(200);

      for (const phase of ["trunk", "inv"]) {
        if (gen !== runGeneration) return;
        for (const line of lines) {
          if (gen !== runGeneration) return;
          const itemId = line.itemId;
          const meta = window.TT_TRUCKING_ITEMS[itemId];
          if (!meta) {
            log("Skip unknown item: " + itemId, "err");
            continue;
          }
          const targetT = Math.max(0, parseInt(line.trunkQty, 10) || 0);
          const targetI = Math.max(0, parseInt(line.invQty, 10) || 0);

          const storage = getStorageCounts();
          const invC = getPlayerInvCounts();
          const trunkC = getTrunkCounts();
          const inStor = amountIn(storage, itemId);
          const inInv = amountIn(invC, itemId);
          const inTrunk = amountIn(trunkC, itemId);

          if (phase === "trunk") {
            const needT = Math.max(0, targetT - inTrunk);
            if (needT <= 0) {
              log(itemId + ": trunk already satisfied (" + inTrunk + "/" + targetT + ")");
              continue;
            }
            const plan = plannedTake(needT, inStor, config.shortfallMode);
            if (plan.take <= 0) {
              if (plan.note === "abort_shortfall") {
                log(
                  itemId + ": abort — need " + needT + " trunk, only " + inStor + " in storage",
                  "err"
                );
              }
              continue;
            }
            if (plan.short)
              log(
                itemId + ": shortfall taking " + plan.take + " (missing " + plan.short + " in this unit)",
                "warn"
              );
            log("Trunk pull " + itemId + " x" + plan.take);
            await runTakeToTrunkForItem(itemId, plan.take);
          } else {
            const needI = Math.max(0, targetI - inInv);
            if (needI <= 0) {
              log(itemId + ": inv already satisfied (" + inInv + "/" + targetI + ")");
              continue;
            }
            const st2 = getStorageCounts();
            const inStor2 = amountIn(st2, itemId);
            const plan = plannedTake(needI, inStor2, config.shortfallMode);
            if (plan.take <= 0) {
              if (plan.note === "abort_shortfall") {
                log(
                  itemId + ": abort inv — need " + needI + ", only " + inStor2 + " in storage",
                  "err"
                );
              }
              continue;
            }
            if (plan.short)
              log(
                itemId + ": inv shortfall taking " + plan.take + " (missing " + plan.short + ")",
                "warn"
              );
            log("Inv pull " + itemId + " x" + plan.take);
            await runTakeToInventoryForItem(itemId, plan.take);
          }
        }
      }

      notify("~g~[SSL]~w~ Finished run.");
      log("— Run finished —", "ok");
    } catch (e) {
      log("Run error: " + (e && e.message ? e.message : e), "err");
      notify("~r~[SSL]~w~ " + String((e && e.message) || e).slice(0, 120));
    } finally {
      executing = false;
      cooldownUntil = Date.now() + 5000;
      await closeToOuterOrIdle(6);
    }
  }

  function maybeAutoTrigger() {
    if (!config.enabled || executing) return;
    if (Date.now() < cooldownUntil) return;
    const now = Date.now();
    if (now - lastTriggerCheck < 150) return;
    lastTriggerCheck = now;
    if (!isOuterSelfStorageMenu()) return;
    runGeneration++;
    const gen = runGeneration;
    queueMicrotask(() => executeRun(gen));
  }

  window.addEventListener("message", (e) => {
    const d = e.data && e.data.data;
    if (!d || typeof d !== "object") return;
    Object.assign(cache, d);
    maybeAutoTrigger();
  });

  function readNuiFromDom() {
    config.enabled = document.getElementById("ssl-enabled").checked;
    config.shortfallMode = document.getElementById("ssl-shortfall").value;
    config.nui.retries = parseInt(document.getElementById("nui-retries").value, 10) || 300;
    config.nui.timeoutMs = parseInt(document.getElementById("nui-timeout").value, 10) || 10;
    config.nui.submitRetries = parseInt(document.getElementById("nui-subret").value, 10) || 200;
    config.nui.submitTimeoutMs = parseInt(document.getElementById("nui-subto").value, 10) || 5;
    config.nui.extraDelayMs = parseInt(document.getElementById("nui-extra").value, 10) || 10;
  }

  function writeDomFromConfig() {
    document.getElementById("ssl-enabled").checked = !!config.enabled;
    document.getElementById("ssl-shortfall").value = config.shortfallMode || "take_all";
    document.getElementById("nui-retries").value = config.nui.retries;
    document.getElementById("nui-timeout").value = config.nui.timeoutMs;
    document.getElementById("nui-subret").value = config.nui.submitRetries;
    document.getElementById("nui-subto").value = config.nui.submitTimeoutMs;
    document.getElementById("nui-extra").value = config.nui.extraDelayMs;
  }

  function renderLinesTable() {
    const tb = document.querySelector("#lines-body");
    tb.innerHTML = "";
    const items = window.TT_TRUCKING_ITEMS || {};
    const keys = Object.keys(items).sort((a, b) =>
      String(items[a].name || a).localeCompare(String(items[b].name || b))
    );
    (config.lines || []).forEach((line, idx) => {
      const tr = document.createElement("tr");
      const td0 = document.createElement("td");
      const sel = document.createElement("select");
      sel.className = "item-sel";
      keys.forEach((k) => {
        const opt = document.createElement("option");
        opt.value = k;
        opt.textContent = (items[k] && items[k].name) || k;
        if (k === line.itemId) opt.selected = true;
        sel.appendChild(opt);
      });
      sel.addEventListener("change", () => {
        config.lines[idx].itemId = sel.value;
        saveConfig();
      });
      td0.appendChild(sel);

      const td1 = document.createElement("td");
      const inT = document.createElement("input");
      inT.type = "number";
      inT.min = "0";
      inT.value = line.trunkQty != null ? line.trunkQty : 0;
      inT.addEventListener("change", () => {
        config.lines[idx].trunkQty = parseInt(inT.value, 10) || 0;
        saveConfig();
      });
      td1.appendChild(inT);

      const td2 = document.createElement("td");
      const inI = document.createElement("input");
      inI.type = "number";
      inI.min = "0";
      inI.value = line.invQty != null ? line.invQty : 0;
      inI.addEventListener("change", () => {
        config.lines[idx].invQty = parseInt(inI.value, 10) || 0;
        saveConfig();
      });
      td2.appendChild(inI);

      const td3 = document.createElement("td");
      const rm = document.createElement("button");
      rm.type = "button";
      rm.textContent = "Remove";
      rm.addEventListener("click", () => {
        config.lines.splice(idx, 1);
        saveConfig();
        renderLinesTable();
      });
      td3.appendChild(rm);

      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tb.appendChild(tr);
    });
  }

  function addLine() {
    const items = window.TT_TRUCKING_ITEMS || {};
    const keys = Object.keys(items).sort();
    const first = keys.includes("crafted_rebar") ? "crafted_rebar" : keys[0] || "crafted_rebar";
    config.lines.push({ itemId: first, trunkQty: 0, invQty: 0 });
    saveConfig();
    renderLinesTable();
  }

  function bindUi() {
    writeDomFromConfig();
    renderLinesTable();

    document.getElementById("ssl-enabled").addEventListener("change", () => {
      readNuiFromDom();
      saveConfig();
    });
    document.getElementById("ssl-shortfall").addEventListener("change", () => {
      readNuiFromDom();
      saveConfig();
    });
    ["nui-retries", "nui-timeout", "nui-subret", "nui-subto", "nui-extra"].forEach((id) => {
      document.getElementById(id).addEventListener("change", () => {
        readNuiFromDom();
        saveConfig();
      });
    });

    document.getElementById("btn-add-line").addEventListener("click", addLine);
    document.getElementById("btn-save").addEventListener("click", () => {
      readNuiFromDom();
      saveConfig();
      notify("~g~[SSL]~w~ Saved.");
      log("Saved config.", "ok");
    });
    document.getElementById("btn-getdata").addEventListener("click", () => post({ type: "getData" }));
    document.getElementById("btn-pin").addEventListener("click", () => post({ type: "pin" }));
    document.getElementById("btn-clear-log").addEventListener("click", () => {
      logEl().innerHTML = "";
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") post({ type: "pin" });
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (!window.TT_TRUCKING_ITEMS) {
      log("items-data.js failed to load.", "err");
      return;
    }
    bindUi();
    log("Ready. Enable automation, open self storage outer menu (Open Storage / Take to Trunk / Dump from Trunk).", "ok");
    post({ type: "getData" });
  });
})();
