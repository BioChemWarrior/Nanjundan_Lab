import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        lab: {
          700: "#1c2538",
          800: "#111827",
          900: "#0a0f1c",
          950: "#030712",
        },
        /** UniSQ institutional amber/gold — matches partner logo crest. */
        unisq: {
          50: "#fff8eb",
          100: "#ffefcf",
          200: "#ffe0a3",
          300: "#ffcc6a",
          400: "#ffc052",
          500: "#ffb84d",
          600: "#e6982a",
          700: "#bf7420",
          800: "#995c1e",
          900: "#7d4c1b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
