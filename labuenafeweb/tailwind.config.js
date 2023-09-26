/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue: "#001A80",
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
    }
  },
  plugins: [],
}
