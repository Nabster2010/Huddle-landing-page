/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        Pink: "hsl(322, 100%, 66%)",
        VeryPaleCyan: "hsl(193, 100%, 96%)",
        VeryDarkCyan: "hsl(192, 100%, 9%)",
        GrayishBlue: "hsl(208, 11%, 55%)",
      },
      fontFamily: {
        heading: "Poppins, sans-serif",
        body: "Open Sans, sans-serif",
      },
      boxShadow: {
        card: "1px 1px 9px 0px rgba(0,0,0,0.1);",
      },
    },
  },

  plugins: [],
};
