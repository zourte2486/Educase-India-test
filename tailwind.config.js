/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "popx-purple": "#6C25FF",
        "popx-dark": "#1D2226",
        "popx-gray": "#919191",
        "popx-light-gray": "#E5E5E5",
        "popx-pink": "#FF69B4",
        "popx-red": "#DD4A3D",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
