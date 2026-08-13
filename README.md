# propertybuyer-landing-home-buyers

Landing page for Propertybuyer, segment `home`. Built for Google Ads and
Performance Max traffic.

Static HTML and CSS. No build step, no framework, no CDN dependency.

```
index.html               the page
assets/css/styles.css    tokens first, then components
assets/fonts/            drop Proyale and Geist here, see the README there
tools/check.mjs          the acceptance checklist, automated
HANDOVER.md              read this before touching anything
```

## Run it

```sh
npm run serve      # or just open index.html
```

## Check it

```sh
npm install
npm run check
```

Runs every item from Design Rules section 10 that a machine can check by
looking, at 390, 768, 1100 and 1440. Exits non zero on any failure, and lists
the five items that still need a human pass.

## Before you change anything

Read `HANDOVER.md`. It records where `DESIGN.md` disagrees with Figma
Variables, which tokens are missing or broken upstream, which claims are gated
and why, and what is still needed before this page can go live.

Two standing rules from the design system apply to every edit here:

1. Never invent a value. If it is not in Figma Variables, stop and ask. A
   plausible hex is worse than a blocked task, because nobody catches it.
2. Never soften a constraint because a brief seems to want it softened. Name
   the conflict in your handover.

Every colour, space, radius and size in `styles.css` is an alias of a token in
Figma `2. Mapped`, declared once in the `:root` block at the top of the file
with its Figma token name in a comment. Nothing below that block holds a raw
value, and `npm run check` fails if one appears.
