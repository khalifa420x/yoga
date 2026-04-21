/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F0EDE4',
        sand: '#E8E4D8',
        sage: '#5A7A5F',
        'sage-light': '#7A9A7F',
        forest: '#3A4A3C',
        darkforest: '#2A3030',
        'text-main': '#2A2A24',
        'text-muted': '#5A5A50',
        'text-light': '#8A8A7A',
        gold: '#C8A052',
        'sage-pale': '#E8F0E8',
        'blue-pale': '#E8E8F5',
        'terra-pale': '#F5E8E0',
        'violet-pale': '#F0E8F5',
      },
    },
  },
  plugins: [],
}