# locations/

The location inner pages. Organic search, indexable.

**These ship in HubSpot.** This directory is the reference implementation that
gets handed to the client developer to port, not the thing that serves the
traffic. Plain HTML, CSS and JavaScript, no framework and no build step, which
is what the repository already is. The Vercel deploy is a preview for review
and handoff.

Empty. Three pages planned: Melbourne, Adelaide and Perth, from one template
derived from the live Brisbane page.

- `REFERENCE.md` carries the Brisbane page's anatomy, its SEO gaps, and where it
  conflicts with `../DESIGN.md`. Read this first.
- `BRIEF.md` lists what is blocked. Perth is blocked hardest, and not by anything
  this repository can fix.
- `../shared/locations.json` holds the registry and the open decisions.

## Shape, once pages exist

```
locations/melbourne/index.html   build first, it can fill every slot
locations/melbourne/COPY.md      the copy deck, written and reviewed before HTML
locations/adelaide/...           proof needs extracting from the investor deck
locations/perth/...              blocked, see BRIEF.md
```

The folder name is the slug, and the slug is the URL segment in the client's
existing `/location/<slug>` pattern. The two never differ.

Two levels below the repository root, the same depth as the segment pages
under `New Builds/`, so every asset reference is `../../` relative and the
checker's path rule applies unchanged.

## Stylesheets

Three, in this order, and never `landing.css` as well:

```html
<link rel="stylesheet" href="../../assets/css/tokens.css">
<link rel="stylesheet" href="../../assets/css/base.css">
<link rel="stylesheet" href="../../assets/css/locations.css">
```

`tokens.css` and `base.css` are shared with the paid pages and are not edited
by a location build. Between them they carry every colour, space, radius, size
and face, the reset, the base typography, the two type utilities, the button
and pill components, and the `.wrap` container and `.section` band. That is
the shared design reference, and it holds under any layout.

`landing.css` is not a starting point. These pages are composed differently, so
almost all of it, the hero, truth cards, stats band, steps, services, auction
strip, prestige and FAQ, does not apply. The site header and footer are the
exception and the one open promotion: see the note at the top of
`../assets/css/locations.css`.

## Indexing

This is about the preview only. Production indexing for these pages is set in
HubSpot, on the client's own domain, and is part of the unresolved SEO call in
`BRIEF.md`. The preview still matters, because a crawlable preview competing
with the client's live pages is the same problem arriving early.

The paid pages carry `X-Robots-Tag: noindex, nofollow` and must keep it while
they are a proof of concept. These pages are worthless with it. So `vercel.json`
denies by default and carves this directory out:

```
"source": "/((?!locations).*)"
```

Deny by default is the safe direction. Vercel matches a header `source`
against the incoming request path, before rewrites, so scoping the noindex
rule to `New Builds/` instead would have quietly stopped covering `/` and
`/buyer`, which are the URLs the client actually opens. Anything added to
`locations/` is crawlable the day it ships, and nothing else is.

Two things follow. Do not widen the rule back to `/(.*)`. And do not serve a
location page from a path outside this directory without moving the carve out
with it.
