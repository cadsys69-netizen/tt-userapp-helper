/* Auto Grab layer: step-aware NUI automation on top of DTC calculator. */
(function () {
  "use strict";

  const LS_KEY = "tt_autograb_bridge_v1";
  const COOLDOWN_MS = 2500;

  const defaultCfg = () => ({
    enabled: false,
    /** pinned_execute: run nuiExecute when self-storage kiosk opens. step_path: DTC autoRecipe path menus. */
    mode: "pinned_execute",
    useStepPath: true,
    onlyWhenPinned: true,
    cooldownMs: COOLDOWN_MS,
  });

  let cfg = defaultCfg();
  let lastRunAt = 0;
  let running = false;
  let lastTrigger = null;

  function loadCfg() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (!raw) return defaultCfg();
      return { ...defaultCfg(), ...JSON.parse(raw) };
    } catch {
      return defaultCfg();
    }
  }

  function saveCfg() {
    localStorage.setItem(LS_KEY, JSON.stringify(cfg));
  }

  function post(msg) {
    try {
      window.parent.postMessage(msg, "*");
    } catch (e) {
      console.error("autograb postMessage", e);
    }
  }

  function notify(text) {
    post({ type: "notification", text: String(text).slice(0, 200) });
  }

  function dbg(detail) {
    if (window.TT_DEBUG_CAPTURE) window.TT_DEBUG_CAPTURE.onAutograb(detail);
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

  function getCache() {
    return window.TT_DTC ? window.TT_DTC.getCache() : {};
  }

  function analyzeOuterMenu(cache) {
    const moOk = boolish(cache.menu_open);
    const chest = String(cache.chest || "");
    const rows = parseMenuChoices(cache.menu_choices);
    const strips = rows.map((r) => stripHtml(r && r[0])).filter(Boolean);
    const hasO = strips.includes("Open Storage");
    const hasT = strips.includes("Take to Trunk");
    const hasD = strips.includes("Dump from Trunk");
    const triplet = hasO && hasT && hasD;
    const chestRelaxed = triplet && (chest.toLowerCase() === "none" || chest === "");
    const chestOk = chest.startsWith("self_storage:") || chestRelaxed;
    return { ok: moOk && chestOk && triplet, strips, chest, menu: String(cache.menu || "") };
  }

  function pinnedReady() {
    const id = window.TT_DTC ? window.TT_DTC.getPinnedNodeId() : localStorage.getItem("pinnedNodeId");
    if (!id) return false;
    const lines = window.TT_DTC ? window.TT_DTC.getPinnedIngredientLines() : [];
    return lines.length > 0;
  }

  async function runPinnedExecute() {
    if (running) return;
    if (Date.now() - lastRunAt < (cfg.cooldownMs || COOLDOWN_MS)) return;
    if (cfg.onlyWhenPinned && !pinnedReady()) {
      dbg({ action: "skip", reason: "no pinned ingredients" });
      return;
    }
    running = true;
    lastRunAt = Date.now();
    dbg({ action: "nuiExecute", reason: "outer self-storage menu" });
    notify("~g~[Auto Grab]~w~ Running pinned recipe pull…");
    try {
      if (typeof window.nuiExecute === "function") {
        await window.nuiExecute();
      }
    } catch (e) {
      dbg({ action: "error", message: e && e.message });
      notify("~r~[Auto Grab]~w~ Execute failed — see debug export.");
    } finally {
      running = false;
    }
  }

  function onCacheUpdate(data, keys) {
    if (!cfg.enabled) return;
    if (!window.TT_DTC) return;

    const cache = getCache();
    const menuChanged = keys.some((k) => k === "menu_open" || k === "menu_choices" || k === "menu" || k === "chest");

    if (cfg.mode === "pinned_execute" && menuChanged) {
      const gate = analyzeOuterMenu(cache);
      if (gate.ok) {
        dbg({ action: "gate_match", gate });
        runPinnedExecute();
      }
    }

    if (cfg.useStepPath && keys.includes("menu_open") && boolish(cache.menu_open)) {
      const autoRecipe = document.getElementById("autoRecipe");
      if (autoRecipe && !autoRecipe.checked) {
        autoRecipe.checked = true;
        localStorage.setItem("autoRecipe", "true");
        autoRecipe.dispatchEvent(new Event("change"));
        dbg({ action: "autoRecipe_enabled" });
      }
    }
  }

  function readDom() {
    cfg.enabled = !!document.getElementById("ag-enabled")?.checked;
    cfg.mode = document.getElementById("ag-mode")?.value || "pinned_execute";
    cfg.useStepPath = !!document.getElementById("ag-step-path")?.checked;
    cfg.onlyWhenPinned = !!document.getElementById("ag-require-pin")?.checked;
  }

  function writeDom() {
    const en = document.getElementById("ag-enabled");
    if (en) en.checked = !!cfg.enabled;
    const mode = document.getElementById("ag-mode");
    if (mode) mode.value = cfg.mode;
    const sp = document.getElementById("ag-step-path");
    if (sp) sp.checked = !!cfg.useStepPath;
    const rp = document.getElementById("ag-require-pin");
    if (rp) rp.checked = !!cfg.onlyWhenPinned;
    renderStatus();
  }

  function renderStatus() {
    const el = document.getElementById("ag-status");
    if (!el) return;
    const pin = window.TT_DTC ? window.TT_DTC.getPinnedNodeId() : localStorage.getItem("pinnedNodeId");
    const n = window.TT_DTC ? window.TT_DTC.getPinnedIngredientLines().length : 0;
    el.textContent =
      (cfg.enabled ? "ON" : "OFF") +
      " · pin=" +
      (pin || "none") +
      " · ingredients=" +
      n +
      " · mode=" +
      cfg.mode;
  }

  function bindUi() {
    writeDom();
    ["ag-enabled", "ag-mode", "ag-step-path", "ag-require-pin"].forEach((id) => {
      document.getElementById(id)?.addEventListener("change", () => {
        readDom();
        saveCfg();
        renderStatus();
        dbg({ action: "config", cfg: { ...cfg } });
      });
    });
    document.getElementById("ag-sync-pin")?.addEventListener("click", () => {
      const lines = window.TT_DTC ? window.TT_DTC.getPinnedIngredientLines() : [];
      dbg({ action: "sync_preview", lines });
      notify("~g~[Auto Grab]~w~ Pinned: " + lines.length + " ingredient lines (see debug export).");
      renderStatus();
    });
    document.getElementById("ag-run-now")?.addEventListener("click", () => {
      readDom();
      runPinnedExecute();
    });
  }

  window.TT_AUTOGRAB = {
    getStatus: () => ({
      cfg: { ...cfg },
      pinnedNodeId: window.TT_DTC ? window.TT_DTC.getPinnedNodeId() : null,
      ingredientLines: window.TT_DTC ? window.TT_DTC.getPinnedIngredientLines() : [],
      lastRunAt,
      running,
    }),
    analyzeOuterMenu,
  };

  window.addEventListener("message", (event) => {
    const payload = event.data;
    if (!payload) return;
    if (window.TT_DEBUG_CAPTURE) window.TT_DEBUG_CAPTURE.onMessage(payload.data || payload);

    const data = payload.data;
    if (!data || typeof data !== "object") return;

    if (data.trigger_agtoggle != null && data.trigger_agtoggle !== lastTrigger) {
      lastTrigger = data.trigger_agtoggle;
      cfg.enabled = !cfg.enabled;
      saveCfg();
      writeDom();
      notify(cfg.enabled ? "~g~[Auto Grab]~w~ Enabled" : "~y~[Auto Grab]~w~ Disabled");
      dbg({ action: "toggle", enabled: cfg.enabled });
    }

    onCacheUpdate(data, Object.keys(data));
  });

  document.addEventListener("DOMContentLoaded", () => {
    cfg = loadCfg();
    bindUi();
    setTimeout(() => {
      post({ type: "registerTrigger", trigger: "agtoggle", name: "Auto Grab Toggle" });
      post({ type: "getData" });
    }, 400);
    dbg({ action: "boot", cfg });
  });
})();
