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
      },
      colors: {
        "dark-gray": "#191919",
        "med-gray": "#515151",
        "light-gray": "#cccccc",
        "blue-cement": "#0072be",
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
