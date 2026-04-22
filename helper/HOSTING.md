# Hosting this helper (HTTPS URL for F1 User Apps)

FiveM loads User Apps from a **normal https:// URL**. This folder is static files only — no build step.

## Better than ngrok (persistent, not on your PC)

Use a **static host** and upload `tt-userapp-data-capture.html` (or deploy this repo folder):

| Service | Notes |
|--------|--------|
| **GitHub Pages** | Free, URL like `https://<user>.github.io/<repo>/helper/tt-userapp-data-capture.html` |
| **Cloudflare Pages** | Free tier, connect Git or drag-and-drop |
| **Netlify** | Drop folder or Git deploy |
| **Vercel** | Static deploy from Git |

Workflow: push `helper/` to a repo → enable Pages on `main` / `docs` or set publish directory to `helper` → paste the full file URL in-game F1.

## ngrok / local tunnel (temporary, runs on your PC)

Fine for quick tests: run a static server locally, expose with ngrok/Cloudflare Tunnel/localtunnel, use the https URL in F1. Less ideal for “always on” or sharing logs from another machine.

## FiveM in-game (`tt-userapp-data-capture.html`)

CEF often blocks **clipboard** and **`<a download>`**. Use the page’s **Export box** (fill snapshot → select all → copy). **Pause key list redraw** defaults on so the key list does not rebuild every game tick (fixes scroll jumping); click **Redraw key list** after actions to refresh the table.

## File URL

`file:///` often **does not** work inside FiveM’s browser; prefer hosted HTTPS.
