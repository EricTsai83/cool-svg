import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%,  100%": {
            transform: "rotate(0deg)",
          },
          "20%": {
            transform: "rotate(-25deg)",
          },
          "40%": {
            transform: "rotate(10deg)",
          },
          "60%": {
            transform: "rotate(-25deg)",
          },
          "80%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        wave: "wave 560ms ease-in-out",
      },
      transformOrigin: {
        custom: "130px 106px",
      },
    },
  },
  plugins: [],
} satisfies Config;
