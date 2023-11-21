import type { Config } from "tailwindcss";
const { createThemes } = require("tw-colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    createThemes({
      light: {
        primary: "#ffffff",
        secondary: "red",

        text: "#503556",
      },

      dark: {
      primary: "#22292f",
      secondary: "tomato",

      text: "#ffffff"
      }
    }),
  ],
};
export default config;
