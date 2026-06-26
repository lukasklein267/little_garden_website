# Little Garden — Design System

> Plant vibes only. 🌱 · Frisch. Kreativ.

Brand & UI system for **Little Garden**, a 100% plant-based (vegan) Vietnamese restaurant in Erlangen, Germany (Weiße Herzstraße 10). Dine-in, fresh-cooked, values-driven. Established 2025. Part of the Hiro collective (sister spots: **Hiro Ramen**, **Little Hiro**). Instagram: **@littlegarden_er**.

## Sources provided
- Brand brief (colors, voice, hours, positioning) — supplied directly by the user.
- Logo lockups: `assets/logos/logo-bright.png` (teal on transparent — use on cream/light), `assets/logos/logo-dark.png` (white on teal badge — use on dark).
- Fonts: `assets/fonts/YesevaOne-Regular.ttf` (display), `assets/fonts/Montserrat-VariableFont_wght.ttf` (body, variable 100–900).
- No codebase or Figma was provided — visual foundations are derived from the brand brief, logo, and palette.

---

## Content Fundamentals — how Little Garden writes

- **Language:** German-first ("Frisch. Kreativ.", "Tisch reservieren", "Speisekarte"), with light, natural English in brand moments ("Plant vibes only.").
- **Voice:** values-driven, warm, mindful, a little poetic — never preachy or salesy. Food framed as philosophy: *"gutes Essen macht nicht nur satt, sondern inspiriert."*
- **Themes:** sustainability, mindfulness, authentic flavor, craft. "Essen ist Haltung, nicht nur Mahlzeit."
- **Person:** speaks to the guest with informal **du** ("Reservier deinen Tisch", "du@example.com"). Collective **wir** for the restaurant.
- **Casing:** sentence case for body and headings; **ALL-CAPS only for eyebrows/labels**, always tracked wide (0.18em). Display headlines use the serif in sentence case.
- **Emoji:** sparingly and on-brand — 🌱 / 🌿 as a signature mark (taglines, footer, value cards). Never decorative emoji spam.
- **Examples:** "Plant vibes only. 🌱" · "Frisch. Kreativ." · "100% pflanzlich" · "est. 2025" · "Teil des Hiro Kollektivs".

---

## Visual Foundations

- **Palette:** warm + natural, vegetable-forward. **Teal/green** primary (`#298A81`), **warm gold/brown** secondary (`#C2884F`), on a **cream** page (`#FCF6EF`). Deep teal (`#11433E`) for text and dark surfaces. Garden accents (leaf green, carrot, chili) used very sparingly for status only. See `tokens/colors.css`.
- **Type:** **Yeseva One** (display serif) for headlines, dish names, and "est." moments — elegant, high-contrast, set tight (line-height ~1.08, tracking −0.02em). **Montserrat** (variable sans) for all body and UI. Eyebrows are all-caps Montserrat 600, tracking 0.18em. See `tokens/typography.css`.
- **Backgrounds:** flat cream by default; alternate sections in a slightly deeper cream (`--surface-alt`). Dark sections use deep teal with a soft radial teal glow (hero). No busy patterns; a single 🌿 mark or ornamental rule provides texture. Full-bleed food photography is the intended hero imagery (placeholders ship here).
- **Shadows:** warm teal-tinted, soft, low-spread (`--shadow-xs…lg`, plus `--shadow-gold`) — natural-daylight feel, never harsh black drop shadows.
- **Radii:** soft but not pill-everything. Cards `lg` (22px), buttons/inputs `sm` (8px), chips/badges full pill.
- **Borders:** 1.5px. Cream (`--border-soft`) for quiet dividers; teal-300 for inputs/tags; gold-300 for ornamental rules.
- **Cards:** white surface, `lg` radius, soft warm shadow (`elevated`), or cream border (`outline`), or flat alt-cream fill. Optional hover lift (−4px, deeper shadow).
- **Motion:** gentle and brief. Hovers darken fills and add a soft shadow; presses nudge down (`translateY(1px) scale(0.99)`). Easing `--ease-out` / `--ease-soft`, durations 140/240/420ms. No bounces, no infinite loops.
- **Hover states:** buttons darken (teal-500→700, gold-500→700); outline/ghost fill with the tint. Cards lift. Nav links gain a teal underline.
- **Transparency/blur:** sticky nav uses translucent cream + 10px backdrop blur. Otherwise opaque.
- **Imagery vibe:** warm, fresh, daylight; vegetable-forward, close-up plated dishes on light wood with woven baskets and banana leaf; botanical greenery. **Real `@littlegarden_er` photography ships in `assets/photos/`** (Gỏi Cuốn, Nem Rán, Lá Lốt, Cà Ri, Đậu Hũ Sốt Cà, house tea). The `Photo` component takes a `src` for real images and falls back to teal/gold/leaf/cream gradient tiles when none is given.

---

## Iconography

- **No custom icon font or SVG icon set was provided.** The brand leans on a **botanical leaf mark** (🌱 / 🌿) drawn from the logo as its signature glyph, plus an ornamental rule (`❧` / line) for dividers ("est. 2025" feel).
- Current usage favors **emoji as light accent** (🌱🌿📍🕑) in value cards, footer, and the visit section — intentional and on-brand, used sparingly.
- For a production icon set, substitute **[Lucide](https://lucide.dev)** (1.5px stroke, rounded — matches the soft, natural feel) via CDN, recolored to `--color-primary`. **This is a flagged substitution** — no brand icon library exists yet; confirm direction before standardizing.
- Logos live in `assets/logos/`. Use **bright** on cream/light, **dark** on teal/photo.

---

## Index / manifest

**Root**
- `styles.css` — global entry (consumers link this). `@import`s the token files only.
- `readme.md` — this guide. · `SKILL.md` — portable Agent Skill wrapper.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `logos/` (bright, dark), `fonts/` (Yeseva One, Montserrat), `photos/` (real dish photography).

**Components** (`components/core/`) — React primitives, namespace `window.LittleGardenDesignSystem_25ffc8`:
- `Button` · `Badge` · `Tag` · `Card` · `Input` · `Eyebrow` · `Divider`
- Each has `.jsx` + `.d.ts` + `.prompt.md`; `core.card.html` is the showcase.

**Design System tab cards** (`guidelines/cards/`) — Colors (4), Type (4), Spacing/Radii/Shadows (2), Brand (3: logo, voice, photography).

> Generated files (`_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`) are written by the compiler — do not edit.
