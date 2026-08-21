# Location page structure strategy

Drafted 21 August 2026. The structure argument is meant to hold. The copy in
`melbourne/COPY.md` is one draft for the SEO team to replace or refine, and is
deliberately not tuned further.

Everything here derives from research the repository already holds:
`../paper/context-segments.md` for the attention and psychographic evidence,
`../DESIGN.md` for the claim tiers and voice, `REFERENCE.md` for the live
Brisbane page, and `../paper/proof-register.md` for what can actually be
claimed. Where a number appears below, it is from those files rather than from
me.

## The tension, stated plainly

SEO wants a long page: local depth, query coverage across many headings,
internal links, schema. Conversion wants the top of the page, because that is
where the attention is.

> NN/g eyetracking, 130,000 plus fixations: **about 57% of viewing time sits
> above the fold, and about 74% inside the first two screens.** People scroll
> when the top of the page has given them a reason to.

Those two goals only conflict if the page is treated as one linear document.
They stop conflicting when it is treated as two zones with different jobs.

| | Zone A, screens 1 and 2 | Zone B, everything below |
|---|---|---|
| Job | convert | rank, and support the claim |
| Attention | ~74% of viewing time | the remaining ~26% |
| Content rule | nothing here exists for SEO alone | nothing here is the only place a conversion can happen |
| Length | ruthless | generous, this is where the word count lives |

**The whole strategy is that sentence: Zone A earns the conversion, Zone B
earns the ranking, and neither is allowed to borrow the other's space.**

## What the reference page gets wrong

The Brisbane page performs, so this is not a criticism of the outcome. It is
where the upside is. Section numbers refer to `REFERENCE.md`.

1. **The proof is six sections too late.** "Our purchases in Brisbane" is
   section 7 and "Your local Brisbane buyers' agents" is section 8. Client
   testimonials are section 19. The fold research says one proof point belongs
   **in** the fold. Right now the highest attention on the page is spent
   before any evidence appears.
2. **The best real estate carries a brand claim, not a local one.** Section 2
   is "Australia's most awarded", which is brand rather than local, and
   carries no count. `../DESIGN.md` requires the count alongside it, and
   `../paper/context-segments.md` says the independence and authority story
   "never carries a page alone".
3. **No segment qualification anywhere.** This is the big one. The repository
   states the one job every page has: *"Make each lead arrive labelled:
   segment, budget band, location."* A location page answers location for
   free and asks neither of the other two.
4. **Scroll budget spent on repetition.** Lifestyle content runs three times,
   at sections 5, 13 and 14. The FAQ runs twice, at 17 and 18. Three separate
   variations of the same argument sit at 6, 9 and 10.
5. **Three capture headings, one form.** Sections 11, 15 and 23 all read as
   capture points and the document holds one `<form>`.

## The structural advantage nobody has used yet

On a segment page the segment is fixed by the page and the visitor types the
location. **A location page inverts that**, and the inversion is worth more
than it looks.

The capture sequence in `../paper/context-segments.md` is four steps: segment,
budget band, location, contact. Location is the third. On these pages it is
already known, so:

- **The form is three steps, not four.** One less field on a form whose own
  research says budget, phone and timeframe are the fields that suppress
  completion.
- **Segment becomes the thing worth asking first.** It is the label the
  HubSpot nurture flows need and never receive, and the chip row does double
  duty: *"A visible chip row also tells a commercial buyer that commercial is
  a category here, before they commit anything."*

So the segment chips move into the fold, as the first step of the form. That
is the single highest value change against the reference page.

**Recommendation on the open `locationPageSegmentField` decision:** prefill
`location` from the page and leave it **editable**, do not lock it. Somebody
on the Melbourne page may be buying in Geelong, and a locked field turns that
into a mislabelled lead, which is worse than an unasked question. Prefilled
costs nothing and keeps the HubSpot payload identical to the paid pages.

