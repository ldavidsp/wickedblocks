const colors = require('tailwindcss/colors')
const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);

const extendedColors = defaultColors;

module.exports = {
purge: {
		mode: 'layers',
		content: ['./dist/**/*.html'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
       threescreen: '75vh',
      halfscreen: '50vh',
      },
      colors: {
         transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      coolGray:colors.coolGray,
      blueGray: colors.blueGray,
      red: colors.red,
      orange:colors.orange,
      yellow: colors.amber,
      lime:colors.lime,
      green: colors.emerald,
      emerald: colors.emerald,
      teal:colors.teal,
      cyan: colors.cyan,
      lightBlue:colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violiet:colors.violet,
      purple: colors.violet,
      pink: colors.pink,
      fuchsia:colors.fuchsia,
      rose:colors.rose,
        blue: {
        1000: '#001141',
        1100: '#000018',
        1200: '#030C34',
        1300: '#000012',
        1400:'#01071B',
        },
        purple: {
        1000: '#202746',

        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
