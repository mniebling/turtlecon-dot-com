# Fonts

## Pixel Operator

The 2026 theme uses [Pixel Operator](https://notabug.org/HarvettFox96/ttf-pixeloperator), a pixel font by Jayvee Enaguas (HarvettFox96). It is released under CC0; see `PixelOperator-LICENSE.txt`.

### Files

- `PixelOperator.woff2` is the regular weight.
- `PixelOperatorBold.woff2` is the bold weight.

These are the proportional builds (`PixelOperator.ttf` and `PixelOperator-Bold.ttf`). The font is drawn on a 1600-unit em, so each font pixel is exactly 100 units. At 16px, one font pixel is exactly one CSS pixel and the text renders crisply.

### Sizes

Use multiples of 16px. Other sizes make font pixels land between device pixels, which looks uneven. The theme uses 16px for body text and section headings, 20px for the home page cards (slightly off-grid, but it looks fine) and 32px for page titles.

### Missing glyphs

Pixel Operator has no `▸` (U+25B8) or `♪` (U+266A). The list bullets and the sound toggle fall back to a system font for those.

### Subsetting

The original files are about 17 KB each. The committed files are subsetted to about 3 KB. They keep Basic Latin, Latin-1 Supplement (accents, `×`), curly quotes, en/em dashes and `•`.

If you need another character, re-download the originals (below) and re-run:

```sh
pip install fonttools brotli
for f in PixelOperator PixelOperator-Bold; do
  pyftsubset $f.ttf \
    --unicodes="U+0020-007E,U+00A0-00FF,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2022" \
    --flavor=woff2 --layout-features='*' --output-file=$f.subset.woff2
done
mv PixelOperator.subset.woff2 PixelOperator.woff2
mv PixelOperator-Bold.subset.woff2 PixelOperatorBold.woff2
```

Both files are under Vite's 4 KB inline limit, so the build embeds them in the CSS as data URIs. That means no separate font requests and no flash of fallback text, so no preload is needed. If a future subset grows past 4 KB, it will become a separate file and should be preloaded in `src/layouts/Layout2026.astro`.

### How we got them

The author's original repository is on NotABug. We downloaded the TTFs from a GitHub mirror of it:

```sh
base=https://github.com/bauripalash/ttf-pixeloperator-fork/raw/master
curl -sLO $base/ttf/PixelOperator.ttf
curl -sLO $base/ttf/PixelOperator-Bold.ttf
curl -sL $base/LICENSE -o PixelOperator-LICENSE.txt
```

The upstream release has other variants (mono, semi-condensed, 8px-tall) if we ever want them.
