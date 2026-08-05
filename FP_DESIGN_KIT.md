# FP_DESIGN_KIT — Direction artistique portable (Éleusis)

> Kit autonome à copier dans un autre projet pour réutiliser **exactement** la
> même direction artistique. Indépendant de la techno : ce sont des tokens, des
> règles typographiques et un langage de motion, pas du code Astro.
>
> **Esprit** : sombre, cinématographique, « cadrage » (viewfinder), premium,
> précis. Mono pour le fonctionnel, display ultra-expanded pour les titres,
> accent rose-rouge utilisé avec parcimonie comme signal.

---

## 1. Tokens (CSS custom properties)

Colle ce bloc dans le `:root` de ton nouveau projet. Adapte uniquement la note
sur `--bg-base` (voir §6 « Adaptation pour une app »).

```css
:root {
  /* Fonds */
  --bg-base:    #0f0f11;   /* fond principal (app : opaque, voir §6) */
  --bg-raised:  #181820;   /* cartes / panneaux légèrement plus clairs */
  --bg-deep:    #0e0e12;   /* zones plus profondes */

  /* Texte */
  --text:       #FFFFFF;   /* titres, corps principal */
  --text-muted: #8B93A6;   /* textes secondaires (gris bleuté) */
  --text-faint: #54545E;   /* méta, numérotation, hints */

  /* Accent — rose-rouge signature (à doser : boutons clés, labels, signature) */
  --accent:        #FF1E63;
  --accent-text:   #FFFFFF;                 /* texte sur accent plein */
  --accent-glow:   rgba(255,30,99,0.35);    /* halo sous bouton accent */
  --accent-border: rgba(255,30,99,0.50);    /* bordure pill/label accent */

  /* Lignes */
  --line:        rgba(255,255,255,0.10);    /* séparateurs 1px */
  --line-strong: rgba(255,255,255,0.16);    /* bordures de pills neutres */

  /* Typographie */
  --font-display: 'Encode Sans Expanded', sans-serif; /* titres — weight 800 */
  --font-mono:    'IBM Plex Mono', monospace;         /* corps, labels, méta */

  /* Motion */
  --ease:       cubic-bezier(0.16, 1, 0.3, 1); /* easing maison « focus » */
  --dur-reveal: 0.8s;    /* apparitions de contenu */
  --dur-sign:   0.55s;   /* tracé de la signature (équerres de cadrage) */
  --stagger:    0.08s;   /* décalage entre éléments d'un groupe */

  /* Layout (à ajuster selon l'app) */
  --gutter:  clamp(20px, 5vw, 64px);
  --maxw:    1320px;
  --measure: 60ch;       /* mesure max du corps en mono */
}
```

---

## 2. Typographie

- **Display** : *Encode Sans Expanded*, **weight 800**, `text-transform: uppercase`,
  `letter-spacing: 0.02em`, `line-height: 0.9`. Réservé aux gros titres / wordmarks.
- **Corps / UI / labels / méta** : *IBM Plex Mono* (400 et 500). Tout le
  fonctionnel est en mono → c'est une signature forte de la DA.
- **Labels** (eyebrows, catégories) : mono, uppercase, `letter-spacing: 0.14em`,
  ~0.82rem, souvent préfixés `// ` et parfois en `--accent`.

