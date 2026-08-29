/** @type {import('tailwindcss').Config} */
// Палитра и шрифты бренда Байкал Таргет — правится дизайнером здесь и в globals.css
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#192a42",
        "navy-2": "#223c61",
        "navy-3": "#284368",
        blue: "#2077ff",
        "blue-2": "#5899ff",
        "blue-pale": "#e9f2ff",
        orange: "#f8693c",
        "orange-2": "#ff5a26",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
