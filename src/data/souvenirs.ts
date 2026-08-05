/**
 * Souvenirs — contenu PARTAGÉ entre la section « Souvenirs » (page À propos)
 * et la section « En coulisses » (page Projets). Même contenu des deux côtés ;
 * seule la DISPOSITION (positions/rotations) change, définie par chaque page.
 *
 * Images : public/images/souvenirs/souvenir-01.webp … souvenir-06.webp
 * (3 verticales + 3 horizontales — l'orientation fait partie du contenu).
 * Légendes : à personnaliser librement (moments, valeurs, projets…).
 */
export interface Souvenir {
  img: string; // base du fichier (sans extension)
  ar: string;  // ratio : "4 / 5" = vertical, "3 / 2" = horizontal
}

// Contenu PHOTO partagé (mêmes images des deux côtés). Les LÉGENDES, elles,
// sont propres à chaque page → définies dans la disposition de chaque page.
export const souvenirs: Souvenir[] = [
  { img: "souvenir-01", ar: "4 / 5" },
  { img: "souvenir-02", ar: "3 / 2" },
  { img: "souvenir-03", ar: "4 / 5" },
  { img: "souvenir-04", ar: "3 / 2" },
  { img: "souvenir-05", ar: "4 / 5" },
  { img: "souvenir-06", ar: "3 / 2" },
];
