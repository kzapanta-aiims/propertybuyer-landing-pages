# locations/

The location inner pages. Organic search, indexable.

Empty. See `BRIEF.md` for what is blocked, and `../shared/locations.json` for
the registry and the open decisions.

## Shape, once pages exist

```
locations/<slug>/index.html    one folder per location, folder name is the slug
locations/<slug>/COPY.md       the copy deck, written and reviewed before HTML
```

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
by a location build. If a component in `landing.css` is wanted verbatim,
promote it into `base.css` and record the promotion, rather than copying it.

## Indexing

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
