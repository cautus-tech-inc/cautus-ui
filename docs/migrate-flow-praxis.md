# Migrate flow-praxis to @cautus/ui

> **Context for Claude Code:** This document is a self-contained instruction set.
> The Cautus suite (flow-praxis, cautus-insight, cautus-landing) shares a design
> system via the `@cautus/ui` package at `github.com/cautus-tech-inc/cautus-ui`.
> flow-praxis currently has its design tokens hardcoded in its own tailwind config.
> This migration moves those tokens to the shared package. Visual output must be
> pixel-identical before and after — nothing should change on screen.

---

## What is @cautus/ui

A minimal shared package containing:
- `tailwind.preset.js` — all Tailwind color tokens and font stack for the Cautus suite
- `index.css` — body/selection reset using direct hex values (no @apply dependency)

Installed directly from GitHub, pinned to a tag:
```
npm install github:cautus-tech-inc/cautus-ui#v0.1.0
```

---

## Files to change in flow-praxis/frontend

### 1. `package.json` — add the dependency

In `devDependencies`, add:
```json
"@cautus/ui": "github:cautus-tech-inc/cautus-ui#v0.1.0"
```

Then run:
```bash
npm install
```

---

### 2. `tailwind.config.js` — replace hardcoded tokens with preset

**Before** (`frontend/tailwind.config.js`):
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        gray: {
          950: '#000000',
          900: '#06080c',
          850: '#0b0f15',
          800: '#11161e',
          750: '#1a212c',
          700: '#242c38',
          600: '#4a5160',
          500: '#6b7280',
          400: '#aab2bf',
          300: '#c9d1d9',
          200: '#e6e8ec',
          100: '#f0f2f5',
        },
        indigo: {
          700: '#1f6feb',
          600: '#2c7cf0',
          500: '#58a6ff',
          400: '#79b8ff',
        },
        green:  { 400: '#3fb950', 500: '#2ea043' },
        yellow: { 400: '#d29922', 500: '#b08800' },
        orange: { 400: '#f0883e', 500: '#d4710d' },
        red:    { 400: '#f85149', 500: '#da3633' },
        violet: { 400: '#a371f7', 500: '#8b5cf6' },
        cyan:   { 400: '#39c5cf', 500: '#22a0aa' },
      },
    },
  },
  plugins: [],
}
```

**After**:
```js
import cautusPreset from '@cautus/ui/tailwind.preset'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [cautusPreset],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
}
```

---

### 3. `src/index.css` — replace hardcoded reset with shared import

**Before** (`frontend/src/index.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-gray-950 text-gray-200 font-mono;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(88, 166, 255, 0.35);
  color: #fff;
}
```

**After**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import '@cautus/ui/index.css';
```

---

## Verification checklist

After making all three changes and running `npm install`:

1. `npm run dev` starts without errors
2. App background is `#000000` (near-black, not white or gray)
3. Text is `#e6e8ec` (light gray)
4. Font is JetBrains Mono
5. Header border, nav link colors, and indigo accent buttons are unchanged
6. `npm run build` completes without errors

If any Tailwind class stops resolving (e.g., a custom gray shade appears missing),
check that `content` in the updated `tailwind.config.js` still covers all source
files — the preset does not override `content`.

---

## Also fix: lightweight-charts version

flow-praxis is on `lightweight-charts@^4.2.0`. cautus-insight targets v5.
Both apps render charts, so they should be on the same major version to share
institutional knowledge about the API.

Check the v4 → v5 changelog for breaking changes before upgrading:
https://github.com/tradingview/lightweight-charts/releases

Recommended: upgrade flow-praxis to v5 at the same time as this migration so
both apps start from the same baseline.

---

## How to update @cautus/ui in the future

1. Make changes to `tailwind.preset.js` or `index.css` in `cautus-tech-inc/cautus-ui`
2. Commit and tag: `git tag v0.1.1 && git push origin v0.1.1`
3. In each consuming app: update the version in `package.json` and run `npm install`

No npm registry required — npm resolves GitHub tags directly.
