/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1199.99px" },
      md: { max: "991.99px" },
      sm: { max: "767.99px" },
      xs: { max: "479.99px" },
    },
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