## Psychographics on a page that cannot assume a segment

The four segment cards in `../paper/context-segments.md` pull in different
directions, and a location page gets all of them at once. Two settled facts
constrain what can be done about that:

- There is no evidence base for ranking the segments. Recorded in
  `../shared/segments.json`: the client database was never set up to qualify
  leads, so ranking now "would encode a guess as a design decision". The
  router is *"a measurement instrument before it is a conversion device"*.
- The sales cycle runs one to twelve months, so urgency devices are off the
  table entirely.

That gives a clean rule. **Above the fold, serve only what all four segments
share. Below the fold, fork.**

What they share, and so what Zone A carries:

| Shared driver | Where it comes from | How Zone A uses it |
|---|---|---|
| Fear of getting a high stakes decision wrong against a professional counterparty | every card's Fear row | the promise is handover of risk |
| Buyers only, never for sellers | the category trust fault line | stated plainly, once, early |
| Wanting a next step small enough to take today | section 8 | one chip tap, or a phone call |
| Preference for a call on a high value decision | TransUnion 2024, n=1,556, 55% | tracked local number as co-primary action |

Where they diverge, and so what Zone B forks on:

| Segment | Lead with | Proof that works | Note that changes the page |
|---|---|---|---|
| Home buyer | handover of risk, the relief of not doing this alone | named local testimonials with suburb and outcome | *"Data authority is largely wasted on this segment"*, and phone parity matters most here |
| Investor | independence and cycle tested judgement, early | case studies with price, yield, result | will trade more information for a substantive consult, so a longer form is acceptable |
| Commercial | a fork, not a blend | buy versus lease economics, or yields and tenant quality | owner occupiers on a board directive are strong phone candidates |
| Developer | numbers and deal flow | sites secured with addresses, prices, site types | shortest copy of the four by some distance |

The consequence for Zone A copy: **lead with the emotional handover, keep one
hard number visible.** The handover framing serves the home buyer and
relocator intent that dominates a "buyers agent in `<city>`" search, and the
single number keeps the analytical segments from bouncing on a page that reads
as brochure. Do not attempt both arguments at length above the fold.

## The proposed structure

Fourteen sections against the reference page's twenty three. The reduction is
all duplication, not substance, and the word count target for Zone B is
unchanged.

### Zone A, screens 1 and 2

| # | Section | Conversion job | SEO job |
|---|---|---|---|
| 1 | **Hero.** Three things and nothing else: the promise, one dominant local proof point, the action | the whole page's primary conversion | H1 carries the primary term |
| 2 | **Segment chips plus step one of the form**, in the hero, beside a tracked local number | qualification at first contact, and the lowest commitment step | none, deliberately |
| 3 | **Local proof, three records.** Suburb, price, date, outcome | makes the promise credible while attention is still high | the local entity signals search wants |
| 4 | **The local team, named.** Or, where there is no office, how the city is actually serviced | the named agent is where testimonials say trust forms | staff and place, feeds the schema |

Section 1 and 2 are one screen. Sections 3 and 4 are the second screen. That
is the ~74% of viewing time, and it now contains the promise, the evidence,
the people and two ways to act.

Nothing in Zone A exists for SEO alone. The H1 does double duty, and that is
the only concession.

### Zone B, the SEO body

| # | Section | Job | Notes |
|---|---|---|---|
| 5 | Why use a buyers' agent in `<city>` | the argument, once | replaces the reference page's three variations at 6, 9 and 10 |
| 6 | The `<city>` market, with real characteristics | the local substance search rewards | the heaviest SEO section |
| 7 | How it works, with the fee stated | transparency is a named lever over a long cycle | |
| 8 | Off market access | framed as access, never as a bargain. REBAA warns off market stock often carries a premium, so a discount framing is a credibility risk | |
| 9 | Segment fork, four anchored blocks | each segment finds its own argument | anchors give the query variants their own headings |
| 10 | Areas we cover, `<city>` and its regions | internal links | the reference page carries six regions, each new page needs its own |
| 11 | Testimonials, local where possible | | |
| 12 | FAQ, once | | `FAQPage` schema, and the reference page's duplicate is dropped |
| 13 | Closing capture, the full form | the second real conversion point | |
| 14 | Other locations we service | internal links to sibling pages | |

