const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'montserrat-alternates' : ['Montserrat Alternates']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({addUtilities}) {
      const utilities = {
        ".bg-pasaredu" : {
          "background-image" : "url(/bg-home.png)",
          "background-size" : "100%"
        },
        ".bg-benefit" : {
          "background-image" : "url(/benefit.png)",
          "background-size" : "100%"
        }
      };
      addUtilities(utilities);
    })
  ],
}
