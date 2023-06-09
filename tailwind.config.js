/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: "490px",
      sm: "620px",
      md: "768px",
      lg: { max: "1280px" },
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
