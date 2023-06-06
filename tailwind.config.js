/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    colors:{
      'top':'#8be3e1',
      'shrine':'#d3f7ad',
      'green1':'#95bb76',
      'bottom':'#97935c',
      white: colors.white,
      gray:colors.gray,
      blue:colors.blue,
      black:colors.black,
      red:colors.red,
    }
  },
  plugins: [],
}
