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
      boxShadow: {
        tertiary: '#00bd95', // Sombra personalizada
      },
      animation: {
        blink: 'blink 1s infinite', // Define la animación con duración y repetición infinita
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: 'rgba(0, 128, 128, 0.6)' }, // Color inicial y final
          '50%': { backgroundColor: 'rgba(0, 128, 128, 0.5)' }, // Color intermedio (titileo)
        }
      }
    },
  },
  plugins: [],
};
