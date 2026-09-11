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

With the dev server running:

1. **Desktop (~1440×900)** — capture the hero (copy + VSL poster + CTA), the pricing band (`#pricing`), and one day module (`#start-here`).
2. **Mobile (375×812)** — same three regions. Chrome DevTools → device toolbar → iPhone SE / 12, or:

```bash
# after npm run build && npm start
# desktop
npx --yes playwright install chromium
```

Look for:

- Hero has **no** 1,300 / 1,500 / 200+ stats row
- Primary buttons all go to `https://www.skool.com/aifoundersvault`
- VSL is a 16:9 poster with play mark and the line “Watch how the first employee takes the leftover job.”
- Pricing is two quiet cards, then the 7-day guarantee in the same band
- One CTA rhythm, no countdown clock

## Brand constraints

- Do not invent a VSL URL, testimonials, or warehouse stats
- Do not use Jacques Mulder
- Do not treat “price may increase soon” as a countdown
