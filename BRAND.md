# Mason Brown · Brand & Design System

A handoff doc for designers and developers working on `masonbrown.co` and any
adjacent properties (case studies, decks, social, follow-on tools).

---

## 1. The personality

**A marketer who ships.** Senior marketing leader. Builder of AI tools.
Chicago, remote-first.

The site reads like a craftsperson's portfolio, not a marketing site for a
marketer. It's confident, specific, evidence-led, and quiet. No cleverness,
no buzzwords, no stock photography. The visual language is warm-neutral,
type-driven, and shows the work plainly.

**Mental model:**
- Editorial typography meets developer-grade attention to detail.
- Warm off-white paper, deep ink type, ember accent for moments that matter.
- Restraint everywhere except where conviction is the point.

---

## 2. Voice & tone

### The hard rules

1. **No em dashes.** Anywhere. Use a period, a comma, parentheses, or a colon.
   This is non-negotiable in user-facing copy.
2. **No AI tropes.** No "in today's fast-paced world," no "unlock your
   potential," no "delve," no "dive in," no negative parallelism ("not just X
   but Y"), no grandiose stakes inflation. Plain, specific, declarative.
3. **Show the work, don't sell it.** Numbers over adjectives. Concrete
   artifacts over claims.

### Voice traits
- **Confident, not cocky.** "I built this because the manual version was
  eating hours and still missing things."
- **Direct, imperative.** "Go use it." "Here's what shipped."
- **Honest about scope.** "Production tool. Not a prompt template."
- **First-person, quiet.** "I" not "we." Past-tense for shipped work.

### Example contrasts

| Don't write                                    | Write                                          |
|------------------------------------------------|------------------------------------------------|
| Leveraging cutting-edge AI                     | Claude API for synthesis                       |
| Empowering sales teams                         | Battlecards a rep can use mid-call             |
| In a rapidly evolving market                   | (delete the whole sentence)                    |
| Unlock your competitive advantage              | Run competitive intel on a schedule            |
| Driving meaningful impact                      | 200K subscribers, 60% open rate                |

### Headline patterns that work
- Statement of fact: *"A $1.65M ARR newsletter, built in 8 months."*
- Imperative: *"Go use it."*
- Constraint: *"Three layers. Signal in, briefing out."*
- Honest reframe: *"I didn't build this to prove I can use AI."*

---

## 3. Color palette

All values live in `tailwind.config.ts` and are mirrored as CSS variables in
`app/globals.css`.

### Base
| Token                    | Hex       | Use                                          |
|--------------------------|-----------|----------------------------------------------|
| `ink` (`--ink`)          | `#0A0A0A` | Body text, headlines, dark backgrounds       |
| `off-white` (`--off-white`) | `#FAFAF8` | Section alternation, soft surfaces        |
| `white`                  | `#FFFFFF` | Page background, card surfaces               |

### Warm neutral scale
| Token         | Hex       | Common use                                   |
|---------------|-----------|----------------------------------------------|
| `neutral-50`  | `#FAFAF8` | Same as off-white                            |
| `neutral-100` | `#F3F2EE` | Subtle hover/fill                            |
| `neutral-200` | `#E7E5E0` | Hairline borders, dividers                   |
| `neutral-300` | `#D4D1CA` | Stronger borders, secondary button outline   |
| `neutral-400` | `#A8A39A` | Muted labels, mono eyebrows                  |
| `neutral-500` | `#7A756B` | Mid-weight text                              |
| `neutral-600` | `#5C5850` | Body copy on light                           |
| `neutral-700` | `#3F3C36` | Strong secondary text                        |
| `neutral-800` | `#25231F` | Near-black surfaces                          |
| `neutral-900` | `#15140F` | Deep dark surfaces                           |
| `neutral-950` | `#0A0A0A` | Same as ink                                  |

### Accents
| Token          | Hex       | Use                                                |
|----------------|-----------|----------------------------------------------------|
| `ember`        | `#D94F1E` | Single moments of conviction. Hover state on primary buttons. Focus ring. Pull quotes. Eyebrow accents. |
| `ember-soft`   | `#F4A988` | Hero gradient stops only.                          |
| `violet`       | `#6B4FD9` | Reserved (currently unused on site).               |

### Rule of thumb
Any given page should have **one ember moment**, not many. Ember is loud
because it's rare.

### Per-case gradient palettes

