# Texture pellicule (effet anomalies sur le fond)

Dépose ici l'image de texture sous le nom **exact** :

- `film-overlay.png`  (ou `film-overlay.jpg`)

## Type d'image attendu
- **Anomalies CLAIRES sur fond NOIR** (poussières, fines rayures, grain).
  Le fond noir est neutralisé automatiquement (`mix-blend-mode: screen`),
  donc seules les marques claires apparaissent sur le fond du site.
- Idéalement **haute résolution** (≥ 2000px de large) pour rester net en plein écran.

> Si tu fournis un PNG **transparent** (pas clair-sur-noir), dis-le moi :
> je passe la fusion en « normal » au lieu de « screen ».

## Réglage de l'intensité
Dans `src/styles/global.css`, variable `--film-opacity` sur `.film-fx::before`
(défaut `0.6`). On l'ajuste ensemble une fois la vraie image en place.
