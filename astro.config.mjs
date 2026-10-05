// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse definitive du site. C'est elle qui alimente le lien canonique,
  // l'adresse Open Graph et le sitemap. Tant qu'elle se terminait par
  // vercel.app, BaseLayout posait un noindex pour que Google n'indexe pas
  // l'adresse provisoire : cette regle se desactive d'elle-meme ici.
  site: 'https://eleusisfilm.ch',

  // CSS embarque dans le HTML : la page ne peut jamais s'afficher sans ses
  // styles (un fichier separe peut manquer pendant un deploiement), et c'est
  // une requete bloquante de moins a chaque navigation.
  build: {
    inlineStylesheets: 'always',
  },

  integrations: [sitemap()],
});