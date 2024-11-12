import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A19",
        forestGreen: "#31511E",
        olive: "#859F3D",
        ivory: "#F6FCDF",
      },
    },
  },
  plugins: [],
} satisfies Config;
