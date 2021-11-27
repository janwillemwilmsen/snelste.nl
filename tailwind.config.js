/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = require('tailwindcss/colors')

module.exports = {
  theme: { 
    colors: {
    transparent: "transparent",
    current: "currentColor",
    black: colors.black,
    white: colors.white,
    // gray: colors.coolGray,
    red: colors.red,
    yellow: colors.amber,
    blue: colors.blue,
    gray: {
      50: "#f2f2f3",
      100: "#e4e6e7",
      200: "#caccce",
      300: "#afb3b6",
      400: "#959a9d",
      500: "#7a8185",
      600: "#62676a",
      700: "#494d50",
      800: "#313335",
      900: "#181a1b"
    },
    woodsmoke: {
      DEFAULT: '#151518',
      '50': '#8A919D',
      '100': '#888E9B',
      '200': '#7C8492',
      '300': '#777E8D',
      '400': '#666D7A',
      '500': '#3F434B',
      '600': '#31343A',
      '700': '#272A2F',
      '800': '#1A1B1F',
      '900': '#131416'
    },
    
  
  }

},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}



