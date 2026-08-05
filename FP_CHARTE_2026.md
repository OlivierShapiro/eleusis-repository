# FP_CHARTE_2026 — Charte & direction artistique

**Éleusis** — studio de réalisation & production vidéo, Suisse romande.
Charte de référence du site (état actuel du code). Source de vérité des tokens :
`src/styles/global.css`.

---

## 1. Esprit & positionnement

Premium, **sombre**, **cinématographique**, précis. L'univers évoque le **cadrage**
(le viseur de caméra) et la **pellicule** (grain, anomalies analogiques). Tout est
au service de l'image : l'interface s'efface, la vidéo parle.

Mots-clés : net, maîtrisé, contrasté, silencieux, professionnel. Jamais : criard,
saturé, « bubbly », corporate générique.

**Ton éditorial**
- Vouvoiement (« Nous racontons votre histoire »), première personne du pluriel.
- Phrases courtes, affirmatives. Pas de jargon marketing creux.
- Baseline : *« Nous racontons votre histoire »*. Idée directrice : *« Chaque image sert une histoire ».*
- Micro-labels d'amorce préfixés `// ` (ex. `// Récit`, `// En coulisses`).
- Numérotation des éléments façon plan de tournage : `N°01 / 04`.

---

## 2. Logo & signature

### Wordmark
- **FOCUS** en *Encode Sans Expanded* 800, UPPERCASE, `letter-spacing: 0.02em`,
  `line-height: 0.9`. Nom complet « Éleusis » réservé au `<title>` / SEO.
- Variantes d'assets : `public/images/logo/`
  - `focus-logo.svg` / `.png` (version C — lockup FOCUS + équerres roses)
  - `focus-logo-dark.svg` / `.png` (sur fond clair)
  - `focus-mark.svg` / `focus-mark-bare.svg` (+ dark) — version B (le point)
- Favicon : `public/favicon.svg` (la marque « point »). OG : `public/og.jpg` (1200×630).

### Signature visuelle — les équerres de cadrage
L'élément identitaire : **deux équerres** sur coins opposés (haut-gauche + bas-droite)
qui « cadrent » un élément comme un viseur. Les bras se **tracent** depuis le sommet
de l'angle (`transform: scaleX/scaleY 0 → 1`, jamais width/height) au reveal ou au hover.

```html
<span class="mark tl"><i class="arm arm-h"></i><i class="arm arm-v"></i></span>
<span class="mark br"><i class="arm arm-h"></i><i class="arm arm-v"></i></span>
```
- Traits en `--accent`, ~1.5px d'épaisseur, déclenchés par la classe `.is-drawn`
  (transition `transform var(--dur-sign) var(--ease)`).
- Deux modes d'application sur les titres découpés (`[data-frameword]`) :
  - défaut → encadre **le dernier mot** ;
  - `data-frameword="block"` → encadre **tout le bloc** du titre (titres multi-lignes).
- Usages : titres clés, carte projet au hover, cadre du showreel, élément actif.

---

## 3. Couleurs (tokens)

> Jamais de `#000` pur : le noir est relevé vers le gris.

| Rôle | Token | Valeur |
|---|---|---|
| Fond base (section) | `--bg-base` | `rgba(15,15,17,0.35)` *(semi-transparent → laisse voir la texture)* |
| Secours opaque (body) | — | `#0f0f11` |
| Surface surélevée (cartes/panneaux) | `--bg-raised` | `#181820` |
| Surface profonde | `--bg-deep` | `#0e0e12` |
| Texte principal | `--text` | `#FFFFFF` |
| Texte secondaire (gris bleuté) | `--text-muted` | `#8B93A6` |
| Texte ténu (méta, hints) | `--text-faint` | `#54545E` |
| **Accent** rose-rouge | `--accent` | `#FF1E63` |
| Texte sur accent plein | `--accent-text` | `#FFFFFF` |
| Halo accent | `--accent-glow` | `rgba(255,30,99,0.35)` |
| Bordure accent | `--accent-border` | `rgba(255,30,99,0.50)` |
| Ligne fine | `--line` | `rgba(255,255,255,0.10)` |
| Ligne forte | `--line-strong` | `rgba(255,255,255,0.16)` |

**Dégradé de fond principal** (`--bg-gradient`, hero / grandes sections) :
bleu discret en haut-droite + rose très faible en bas-gauche + base grise diagonale.

