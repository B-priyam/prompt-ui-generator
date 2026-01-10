// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d97706",
        "primary-light": "#fbbf24",
        "background-dark": "#050510",
        "surface-glass": "rgba(255, 255, 255, 0.03)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
      backgroundImage: {
        "glow-gradient":
          "radial-gradient(circle at center, rgba(217, 119, 6, 0.15) 0%, rgba(5, 5, 16, 0) 70%)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
