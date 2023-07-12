/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    color: {
      primary: "--var(--primary-color)",
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        unbounded: ["Unbounded", "cursive"],

        archivo: ["Archivo", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        "dark-gray": "#191919",
        "med-gray": "#515151",
        "light-gray": "#cccccc",
        "blue-cement": "#0072be",

        "theme-green": "#5AC3B0",
        "theme-red": "#DE5935",
        "theme-yellow": "#F7CD46",
      },
      backgroundImage: {
        titleImg: "url('/src/assets/title-bg.jpg')",
        bgImg: "url('/src/assets/bg_bggenerator_com.jpg')",
        toolTable: "url('/src/assets/tools-table.jpg')",
      },
    },
  },
  plugins: [],
};
