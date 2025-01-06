/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Agrega todos los archivos en src con extensiones React
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // Habilitar modo oscuro con la clase "dark"
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
