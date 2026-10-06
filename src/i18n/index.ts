/**
 * Point d'entrée des langues. Une page récupère son dictionnaire avec
 * `textes(lang)` et ses adresses avec `route(lang, cle)`.
 */
import fr from "./fr";
import en from "./en";
export * from "./routes";
import type { Langue } from "./routes";

/** Le français fait référence : tout dictionnaire doit avoir sa forme.
 *  Une clé oubliée en anglais devient une erreur de compilation, pas un
 *  blanc découvert en ligne. */
export type Dictionnaire = typeof fr;

const dicos: Record<Langue, Dictionnaire> = { fr, en };

/** Dictionnaire complet d'une langue. */
export function textes(lang: Langue): Dictionnaire {
  return dicos[lang];
}
