# Assets

Assets are organized by year (`2026/`), matching the rest of the site, so each year's theme keeps its own files. See `AGENTS.md`.

## 2026

### `2026/audio/`

Background music, played from the button in `src/layouts/Layout2026.astro`. Encoding details and the license are in `2026/audio/README.md`.

The track ships in two formats on purpose:

- `morning-coffee.opus` (Ogg Opus, 1.4 MB) is listed first, so browsers that can play it download only this file.
- `morning-coffee.m4a` (AAC, 1.9 MB) is a fallback for browsers that can't play Ogg Opus, mainly older Safari on macOS and iOS. Modern browsers never download it. We keep it so guests on an older iPhone still get working music.

TypeScript doesn't know `.m4a` imports by default, so `src/env.d.ts` declares the module.

Audio is not preloaded. Nothing downloads until someone presses Play.
