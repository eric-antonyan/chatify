import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        phone: {
          max: "600px"
        },
        tablet: {
          max: "1024px",
          min: "601px"
        },
        desktop: {
          min: "1025px"
        }
      }
    },
  },
  plugins: [nextui()],
}

