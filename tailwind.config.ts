import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "48px",
      "4xl": "64px",
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "#325FFF",
        dark: "#0f1014",
        error: "#FA3636",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        full: "1000000px",
      },
      zIndex: {
        full: "1000000000",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
