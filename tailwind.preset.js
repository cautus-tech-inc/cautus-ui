/**
 * Cautus Insight — Tailwind preset (THEME: navy + teal)
 *
 * Token NAMES are identical to the previous preset so existing utility
 * classes (bg-gray-800, text-gray-400, text-indigo-500 …) reskin with
 * zero markup changes. The `indigo` ramp is now TEAL — audit every
 * indigo-* usage against the accent rule (most should become slate
 * gray-400/500; only "Insight speaking" surfaces stay teal).
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  theme: {
    extend: {
      fontFamily: {
        // Words — display and body
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'], // headlines, coaching statements, titles, wordmark
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],         // body copy, UI, buttons, nav
        // Numbers + labels (already the app default — keep IBM Plex Mono first)
        mono:    ['"IBM Plex Mono"', '"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      colors: {
        // Surface ramp (cool navy) — used for both surfaces AND the text ramp.
        gray: {
          950: '#070B14', // outer canvas / page backdrop
          900: '#0B1220', // app background
          850: '#0C1424', // context bar, table headers, chart insets
          800: '#0F1A2C', // cards, panels (default raised surface)
          750: '#16223A', // raised surfaces (dropdowns, menus)
          700: '#233044', // raised borders / hover fills
          600: '#475569', // faint text, disabled
          500: '#64748B', // dim text, eyebrows, captions
          400: '#94A3B8', // muted body text
          300: '#CBD5E1', // strong body text on dark cards
          200: '#F0F4F8', // near-primary text
          100: '#F8FAFC', // primary headings / high emphasis
        },

        // Primary accent — TEAL (was indigo/blue).
        // Use ONLY for: Signature Coach Card, active nav pill, active period row.
        indigo: {
          700: '#1F8A93',
          600: '#2CB1BC', // THE accent
          500: '#3EC8D2',
          400: '#6FD6DE',
        },

        // Semantic — DATA ONLY, never decorative.
        green:  { 400: '#2F9E68', 500: '#277F54' }, // positive money / connected status
        red:    { 400: '#C2536B', 500: '#A8455A' }, // negative money only
        yellow: { 400: '#C0A062', 500: '#A4854F' }, // caution / developing (gold)

        // Optional alias (same hue as indigo-500).
        cyan: { 400: '#3EC8D2', 500: '#22A0AA' },
      },

      borderRadius: {
        // Two values only — per THEME_HANDOFF.md §4 (supersedes spacing.css).
        sm:      '12px', // buttons, chips, small controls
        DEFAULT: '12px',
        md:      '12px',
        lg:      '16px', // cards, panels, dropdowns
        xl:      '16px',
      },

      borderColor: {
        // Hairlines are translucent slate — never solid grays.
        hair:   'rgba(148,163,184,0.12)', // default card border
        divide: 'rgba(148,163,184,0.08)', // section dividers
        ghost:  'rgba(148,163,184,0.22)', // ghost buttons, chips
        accent: 'rgba(44,177,188,0.20)',  // Signature Coach Card only
      },
    },
  },
}
