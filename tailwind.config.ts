import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lexend)", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "sans-serif"]
      },
      colors: {
        // Obsidian Glass — dark theme tokens (kept the same names to minimize churn;
        // "ink" now means primary foreground text, not near-black)
        canvas: "#0B0C10",
        ink: "#F2F4F8",
        muted: "#C9CDD6",
        line: "rgba(255,255,255,.14)",
        accent: "#C6F32F",
        violet: "#8B7CF6",
        navy: "#8B7CF6",
        glass: "rgba(22,23,30,.66)"
      },
      maxWidth: {
        shell: "1560px",
        panel: "1150px"
      },
      boxShadow: {
        soft: "inset 0 1px 0 rgba(255,255,255,.12), 0 30px 70px rgba(0,0,0,.45)",
        card: "inset 0 1px 0 rgba(255,255,255,.12), 0 18px 40px rgba(0,0,0,.4)"
      }
    }
  },
  plugins: []
};
export default config;
