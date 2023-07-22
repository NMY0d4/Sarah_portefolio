/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      fontWeight: {
        poppins: {
          thin: '200',
          light: '300',
          normal: '400',
          medium: '500',
          semibold: '600',
          bold: '700',
          extrabold: '800',
          black: '900',
        },
      },
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
        danger: 'var(--danger)',
      },
    },
  },
  plugins: [],
};
