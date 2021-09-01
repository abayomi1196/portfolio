const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // extending default tailwind classes with custom
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        teal: colors.teal,
        fuchsia: colors.fuchsia,
        sky: colors.sky,
      },
      animation: {
        'loading-0': 'loading 1.4s ease-in-out infinite',
        'loading-1': 'loading 1.4s ease-in-out .2s infinite',
        'loading-2': 'loading 1.4s ease-in-out .4s infinite',
      },

      keyframes: {
        loading: {
          '0%': {
            opacity: '.2',
          },
          '20%': {
            opacity: '1',
          },
          to: {
            opacity: '.2',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
