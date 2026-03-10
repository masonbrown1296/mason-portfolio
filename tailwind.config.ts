import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0D0C0B",
        "bg-dark-2": "#161513",
        "bg-light": "#F0EAE2",
        "bg-light-2": "#FFFFFF",
        "text-primary": "#F0EBE5",
        "text-muted": "#7A7470",
        "text-black": "#1A1917",
        "border-dark": "#252220",
        "border-light": "#E0DAD4",
        coral: "#F62624",
        teal: "#73FDFC",
        lime: "#2BFE78",
        gold: "#FAD334",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
