/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FE7743",
        secondary: "#EFEEEA",
        tertiary: "#273F4F",
        default: "#1D2B53",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
        outfit: ["Outfit"]

      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

