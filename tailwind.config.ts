import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2B2C30", // dark, taken from the logo file
          slate: "#2B2C30", // same dark, kept as a separate token
          taupe: "#7A5E50",
          terracotta: "#BB734D",
          orange: "#F47036", // brand orange, taken from the logo file
          teal: "#4FA5A4",
          cyan: "#23FBF8",
          light: "#F4F5F4", // off-white light background
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
