/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "black": "#2f2f2f",
        "lightGray": "#efefef",
      },
      colors:{
        "white": "#ffffff"
      }
    },
  },

  plugins: [],
}