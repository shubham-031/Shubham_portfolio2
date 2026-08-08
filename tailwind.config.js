/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1a2f45",
        secondary: "#b8bcc8",
        tertiary: "#2a3f5f",
        "black-100": "#1f2f48",
        "black-200": "#152a3f",
        "white-100": "#f3f3f3",
        "navy-100": "#1a2f45",
        "navy-200": "#2a3f5f",
        "navy-300": "#3a5f7f",
        "navy-accent": "#2F578A",
      },
      boxShadow: {
        card: "0px 35px 120px -15px rgba(26, 47, 69, 0.5)",
        glow: "0 0 20px rgba(139, 92, 246, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
