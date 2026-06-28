# Cautus Insight — Visual Language & UI Standards

> **Version:** 2.0 (Phase 3H)
>
> **Status:** Approved — pending Phase 3H implementation
>
> **Audience:** Engineering, Product, Design
>
> **Source hierarchy:**
> 1. Approved handoff package (`~/Downloads/handoff/`) — design authority
> 2. This document — engineering authority
> 3. Production implementation
>
> If a conflict exists, the handoff package wins. This document must be updated to match the handoff before implementation begins.

---

## 1. Core Principle

Every visual decision must make the trader feel like an experienced mentor reviewed their trades before they opened the application.

The product is a trading coach, not a dashboard. The visual system exists to support that posture: calm, clear, authoritative. It should feel like a well-lit meeting room — not a trading terminal or a generic analytics product.

> **The single most important principle:** Accent communicates meaning, not decoration.
>
> - **Teal** = Insight speaking (coach voice, active selection)
> - **Green** = positive money
> - **Red** = negative money
> - **Gold** = caution / developing pattern
> - **Slate** = everything else
>
> If a color isn't doing one of those jobs, it should be removed. When in doubt, remove it.

---

## 2. Color System

### 2.1 Surface Ramp (Cool Navy)

The surface ramp uses cool navy-black tones. All values are intentionally blue-shifted — never warm, never pure black.

| Token | Value | Role |
|---|---|---|
| `gray-950` | `#070B14` | Outer canvas / page backdrop |
| `gray-900` | `#0B1220` | App background |
| `gray-850` | `#0C1424` | Context bar, table headers, chart insets |
| `gray-800` | `#0F1A2C` | Cards, panels (default raised surface) |
| `gray-750` | `#16223A` | Dropdowns, menus (elevated) |
| `gray-700` | `#233044` | Raised borders, hover fills |

### 2.2 Text Ramp

| Token | Value | Role |
|---|---|---|
| `gray-100` | `#F8FAFC` | Primary headings, high emphasis |
| `gray-200` | `#F0F4F8` | Near-primary body text |
| `gray-300` | `#CBD5E1` | Strong body on dark cards |
| `gray-400` | `#94A3B8` | Muted body text, secondary copy |
| `gray-500` | `#64748B` | Dim text, eyebrows, captions |
| `gray-600` | `#475569` | Faint text, disabled, fine print |

### 2.3 Accent — Teal (Insight Speaking)

`indigo-600` (`#2CB1BC`) is the one accent in the product. It appears in exactly three contexts:
1. The Signature Coach Card border and gradient wash
2. The active navigation pill
3. The active review-period row in the dropdown

Nothing else uses teal. Not icons, not headings, not decorative borders.

| Token | Value | Role |
|---|---|---|
| `indigo-600` | `#2CB1BC` | THE accent — use sparingly |
| `indigo-500` | `#3EC8D2` | Lighter teal (hover state) |
| `indigo-700` | `#1F8A93` | Darker teal (pressed state) |
| `indigo-400` | `#6FD6DE` | Lightest teal (rarely needed) |

Derived accent values (CSS vars / inline only, not Tailwind classes):
- Soft fill: `rgba(44,177,188,0.14)` — icon chips, tint fills
- Card border: `rgba(44,177,188,0.20)` — Signature Coach Card
- Accent glow: `rgba(44,177,188,0.16)` — ambient radial (one Coach card only)

### 2.4 Semantic Colors (Data Only)

These exist to communicate trade outcomes. They are never used decoratively.

| Token | Value | Exact role |
|---|---|---|
| `green-400` | `#2F9E68` | Winning trade P&L, positive balance, Connected status |
| `green-500` | `#277F54` | Darker green (pressed/hover) |
| `red-400` | `#C2536B` | Losing trade P&L, negative money **only** |
| `red-500` | `#A8455A` | Darker red |
| `yellow-400` | `#C0A062` | Caution / Developing pattern (gold) |
| `yellow-500` | `#A4854F` | Darker gold |

