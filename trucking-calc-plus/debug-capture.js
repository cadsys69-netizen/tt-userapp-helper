/* In-app debug capture for TT User App + Auto Grab iteration. */
(function () {
  "use strict";

  const LS_KEY = "tt_ag_debug_capture_v1";
  const MAX_EVENTS = 200;
  const RELEVANT_KEYS = new Set([
    "menu",
    "menu_open",
    "menu_choices",
    "menu_choice",
    "prompt",
    "chest",
    "inventory",
    "trunkWeight",
    "trunkCapacity",
    "trailer",
    "weight",
    "max_weight",
    "job",
    "subjob",
    "user_id",
    "notification",
    "focused",
    "pinned",
    "hidden",
  ]);

  let enabled = true;
  let events = [];
  let msgCount = 0;

  function load() {
    try {
      const o = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
      enabled = o.enabled !== false;
    } catch {
      enabled = true;
    }
  }

  function save() {
    localStorage.setItem(LS_KEY, JSON.stringify({ enabled }));
  }

  function el(id) {
    return document.getElementById(id);
  }

  function now() {
    return new Date().toISOString().slice(11, 23);
  }

  function push(kind, detail) {
    if (!enabled) return;
    events.push({ t: Date.now(), ts: now(), kind, detail });
    if (events.length > MAX_EVENTS) events.shift();
    renderLog();
  }

  function renderLog() {
    const log = el("ag-debug-log");
    if (!log) return;
    log.textContent = events
      .slice(-80)
      .map((e) => `[${e.ts}] ${e.kind} ${typeof e.detail === "string" ? e.detail : JSON.stringify(e.detail)}`)
      .join("\n");
    log.scrollTop = log.scrollHeight;
  }

  function chestKeys(data) {
    return Object.keys(data || {}).filter((k) => k.startsWith("chest_") || k === "chest");
  }

  function summarizePayload(data) {
    const out = {};
    for (const k of Object.keys(data || {})) {
      if (!RELEVANT_KEYS.has(k) && !k.startsWith("chest_") && !k.startsWith("trigger_")) continue;
      let v = data[k];
      if (k === "menu_choices" && typeof v === "string" && v.length > 400) {
        try {
          const rows = JSON.parse(v);
          out[k] = rows.map((r) => String(r && r[0]).replace(/(<.+?>)|(&#.+?;)/g, "").trim()).slice(0, 20);
        } catch {
          out[k] = v.slice(0, 200) + "…";
        }
      } else if (typeof v === "string" && v.length > 280) {
        out[k] = v.slice(0, 280) + "…";
      } else {
        out[k] = v;
      }
    }
    return out;
  }

  function buildExport() {
    const dtc = window.TT_DTC;
    const snap = {
      exportedAt: new Date().toISOString(),
      href: location.href,
      messageCount: msgCount,
      pinnedNodeId: dtc ? dtc.getPinnedNodeId() : localStorage.getItem("pinnedNodeId"),
      pinnedIngredients: dtc ? dtc.getPinnedIngredientLines() : [],
      cache: dtc ? summarizePayload(dtc.getCache()) : {},
      autograb: window.TT_AUTOGRAB ? window.TT_AUTOGRAB.getStatus() : null,
      events: events.slice(-MAX_EVENTS),
    };
    return JSON.stringify(snap, null, 2);
  }

  function bindUi() {
    const chk = el("ag-debug-enabled");
    if (chk) {
      chk.checked = enabled;
      chk.addEventListener("change", () => {
        enabled = chk.checked;
        save();
        push("config", "capture " + (enabled ? "on" : "off"));
      });
    }
    el("ag-debug-clear")?.addEventListener("click", () => {
      events = [];
      renderLog();
      el("ag-debug-export").value = "";
    });
    el("ag-debug-export-btn")?.addEventListener("click", () => {
      const box = el("ag-debug-export");
      if (box) {
        box.value = buildExport();
        box.focus();
        box.select();
      }
      push("export", "snapshot built");
    });
    el("ag-debug-mark")?.addEventListener("click", () => {
      push("mark", "user marker — describe what you did just before this");
    });
  }

  window.TT_DEBUG_CAPTURE = {
    enabled: () => enabled,
    push,
    onMessage(data) {
      msgCount++;
      if (!enabled || !data) return;
      const keys = Object.keys(data);
      const interesting = keys.some((k) => RELEVANT_KEYS.has(k) || k.startsWith("chest_") || k.startsWith("trigger_"));
      if (!interesting) return;
      push("message", {
        keys,
        chestKeys: chestKeys(data),
        summary: summarizePayload(data),
      });
    },
    onAutograb(detail) {
      push("autograb", detail);
    },
    buildExport,
  };

  document.addEventListener("DOMContentLoaded", () => {
    load();
    bindUi();
    renderLog();
    push("boot", "debug capture ready");
  });
})();
