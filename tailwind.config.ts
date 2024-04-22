import type { Config } from "tailwindcss";

const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Colors Add-On
      colors: {
        meadow: {
          300: "#749C56",
          400: "#54713F",
        },
        cream: "#D4D5A0",
        cyan: {
          300: "#74CCF4",
          400: "#1484C4",
          500: "#0C5178",
        },
      },
      // Drop Shadow Add-On 
      textShadow: {
        none: 'none !important',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 4px 10px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },

      // Marquee Add-On
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    
    // text-shadow plugin
    plugin(function (props: { matchUtilities: any, theme: any }) {
      const {matchUtilities, theme} = props
      matchUtilities(
        {
          'text-shadow': (value: any) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
