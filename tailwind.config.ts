import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef4fc",
          100: "#d7e6f8",
          200: "#b3cdf1",
          300: "#82abe6",
          400: "#4f83d6",
          500: "#2f61c0",
          600: "#2148a0",
          700: "#1c3a80",
          800: "#152e63",
          900: "#0f2149",
          950: "#0a1730",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 1px 8px 0 rgb(15 33 73 / 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
