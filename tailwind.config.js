/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      // container: {
      //   center: true,
      // },
    },
  },
  plugins: [],
};
