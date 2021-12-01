const color = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans'],
      mono: ['IBM Plex Mono'],
    },
    colors: {
      ...color,
      'outer-space': {
        DEFAULT: '#2E343B',
        50: '#838F9E',
        100: '#778595',
        200: '#647180',
        300: '#525C69',
        400: '#404852',
        500: '#2E343B',
        600: '#15181B',
        700: '#000000',
        800: '#000000',
        900: '#000000',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
