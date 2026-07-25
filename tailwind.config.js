/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00",
      },
      backgroundColor: {
        dark: "#111111",
        "dark-card": "#1A1A1A",
      },
      boxShadow: {  
        'inner-custom': 'inset 1px 1px 20px',  
      },
    },
  },
  plugins: [],
}