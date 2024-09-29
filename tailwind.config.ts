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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "regal-blue": "#633ef0",
      },
      boxShadow: {
        elevateLow: " 0px 7px 10px 1px rgba(0,0,0,0.3)",
        elevate: " 0px 7px 10px 1px rgba(0,0,0,0.5)",
      },

    },
  },
  plugins: [],
};
export default config;