### 2.5 Hairlines & Borders

All borders are translucent slate — never solid gray. This keeps surfaces feeling light even in a dark environment.

| Token | Value | Role |
|---|---|---|
| `border-hair` | `rgba(148,163,184,0.12)` | Default card border |
| `border-divide` | `rgba(148,163,184,0.08)` | Section dividers |
| `border-ghost` | `rgba(148,163,184,0.22)` | Ghost buttons, chips, strong borders |
| `border-accent` | `rgba(44,177,188,0.20)` | Signature Coach Card only |

---

## 3. Typography

### 3.1 Three Roles, Three Families

Typography is the primary tool for communicating hierarchy. There are exactly three font roles and they do not mix.

| Role | Family | Tailwind Class | Weight | Tracking |
|---|---|---|---|---|
| Display | Space Grotesk | `font-display` | 600 | -0.02em |
| Body / UI | Inter | `font-sans` | 400 / 500 / 600 | normal |
| Data / Labels | IBM Plex Mono | `font-mono` | 400 / 500 | see below |

**Rule of thumb: words = `font-display` / `font-sans`, numbers & labels = `font-mono`.**

If you are choosing between display and sans: use `font-display` for coaching statements, headings, and card titles. Use `font-sans` for everything else — descriptions, button labels, nav items, form fields, body copy.

Never use IBM Plex Mono for prose. Never use Inter or Space Grotesk for prices, P&L, or counts.

### 3.2 Type Scale

**Display scale (Space Grotesk, `font-display`)**

| Name | Size | Line Height | Use |
|---|---|---|---|
| Hero coaching statement | 27–29px | 1.30 | CoachCard hero text |
| h2 / card headline | 21px | 1.25 | Major card titles |
| h3 / section title | 18px | 1.30 | Section headings |

**Body scale (Inter, `font-sans`)**

| Name | Size | Line Height | Use |
|---|---|---|---|
| Lead | 16–18px | 1.65 | Hero descriptions |
| Body | 14–15px | 1.65 | Default copy, list items |
| Small | 13px | 1.60 | Secondary descriptions |

**Label / mono scale (IBM Plex Mono, `font-mono`, UPPERCASE, wide tracking)**

| Name | Size | Tracking | Use |
|---|---|---|---|
| Eyebrow | 10–11px | 0.12–0.20em | Section eyebrows, category labels |
| Data value | 13–15px | 0.02em | Prices, P&L, counts |
| Caption / meta | 11–12px | 0.04em | Timestamps, secondary data |

### 3.3 Font Loading

```css
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap");
```

For production: self-host via `/public/fonts/` and swap `@import` for `@font-face` declarations.

### 3.4 Base Reset

```css
body {
  font-family: var(--font-body); /* Inter */
  background-color: #0B1220;
  color: #F0F4F8;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, .font-display {
  font-family: var(--font-display); /* Space Grotesk */
  letter-spacing: -0.02em;
}

::selection {
  background: #2CB1BC;
  color: #0B1220;
}
```

---

## 4. Spacing & Radius

### 4.1 Border Radius

Two values only. Remove all other radius values.

| Token | Value | Use |
|---|---|---|
| `rounded-sm` / `rounded` / `rounded-md` | `12px` | Buttons, chips, small controls, tags |
| `rounded-lg` / `rounded-xl` | `16px` | Cards, panels, dropdowns, modals |
| `rounded-full` | `9999px` | Avatar chips, pill badges |

The previous preset had `18px` and `22px` radius values — these are removed.

### 4.2 Spacing Reference

| Location | Value |
|---|---|
| Default card padding | 22–24px |
| Signature Coach Card padding | 30–36px |
| Page content max-width | 1040–1180px |
| Section rhythm (vertical gap) | 26–36px |

---

## 5. Component Patterns

