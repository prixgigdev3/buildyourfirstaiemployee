## Goal
Build the full Vault sales page for "Get Your First AI Employee Working" as a product-style marketing site (kinso.ai restraint: quiet chrome, generous whitespace, one clear CTA rhythm) — NOT ClickFunnels / not $5-page warehouse chrome.

## Context
- Repo / cwd: github.com/prixgigdev3/buildyourfirstaiemployee (empty greenfield; create the site here)
- Full developer sales copy is in SALES_PAGE_COPY.txt in this repo — implement sections 1–16 exactly. Section 17 is design do-nots.
- Reference aesthetic: kinso.ai — product site calm, soft materials, clear hierarchy, no stacked urgency.
- Checkout CTA always: https://www.skool.com/aifoundersvault
- VSL: poster fallback (play button + poster line). Do NOT invent a VSL URL. Poster line from copy: "Watch how the first employee takes the leftover job."
- Brand: The AI Founder's Vault / Johnny Nel. No invented testimonials. No Jacques Mulder. Do not put 1,300 / 1,500 / 200+ on the first screen.

## Skills / patterns to follow
- apple-design (fluid, springs, interruptible, materials, typography)
- baseline-ui
- builder-ui-polish / Kent's 10 non-negotiables (instant response, direct manipulation, interruptible motion, restraint, spacing & type system, hit targets & a11y, materials with purpose, platform honesty, state completeness, screenshot proof)

## Stack
Prefer Next.js (App Router) + TypeScript + Tailwind. Clean, modern, deployable to Render as a static/SSR web service later. Include README with install/dev/build. Commit and push to main (or open a branch + PR if you prefer; main is fine for empty greenfield).

## Acceptance (done when ALL true)
1. Sections 1–16 from SALES_PAGE_COPY.txt are on the page with locked copy (BUTTON blocks repeated where CTA is marked).
2. Hero = copy stack + VSL poster + primary CTA; no warehouse stats row; no invented social proof.
3. Visual bar: kinso product-site restraint — quiet chrome, generous whitespace, one CTA rhythm. Pass Kent's 10 for interactive states.
4. Responsive: desktop + mobile layouts work.
5. README documents npm run dev / build; site runs locally.

## Proof required
- Push to GitHub
- Capture or describe how to screenshot: desktop + mobile of (a) hero (b) pricing (c) one day-module
- Short note: what changed + how to verify (npm install && npm run dev)

## Stop conditions
- STOP if blocked on secret/login Johnny must approve
- Do NOT do custom domain / Render deploy (Ridge owns that after Vera green)
- Do NOT invent VSL URL, testimonials, or warehouse stats
- Do NOT invent product copy beyond SALES_PAGE_COPY.txt
