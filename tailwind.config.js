/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos dentro de la carpeta src
    "./public/index.html", // Archivo HTML
  ],
  theme: {
    extend: {
      colors: {
        primary: "#21272f",
        secondary: "#171C23",
        tertiary: "#00bd95",
        quaternary: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
