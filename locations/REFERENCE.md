# The Brisbane page, as reference

`https://www.propertybuyer.com.au/location/brisbane`, read 21 August 2026.

Supplied by the design lead as the reference for this family, on the grounds
that it performs. Treat it as the structural brief and the SEO baseline, not
as a design or copy model: it predates the design system in `../DESIGN.md` and
conflicts with it in the ways named at the bottom of this file.

## What it confirms

- **The URL pattern already exists and already ranks.** `/location/<city>`,
  with a self referencing canonical. The three new pages are siblings of a
  page that works, not new competitors for the homepage. That materially
  changes the SEO question recorded in `../shared/locations.json`.
- **It is HubSpot.** Confirmed from the markup. Consistent with the delivery
  decision in `BRIEF.md`.
- **Title pattern.** `Buyers' Agents in Brisbane | Invest in Property |
  Propertybuyer`.

## Section order, as built

Twenty three H2 sections. Recorded in order, because the order is the part
worth inheriting.

| # | Section | Notes for the rebuild |
|---|---|---|
| 1 | Hero, H1 `<City> Buyers' Agent Specialists` | second line is a separate all caps string |
| 2 | Australia's most awarded advocates | awards, maps to the existing marquee |
| 3 | We've got `<City>` covered | six surrounding region cards |
| 4 | Key characteristics of the `<City>` property market | the local substance |
| 5 | `<City>` oasis, your urban sanctuary | lifestyle |
| 6 | Experience the Propertybuyer difference | brand, not local |
| 7 | Our purchases in `<City>` | **proof, and the slot that blocks Perth** |
| 8 | Your local `<City>` buyers' agents | **14 named agents, blocks Perth** |
| 9 | Why use a `<City>` buyers' advocate | |
| 10 | Why choose us | four reasons |
| 11 | Get your free ... | capture |
| 12 | Why `<City>` | |
| 13 | Exploring `<City>`'s culture and outdoor lifestyle | lifestyle, second pass |
| 14 | Landmarks in `<City>` | |
| 15 | Get our free service guide | capture |
| 16 | Property market info for `<City>` | data |
| 17 | Frequently asked questions | |
| 18 | Frequently asked questions, again | duplicated on the live page |
| 19 | Client testimonials | |
| 20 | Contact our nearest office | **blocks Perth** |
| 21 | We also service | internal links to sibling locations |
| 22 | Rich's blog | |
| 23 | Market updates and insights | capture |

Six surrounding regions carry the coverage cards: Brisbane, Redlands,
Ipswich, Logan, Moreton Bay and Toowoomba. Each new page needs its own six,
and they are a local knowledge input rather than something derivable here.

The lifestyle material runs three times, at 5, 13 and 14, and the FAQ twice,
at 17 and 18. Worth asking whether that is deliberate or accumulated before
reproducing it in a rebuild.

## SEO gaps on the live page

Named because the rebuild is the cheap moment to close them, and because the
page ranking well is not evidence that these do not cost anything.

- **No `LocalBusiness` structured data.** The only JSON-LD is `Corporation`
  and `WebSite`, both site wide. A location page with an office, an address
  and named staff is the textbook case for `LocalBusiness`, and it is absent.
- **No `FAQPage` structured data**, on a page carrying two FAQ sections.
- **No `BreadcrumbList`**, on a page two levels down a clear hierarchy.
- **One form for several capture headings.** Sections 11, 15 and 23 all read
  as capture points and there is one `<form>` in the document.

None of these are design decisions. They are additive, they do not change the
layout, and they are the part of this work with the clearest organic upside.

## Where it conflicts with DESIGN.md

Named rather than resolved, per the standing rule: never soften a constraint
because a brief seems to want it softened, name the conflict in the handover.

- **Banned language, in the metadata.** The meta description opens with
  "Discover the expertise of", and `discover` is on the banned CTA list in
  `../DESIGN.md`. The same sentence uses "Navigate ... with our dedicated
  professionals".
- **All capitals by markup, not by face.** The H1's second line is typed in
  capitals. The design system resolved capitals as a property of the Proyale
  face, with copy written in sentence case and no `text-transform` anywhere,
  so that the Georgia fallback renders correctly. Typing capitals is the thing
  that decision ruled out.
- **Unquantified authority claims.** "Australia's most awarded" appears
  without the count that `../DESIGN.md` requires alongside it.

This is the real question for the design lead, and it is not a detail: the
page that performs is written in the voice the new design system was created
to replace. Either the new location pages keep what ranks and the voice rules
carry an explicit exception for this family, or they apply the new voice and
accept that the copy diverges from the page used as evidence. Both are
defensible. Guessing is not, because the choice is visible to the client.