Each case study has its own gradient tile (used for hero backdrops). They live
in `globals.css` as `.gradient-{slug}`:

| Class                    | Read                                         |
|--------------------------|----------------------------------------------|
| `.gradient-home-hero`    | Warm cream + peach, soft and inviting        |
| `.gradient-healthcare`   | Orange + pink on deep plum                   |
| `.gradient-bytesize`     | Green + silver on deep forest                |
| `.gradient-gamification` | Magenta + indigo on deep purple              |
| `.gradient-positioning`  | Cyan + green on deep navy                    |
| `.gradient-competitive`  | Violet on dark indigo                        |
| `.gradient-recommendation`| Olive + amber on deep moss                  |
| `.gradient-about`        | Soft peach cream                             |

Every gradient gets a fractal noise overlay (`.gradient-tile::after`) for grain.
Don't use the gradients flat. The noise is the point.

---

## 4. Typography

### Family
**Plus Jakarta Sans** loaded via `next/font/google` with weights 400, 500, 600, 700.
Variable: `--font-jakarta`. Body weight is 400. Headlines are 600.

OpenType features enabled site-wide: `ss01`, `cv11`. (Subtle alt forms.)

### Scale
| Token              | Size  | Line height | Tracking | Weight | Use                              |
|--------------------|-------|-------------|----------|--------|----------------------------------|
| `text-micro`       | 11px  | 1.3         | +0.08em  | 600    | All-caps tags                    |
| `text-label`       | 13px  | 1.3         | +0.08em  | 500    | Eyebrows, section labels         |
| `text-body-sm`     | 15px  | 1.55        | -0.005em | 400    | Captions, dense UI               |
| `text-body`        | 17px  | 1.55        | -0.005em | 400    | Default body                     |
| `text-body-lg`     | 20px  | 1.55        | -0.01em  | 400    | Lede paragraphs                  |
| `text-heading-md`  | 24px  | 1.15        | -0.02em  | 600    | Card titles                      |
| `text-heading-lg`  | 32px  | 1.15        | -0.02em  | 600    | Section sub-headings             |
| `text-display-sm`  | 40px  | 1.10        | -0.02em  | 600    | Small displays                   |
| `text-display-md`  | 56px  | 1.05        | -0.03em  | 600    | Section headlines                |
| `text-display-lg`  | 72px  | 1.05        | -0.03em  | 600    | Page-defining headlines          |
| `text-display-xl`  | 96px  | 1.02        | -0.035em | 600    | Hero headlines                   |

### Fluid display variants
For headlines that should scale with viewport, use the `-fluid` variants:
- `text-display-xl-fluid` → `clamp(56px, 8.5vw, 96px)`
- `text-display-lg-fluid` → `clamp(44px, 6vw, 72px)`
- `text-display-md-fluid` → `clamp(36px, 5vw, 56px)`
- `text-display-sm-fluid` → `clamp(28px, 3.5vw, 40px)`

### Conventions
- **Headlines** use `max-w-[22ch]` to `max-w-[24ch]` to control line length.
- **Body copy** never exceeds the `narrow` container (720px max-width).
- **Eyebrows** above headlines use `text-label uppercase font-mono text-neutral-400`
  (the SectionLabel component handles this).
- Headings are **always** weight 600. Bolder reads like a different font.

---

## 5. The mark (logo)

A custom **MB monogram** sitting on a 3-row dot grid, locked into a rounded
square. Reads as a tiny terminal display.

### Geometry
- Container: rounded square, `rx=24` on a `120×120` viewBox.
- Dot grid: 3 rows × 7 columns, dots `r=3`, evenly distributed across the top
  third of the mark.
- Letterforms: capital M and B in bespoke geometric paths, optical-center
  vertically, weight matched to display headlines.

### Color variants

**Default (light surface):**
- Background: `#2D2D2D` (graphite, slightly warmer than ink)
- Dots: `#0A0A0A` (true ink)
- Letters: `#FAF3E8` (warm bone)

**Inverted (on dark hero / colored gradient surfaces):**
- Background: `#FAFAF8` (off-white)
- Dots: `#E7E5E0` (`neutral-200`, deliberately faint so letters dominate)
- Letters: `#2D2D2D` (graphite)

### Source files
- `components/Nav.tsx` → inline SVG component `MasonMark` (used in nav, swaps
  inverted state via `useWhite` prop).
- `public/favicon.svg` → standalone version for browser tab.
- `public/mason-logo.svg` → master file for non-web uses (decks, social, print).

