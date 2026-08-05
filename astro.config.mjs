// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://focus-production.ch',
  // Single shared CSS, zero client JS by default — animations added later via islands/scripts.
  build: {
    inlineStylesheets: 'auto',
  },
});
