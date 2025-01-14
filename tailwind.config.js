/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
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
