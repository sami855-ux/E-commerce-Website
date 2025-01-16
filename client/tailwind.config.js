/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Gluten: ["Gluten", "sans-serif"],
      },

      colors: {
        primary: "#fff",
        lightGreen: "#22c55e",
        brown: "#654321",
      },
    },
  },
  plugins: [],
}
