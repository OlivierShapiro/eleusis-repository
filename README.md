# ÉLEUSIS — README (commencer ici)

> Point d'entrée de la documentation du site **Éleusis** (production vidéo).
> Lis ce fichier en premier, puis les trois documents dans l'ordre indiqué.
> Destiné à Claude Code comme à toute personne qui reprend le projet.

---

## Les documents (ordre de lecture)

Lis-les **dans cet ordre**. Chacun s'appuie sur le précédent.

1. **`FOCUS_DESIGN_SYSTEM.md`** — *le QUOI.*
   La source de vérité visuelle : tokens CSS (couleurs, noir grisé, dégradés, grain), typographie (Encode Sans Expanded + IBM Plex Mono), règle des 10 % d'accent (#FF1E63), signature (marques de cadrage tracées), et le catalogue complet des animations (§6.bis).

2. **`FOCUS_CHARTE_PROMPT.md`** — *le COMMENT.*
   Le protocole de build : règles permanentes, étapes de construction dans l'ordre imposé, règle des ≤3 animations par section, points de contrôle, anti-patterns, et prompts types réutilisables (§6).

3. **`FOCUS_PLAN_PAGES.md`** — *le OÙ.*
   La structure et le contenu de chaque page (Accueil, Projets, Page projet, Formules, À propos, Contact) + Nav et Footer globaux. Tous les textes sont des **placeholders** — à remplacer plus tard.

Mnémotechnique : **Quoi → Comment → Où.**

---

## Règles d'or (non négociables)

Valables en permanence, sur chaque page et chaque prompt :

- Les trois documents sont **contraignants**. En cas de doute : **demander, ne pas inventer.**
- **Source de vérité = design system.** Aucune couleur/police/durée hors tokens.
- **Jamais de #000 pur** (base #121214) · **grain** sur toutes les grandes surfaces.
- **Accent #FF1E63 ≤ ~10 %** · titres en blanc, jamais en accent.
- **Une seule courbe d'easing** : `cubic-bezier(0.16,1,0.3,1)` · reveals 0.8s · signature 0.55s.
- **≤3 types d'animation par section** (l'accumulation se fait à l'échelle de la page).
- **Construire par étapes**, valider entre chaque, point de contrôle à chaque fin d'étape.
- **Placeholders** (`Projet Alpha`, `Lorem…`, `[PRIX]`) : ne jamais les remplacer par de fausses vraies infos.

---

## Démarrage rapide (Claude Code)

**1er prompt — amorce (ne génère rien encore) :**

> J'ai quatre fichiers à la racine du repo. Traite les trois documents FOCUS comme contraignants ; en cas de doute, demande au lieu d'inventer. Lis-les dans cet ordre : 1) `FOCUS_DESIGN_SYSTEM.md`, 2) `FOCUS_CHARTE_PROMPT.md`, 3) `FOCUS_PLAN_PAGES.md`. Ne génère encore rien. Confirme que tu as intégré : la palette, les deux polices, la règle des 10 % d'accent, la signature animée et le catalogue d'animations §6.bis. Puis liste les assets dont tu as besoin et propose le plan de build en suivant les étapes de la charte.

**Ensuite :** suivre les étapes de la charte, **un prompt par étape, validation entre chaque** :

1. Fondations (statique : tokens, polices, grain, nav, footer)
2. Hero + une carte projet (le test de feeling — itérer ici)
3. Moteur d'animation (Lenis + GSAP + ScrollTrigger + SplitType)
4. Sections une par une (annoncer 2–3 animations, valider, coder)
5. Animations avancées (parallax, pin, texte ligne par ligne, compteurs, magnétique)
6. Finitions & QA (responsive, perf, accessibilité, SEO, audit final)

Les prompts prêts à copier pour chaque étape sont dans `FOCUS_CHARTE_PROMPT.md` §6.

---

## Ce qui reste à fournir (côté client)

- Les **vrais contenus** : noms de projets, textes, prix des formules, bio, coordonnées, réseaux.
- Les **assets** : vidéos `.webm`/`.mp4` + posters, photos, logo, favicon.
- La décision sur le **formulaire de contact** (backend / service d'envoi d'email).

Tant que ces éléments ne sont pas fournis, garder les placeholders du plan de pages.

---

## Marque

- Wordmark affiché : **FOCUS** seul.
- Nom complet (footer, mentions légales, `<title>`, méta/SEO) : **Éleusis**.
# Focus-Website
# Focus-Website
# Focus-Website
# Focus-Website
# Focus-Website
