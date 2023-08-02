/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "6xl": "1200px",
        "screen-3xl": "1920px",
      },
      colors: {
        primary: "#005baa",
        second: "#b5b6b8",
        orange: "#f58a1e",
        "blue-second": "#0880e8",
      },
    },
  },
  plugins: [],
};
