# Get Your First AI Employee Working

Product sales page for **The AI Founder's Vault** — Johnny Nel.

Checkout always goes to [skool.com/aifoundersvault](https://www.skool.com/aifoundersvault). Copy is locked in `SALES_PAGE_COPY.txt` / `lib/copy.ts`. The VSL is a poster fallback (no invented video URL).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

Render (later, not in this repo): web service, build `npm install && npm run build`, start `npm start`.

## Screenshot proof

Kinso-class page: frosted nav, peach→aqua wash + grid, product-UI hero, employee chip marquee, three two-column feature bands, dark week zone, pricing, FAQ.

With the dev server running:

1. **Desktop (~1440×900)** — hero (copy + Muse product UI + VSL under), a feature band, dark week (`#week`), pricing (`#pricing`).
2. **Mobile (375×812)** — same regions.

Look for:

- Hero has **no** 1,300 / 1,500 / 200+ stats row
- Primary buttons and nav Join go to `https://www.skool.com/aifoundersvault`
- Nav Join is a black pill; hero/final CTAs are black pills
- VSL is a 16:9 poster under/next to the product UI (no invented video URL)
- `prefers-reduced-motion` stops marquee + reveal motion

## Brand constraints

- Do not invent a VSL URL, testimonials, or warehouse stats
- Do not use Jacques Mulder
- Do not treat “price may increase soon” as a countdown
