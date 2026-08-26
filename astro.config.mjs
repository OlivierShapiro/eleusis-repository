// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://eleusis-film.vercel.app', // provisoire, a remplacer par le domaine definitif
  // CSS embarque dans le HTML : la page ne peut jamais s'afficher sans ses
  // styles (un fichier separe peut manquer pendant un deploiement), et c'est
  // une requete bloquante de moins a chaque navigation.
  build: {
    inlineStylesheets: 'always',
  },
});