### 5.1 Signature Coach Card

The most important surface in the product. It carries the coaching voice — Hero Insight, coaching summaries, recommendations, pattern diagnosis. There is ONE Coach Card per screen. It is the only teal surface (aside from active nav and active period row).

```
bg:            #0E1726  (slightly lighter than canvas)
border:        rgba(44,177,188,0.20)
border-radius: 16px
gradient:      linear-gradient(150deg, rgba(44,177,188,0.07), transparent 60%)
padding:       30–36px

Interior anatomy (top to bottom):
  [CI badge]   → small rounded pill, mono uppercase, teal border/text
  [eyebrow]    → CATEGORY · DATE  (mono, 10px, 0.18em tracking, gray-500)
  [statement]  → coaching text (font-display, 27–29px, gray-100)
  [divider]    → border-divide
  [footer]     → evidence count or secondary copy (mono, gray-400)
```

A shared `CoachCard` component implements this. Do not replicate this pattern inline across pages.

### 5.2 Neutral Card

Default surface for all non-coaching content: metric summaries, tables, chart containers.

```
bg:            gray-800  (#0F1A2C)
border:        border-hair  (rgba(148,163,184,0.12))
border-radius: 16px
padding:       20–24px
```

No colored top-border, no left-accent border, no category color labels. All cards are the same surface; the content differentiates them.

### 5.3 StatusTag

Small mono pill for execution quality labels and account connection status.

```
font:    font-mono, 11px, uppercase, 0.14em tracking
radius:  12px
padding: 2px 8px

States:
  gold  → text yellow-400, bg rgba(192,160,98,0.12),  border rgba(192,160,98,0.28)
  red   → text red-400,    bg rgba(194,83,107,0.12),  border rgba(194,83,107,0.28)
  green → text green-400,  bg rgba(47,158,104,0.12),  border rgba(47,158,104,0.28)
```

### 5.4 Navigation (Side Nav)

```
Default item: gray-400 text, no background
Hover:        gray-300 text, gray-750 fill
Active:       gray-100 bold text, rgba(44,177,188,0.10) fill, rgba(44,177,188,0.22) border-left
```

Active item uses a teal left-border accent. This is the second teal surface in the product (after the Coach Card).

### 5.5 Context Bar & Period Dropdown

```
Context bar:    bg gray-850 (#0C1424)
Dropdown panel: bg gray-750 (#16223A), border rgba(148,163,184,0.18), radius 16px

Period row:
  Default:  gray-300 text, no background
  Hover:    gray-100 text, gray-700 fill
  Active:   teal dot indicator, rgba(44,177,188,0.08) fill, gray-100 bold text
  Disabled: gray-600 text, not clickable (0-trade periods)
```

### 5.6 WordMark

```
CAUTUS  → Space Grotesk, 600, white (gray-100), tracking 0.05em
INSIGHT → Space Grotesk, 600, teal (indigo-600), tracking 0.42em
```

No other element in the product uses a tracking value as wide as 0.42em.

### 5.7 Trade Table

```
Row text:   font-mono for all data cells (P&L, price, time, count)
            font-sans for trade labels / ticker
P&L cell:  green-400 (positive) / red-400 (negative) — data only
Winner row: rgba(47,158,104,0.04) tint (very subtle)
Loser row:  rgba(194,83,107,0.04) tint (very subtle)
Click:      opens TradeDetailPanel drawer
```

### 5.8 Chart Containers

All chart frames must have `overflow: hidden`. No horizontal scrollbars. Chart axis labels and legends use `font-mono`.

---

## 6. Visual System Audit

### 6.1 Current State vs Target State