Lifestyle and landmark content folds into section 6 rather than running three
times. If the client wants it standalone, it goes at 11 or later, where it
costs nothing.

## SEO plan

### Per page

| Element | Pattern | Note |
|---|---|---|
| URL | `/location/<slug>` | the client's existing pattern, and it already ranks. Do not invent a new one |
| Canonical | self referencing | matches the reference page |
| Title | `Buyers' Agents in <City> \| <differentiator> \| Propertybuyer` | reference page uses "Invest in Property" as the middle slot |
| H1 | one per page, carrying "buyers' agent" and the city | never more than one |
| H2 | one per section, each phrased at a real query variant | this is where query coverage lives, not in the body copy |

### Schema, and one place it must differ per city

The reference page carries only `Corporation` and `WebSite`, both site wide.
Three additions, all additive, none touching layout:

- **`FAQPage`** on section 12.
- **`BreadcrumbList`**, since the page sits two levels down a clear hierarchy.
- **A local entity**, and this is the part that is not uniform:

| City | Type | Why |
|---|---|---|
| Melbourne | `LocalBusiness` | office exists, address and named staff exist |
| Adelaide | `LocalBusiness` | office exists |
| Perth | **`Service` with `areaServed`** | there is no Perth office. `LocalBusiness` asserts a physical location, so on Perth it would be a false structured claim, which is worse than a missing one because it is machine readable |

That is the schema level answer to the Perth question. The local angle is
kept, because `areaServed` is exactly the claim that is true: the city is
serviced, and people travel to it.

### A collision with the paid pages that nobody has flagged

`../paper/context-segments.md` records that Performance Max **Final URL
Expansion** is on by default and *"lets Google replace the chosen landing page
with any indexable page on the domain"*, so *"a page can be built, paid for,
and then quietly bypassed"*. It must be off for the lead generation campaigns.

Three new indexable, high intent, conversion tuned city pages enlarge the
surface for exactly that substitution. Two consequences:

1. Confirm Final URL Expansion is off before these pages are indexed, not
   after. Otherwise paid budget starts landing on pages that carry no campaign
   labelling, and the segment attribution these pages were built to produce
   gets muddied at the source.
2. If someone later observes that a location page converts better than a
   segment page and wants to point paid traffic at it, that is a decision to
   take deliberately, with its own Final URL and its own labelling, rather
   than by leaving a default on.

### Navigation stays

The paid pages strip navigation to protect the conversion. These pages keep
it, for two reasons. Internal links are part of why the reference page ranks,
and the evidence for stripping is weak on its own terms: the repository files
"removing navigation doubles conversion" under **directional only**, from
vendor case studies with no stated sample size, duration or stopping rule.

## What this plan does not do

- **It does not tune the copy.** One draft is in `melbourne/COPY.md` for the
  SEO team to replace. It respects the character budgets the checker enforces,
  so a replacement should too.
- **It does not settle the voice question.** The reference page is written in
  the voice `../DESIGN.md` was created to replace. Recorded in
  `../shared/locations.json` under
  `openDecisions.referencePageIsNotACopyModel`. The draft copy follows the
  design system, which is the reversible choice: it is easier to loosen later
  than to explain a banned word that shipped.
- **It does not fill proof.** Melbourne's records exist. Adelaide's need
  extracting from the investor deck. Perth has none. See `BRIEF.md`.
- **It assumes the three URLs are new.** If they already exist this becomes a
  replacement with rankings to protect, and section 10 and 14 internal links
  need checking against what already points at them.
