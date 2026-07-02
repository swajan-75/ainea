import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050b14",
        "dark-card": "rgba(255,255,255,0.04)",
        ink: "#e2e8f0",
        "ink-soft": "#94a3b8",
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        cyan: {
          400: "#38bdf8",
          500: "#06b6d4",
        },
        emerald: {
          400: "#34d399",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        page: "840px",
      },
    },
  },
  plugins: [],
};
export default config;
