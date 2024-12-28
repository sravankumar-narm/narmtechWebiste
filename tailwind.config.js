/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        dark: "#111827",
        light: "#f9fafb",
        creamWhite: "#f6f0ff",
        primary: "#0F5376",
        secondary: "#0F5376",
        danger: "#FC4E2B",
        lightBlue: "#d9f2ff",
        darkBlue: "#6c6cff",
        yellow: "#fff500",
        gray: "#D9D9D9",
        circle: "#E3E3E380",
        garySecondary: "#444444",
        mainBlue: "#0B3A55",
        green: "#E0FFE8",
        pink: "#FCE7E7",
        orange: "#FFCA77",
        lightBlue: "#DFFDF8",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-stroke"),
    require("@designbycode/tailwindcss-text-shadow" ),
  
    ({
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowBlur: "3px",
        shadowOffsetX: "2px",
        shadowOffsetY: "2px",
    })
  ],
};
