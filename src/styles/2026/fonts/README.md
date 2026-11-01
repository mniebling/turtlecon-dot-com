# Fonts

## Cozette

The 2026 theme uses [Cozette](https://github.com/the-moonwitch/Cozette), a bitmap-style pixel font by Samhain and contributors. It is MIT licensed; see `Cozette-LICENSE.txt`.

Version: v1.30.0

### Files

- `CozetteVector.woff2` is the regular weight.
- `CozetteVectorBold.woff2` is the bold weight.

These are the "Vector" builds, which are outlines drawn to look like the bitmap font. They scale cleanly and render crisply at multiples of 13px, Cozette's native size. The theme uses 13px for body text, 20px for the home page buttons and 26px for page titles.

### How we got them

The Cozette releases page already ships web-ready `.woff2` files, so no conversion was needed. We downloaded them directly from the v1.30.0 release assets:

```sh
base=https://github.com/the-moonwitch/Cozette/releases/download/v.1.30.0
curl -sLO $base/CozetteVector.woff2
curl -sLO $base/CozetteVectorBold.woff2
curl -sLO $base/LICENSE   # saved here as Cozette-LICENSE.txt
```

The release also has `.ttf`, `.otf`, `.woff` and bitmap (`.bdf`, `.otb`, `.psf`) formats. We use `.woff2` because it is the smallest and is supported by all current browsers.

### To upgrade

Check the [latest release](https://github.com/the-moonwitch/Cozette/releases), swap in the new `.woff2` files, and update the version above.
