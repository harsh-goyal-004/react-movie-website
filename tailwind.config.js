/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" }, // Define a screen with max-width 639px
      },
    },
  },
  plugins: [],
};
