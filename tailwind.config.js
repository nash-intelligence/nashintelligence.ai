/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        nash: {
          background: "#131315",
          ink: "#0e0e10",
          surface: "#1b1b1d",
          panel: "#1f1f21",
          elevated: "#2a2a2b",
          line: "#45464d",
          text: "#e4e2e4",
          muted: "#c6c6cd",
          subtle: "#909097",
          primary: "#bec6e0",
          primaryFixed: "#dae2fd",
          secondary: "#7bd0ff",
          cyan: "#00a6e0",
          blue: "#0f172a",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-hanken)", "Hanken Grotesk", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Geist Mono", "monospace"],
      },
      maxWidth: {
        site: "1440px",
      },
      backgroundImage: {
        circuit: "radial-gradient(circle at 2px 2px, rgba(190, 198, 224, 0.07) 1px, transparent 0)",
        glow: "radial-gradient(circle at top right, rgba(123, 208, 255, 0.12), transparent 34rem), radial-gradient(circle at 12% 20%, rgba(190, 198, 224, 0.08), transparent 28rem)",
      },
      boxShadow: {
        nash: "0 0 56px rgba(123, 208, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        line: "inset 0 0 0 1px rgba(190, 198, 224, 0.1)",
      },
    },
  },
  plugins: [],
};
