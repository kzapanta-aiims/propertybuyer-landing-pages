# Fonts

The `@font-face` rules in `assets/css/styles.css` load these exact filenames.
Drop a file in with the right name and it is picked up with no further change.

| File | Family | Weight | Used for | Status |
|---|---|---|---|---|
| `proyale-regular.woff2` | Proyale | 400 | H1 and H2 only | **present** |
| `geist-light.woff2` | Geist | 300 | body | missing |
| `geist-regular.woff2` | Geist | 400 | UI where 300 is too thin | missing |
| `geist-semibold.woff2` | Geist | 600 | buttons, H3 through H6 | missing |
| `geist-bold.woff2` | Geist | 700 | labels, strong text, stats | missing |

## Proyale

Supplied by the design lead as `Proyale.ttf` and converted here to WOFF2 with
fontTools, which drops it from 139 KB to 39 KB with no other change. To redo
the conversion if the source is updated:

```sh
pip install fonttools brotli
python3 -c "
from fontTools.ttLib import TTFont
f = TTFont('Proyale.ttf')
f.flavor = 'woff2'
f.save('assets/fonts/proyale-regular.woff2')
"
```

**Proyale is a capitals-only face.** Verified against the font file: the
lowercase glyphs have outlines and bounds identical to their uppercase
counterparts, there is no x-height and there are no descenders. H1 and H2
therefore render as capitals whatever case is typed, and no `text-transform`
is applied anywhere in the CSS. This conflicts with the sentence case rule in
`DESIGN.md` and is flagged there for the design lead.

It ships one weight, 400. Never ask a browser for Proyale Bold.

The fallback is Georgia, which is a mixed-case face, so a heading renders in
sentence case until Proyale loads and in capitals afterwards.

## Geist

Open licensed and self hosted, with no CDN dependency. Until the files land,
body and UI fall back to Helvetica, Arial.
