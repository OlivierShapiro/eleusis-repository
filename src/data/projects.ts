/**
 * Données projets — source unique (roue /projets + pages /projets/[slug]).
 * Les 3 premiers sont réels (infos reprises de l'ancien site, verbatim).
 * Les 3 suivants sont des placeholders « à venir » (pas de page détaillée).
 */
export interface Project {
  slug: string;
  title: string;        // nom affiché (carte + page)
  cardType: string;     // libellé court sur la carte (Football, Danse…)
  category: string;     // pour le filtre (brand-film, publicite, corporate, documentaire)
  embed?: { provider: "youtube" | "vimeo"; id: string };
  video?: string;       // fallback (placeholders)
  cardVideo?: string;   // vidéo de couverture de la carte (lecture auto, boucle)
  client?: string;
  year?: string;
  role?: string;
  description?: string; // sert de texte « Notre approche »
  credits?: [string, string][];
  stills?: number;      // nb de stills dispo (public/images/projets/<slug>/still-0X.webp)
  placeholder?: boolean;
  latest?: boolean;     // dernier projet réalisé : mis en avant sur /projets
}

export const projects: Project[] = [
  {
    slug: "mpfootperf",
    title: "MPfootperf.",
    cardType: "Football",
    category: "brand-film",
    embed: { provider: "youtube", id: "OF1te3PmTEY" },
    cardVideo: "/videos/cartes/mpfootperf.mp4",
    client: "MPfootperf.",
    year: "2025",
    role: "Réalisation, color grading, montage",
    description:
      "Un projet réalisé en collaboration avec MPfootperf. et 1700Fribourg. On s'est retrouvé sur le terrain pour capturer ce que c'est vraiment, l'entraînement, l'intensité, la relation entre le coach et ses joueurs. Tourné à Fribourg, étalonnage sur DaVinci Resolve. Merci à eux pour la confiance !",
    credits: [
      ["Réalisation", "Olivier Shapiro"],
      ["Image", "Olivier Shapiro, Arnaud Charrière"],
      ["Montage", "Olivier Shapiro"],
      ["Étalonnage", "Olivier Shapiro"],
      ["Musique", "Olivier Shapiro"],
    ],
    stills: 6,
  },
  {
    slug: "the-dancer",
    title: "The Dancer, Anya",
    cardType: "Danse",
    category: "brand-film",
    embed: { provider: "vimeo", id: "1159587581" },
    cardVideo: "/videos/cartes/the-dancer.mp4",
    year: "2025",
    role: "Réalisation, montage, color grading",
    description:
      "Un showreel réalisé avec Anya, danseuse professionnelle. L'objectif était de capturer l'expressivité des mouvements de la danseuse, de ses émotions.\nQu'est-ce qu'elle veut raconter à travers sa danse ?\nDans une lumière naturelle à contre jour, ainsi qu'une Key-light de côté pour éclairer le sujet et renforcer un contraste de lumière qui amplifie la pression que l'on ressent en la voyant danser. Une musique de NF qui rajoute des frissons, et un étalonnage bleu froid à l'aide de DaVinci Resolve pour renforcer l'atmosphère émotionnelle.\n\nMerci à Anya d'avoir eu la volonté de travailler avec moi !",
    credits: [
      ["Réalisation", "Olivier Shapiro"],
      ["Image", "Olivier Shapiro"],
      ["Montage", "Olivier Shapiro"],
      ["Étalonnage", "Olivier Shapiro"],
      ["Musique", "Olivier Shapiro"],
    ],
    stills: 6,
  },
  {
    slug: "webacces",
    title: "WebAcces, La Lorraine",
    cardType: "Film Corporate",
    category: "corporate",
    embed: { provider: "youtube", id: "Dr0IawbuiX8" },
    cardVideo: "/videos/cartes/webacces.mp4",
    client: "WebAcces",
    year: "2026",
    role: "Réalisation, tournage, montage",
    description:
      "Retour du tournage corporate pour WebAcces à la ferme La Lorraine. Ce fut une grosse expérience. Merci de leur accueil et de nous avoir fait confiance ! Le droniste Arnaud Charrière (@arnaud_drone) était également présent pour m'aider dans ce projet, pour le tournage. Merci à lui.",
    credits: [
      ["Réalisation", "Olivier Shapiro"],
      ["Image", "Olivier Shapiro, Arnaud Charrière"],
      ["Montage", "Olivier Shapiro"],
      ["Étalonnage", "Olivier Shapiro"],
      ["Musique", "Olivier Shapiro"],
    ],
    stills: 6,
  },
  // Dernier projet réalisé : c'est lui qui occupe le grand cadre en haut de
  // /projets. Fiche créée à l'avance, il manque encore la vidéo de couverture,
  // le film, l'année, les crédits et les stills.
  {
    slug: "95-pilates",
    title: "95 Pilates",
    cardType: "Pilates",
    category: "brand-film",
    latest: true,
  },
  // ── Placeholders « à venir » : affichent un visuel « Prochainement »
  //    (dégradé animé) tant qu'aucun vrai projet n'est fourni. ──────────
  { slug: "projet-05", title: "Projet 05", cardType: "Publicité", category: "publicite", placeholder: true },
  { slug: "projet-06", title: "Projet 06", cardType: "Documentaire", category: "documentaire", placeholder: true },
];
