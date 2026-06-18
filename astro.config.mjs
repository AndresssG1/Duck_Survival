import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://duck-survival.pages.dev',
  integrations: [sitemap()],
  output: 'static',
});