**Règle d'accent — STRICTEMENT ~10 %.** Le rose `#FF1E63` est un **signal**, pas une
couleur de remplissage : labels `//`, bouton primaire (1 max par section), tracé de
signature, séparateurs `//`, indicateur actif, halo de bas de page. Le reste est
neutre (blancs/gris/lignes). Ne jamais noyer l'accent.

---

## 4. Typographie

Deux familles, jamais plus. (Google Fonts, `display=swap`.)

```
Encode+Sans+Expanded:wght@500;800  +  IBM+Plex+Mono:wght@400;500
```

- **Display — `--font-display`** : *Encode Sans Expanded* **800**, UPPERCASE,
  `line-height: 0.9`, `letter-spacing: ~0.01–0.02em`. **Titres et wordmark uniquement.**
  Tailles fluides, ex. `clamp(2rem, 5.5vw, 4.4rem)`. Jamais en petit corps.
- **Mono — `--font-mono`** : *IBM Plex Mono* (400 corps / 500 labels). **Tout le reste** :
  corps, UI, labels, méta, boutons, navigation. C'est une signature forte.
- **`.label`** : mono 500, UPPERCASE, `letter-spacing: 0.18em`, `0.72rem`, `--text-muted`.
  Variante `.label--accent` (rose) pour les amorces `//`.
- **`.count`** : mono 500, `letter-spacing: 0.14em`, `--text-faint` (numérotation `N°01 / 04`).
- Corps : `line-height: 1.7`, mesure max `--measure: 60ch`.

---

## 5. Mise en page

| Token | Valeur | Rôle |
|---|---|---|
| `--maxw` | `1320px` | largeur max du conteneur |
| `--gutter` | `clamp(20px, 5vw, 64px)` | marges latérales |
| `--nav-h` | `72px` | hauteur de nav |
| `--measure` | `60ch` | mesure de lecture |

- `.container` centre le contenu à `--maxw` avec les gouttières.
- `.rule` : filet 1px `--line`.
- Coins : **rayons faibles** (1–4px ; cartes & boutons à `2px`). Esthétique nette,
  pas d'arrondis prononcés.
- Densité aérée sur le site vitrine ; gros respirs verticaux entre sections
  (`clamp(80px, 13vw, 190px)`).

---

## 6. Texture & traitements de fond

Plusieurs couches, du plus profond au plus proche :

1. **`.bg-texture`** (z-index `-1`, `position:absolute` sur toute la hauteur du
   document → **défile** avec la page). Anomalies « pellicule » : rayures
   verticales/diagonales + poussières + grain fin, dessinées à deux échelles
   non-multiples (1400 / 950 px) pour **ne jamais se répéter** visiblement.
   Visible **uniquement** à travers les fonds de section semi-transparents
   (`--bg-base`) ; les images/panneaux opaques la masquent → **jamais sur les visuels**.
2. **`.top-scrim`** (fixe, z-index 40) : voile sombre en haut qui garde la zone de
   nav **noire** (la texture ne transparaît pas derrière la nav).
3. **`.film-fx`** (hero d'accueil) : texture analogique réelle
   (`/images/texture/film-overlay.png`) en `mix-blend-mode: screen` + vignette.
   Intensité réglable via `--film-opacity` (défaut `0.09`).
4. **Halo rose de bas de page** (`Footer .bg-deep`) : `radial-gradient` rose centré
   en bas de **chaque page**, qui monte en s'estompant (transparent → laisse voir la
   texture). Esprit projecteur de fin de page.

Règle d'or : **les traitements ne s'appliquent QUE sur les fonds**, jamais sur les
images, vidéos ou contenus.

---

## 7. Mouvement

- **Easing unique** : `--ease: cubic-bezier(0.16, 1, 0.3, 1)` partout
  (dans GSAP = `CustomEase` nommé « focus »). Décélération douce, **jamais de rebond**.
- **Durées** : `--dur-reveal: 0.8s` (apparitions) · `--dur-sign: 0.55s` (tracé signature)
  · `--stagger: 0.08s` (cascade).
- **Reveals** : translation (~26–40px) + fondu, en cascade. Titres découpés ligne par
  ligne (SplitType) puis montée.
- **Stack** : Lenis (smooth scroll) + GSAP + ScrollTrigger + CustomEase + SplitType,
  orchestrés par `MotionEngine.astro`. `[data-parallax]`, `[data-reveal]`,
  `[data-split]`, `[data-count]`, `[data-magnetic]`, `[data-reveal-words]`.
- **Sobriété** : le motion sert la lecture. Pas d'animation gratuite.
- **Accessibilité** : respecter `prefers-reduced-motion` (pas de Lenis, pas de scrub,
  pas de parallaxe).

