const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // extending default tailwind classes with custom
    extend: {
      fontFamily: {
        serif: ['Ubuntu', ...defaultTheme.fontFamily.serif],
        custom: ['Balsamiq Sans', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
