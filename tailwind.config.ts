import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        bg0: "var(--bg0)",
        card: "var(--card)",
        card2: "var(--card2)",
        brand: {
          400: "#5b8def",
          500: "#2f6fed",
          600: "#2158e0",
          700: "#1a46b8",
        },
        muted: "var(--muted)",
        low: "var(--low)",
      },
    },
  },
  plugins: [],
};

export default config;