### Usage rules
- Minimum size: **22px**. Below that the dots blur into the letters.
- Always full-color. No outline-only or single-color reductions.
- Dot grid is part of the mark. Don't isolate the letters from it.
- On photographic backgrounds, place the mark on a solid card (off-white or
  graphite) before placing the card on the photo.

---

## 6. Layout & spacing

### Containers
| Token        | Max width | Use                           |
|--------------|-----------|-------------------------------|
| `narrow`     | 720px     | Long-form copy, single-column |
| `wide`       | 1280px    | Default page width            |

The `Container` component handles horizontal padding (24px on mobile, more on
desktop) automatically. Pass `width="narrow"` for prose sections.

### Section spacing
| Token          | Value | Use                                     |
|----------------|-------|-----------------------------------------|
| `py-section-sm`| 96px  | Compact sections (single-paragraph CTAs) |
| `py-section`   | 128px | Standard section vertical rhythm        |
| `py-section-lg`| 160px | Full chapters (problem, architecture)   |
| `py-section-xl`| 192px | Hero or dramatic separations            |

### Section alternation pattern
The page reads top-to-bottom by alternating `bg-white` and `bg-off-white` with
`border-y border-neutral-200` on the off-white blocks. Do **not** use shadows
for section separation. The hairline rule is the divider.

### Nav offset
Nav height is `--nav-height: 72px`. All anchored sections use
`scroll-margin-top: calc(var(--nav-height) + 24px)` automatically via a
global `[id]` rule.

---

## 7. Borders, radii, shadows

### Radii
| Token             | Value | Use                                    |
|-------------------|-------|----------------------------------------|
| `rounded-sm`      | 12px  | Buttons, pills                         |
| `rounded-md`      | 24px  | Cards, figures, large surfaces         |
| `rounded-lg`      | 32px  | Hero panels                            |

### Borders
- **Always** `border-neutral-200` (`#E7E5E0`). Nothing darker for normal
  separators. Nothing lighter would be visible.
- 1px is the default. Never thicker.

### Shadows
| Token                    | Value                                                     | Use                                  |
|--------------------------|-----------------------------------------------------------|--------------------------------------|
| `shadow-inset-hairline`  | `inset 0 0 0 1px rgba(10, 10, 10, 0.06)`                  | The standard "subtle inner edge" on cards. Combine with `border-neutral-200`. |
| `shadow-feature`         | `0 1px 2px rgba(10,10,10,.04), 0 12px 40px -8px rgba(10,10,10,.08)` | Sparingly, for floating panels. |

The site is a low-shadow design. Lift comes from hairlines and color, not
elevation.

### Image handling
Screenshots and illustrations use `.img-inset-border`
(`box-shadow: inset 0 0 0 1px rgba(10,10,10,0.08)`) to keep light edges from
bleeding into white surfaces.

---

## 8. Motion

### Durations
| Token            | Value | Use                                  |
|------------------|-------|--------------------------------------|
| `duration-micro` | 120ms | Hover states, color swaps            |
| `duration-standard` | 240ms | Standard transitions, link underlines |
| `duration-choreo`| 480ms | Multi-step entry choreography        |
| `duration-hero`  | 800ms | Page-load reveals                    |

### Easings
| Token            | Curve                              | Read                                 |
|------------------|------------------------------------|--------------------------------------|
| `ease-soft`      | `cubic-bezier(0.16, 1, 0.3, 1)`    | Decelerated, "settles in." Default for entries. |
| `ease-natural`   | `cubic-bezier(0.4, 0, 0.2, 1)`     | Material-style standard.             |
| `ease-physics`   | `cubic-bezier(0.34, 1.56, 0.64, 1)`| Slight overshoot. Use sparingly for delight. |

### Patterns
- **Stagger entry:** `animate-stagger-in` on FadeIn-wrapped blocks. 16px
  upward motion + opacity fade, 800ms, `ease-soft`.
- **Link underlines:** `.link-underline` slides from right edge in on
  hover/focus, full-width sweep, 240ms.
- **Reduced motion:** All animations collapse to 120ms opacity fades. The
  gradient noise overlay is removed.

---

## 9. Components & patterns

### Buttons
Three variants in `components/Button.tsx`:

