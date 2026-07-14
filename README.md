# toolsPluginsSite

Website for tools and plugins — a landing page plus dedicated pages for two
tmux plugins (`tmux-ai-sessions-restore` and `tmux-nudge`), styled with the
**Nocturne** design system (dark, left-aligned, code-forward).

## Pages

| File | Page |
| --- | --- |
| `TmuxToolkit.dc.html` | Home / landing |
| `TmuxSessionsRestore.dc.html` | tmux-ai-sessions-restore |
| `TmuxNudge.dc.html` | tmux-nudge |

Each page is a **self-contained bundle**: the HTML, JS runtime, and React are
gzip-embedded inside the `.dc.html` file and unpacked in the browser at load
time. They cross-link to each other via the top nav.

## Theme

The pages don't carry the theme inline — at runtime an embedded loader
(`ds-base.js`, baked into each bundle) injects the Nocturne stylesheet from two
files that live alongside the pages:

- `styles.css` — the Nocturne theme (all `--color-*`, `--font-*`, `--space-*`,
  `--radius-*`, `--shadow-*` tokens plus the base type/component layer).
- `_ds_bundle.js` — the design-system runtime (currently no interactive
  components; the loader still expects it).

**Keep these two files next to the `.dc.html` pages.** If they go missing, the
CSS tokens fall back to browser defaults and the pages render unstyled (white
background, serif text). Inter is pulled from Google Fonts over the network, so
the exact typeface needs a connection; colors and layout work offline.

## Viewing the pages

### Quick look (open a file directly)

Double-click any `.dc.html`, or from a terminal:

```sh
open TmuxToolkit.dc.html      # macOS
```

The bundle unpacks itself in place, so `file://` works and relative paths
resolve to `styles.css` / `_ds_bundle.js` in the same folder.

### Local web server (recommended)

A local server avoids any `file://` quirks and mirrors how the site is hosted:

```sh
cd /path/to/website
python3 -m http.server 8000
# then open http://localhost:8000/TmuxToolkit.dc.html
```

Stop it with `Ctrl-C` (or `lsof -ti:8000 | xargs kill`).

## Updating the theme

The theme is derived from the Nocturne design system. To restyle, edit the
tokens at the top of `styles.css` — every page reads from them, so no page
markup needs to change. Don't hard-code hex/px/font values the tokens already
carry.
