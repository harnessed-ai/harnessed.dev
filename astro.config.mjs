import { defineConfig } from 'astro/config';

// Static site. Output is plain HTML in dist/ (no client framework).
// `site` is used for absolute URLs (sitemaps, canonical links) if added later.
export default defineConfig({
  site: 'https://harnessed.dev',
});
