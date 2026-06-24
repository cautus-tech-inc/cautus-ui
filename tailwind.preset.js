/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Surface layers — dark terminal aesthetic
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
        // Primary accent
        indigo: {
          700: '#1f6feb',
          600: '#2c7cf0',
          500: '#58a6ff',
          400: '#79b8ff',
        },
        // Semantic / status colors
        green:  { 400: '#3fb950', 500: '#2ea043' },
        yellow: { 400: '#d29922', 500: '#b08800' },
        orange: { 400: '#f0883e', 500: '#d4710d' },
        red:    { 400: '#f85149', 500: '#da3633' },
        violet: { 400: '#a371f7', 500: '#8b5cf6' },
        cyan:   { 400: '#39c5cf', 500: '#22a0aa' },
      },
    },
  },
}
