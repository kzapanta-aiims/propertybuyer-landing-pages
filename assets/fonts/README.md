# Fonts

Both faces are in. Self hosted, no CDN dependency.

| File | Family | Weights | Used for |
|---|---|---|---|
| `proyale-regular.woff2` | Proyale | 400 only | H1 and H2 |
| `geist-variable.woff2` | Geist | 100 to 900, variable | body, UI, everything else |

## Proyale

Supplied by the design lead as `Proyale.ttf` and converted here to WOFF2,
139 KB down to 39 KB with no other change.

**Proyale is a capitals-only face.** Verified against the font file: the
lowercase glyphs have outlines and bounds identical to their uppercase
counterparts, there is no x-height and there are no descenders. H1 and H2
therefore render as capitals whatever case is typed, and no `text-transform`
is applied anywhere in the CSS.

**Accepted 13 August 2026.** This is a property of the face, not a breach of
the sentence case rule. That rule governs how copy is written; it does not
oblige a chosen display face to render it mixed. Keep writing H1 and H2 in
sentence case, because the fallback is Georgia, which is mixed case, and the
heading renders that way until Proyale loads.

It ships one weight, 400. Never ask a browser for Proyale Bold.

## Geist

One variable file across the whole 100 to 900 weight axis. The page asks for
300, 400, 600 and 700 and the axis serves all four.

Supplied 13 August 2026 as a Google Fonts bundle containing both the variable
font and eighteen static cuts. The variable file was chosen on measured size:

| | WOFF2 | Requests |
|---|---|---|
| Four static cuts (300/400/600/700) | 131.5 KB | 4 |
| **One variable file** | **67.2 KB** | **1** |

Half the bytes and one request, on a page whose load time feeds Ads Quality
Score. The `@font-face` rule declares `font-weight: 100 900` with
`format("woff2-variations")`.

Licence is in `GEIST-OFL.txt`. Italics are not shipped; nothing on these pages
sets italic, and adding the italic axis would roughly double the payload.

## Converting a TTF to WOFF2

No Python on the build machine, so this repo uses the Node encoder rather than
the fontTools route:

```sh
npm install wawoff2
```

```js
import { readFileSync, writeFileSync } from 'node:fs';
import { compress } from 'wawoff2';
writeFileSync('out.woff2', await compress(readFileSync('in.ttf')));
```

Run it outside this repo. `wawoff2` is not a dependency here, because the
conversion happens once per supplied font, not per build.
