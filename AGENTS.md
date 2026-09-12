<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# BYFAE / Vault sales page — agent rules

Repo: `prixgigdev3/buildyourfirstaiemployee`  
Product: Get Your First AI Employee Working (The AI Founder's Vault)  
Live interim: `https://buildyourfirstaiemployee.onrender.com` (custom domain later)

## Stack and commands
- Next.js App Router · TypeScript · Tailwind v4
- `npm install` · `npm run dev` · `npm run build` · `npm start` · `npm run lint`
- Prefer **Grok Build on Studio** (`grok --prompt-file … --cwd <repo> --always-approve`). CloudAgent only if Johnny says so.

## Roles (do not cross)
| Seat | Owns |
| --- | --- |
| Wren | Implement page (structure, motion, wire copy + Muse assets) |
| Muse | Create art + DNA docs (heroes, icons, marquee, feature panels) |
| Vera | Visual GATE (placement, Kent's 10, Kinso parity) — not asset production |
| Ridge | Render / DNS / CI |
| Helm | Kickoff / AGENTS.md / harness patterns |
| Jenny | Ops / postmortems — no feature code |

## Markdown Johnny wants on GitHub (Grok-driven changes)
Keep these in-repo so Studio `grok` can read them without chat archaeology:

| Path | Owner drafts | What |
| --- | --- | --- |
| `AGENTS.md` | Helm | This file — lanes, proof, stop conditions |
| `docs/art/DNA.md` | Muse | Visual DNA (Kinso parity accents, materials, do/don't) |
| `docs/art/ASSETS.md` | Muse | Asset index: filename, aspect, placement, tool path |
| `docs/art/HANDOFF.md` | Muse | Latest handoff for Wren (what to swap, what not to crop) |
| `KINSO_REBUILD_BRIEF.md` | Muse/Wren | Section map + rebuild brief |
| `SALES_PAGE_COPY` / `lib/copy.ts` | Johnny/Wren | Locked offer copy — do not invent |

Binary assets live under `public/kinso/` (and related `public/` folders). Muse updates `docs/art/*` when she ships new packs; Wren commits both code + docs in the same PR when possible.

## Skills when UI is in scope
- `apple-design`, `baseline-ui`
- Vera gate: `builder-ui-polish` (Kent's 10 non-negotiables)
- Muse production: `builder-art-direction`
- Wren implement: `builder-web-funnels`
- Kickoff template: `builder-harness`

## Do / don't
- Do: Kinso product-site restraint (frosted nav, soft grid, feature UI storytelling)
- Do: Checkout → `https://www.skool.com/aifoundersvault`
- Do: VSL poster fallback unless Johnny drops a live URL
- Don't: warehouse stats on first screen, invented testimonials, Jacques Mulder, invent VSL URL
- Don't: change company cron / marketing publish paths
- Don't: Muse writing page code or Vera generating hero art

## Proof before Ready for Review
Desktop + mobile screenshots of: hero, marquee (or employee band), one feature band, dark week (if present), pricing. Vera PASS required before Ridge treats deploy as design-done. Prefer same Grok session for send-backs.

## Stop conditions
STOP and report if blocked on secret/login Johnny must approve, or scope expands beyond the sealed kickoff.
