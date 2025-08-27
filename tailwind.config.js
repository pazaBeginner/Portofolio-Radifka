/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/js/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#1e293b",
        secondary: "#64748b",
      },
      fontFamily: {
        inter: ["Inter", "Quattrocento Sans", "sans-serif"],
      },
      screens: {
        mobileMini: "315px",
        tablet: "500px",
        pc: "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
