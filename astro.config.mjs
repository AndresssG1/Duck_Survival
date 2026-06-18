import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ducksurvival.guide',
  integrations: [sitemap()],
  output: 'static',
});
