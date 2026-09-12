# AI for Founders — Path A Brand Kit
**For design / web team · Locked 12 Sep 2026 · Source: Iris Instagram cover system**

Use this to update the site (and any marketing surfaces) so they match the live Reels visual language: dark, grainy, orange accent, bold type hierarchy.

---

## 1. Brand in one line
Dark cinematic film grain + white Inter + **orange italic Playfair power words**. Never red. Never clean/digital sterile.

---

## 2. Color palette

| Token | Hex | RGB | Use |
|---|---|---|---|
| **Orange Primary** | `#ff7a00` | 255, 122, 0 | Power words, CTAs, pills, links, focus rings, key UI accents |
| Orange Alt | `#ff6a00` | 255, 106, 0 | Optional hover / deeper accent (same family) |
| Black | `#000000` | 0, 0, 0 | True black backgrounds |
| Charcoal | `#0a0a0a` | 10, 10, 10 | Default page / section background |
| Charcoal Elevated | `#141414` | 20, 20, 20 | Cards, elevated surfaces |
| Near Black | `#1a1a1a` | 26, 26, 26 | Borders / subtle panels |
| White | `#ffffff` | 255, 255, 255 | Primary text, setup/closer lines |
| Off-white | `#f5f5f5` | 245, 245, 245 | Soft text on dark (sparingly) |
| Muted white | `rgba(255,255,255,0.72)` | — | Secondary body copy |

### Rules
- **Accent = orange only.** Do **not** use red, magenta, or neon cyan as brand accent.
- Orange wash over heroes: ~**8% opacity** radial (`rgba(255,122,0,0.08)`), not a heavy cast.
- Power-word glow: soft outer glow `0 0 18px rgba(255,122,0,0.7)` — visible, not neon blowout.
- Light mode is **not** the default for this system. If the site needs light sections, keep orange + Inter, and treat dark+grain as the hero/marketing language.

Swatches: `swatches/`

---

## 3. Typography

### Stack
1. **Setup / kicker** — Inter ExtraBold (800), all caps, tracking ~0.08–0.12em, white  
2. **Power word** — Playfair Display **900 Italic**, huge, `#ff7a00`, with glow  
3. **Closer / subhead** — Inter ExtraBold (800), all caps or title case, white  
4. **UI / body** — Inter 700–800 for labels; 400–500 for body if needed

### Web scale (suggested)
| Role | Desktop | Mobile | Notes |
|---|---|---|---|
| Hero power | clamp(64px, 8vw, 120px) | 56–72px | Italic Playfair only |
| Section power | 48–72px | 40–56px | |
| Setup / kicker | 14–18px | 12–14px | ALL CAPS + tracking |
| Closer | 20–28px | 16–20px | |
| Body | 16–18px | 15–16px | Inter regular/medium |
| Pill / badge | 12–14px | 11–13px | ALL CAPS, dashed orange border |

### Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&family=Playfair+Display:ital,wght@1,900&display=swap" rel="stylesheet">
```

CSS tokens: `tokens.css` · details: `fonts-info/README.md`

---

## 4. Texture — film grain (required)

Marketing heroes, dark sections, and cover-like modules **must** feel grainy — not flat vector.

### Assets (in `assets/`)
| File | Use |
|---|---|
| `grain-tile-1024.png` | Seamless tile, multiply/overlay on dark bg |
| `grain-overlay-transparent-1024.png` | White speckles + alpha — `mix-blend-mode: overlay` or `soft-light` |
| `grain-overlay-vertical.png` | Full 9:16 overlay reference |
| `grain-overlay-horizontal.png` | Full 16:9 overlay for site heroes |

### CSS recipe (site)
```css
.pa-grain::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("/brand/grain-overlay-transparent-1024.png");
  background-size: 320px 320px;
  opacity: 0.55;              /* visible at phone size; raise to ~0.7 for heavier */
  mix-blend-mode: overlay;
  z-index: 2;
}
.pa-grain::before {
  /* optional second layer */
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("/brand/grain-overlay-transparent-1024.png");
  background-size: 180px 180px;
  opacity: 0.35;
  mix-blend-mode: soft-light;
  z-index: 3;
}
```

### Bake reference (motion / stills production)
Heavy grain bake (current lock):
```
noise=alls=22:allf=t+u,eq=contrast=1.1:brightness=-0.02:saturation=1.08,vignette=PI/4.5
```
Preserve chroma — never desaturate/gray the whole frame when adding grain.

### Vignette
`radial-gradient(ellipse at 50% 45%, transparent 25%, rgba(0,0,0,0.82) 100%)`

---

## 5. UI components that carry the brand

### Dashed pill / badge
- Border: `2px dashed #ff7a00`
- Radius: full pill (`999px`)
- Text: Inter 800, ALL CAPS, `#ff7a00`, letter-spacing ~0.12em
- Fill: `rgba(0,0,0,0.45)` on dark

### Buttons (suggested)
- Primary: fill `#ff7a00`, text black or white (high contrast), Inter 800
- Ghost: transparent + `#ff7a00` border, orange text
- Avoid red “danger” as brand — use neutral for destructive

### Product logos
When a page/section names a product (Claude, ChatGPT, Grok, etc.), show the real mark — bottom or inline, max 1–2, never cover the power word. Marks live in production cover pipeline; for site use official brand assets / press kits.

---

## 6. Imagery direction (Kallaway / Path A)

Center visuals are **multi-part story metaphors** that prove the hook — not flat icons or stock “AI brain” clichés.

Do:
- Interacting objects with a clear narrative (before/after, contradiction, bottleneck)
- Dark charcoal scenes + soft orange accents in the *art*, not a full orange grade
- Heavy grain + vignette after compose

Don’t:
- Flat line icons as the hero
- Red accents
- Clean glossy SaaS gradients as the primary look
- Tiny unreadable type

Samples: `samples/`

---

## 7. Do / Don’t (quick)

| Do | Don’t |
|---|---|
| `#ff7a00` accent | Red / pink accent |
| Heavy visible grain on dark heroes | Flat pure black with no texture |
| Playfair italic for 1 power idea | All-caps Inter for everything |
| Soft orange wash (~8%) | Heavy orange color cast |
| Story metaphors | Generic robot stock |

---

## 8. File map
```
path-a-brand-kit/
  BRAND-KIT.md          ← this brief
  tokens.css            ← CSS variables
  preview.html          ← visual one-pager
  fonts-info/README.md
  swatches/             ← solid color PNGs
  assets/               ← grain tiles + overlays
  samples/              ← approved cover examples
```

---

## 9. Contact / ownership
- Visual system owner (IG / covers): **Iris**
- Site implementation: Builder fleet (Wren / Vera / Muse as applicable)
- Locked with Johnny · 12 Sep 2026
