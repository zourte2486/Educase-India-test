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
        "popx-white": "#FFFFFF",
        "popx-black": "#000000",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["18px", "28px"],
        xl: ["20px", "28px"],
        "2xl": ["24px", "32px"],
        "3xl": ["30px", "36px"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
      },
      screens: {
        mobile: "375px",
      },
    },
  },
  plugins: [],
};