| | **Current (live app)** | **Target (Phase 3H)** |
|---|---|---|
| **Canvas bg** | `#0d0d0d` (pure black) | `#0B1220` (cool navy) |
| **Card surface** | `#121212` via `ink-bg-*` tokens | `#0F1A2C` via `gray-800` |
| **Accent** | `#3b82f6` blue / `#58a6ff` indigo | `#2CB1BC` teal |
| **Semantic positive** | `#22c55e` (bright green) | `#2F9E68` (muted green) |
| **Semantic negative** | `#ef4444` (bright red) | `#C2536B` (muted rose-red) |
| **Body font** | IBM Plex Mono (wrong) | Inter |
| **Heading/statement font** | IBM Plex Sans or Space Grotesk — inconsistently applied | Space Grotesk (`font-display`) |
| **Data font** | IBM Plex Mono (`font-mono`) — correct | IBM Plex Mono (`font-mono`) — no change |
| **Radius** | Mixed: 14/18/20/22px | 12px (controls) / 16px (cards) only |
| **Borders** | Solid gray colors or no border | Translucent slate (`rgba(148,163,184,0.12)`) |
| **Token system** | Custom `ink-*` and `trade-*` in `cautus-insight/tailwind.config.ts` | Standard `gray-*` / `indigo-*` / `green-*` / `red-*` in `cautus-ui/tailwind.preset.js` |
| **Font utilities** | `font-grotesk`, `font-inter`, `font-sans` (IBM Plex Sans) | `font-display` (Space Grotesk), `font-sans` (Inter), `font-mono` |
| **Font loading** | Inline `style={{ fontFamily }}` scattered across components | Tailwind utility classes only |

### 6.2 Gap Analysis

**Gap 1 — Token System (High Impact, Low Risk)**
- `cautus-ui/tailwind.preset.js` uses old pure-black ramp and indigo-as-blue
- `cautus-insight/frontend/tailwind.config.ts` defines custom `ink-*` / `trade-*` tokens that override the preset
- Fix: replace `tailwind.preset.js` with the handoff values; audit `tailwind.config.ts` for overrides to remove

**Gap 2 — Default Body Font (High Impact, Visually Obvious)**
- Body renders IBM Plex Mono everywhere — most noticeable difference vs the mock
- Fix: update `index.css` base reset to set Inter as body; apply `font-display` and `font-mono` explicitly

**Gap 3 — Inline Font Styles (Medium Impact, Tedious)**
- Many components use `style={{ fontFamily: '"IBM Plex Sans"...' }}` — not affected by the preset swap
- Fix: replace with `className="font-sans"` or `className="font-display"` as appropriate

**Gap 4 — Custom Font Utilities (Low Risk, Cleanup)**
- `font-grotesk` and `font-inter` in `tailwind.config.ts` overlap with the new preset's `font-display` / `font-sans`
- Fix: remove custom utilities and update usages after preset lands

**Gap 5 — Semantic Color Brightness (Visual, Low Risk)**
- Current green/red are bright web colors; target values are softer
- Handled entirely by the token swap — no component changes needed

**Gap 6 — Shared Primitives Missing (Medium Impact)**
- `CoachCard` does not exist; each coaching surface has its own inline styling
- `StatusTag` does not exist; execution quality labels use ad-hoc chips
- Fix: build both in `cautus-ui/src/components/` in Phase 3H Phase 2

**Gap 7 — Chart Overflow (Low Frequency, Easy Fix)**
- Some chart containers lack `overflow: hidden`
- Fix: add `overflow-hidden` to chart frame wrappers in Phase 3H Phase 4

### 6.3 Files Requiring Changes

