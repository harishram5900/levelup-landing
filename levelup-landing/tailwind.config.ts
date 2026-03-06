import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        levelup: {
          black: "#050508",
          "black-soft": "#0a0a0f",
          navy: "#0a0e14",
          "navy-mid": "#0f1419",
          "navy-light": "#151c24",
          gold: "#c9a227",
          "gold-light": "#e5c558",
          "gold-dark": "#9a7b1a",
          blue: "#3b82f6",
          "blue-soft": "#60a5fa",
          purple: "#8b5cf6",
          "purple-soft": "#a78bfa",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-dark": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(59, 130, 246, 0.08), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(139, 92, 246, 0.06), transparent), radial-gradient(ellipse 60% 40% at 0% 50%, rgba(201, 162, 39, 0.04), transparent)",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "glow-pulse-slow": "glow-pulse 6s ease-in-out infinite",
        "light-sweep": "light-sweep 8s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "orbit-reverse": "orbit 25s linear infinite reverse",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-24px) translateX(12px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.08)" },
        },
        "light-sweep": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(200%) skewX(-12deg)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backdropBlur: {
        xs: "2px",
        "2xl": "40px",
      },
      boxShadow: {
        "glow-gold": "0 0 40px rgba(201, 162, 39, 0.25), 0 0 80px rgba(201, 162, 39, 0.1)",
        "glow-gold-sm": "0 0 24px rgba(201, 162, 39, 0.2)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.2)",
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.2)",
        "inner-glow": "inset 0 0 60px rgba(201, 162, 39, 0.03)",
        "panel": "0 4px 24px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.06)",
        "panel-hover": "0 8px 40px rgba(0, 0, 0, 0.5), 0 0 1px rgba(255, 255, 255, 0.08), 0 0 60px rgba(201, 162, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
