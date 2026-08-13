# Fonts

Drop the files here with exactly these names and the `@font-face` rules in
`assets/css/styles.css` pick them up with no further change.

| File | Family | Weight | Used for |
|---|---|---|---|
| `proyale-regular.woff2` | Proyale | 400 | H1 and H2 only |
| `geist-light.woff2` | Geist | 300 | body |
| `geist-regular.woff2` | Geist | 400 | UI where 300 is too thin |
| `geist-semibold.woff2` | Geist | 600 | buttons, H3 through H6 |
| `geist-bold.woff2` | Geist | 700 | labels, strong text, stats |

Proyale ships one weight. Never ask a browser for Proyale Bold: it will
synthesise one and it will look exactly as bad as that sounds.

Proyale is served on the live site from `propertybuyer.com.au/hubfs/fonts`.
Geist is open licensed and self hosted, with no CDN dependency.

Until the files land, H1 and H2 fall back to Georgia and everything else to
Helvetica, Arial.
