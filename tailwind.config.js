/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00",
        accent: "#E60026",
        dark: "#111111",
        "dark-card": "#1A1A1A",
        "dark-elevated": "#212121",
        muted: "#959595",
      },
      backgroundColor: {
        dark: "#111111",
        "dark-card": "#1A1A1A",
      },
      boxShadow: {
        "inner-custom": "inset 1px 1px 20px",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(1.25rem)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};