Lien Google Fonts (head) :
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@500;800&family=IBM+Plex+Mono:wght@400;500&display=swap" />
```

---

## 3. Langage de motion

- **Easing unique** : `cubic-bezier(0.16, 1, 0.3, 1)` partout (dans GSAP =
  `CustomEase` nommé « focus »). Décélération douce, jamais de rebond.
- **Reveals** : apparition par translation + fondu, `yPercent`/`translateY`
  ~26–40px, `--dur-reveal`, en cascade (`--stagger` entre éléments).
- **Titres** : découpe ligne par ligne (SplitType) puis montée des lignes.
- **Pas d'animations gratuites** : le motion sert la lecture, reste sobre et net.
- Respecter `prefers-reduced-motion` (désactiver scrub/parallaxe).

Stack motion de référence (optionnelle) : Lenis (smooth scroll) + GSAP +
ScrollTrigger + CustomEase + SplitType.

---

## 4. Signature visuelle — les équerres de cadrage

L'élément identitaire : deux **équerres** (coins TL + BR) qui « cadrent » un
élément, comme un viseur de caméra. Les bras se **tracent** depuis le sommet de
l'angle (scale 0 → 1) au reveal.

```html
<span class="mark tl"><i class="arm arm-h"></i><i class="arm arm-v"></i></span>
<span class="mark br"><i class="arm arm-h"></i><i class="arm arm-v"></i></span>
```
```css
.mark { position: absolute; width: 11px; height: 11px; }
.mark .arm { position: absolute; background: var(--accent); }
.mark .arm-h { width: 11px; height: 1.5px; }
.mark .arm-v { width: 1.5px; height: 11px; }
.mark.tl .arm-h { top: 0; left: 0;  transform-origin: left;  transform: scaleX(0); }
.mark.tl .arm-v { top: 0; left: 0;  transform-origin: top;   transform: scaleY(0); }
.mark.br .arm-h { bottom: 0; right: 0; transform-origin: right;  transform: scaleX(0); }
.mark.br .arm-v { bottom: 0; right: 0; transform-origin: bottom; transform: scaleY(0); }
.is-drawn .mark .arm-h { transform: scaleX(1); transition: transform var(--dur-sign) var(--ease); }
.is-drawn .mark .arm-v { transform: scaleY(1); transition: transform var(--dur-sign) var(--ease); }
```
Usage app : cadrer une carte sélectionnée, un board actif, un élément focus.

---

## 5. Conventions de composants

- **Boutons primaires** : fond `--accent`, texte `--accent-text`, halo
  `--accent-glow`, transition `--dur-sign --ease`. À réserver à l'action clé.
- **Pills / chips neutres** : fond transparent, bordure `--line-strong`,
  texte `--text-muted` → `--text` + bordure `--accent-border` à l'état actif.
- **Champs de saisie** : fond transparent, bordure-bas `--line-strong`,
  `--accent-border` au focus, texte en mono. **Neutraliser l'autofill** :
  ```css
  input:-webkit-autofill {
    -webkit-text-fill-color: var(--text);
    caret-color: var(--text);
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  ```
- **Séparateurs** : 1px `--line`.
- **Coins** : rayons faibles (1–4px) ; l'esthétique est nette, pas « bubbly ».

---

## 6. Adaptation pour une app (≠ site vitrine)

Le site d'origine pose `--bg-base` en **translucide** (`rgba(15,15,17,0.35)`)
pour laisser voir une **texture de grain/anomalies** fixée derrière tout le
document. Pour une app de productivité (canvas / tableaux) :

- Mets `--bg-base` **opaque** (`#0f0f11`) — pas besoin de la couche texture, qui
  nuirait à la lisibilité d'un canvas dense. (Tu peux garder un grain très léger
  optionnel sur le canvas vide seulement.)
- UI plus **dense** : réduis les `clamp()` géants des titres ; le display 800
  uppercase reste pour les en-têtes/logo, pas pour l'UI courante (qui est en mono).
- Le **canvas infini** (boards) : fond `--bg-deep`, cartes en `--bg-raised`,
  bordures `--line` ; sélection = équerres `--accent` (§4).
- Garde l'accent rose **rare** : sélection, action primaire, indicateur actif.

---

## 7. À NE PAS faire

- Ne pas multiplier les couleurs : le système est mono-accent.
- Ne pas mettre du display Expanded dans l'UI courante (illisible en petit).
- Ne pas ajouter d'easing « bouncy » ni d'ombres portées lourdes/colorées
  partout — rester net et sombre.
- Ne pas noyer l'accent rose (perte de l'effet « signal »).
