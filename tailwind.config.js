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
        primary: 'var(--primary)',
        secondary: ' #19a7ce',
        tertiary: '#afd3e2',
        darkness: '#171717',
        lightness: '#f6f1f1',
        grey: '#444444',
      },
    },
  },
  plugins: [],
};