| File | Change Type | Phase |
|---|---|---|
| `cautus-ui/tailwind.preset.js` | Replace color ramp, accent, radii, border tokens | 3H-1 |
| `cautus-insight/frontend/src/index.css` | Merge theme-fonts.css (Google import, CSS vars, base reset) | 3H-1 |
| `cautus-insight/frontend/tailwind.config.ts` | Audit and remove overrides conflicting with new preset | 3H-1 |
| `cautus-ui/src/components/CoachCard.tsx` | Create new shared primitive | 3H-2 |
| `cautus-ui/src/components/StatusTag.tsx` | Create new shared primitive | 3H-2 |
| `cautus-ui/src/components/Card.tsx` | Create or update neutral card primitive | 3H-2 |
| `cautus-insight/frontend/src/components/AccountLayout.tsx` | Active nav pill — teal fill + border | 3H-2 |
| `cautus-insight/frontend/src/components/ContextBar.tsx` | Period dropdown — navy panel, teal active row | 3H-2 |
| `cautus-insight/frontend/src/components/WordMark.tsx` | Space Grotesk + teal INSIGHT | 3H-2 |
| `cautus-insight/frontend/src/pages/HeroInsight.tsx` | Adopt CoachCard | 3H-2 |
| `cautus-insight/frontend/src/components/CoachingPanel.tsx` | Adopt CoachCard | 3H-2 |
| All pages with inline `style={{ fontFamily }}` | Replace with Tailwind classes | 3H-3 |
| All pages: typography role pass | prose → `font-sans`, statements → `font-display`, data → `font-mono` | 3H-3 |
| `MaeMfeScatter.tsx`, `HeatmapChart.tsx`, `HoldTimeChart.tsx` | `overflow-hidden` on frames | 3H-4 |
| All pages: accent audit | Remove non-conforming color usage | 3H-4 |

---

## 7. Rollout Plan

Execute in this order. Do not skip stages.

### Stage 1 — Tokens + Fonts (Phase 3H-1)

Replace `cautus-ui/tailwind.preset.js`. Merge `theme-fonts.css` into `index.css`. Commit.

The app immediately reads navy surfaces, teal accents, soft semantic colors, and correct radii — before any component edits. This is the staging check: if the direction looks wrong, stop.

### Stage 2 — Shared Primitives (Phase 3H-2)

Build `CoachCard`, `StatusTag`, `Card`. Update nav active state. Update `ContextBar` dropdown. Update `WordMark`. Commit.

These primitives propagate the visual language everywhere they are used. Most pages will look substantially correct after this stage.

### Stage 3 — Typography Roles (Phase 3H-3)

Move prose → Inter (`font-sans`), coaching statements/titles → Space Grotesk (`font-display`), keep data → IBM Plex Mono (`font-mono`). Remove inline `fontFamily` styles. Remove deprecated `font-grotesk` / `font-inter` custom utilities. Commit.

### Stage 4 — Screen by Screen + Accent Audit (Phase 3H-4)

Apply screen-by-screen against the reference mock (`~/Downloads/handoff/reference/mock.dc.html`). Order: Overview → Trade Cycles → Review → Behavior Patterns → Execution Quality → Settings → Upload/Empty/Auth.

Close with the accent audit: grep every color utility and confirm each one satisfies the accent rule. Delete or replace any that do not.

---

## 8. Guardrails

These rules apply in all phases. Violating any of them requires a documented exception.

1. **One teal moment per screen.** Coach Card + active nav pill + active period row. Nothing else.
2. **Red only on negative money.** Not on errors, warnings, or emphasis.
3. **Green only on positive money or Connected status.** Not on success messages.
4. **Gold only on caution or Developing patterns.** Not on info callouts.
5. **Two radii only.** `12px` for controls, `16px` for containers.
6. **No shadows or glows** beyond the single Coach Card gradient wash and existing depth shadows.
7. **When a screen feels flat,** add space and larger type — not more color.
8. **When unsure about a color,** make it `gray-400` (`#94A3B8`). That is almost always correct.

---

## 9. Component Mapping Matrix

Every component in the live app mapped to its target visual pattern and the shared primitive that implements it. Produced during Phase 0 to confirm the handoff was understood before code was touched.

Read across: **Current Component → Target Visual Pattern → Reusable Primitive**

---

