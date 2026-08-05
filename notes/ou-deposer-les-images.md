# Où déposer les images

Structure organisée par page. Dépose chaque fichier dans le bon dossier
avec **exactement le nom indiqué** (sinon dis-le-moi, j'adapte le code).

> 💡 Tu peux déposer en **PNG ou JPG** : je les **convertis en WebP** (≈30× plus
> léger, qualité quasi identique). Les fichiers finaux servis sur le site sont
> donc en `.webp` (c'est ce qui est indiqué ci-dessous).

## accueil/ ✅ (déjà rempli)
- `accueil-01.png` → bloc « Brand »
- `accueil-02.png` → bloc « Storytelling »
- `accueil-03.png` → bloc « Production »
- `accueil-04.png` → bloc « Post-production »

## process/  (PLUSIEURS petites photos par étape : 2 à 4 — format WebP)
Nommage : `process-<étape>-<numéro>.webp`
- Étape 01 (Échange & brief) — 2 images : `process-01-1.webp`, `process-01-2.webp`
- Étape 02 (Pré-production) — 3 images : `process-02-1.webp` … `process-02-3.webp`  ✅ (02-2 fournie)
- Étape 03 (Tournage) — 4 images : `process-03-1.webp` … `process-03-4.webp`
- Étape 04 (Post-production) — 3 images : `process-04-1.webp` … `process-04-3.webp`  ✅ (04-2 fournie)
- Étape 05 (Livraison) — 2 images : `process-05-1.webp`, `process-05-2.webp`
(Tant qu'une photo manque, un placeholder s'affiche.)

## a-propos/  (format WebP)
- `team.webp`     → GRANDE image d'équipe (fond du hero, plein écran)
- `photo-01.webp` · `photo-02.webp` → photos flottantes dans le récit  (`photo-02` ✅ fournie)
- portraits de l'équipe (ordre = ordre d'affichage) :
  - `team-01.webp` → Olivier Shapiro
  - `team-02.webp` → Arnaud Charrière
  - `team-03.webp` · `team-04.webp` → membres à venir

## souvenirs/  (PARTAGÉ — sert à la fois « Souvenirs » (À propos) ET « En coulisses » (Projets) — format WebP)
Mêmes photos affichées sur les deux pages (seule la disposition diffère).
- `souvenir-01.webp` … `souvenir-06.webp` → 3 verticales (01/03/05) + 3 horizontales (02/04/06)
- Légendes modifiables dans `src/data/souvenirs.ts`

## contact/  (à fournir)
- `contact-01.jpg` · `contact-02.jpg` → petit collage sur la page Contact

## projets/<projet>/  (à fournir — stills de la bande d'images de chaque page projet)
Pour chaque projet, des photos nommées `still-01.jpg`, `still-02.jpg`, … :
- `projets/mpfootperf/still-01.jpg` …
- `projets/the-dancer/still-01.jpg` …
- `projets/webacces/still-01.jpg` …

## Autres (hors ce dossier)
- Logos clients → `public/logos/`
- Vidéos → `public/videos/`
- **Vidéos de couverture des cartes projet (lecture auto)** → `public/videos/cartes/`
  (une par projet, nommée par slug : `mpfootperf.webm`, `the-dancer.webm`, `webacces.webm`, `projet-04.webm`…) — voir le guide dans ce dossier.
- Image de partage (OG) → `public/og.jpg` (1200×630)

> Quand tu as déposé des fichiers, préviens-moi : je câble le code pour les afficher.
