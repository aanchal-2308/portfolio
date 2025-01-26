import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        gray: {
          "900": "#1a1a1a",
          "600": "#666666",
        },
      },
      borderColor: {
        border: "hsl(var(--border))",
      },
      // backgroundImage: {
      // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      // "gradient-conic":
      //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      backgroundImage: {
        "noise-pattern": "url('/background.png')",
      },
      animation: {
        "subtle-move": "subtleMove 80s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        subtleMove: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      // },
    },
  },
  plugins: [],
};
export default config;
