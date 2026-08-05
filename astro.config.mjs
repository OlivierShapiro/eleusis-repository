// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eleusis-film.vercel.app', // provisoire, a remplacer par le domaine definitif
  // Une seule feuille CSS partagee, aucun JS client par defaut.
  build: {
    inlineStylesheets: 'auto',
  },
});
