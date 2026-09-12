## Goal
FULL Kinso-class site rebuild for BYFAE/Vault — duplicate Kinso structure/visual density with Vault copy. Stop incremental card patches. Replace the current page architecture.

## Context
- Repo: prixgigdev3/buildyourfirstaiemployee (this cwd)
- Brief: KINSO_REBUILD_BRIEF.md (must follow section map + DNA)
- Copy: SALES_PAGE_COPY.txt + lib/copy.ts (do not invent testimonials; no warehouse stats on first screen)
- Checkout: https://www.skool.com/aifoundersvault — $37/mo or $297/yr · 7-day draft-or-refund
- Muse assets in public/kinso/:
  - 00-soft-grid.png
  - 01-hero-ui.png (layered product hero)
  - 02-feature-draft.png
  - 03-feature-match.png
  - Keep /vsl-poster.png as optional secondary VSL fallback under/next to hero UI
- More Muse assets may arrive (context panel, dark-zone, marquee chips) — leave clean placeholders/hooks

## Skills
apple-design, baseline-ui, builder-ui-polish (Kent’s 10). Kinso DNA over Aura aesthetics.

## Visual DNA (must)
- Soft peach → white → pale aqua washes + fine square grid
- Frosted sticky nav (blur + translucent white); Join as black pill CTA (Kinso parity — orange secondary OK later)
- Product UI mockups as storytelling
- Scroll: sticky nav, employee chip marquee, fade/slide-up feature bands, reduced-motion safe
- Optional late-page near-black grid zone for week

## Page structure (implement now)
1. Frosted sticky nav: brand · The week · Employees · Pricing · FAQ · Join (black pill)
2. Hero: copy stack (eyebrow/headline/subhead/door from copy) + Muse 01-hero-ui.png as primary visual; VSL poster secondary or under
3. Integrations/employee chip marquee (Ops, Content, Inbox, Calendar, Sales, Support, Research, Finance — text chips OK until Muse art)
4. Three two-column feature bands on wash+grid:
   - Draft you send → 02-feature-draft.png
   - Name leftover job / match → 03-feature-match.png
   - Plug-in / never-send (placeholder panel until Muse context asset — use existing features/plug-in-v4.png)
5. Dark-grid week zone (Day 0–7 denser) — use existing day module copy; style immersive dark
6. Pricing + 7-day money back (from copy)
7. FAQ accordion
8. Final Join CTA → Skool
9. Footer disclaimers

## Acceptance
1. Page reads as Kinso-class product site, not ClickFunnels / not “text + 3 cards”
2. Locked Vault copy; CTAs to Skool; no invented social proof
3. Frosted nav + washes + grid + product UI hero + 3 feature bands + marquee + dark week zone + FAQ + pricing
4. npm run build succeeds; commit + push main
5. Respect prefers-reduced-motion

## Proof
- Push to main
- Note: Wren will screenshot for Vera Kinso-parity gate

## Stop
- Do not invent VSL URL or testimonials
- Do not do custom domain / Render (Ridge)
- Do not wait forever for missing Muse assets — use placeholders/hooks
