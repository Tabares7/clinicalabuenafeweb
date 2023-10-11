/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue: "#0062FF",
        lightblue: "#00CDFF",
        yellow: "#FFE800",
        yellow100: "#FFDA73"
      },
      fontWeight:{
        'poppins-200': '200',
        'poppins-400': '400',
        'poppins-500': '500',
        'poppins-600': '600',
        'poppins-800': '800',
      },
      animation: {
        'moveUpDown': 'moveUpDown 1s infinite',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    
  },
  darkMode: "class",
  plugins: [nextui(), require('@tailwindcss/forms')],
}
