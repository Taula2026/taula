import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#123B63",
        "navy-deep": "#0C2A47",
        leaf: "#1A7A3C",
        "leaf-dark": "#14602F",
        ice: "#5BA8D8",
        "ice-pale": "#EAF4FA",
        bone: "#F6F7F5",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1360px",
      },
    },
  },
  plugins: [],
};

export default config;
