import { defineConfig } from 'astro/config';

// Static site, deployed to GitHub Pages at the project URL:
//   https://harnessed-ai.github.io/harnessed.dev/
// `base` is the repo name (the sub-path the site is served from). Internal
// links/assets are built from import.meta.env.BASE_URL so they honor it — see
// the components/pages. If you later move to a root domain, set base back to
// '/' and update `site`.
export default defineConfig({
  site: 'https://harnessed-ai.github.io',
  base: '/harnessed.dev',
});
