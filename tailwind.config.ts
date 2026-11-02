import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          DEFAULT: "var(--surface)",
          secondary: "var(--surface-secondary)",
          tertiary: "var(--surface-tertiary)",
          border: "var(--surface-border)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          subtle: "var(--accent-subtle)",
        },
        monochrome: {
          950: "#050505",
          900: "#0b0b0b",
          850: "#121212",
          800: "#1a1a1a",
          700: "#272727",
          600: "#3e3e3e",
          500: "#5a5a5a",
          400: "#808080",
          300: "#a9a9a9",
          200: "#d1d1d1",
          100: "#ebebeb",
          50: "#f7f7f7",
        },
      },
      fontFamily: {
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 0.72rem + 0.15vw, 0.8125rem)",
        "fluid-sm": "clamp(0.8125rem, 0.78rem + 0.25vw, 0.9375rem)",
        "fluid-base": "clamp(0.9375rem, 0.88rem + 0.35vw, 1.0625rem)",
        "fluid-lg": "clamp(1.125rem, 1.05rem + 0.5vw, 1.35rem)",
        "fluid-xl": "clamp(1.35rem, 1.2rem + 0.85vw, 1.75rem)",
        "fluid-2xl": "clamp(1.75rem, 1.5rem + 1.3vw, 2.5rem)",
        "fluid-3xl": "clamp(2.5rem, 2.1rem + 2.5vw, 4.2rem)",
        "fluid-hero": "clamp(3.2rem, 2.6rem + 5vw, 7rem)",
      },
      letterSpacing: {
        editorial: "-0.04em",
        tightest: "-0.06em",
        widestMono: "0.22em",
      },
      lineHeight: {
        editorial: "0.92",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
