/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        // Yoganova design system
        primary: '#28351c',
        'primary-container': '#3e4c31',
        surface: '#fcf9ef',
        'surface-low': '#f2efe6',
        'surface-high': '#e5e2d9',
        'on-surface': '#1a1f14',
        // Legacy
        cream: '#fcf9ef',
        sand: '#e5e2d9',
        sage: '#5A7A5F',
        'sage-light': '#7A9A7F',
        forest: '#28351c',
        darkforest: '#1a1f14',
        'text-main': '#1a1f14',
        'text-muted': '#5A5A50',
        'text-light': '#8A8A7A',
        gold: '#C8A052',
        'sage-pale': '#E8F0E8',
        'blue-pale': '#E8E8F5',
        'terra-pale': '#F5E8E0',
        'violet-pale': '#F0E8F5',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: 'hsl(var(--card) / <alpha-value>)',
        'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
        popover: 'hsl(var(--popover) / <alpha-value>)',
        'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
        muted: 'hsl(var(--muted) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
        destructive: 'hsl(var(--destructive) / <alpha-value>)',
        'destructive-foreground': 'hsl(var(--destructive-foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        'noto-serif': ['var(--font-noto-serif-var)', 'Noto Serif', 'serif'],
        'plus-jakarta': ['var(--font-plus-jakarta-var)', 'Plus Jakarta Sans', 'sans-serif'],
        // Legacy aliases — map to new fonts
        'dm-serif': ['var(--font-noto-serif-var)', 'Noto Serif', 'serif'],
        'inter': ['var(--font-plus-jakarta-var)', 'Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
