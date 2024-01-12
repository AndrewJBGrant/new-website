import type { Config } from "tailwindcss";
const { createThemes } = require("tw-colors");

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {

 colors: {
        "primary-color": "var(--light-color)",
        "secondary-color": "var(--dark-color)",
        'purple1': '#503556',
         'silver': '#ecebff',
      },




      keyframes: {
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'animatedgradient 4s ease infinite alternate',
      },

      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }

  },
  plugins: [

    plugin(({ matchUtilities, theme }: { matchUtilities: any, theme: any}) => {
      matchUtilities(
        {
          "animation-delay": (value: any) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),


    createThemes({
      light: {
        primary: "#503556",
       textsecondary: "#503556",

        text: "#22292f",
      },

      dark: {
      primary: "#503556",
      textsecondary: "#a876ad",

      text: "#ffffff"
      }
    }),
  ],
};
export default config;