### Global Layout

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `AccountLayout.tsx` | Side nav: active = `bg-ink-strong` solid dark fill, no teal indicator | Active pill: `rgba(44,177,188,0.10)` fill + `rgba(44,177,188,0.22)` left-border, white bold label | `AccountLayout` (restyled — no new primitive) |
| `ContextBar.tsx` | Dropdown: `#141414` bg, `#2a2a2a` border, active dot = `bg-trade-select` (blue) | Dropdown: `#16223A` bg, translucent slate border, active dot = teal, teal row tint | `ContextBar` (restyled — no new primitive) |
| `WordMark.tsx` | `font-grotesk` custom utility, INSIGHT tracking `0.14em` | `font-display` (Space Grotesk), INSIGHT tracking `0.42em` | `WordMark` (restyled — no new primitive) |

---

### Overview (`OverviewPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `HeroInsight.tsx` | Inline styled: amber eyebrow (`rgba(245,158,11,0.6)`), amber border gradient, Inter statement 24px, `#0d0d0d` bg | Signature Coach Card: teal border + wash, CI badge, mono eyebrow, Space Grotesk statement 27–29px | `CoachCard` |
| `SummaryStrip.tsx` | `#121212` bg, solid `#242424` border, accent-colored section labels | Neutral card: `gray-800` bg, `border-hair`, no colored labels | `Card` |
| `TradeTable.tsx` | P&L green/red, mono data — direction correct; colors are bright web values | Same layout, semantic colors updated by token swap (`green-400` → `#2F9E68`, `red-400` → `#C2536B`) | `TradeTable` (token swap only) |

---

### Trade Cycles (`TradeCyclesPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `HeroInsight.tsx` | See Overview | Signature Coach Card | `CoachCard` |
| Cycle row containers | Inline `#0d0d0d` bg, solid dark border | Neutral card: `gray-800` bg, `border-hair` | `Card` |
| `TradeTable.tsx` | See Overview | Token swap only | `TradeTable` |

---

### Review (`ReviewPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `TodaysFocus.tsx` | `#0e0e0e` bg, amber left-border (`rgba(245,158,11,0.4)`), 15px body text | Signature Coach Card: teal border + wash, Space Grotesk statement | `CoachCard` |
| `PracticeRule.tsx` | `#0e0e0e` bg, amber left-border (`rgba(245,158,11,0.4)`), 14px body | Signature Coach Card | `CoachCard` |
| `TopThreeFindings.tsx` | `rgba(255,255,255,0.04)` bg, `rgba(255,255,255,0.1)` border, white numbered bullets, mono evidence line | Neutral card grid: `gray-800` bg, `border-hair`; number bullets = `gray-700` fill | `Card` |
| `RecentTrend.tsx` | `#111111` bg, `#1e1e1e` solid border, accent label | Neutral card: `gray-800` bg, `border-hair`, label → `gray-500` | `Card` |

---

### Behavior Patterns (`BiggestLeaksPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `HeroInsight.tsx` | See Overview | Signature Coach Card | `CoachCard` |
| `PatternSummaryPanel.tsx` | Per-pattern accent color (not teal-constrained) via `accent` prop: colored title, colored icon, `accent22` border, `#0d0d0d` bg | Neutral card: `gray-800` bg, `border-hair`; pattern title and icon → `gray-300`; only P&L values keep semantic color | `Card` |
| `BiggestLeaks.tsx` | Pattern cards with inline accent colors on non-money elements | Neutral card; red only on `−$` values; leak markers and trade-count badges → slate | `Card` |

---

