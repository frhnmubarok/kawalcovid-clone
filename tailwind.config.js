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
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
