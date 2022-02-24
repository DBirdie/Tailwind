const { teal } = require('tailwindcss/colors');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        emerald: colors.emerald,
        cyan: colors.cyan,
        rose: colors.rose,
        pink: colors.pink,
        sky: colors.sky,
        blue: colors.blue,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        bgcolor: '#001127'
      },
      boxShadow: {
        violet: '0px 15px 25px -5px rgba(124, 58, 237, 0.6)',
        cyan: '0px 15px 25px -5px rgba(34, 211, 238, 0.3)',
        violetxl: '0px 0px 50px 10px rgba(124, 58, 237, 0.6)',
        cyanxl: '0px 0px 50px 10px rgba(34, 211, 238, 0.3)',
        indigoxl: '0px 0px 50px 10px rgba(79, 70, 229, 0.6)',
        bluexl: '0px 0px 50px 10px rgba(37, 99, 235, 0.5)',
        fuchsiaxl: '0px 0px 50px 10px rgba(192, 38, 211, 0.5)',
        skyxl: '0px 0px 50px 10px rgba(2, 132, 199, 0.5)'
      },
      dropShadow: {
        '3xl': '0 0 50px rgba(192, 38, 211, 0.5)',
        '3xlteal': '0 0 50px rgba(13, 148, 136, 0.7)'
      }
    },
  },
  plugins: [],
}