### Execution Quality (`ExecutionQualityPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `HeroInsight.tsx` | See Overview | Signature Coach Card | `CoachCard` |
| `ExecutionSummary.tsx` | 3-column grid; quality grade = inline `gradeColor` (`#22c55e` / `#f59e0b` / `#ef4444`); inline `fontFamily: Inter`; `rgba(255,255,255,0.03)` bg | Neutral card grid; grade label → `StatusTag` (green/gold/red); font via preset | `Card` + `StatusTag` |
| `MaeMfeScatter.tsx` | Chart container — missing `overflow: hidden` | Same chart, add `overflow-hidden` to outer frame | existing + `overflow-hidden` |
| `HoldTimeChart.tsx` | Chart container — missing `overflow: hidden` | Same chart, add `overflow-hidden` to outer frame | existing + `overflow-hidden` |
| `HeatmapChart.tsx` | Chart container — missing `overflow: hidden` | Same chart, add `overflow-hidden` to outer frame | existing + `overflow-hidden` |

---

### Settings (`SettingsPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| Account card | `#111111` bg, `#1e1e1e` solid border; status badge = ad-hoc `#1a1a1a` bg pill, no semantic color | Neutral card: `gray-800` bg, `border-hair`; status badge → `StatusTag` (green=Active/Connected) | `Card` + `StatusTag` |
| Import history row | `#111111` bg, `#1e1e1e` solid border | Neutral card: `gray-800` bg, `border-hair` | `Card` |
| Dividers | `#1a1a1a` solid bg | `border-divide` (`rgba(148,163,184,0.08)`) | Token swap only |

---

### Upload & Empty States (`UploadPage.tsx`, `EmptyJournal.tsx`, `UploadZone.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `UploadZone.tsx` | Dashed dropzone; spinner = `text-trade-select` (blue) | Same layout; spinner → `text-indigo-600` (teal); dashed border → `border-ghost` | `UploadZone` (token swap only) |
| `EmptyJournal.tsx` | Uses `font-grotesk` / `font-inter` custom utilities; `#0d0d0d` feature card bg | Update to `font-display` / `font-sans`; card bg → `gray-800`, `border-hair` | `Card` + typography update |

---

### Auth (`SignInPage.tsx`, `SignUpPage.tsx`)

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| Form container | Inline dark bg / solid border | Neutral card: `gray-800`, `border-hair` | `Card` |
| Submit button | `bg-trade-select` (blue) | `bg-indigo-600` (teal) — Insight action | token swap only |

---

### Trade Detail Drawer

| Current Component | Current Pattern | Target Visual Pattern | Primitive |
|---|---|---|---|
| `ResizableDrawer.tsx` | Drawer shell | No structural change; bg → `gray-800`/`gray-850` via token swap | Token swap only |
| `TradeDetailPanel.tsx` | Dense detail layout — correct posture | No structural change; colors via token swap | Token swap only |
| `CandleChart.tsx` | Chart — may overflow | Add `overflow-hidden` to chart frame | existing + `overflow-hidden` |
| `ExpandedChartModal.tsx` | Modal overlay | No structural change | Token swap only |

---

### Not in Phase 3H Scope

| Component | Reason |
|---|---|
| `landing/CoachingPanel.tsx` | Marketing landing page — separate visual context |
| `landing/ExampleInsightCard.tsx` | Marketing landing page |
| `landing/CTASection.tsx` | Marketing landing page |
| `landing/TransformationSection.tsx` | Marketing landing page |
| `landing/SectionLabel.tsx` | Marketing landing page |
| `landing/LandingFooter.tsx` | Marketing landing page |

---

### Primitive Summary

New shared components to build in `cautus-ui/src/components/` during Phase 3H-2:

| Primitive | Used By | What it replaces |
|---|---|---|
| `CoachCard` | `HeroInsight`, `TodaysFocus`, `PracticeRule` (all 3 screens that use them) | Per-component inline amber card styling |
| `StatusTag` | `ExecutionSummary`, `SettingsPage` | Inline `gradeColor` dict + ad-hoc status pills |
| `Card` | `SummaryStrip`, `TopThreeFindings`, `RecentTrend`, `PatternSummaryPanel`, `BiggestLeaks`, account/import cards, form containers | Per-component inline `#111111` bg + solid border patterns |
