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
        cyan: '0px 15px 25px -5px rgba(34, 211, 238, 0.3)'
      }
    },
  },
  plugins: [],
}
