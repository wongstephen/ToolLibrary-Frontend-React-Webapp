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
      backgroundImage: {
        titleImg: "url('/src/assets/title-bg.jpg')",
        bgImg: "url('/src/assets/bg_bggenerator_com.jpg')",
      },
    },
  },
  plugins: [],
};