| Variant      | Look                                                         | Use                                     |
|--------------|--------------------------------------------------------------|-----------------------------------------|
| `primary`    | Ink fill, white text. Hover swaps to ember.                  | Single primary CTA per section          |
| `secondary`  | Transparent, ink text, neutral-300 border. Hover lifts.      | Adjacent to primary                     |
| `tertiary`   | Inline link with animated underline. Hover ember.            | In-flow text references                 |

Sizes: `sm` (h-9), `md` (h-11), `lg` (h-12). Larger hit targets via invisible
`-6px` outset padding.

### Pills
Small all-caps tags using `Pill` component. Used for tech stacks and methodology
tags. `text-label uppercase` on a `bg-neutral-100` background with
`border-neutral-200`.

### Section labels (eyebrows)
`SectionLabel` component. `text-label uppercase font-mono text-neutral-400`
above every section headline. The mono is a small craft signal, not a theme.

### Cards
The standard pattern:
```
rounded-md border border-neutral-200 bg-white p-6 shadow-inset-hairline
```
For dark cards: swap `bg-white` for a dark fill and remove the shadow.

### FadeIn
Wraps content. Triggers on intersection with optional `delay` prop (in ms).
Use `delay={i * 40}` for sequential reveals in grids.

### Pull quote
`PullQuote` component on case study pages. Two tones: `ember` (default,
ember vertical bar + serif weight) and `ink` (subtle gray). Always
attributed (`The claim`, `The lesson`, etc.).

---

## 10. Iconography

**Library:** `lucide-react`. **Stroke weight:** `1.75`. Always.

Common icons in use:
- `ArrowUpRight` for external links and "see more" patterns
- `ArrowRight` for internal navigation
- `ArrowLeft` for back links
- `Radar`, `Sparkles`, `LineChart`, `Compass`, `Cpu` for build-page section markers
- `Copy`, `Check` for the email-copy interaction

### Sizes
- 16px in inline links and dense UI
- 18px for button icons
- 22-26px for section markers
- 32px+ for hero illustrations

### Rules
- Never mix Lucide with another icon library.
- Never fill icons. Stroke-only.
- Color matches the surrounding text color, with one exception: ember accents
  on the same surface where the headline gets ember treatment.

---

## 11. Imagery

### Photography
The site uses **one** real photo: the headshot in `/about`. It's editorial,
clean, neutral background. No additional photography unless it's of work
artifacts (screenshots, prints, scenes).

### Screenshots
- Always shown inside `rounded-md` cards with hairline borders.
- Background tone matches the screenshot's source palette (dark backdrop for
  dark UIs, white for light) so there are no letterbox bars.
- Use `next/image` with `fill` and `object-contain` to preserve full content.
- Always include descriptive alt text. Treat alt text like microcopy.

### Gradient tiles
Use the per-case `.gradient-{slug}` classes for hero panels and tile imagery.
Never flat color where a gradient is intended. The noise overlay is part of the
treatment.

---

## 12. Accessibility

The non-negotiables baked into the system:
- **Focus ring:** 2px solid ember, 2px offset, 2px border radius. Never
  removed. Buttons and links extend the offset to 3px.
- **Selection:** Ember background, white text.
- **Reduced motion:** All animations collapse to 120ms opacity fades.
- **Color contrast:** Body copy is ink (`#0A0A0A`) on white or off-white.
  Never go below `neutral-600` (`#5C5850`) for text on light surfaces.
- **Hit targets:** 44×44px minimum. Buttons reach this via invisible outset
  padding.

---

## 13. File map (for handoff)

| What                              | Where                                        |
|-----------------------------------|----------------------------------------------|
| Tailwind tokens                   | `tailwind.config.ts`                         |
| CSS variables + utilities         | `app/globals.css`                            |
| Mark / favicon                    | `public/favicon.svg`, `public/mason-logo.svg`|
| Inline mark component (with state)| `components/Nav.tsx` → `MasonMark`           |
| Buttons                           | `components/Button.tsx`                      |
| Pills, labels, fade               | `components/Pill.tsx`, `SectionLabel.tsx`, `FadeIn.tsx` |
| Case-study primitives             | `components/case/*.tsx`                      |
| Project metadata                  | `data/projects.ts`                           |

---

## 14. The single most important rule

If a designer or developer takes one thing from this doc:

**Restraint is the brand.**

One ember moment per page. One hero per page. Hairline borders, not shadows.
Plain language, never marketing language. Numbers, not adjectives. Show the
work; the work is the argument.
