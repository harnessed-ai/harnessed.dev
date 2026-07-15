# Website

Website for tools and plugins — a landing page plus dedicated pages for two
tmux plugins (`tmux-ai-sessions-restore` and `tmux-nudge`), styled with the
**Nocturne** design system (dark, left-aligned, code-forward).

Built with [Astro](https://astro.build). Pages are composed from small,
reusable components and build to plain static HTML — no client-side framework
ships to the browser.

## Quick start

Requires [Node.js](https://nodejs.org) 18.20+ (developed on Node 22+) and npm.

```sh
npm install       # install dependencies (first time only)
npm run dev       # start the dev server at http://localhost:4321 (live reload)
```

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies into `node_modules/`. |
| `npm run dev` | Dev server with hot reload at `http://localhost:4321`. |
| `npm run build` | Build the static site into `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to check the production output. |

`dist/` and `node_modules/` are generated and git-ignored — never edit or commit
them.

## Project layout

```
src/
  pages/          one file per route (the URL is the filename)
    index.astro            → /
    sessions-restore.astro → /sessions-restore
    nudge.astro            → /nudge
  layouts/
    Base.astro     page shell: <head>, theme, gradient bg, nav + footer
  components/
    Nav.astro         shared top nav        (props: current, githubHref)
    Footer.astro      shared footer         (props: links)
    Eyebrow.astro     uppercase section label with the accent dash
    PluginCard.astro  a home-page plugin card (prop: blink)
    CopyButton.astro  "Copy" install button (prop: command)
public/           served as-is at the site root
  styles.css        the Nocturne theme (design tokens + component classes)
  demo.gif          demo on the sessions-restore page
  nudge-demo.gif    demo on the nudge page
astro.config.mjs  Astro config
```

> **History:** these pages started as Claude Design `.dc.html` bundles (HTML +
> React + a JS runtime gzip-embedded per file), were de-bundled into plain HTML,
> then refactored into the Astro components you see here so the shared nav,
> footer, and cards live in one place each.

## Editing

- **Change page copy or structure** — edit the relevant file in `src/pages/`.
  Most styling comes from classes and CSS variables defined in
  `public/styles.css`; prefer those over hard-coded hex/px/font values the
  tokens already carry.
- **Change something shared** (nav, footer, a card, the page shell) — edit the
  component in `src/components/` or `src/layouts/`. It updates everywhere at once
  — no more hand-syncing three files.
- **Add a page** — drop a new `.astro` file in `src/pages/`; its filename
  becomes the route. Reuse `Base.astro` for the shell.
- **Assets** (images, the stylesheet) live in `public/` and are referenced with
  a root-absolute path, e.g. `/demo.gif`, `/styles.css`.

Run `npm run dev` while editing — the browser reloads on save.

## Theme

`public/styles.css` is the single source of truth for the look: all design
tokens (`--color-*`, `--font-*`, `--space-*`, `--radius-*`, `--shadow-*`) plus
the base type and component classes (`.nav`, `.card`, `.btn`, `.hr`, …). To
restyle, edit the tokens at the top of that file — every page reads from them,
so no page markup needs to change. Inter is pulled from Google Fonts over the
network (an `@import` at the top of the file), so the exact typeface needs a
connection; colors and layout work offline.

## Interactivity

The two plugin pages have a "Copy" button that copies the install snippet to the
clipboard (`CopyButton.astro`). It's the only client-side JavaScript on the
site; Astro bundles it once and ships nothing else.

## Deploying

`npm run build` emits a fully static `dist/` — host it anywhere that serves
static files (GitHub Pages, Netlify, Cloudflare Pages, etc.). The config assumes
the site is served from the domain root (`https://harnessed.dev`); if you ever
deploy under a sub-path, set `base` in `astro.config.mjs`.
