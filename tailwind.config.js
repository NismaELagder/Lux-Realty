/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Barlow: "Barlow",
        Gilda: "'Gilda Display', serif",
      },
      letterSpacing: {
        widest: ".5em",
      },
      backgroundImage: {
        greyGradient:
          "linear-gradient(90deg ,#fff, #313953)",
      },
      backgroundColor: {
        darkBlue: "#1C2745",
      },
    },
  },

  plugins: [],
};
