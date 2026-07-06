import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    keyframes: {
      float: {
        "0%, 100%": { transform: "translate(0, 0) scale(1)" },
        "33%": { transform: "translate(30px, -40px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
      },
    },
    animation: {
      float: "float 12s ease-in-out infinite",
    },
    extend: {
      colors: {
        primary: "#1193d4",
        secondary: "#16a34a",
        "background-light": "#f6f7f8",
        "background-dark": "#101c22",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
