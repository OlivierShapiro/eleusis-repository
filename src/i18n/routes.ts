/**
 * Table des adresses par langue. Le français reste à la racine (c'est la
 * langue par défaut du site), l'anglais vit sous /en/ avec des segments
 * traduits : un client international lit « /en/projects », pas « /en/projets ».
 *
 * Les pages et les composants ne doivent JAMAIS écrire une adresse en dur :
 * ils demandent une clé à cette table, sinon un lien sur deux renverrait
 * vers l'autre langue.
 */
export const langues = ["fr", "en"] as const;
export type Langue = (typeof langues)[number];

export const langueParDefaut: Langue = "fr";

type Cle = "accueil" | "projets" | "process" | "apropos" | "contact";

const table: Record<Langue, Record<Cle, string>> = {
  fr: {
    accueil: "/",
    projets: "/projets",
    process: "/process",
    apropos: "/a-propos",
    contact: "/contact",
  },
  en: {
    accueil: "/en/",
    projets: "/en/projects",
    process: "/en/process",
    apropos: "/en/about",
    contact: "/en/contact",
  },
};

/** Adresse d'une page dans une langue donnée. */
export function route(lang: Langue, cle: Cle): string {
  return table[lang][cle];
}

/** Adresse d'une fiche projet. */
export function routeProjet(lang: Langue, slug: string): string {
  return lang === "fr" ? `/projets/${slug}` : `/en/projects/${slug}`;
}

/** Même page, dans l'autre langue : sert au sélecteur de langue. */
export function equivalent(lang: Langue, cle: Cle): string {
  return route(lang === "fr" ? "en" : "fr", cle);
}

/**
 * Traduit une adresse réelle vers l'autre langue. Indispensable parce que les
 * segments eux-mêmes changent : « /a-propos » devient « /en/about », pas
 * « /en/a-propos ». Un simple préfixe produirait des pages inexistantes.
 */
export function traduireChemin(chemin: string, vers: Langue): string {
  const nu = chemin.replace(/\/+$/, "") || "/";

  // fiche projet : on garde le slug, on traduit le segment qui précède
  const fiche = nu.match(/^(?:\/en)?\/projets?s?\/([^/]+)$/) || nu.match(/^\/en\/projects\/([^/]+)$/);
  if (fiche) return routeProjet(vers, fiche[1]);

  // pages simples : on retrouve la clé depuis l'adresse, dans les deux langues
  for (const l of langues) {
    for (const cle of Object.keys(table[l]) as Cle[]) {
      const ref = table[l][cle].replace(/\/+$/, "") || "/";
      if (ref === nu) return table[vers][cle];
    }
  }
  return vers === "fr" ? "/" : "/en/";
}
