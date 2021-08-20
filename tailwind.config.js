const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // extending default tailwind classes with custom
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        amber: colors.amber,
        orange: colors.orange,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        sky: colors.sky,
      },
      animation: {
        'loading-0': 'loading 1.4s ease-in-out infinite',
        'loading-1': 'loading 1.4s ease-in-out .2s infinite',
        'loading-2': 'loading 1.4s ease-in-out .4s infinite',
        'background-spin': 'halfSpin 10s ease-in-out infinite',
      },
      scale: {
        200: '2',
        300: '3',
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
        halfSpin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(150deg)',
          },
          to: {
            transform: 'rotate(0deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/forms'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.rounded-tl-xl': {
          'border-radius-top-left': '1rem',
        },
        '.rounded-tr-xl': {
          'border-radius-top-right': '1rem',
        },
        '.rounded-bl-xl': {
          'border-radius-bottom-left': '1rem',
        },
        '.rounded-br-xl': {
          'border-radius-bottom-right': '1rem',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
