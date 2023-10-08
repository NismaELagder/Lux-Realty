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
    },
  },
  plugins: [],
};
