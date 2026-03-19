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
        ocean: {
          abyss:   "#020c1b",
          deep:    "#031a36",
          mid:     "#0a3d6b",
          surface: "#0e6ba8",
          shallow: "#0496ff",
          foam:    "#56cfe1",
          mist:    "#a8dadc",
          sand:    "#f1faee",
          coral:   "#ff6b6b",
          kelp:    "#2ec4b6",
          biolum:  "#00f5d4",
          gold:    "#ffd166",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body:    ["var(--font-body)", "sans-serif"],
        mono:    ["var(--font-mono)", "monospace"],
      },
      animation: {
        "wave-slow":   "wave 8s ease-in-out infinite",
        "wave-medium": "wave 5s ease-in-out infinite reverse",
        "wave-fast":   "wave 3s ease-in-out infinite",
        "bubble-rise": "bubbleRise 6s ease-in infinite",
        "float":       "float 4s ease-in-out infinite",
        "shimmer":     "shimmer 2.5s linear infinite",
        "pulse-slow":  "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "swim":        "swim 8s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%":      { transform: "translateX(-25%)" },
        },
        bubbleRise: {
          "0%":   { transform: "translateY(100%) scale(0)", opacity: "0" },
          "10%":  { opacity: "1" },
          "90%":  { opacity: "0.3" },
          "100%": { transform: "translateY(-100vh) scale(1.5)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        swim: {
          "0%, 100%": { transform: "translateX(0) scaleX(1)" },
          "49%":      { transform: "translateX(60px) scaleX(1)" },
          "50%":      { transform: "translateX(60px) scaleX(-1)" },
          "99%":      { transform: "translateX(0) scaleX(-1)" },
        },
      },
      backgroundImage: {
        "ocean-gradient": "linear-gradient(180deg, #020c1b 0%, #031a36 30%, #0a3d6b 65%, #0e6ba8 100%)",
        "surface-gradient": "linear-gradient(180deg, #0e6ba8 0%, #56cfe1 100%)",
        "biolum-gradient": "radial-gradient(ellipse at center, #00f5d4 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;
