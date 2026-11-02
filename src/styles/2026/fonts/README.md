# Fonts

## Cozette

The 2026 theme uses [Cozette](https://github.com/the-moonwitch/Cozette), a bitmap-style pixel font by Samhain and contributors. It is MIT licensed; see `Cozette-LICENSE.txt`.

Version: v1.30.0

### Files

- `CozetteVector.woff2` is the regular weight.
- `CozetteVectorBold.woff2` is the bold weight.

These are the "Vector" builds, which are outlines drawn to look like the bitmap font. They scale cleanly and render crisply at multiples of 13px, Cozette's native size. The theme uses 13px for body text, 20px for the home page buttons and 26px for page titles.

### Subsetting

The files from the release are about 100-125 KB each because they include roughly 6,000 glyphs. We only use a few, so the committed files are subsetted to about 4 KB each. They keep Basic Latin, Latin-1 Supplement (accents, `×`), curly quotes, en/em dashes, `•`, `▸` and `♪`.

If you need another character, re-download the originals (below) and re-run:

```sh
pip install fonttools brotli
for w in CozetteVector CozetteVectorBold; do
  pyftsubset $w.woff2 \
    --unicodes="U+0020-007E,U+00A0-00FF,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2022,U+25B8,U+266A" \
    --flavor=woff2 --layout-features='*' --output-file=$w.subset.woff2
  mv $w.subset.woff2 $w.woff2
done
```

Both files are under Vite's 4 KB inline limit, so the build embeds them in the CSS as data URIs. That means no separate font requests and no flash of fallback text, so no preload is needed. If a future subset grows past 4 KB, it will become a separate file and should be preloaded in `src/layouts/Layout2026.astro`.

### How we got them

The original (unsubsetted) files came straight from the release. The Cozette releases page already ships web-ready `.woff2` files, so no conversion was needed. We downloaded them directly from the v1.30.0 release assets:

```sh
base=https://github.com/the-moonwitch/Cozette/releases/download/v.1.30.0
curl -sLO $base/CozetteVector.woff2
curl -sLO $base/CozetteVectorBold.woff2
curl -sLO $base/LICENSE   # saved here as Cozette-LICENSE.txt
```

The release also has `.ttf`, `.otf`, `.woff` and bitmap (`.bdf`, `.otb`, `.psf`) formats. We use `.woff2` because it is the smallest and is supported by all current browsers.

### To upgrade

Check the [latest release](https://github.com/the-moonwitch/Cozette/releases), swap in the new `.woff2` files, and update the version above.
