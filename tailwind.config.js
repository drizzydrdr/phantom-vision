/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffb4a8',
        'on-background': '#e5e2e1',
        'surface-dim': '#131313',
        'on-primary-container': '#ffe7e3',
        'primary-container': '#d80000',
        'surface-container-highest': '#353534',
        'surface-container-high': '#2a2a2a',
        'surface-container': '#201f1f',
        'surface-container-low': '#1c1b1b',
        background: '#131313',
        'secondary-container': '#454747',
        secondary: '#c6c6c7',
        outline: '#af8781',
        'on-surface-variant': '#e8bcb5',
        surface: '#131313',
        'surface-bright': '#393939',
        'on-secondary': '#2f3131',
        'on-surface': '#e5e2e1',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body: ['"Archivo Narrow"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
