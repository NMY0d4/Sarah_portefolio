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
        primaryDark: 'var(--primaryDark)',
        primary: 'var(--primary)',
        primaryLight: 'var(--primaryLight)',
        secondaryDark: 'var(--secondaryDark)',
        secondary: 'var(--secondary)',
        secondaryLight: 'var(--secondaryLight)',
        tertiary: 'var(--tertiary)',
        darkness: 'var(--darkness)',
        lightness: 'var(--lightness)',
        greyDark: 'var(--greyDark)',
        grey: 'var(--grey)',
        greyLight: 'var(--greyLight)',
      },
    },
  },
  plugins: [],
};
