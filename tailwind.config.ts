import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#16181D",
        muted: "#5F6368",
        canvas: "#FAFAF8",
        line: "#E7E7E7",
        accent: "#2563EB",
        navy: "#101828"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 24, 40, 0.08)",
        card: "0 1px 2px rgba(16, 24, 40, 0.03), 0 8px 30px rgba(16, 24, 40, 0.04)"
      }
    }
  },
  plugins: []
};
export default config;