---

## 8. Composants

- **Bouton accent** (`.btn-accent`) — **1 max par section** : fond `--accent`, texte
  `--accent-text`, mono 500 UPPERCASE `0.12em`, `border-radius: 2px`, halo
  `box-shadow: 0 8px 30px -8px var(--accent-glow)`.
- **Lien mono** (`.link-mono`) : mono 500 UPPERCASE, `--text`, soulignement/flèche
  animés en accent au hover.
- **Pills / chips neutres** : transparent + bordure `--line-strong`, `--text-muted`
  → actif : `--text` + bordure `--accent-border`.
- **Champs de formulaire** : fond transparent, bordure-bas `--line-strong`, focus
  `--accent-border`, texte mono. **Autofill neutralisé** (pas de fond blanc) :
  `transition: background-color 600000s` + `-webkit-text-fill-color: var(--text)`.
- **Carte projet** (`ProjectCard`) : média en cover, filtré au repos
  (`saturate(0.7) brightness(0.62)`), éclairci + `scale(1.07)` au hover ; tracé des
  équerres ; remontée des infos (titre display + type en accent). Priorité de
  couverture : `staticCover → cardVideo → embed → video → placeholder`.
- **Notification showreel** (`.sr-notif`, page À propos) : pastille accent avec
  triangle « play », titre + sous-titre mono, point qui « ping ». Au clic : le disque
  rose **glisse** au centre puis la vidéo **s'ouvre depuis l'intérieur** du disque
  (clip-path circulaire, GSAP).
- **« Prochainement »** (`.coming-soon`) : placeholder vivant pour les projets/showreel
  en attente — dégradé multi-couches (rose + bleu + base) qui **dérive et varie en
  continu** (`cs-drift`, flou doux) + label mono `PROCHAINEMENT` en pulsation.

---

## 9. Imagerie

- Photos d'équipe / hero en **noir & blanc** (`filter: grayscale(1) brightness(…)`),
  souvent ken-burns lent.
- Médias projet en couleur, mais filtrés au repos (désaturés/assombris) et révélés au
  hover — l'image « s'allume » à l'interaction.
- Galeries « Souvenirs » / coulisses en disposition **moodboard** (tailles/orientations
  variées, rotations légères, scatter), pas de grille rigide.
- Vidéos de couverture de carte : locales, compressées (~960px, CRF 27), muettes, en
  boucle, lecture auto.

---

## 10. Règles éditoriales & contenu

- Amorces de section en `// minuscules` accent ; titres en display UPPERCASE.
- Numérotation `N°01 / 04` en mono ténu.
- **Placeholders** : ne jamais inventer de faux clients/chiffres/noms réels. Les zones
  en attente affichent « Prochainement » (voir §8).
- Membres d'équipe affichés **sans hiérarchie** (même taille) ; photo cliquable →
  Instagram quand renseigné.

---

## 11. Pages

- **Accueil** : hero plein écran cinématographique (film-fx) ; « reel » = médias plein
  écran labellisés (Agence / Travaux / Behind The Scenes / Ressources) ; CTA discret
  « Voir les projets ».
- **Projets** : roue/éventail de cartes (3 réelles + 3 « Prochainement ») ; filtre par
  catégorie ; section coulisses (moodboard, mêmes contenus que « Souvenirs »).
- **Process** : timeline verticale (rail central **blanc**), chaque étape avec un
  moodboard de petites images.
- **À propos** : hero N&B ; section Récit (titre encadré « bloc » + notification
  showreel) ; équipe sans hiérarchie ; « Souvenirs » (moodboard).
- **Contact** : formulaire mono (Web3Forms) ; à l'envoi → overlay sombre « MERCI. »
  ~2 s puis reset.
- **Globaux** : Nav (signature FOCUS sur l'accueil uniquement) + Footer (sitemap,
  réseaux, halo rose de bas de page).

---

## 12. À NE PAS faire

- Pas de `#000` pur, pas de couleur hors tokens.
- Pas de display Expanded dans l'UI/petit corps (illisible).
- Pas plus d'un bouton accent par section ; ne pas noyer le rose (perte du « signal »).
- Pas d'easing « bouncy », pas d'ombres lourdes/colorées partout.
- Texture/grain/halo **uniquement sur les fonds**, jamais sur images/vidéos/contenus.
- Pas d'animation gratuite ; toujours respecter `prefers-reduced-motion`.
