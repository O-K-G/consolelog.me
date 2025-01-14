import type { Config } from "tailwindcss";

export const CACHE_VERSION = 1;

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        "purple-glow": "0px 0px 0.125rem #B377FF",
        "white-glow-sm": "0px 0px 0.313rem #FFFFFF",
        "purple-glow-sm": "0px 0px 0.313rem #B377FF",
        "border-purple-glow": "0px 0px 0.09rem #B377FF",
      },
      rotate: { 270: "270deg" },
      animation: {
        "flash-loader-text": "flash-loader-text 1s linear infinite",
        "expand-button": "expand-button 1s linear forwards",
        "collapse-button": "collapse-button 1s linear forwards",
        "scroll-icon": "scroll-icon 2s linear 3 alternate",
      },
      keyframes: {
        "scroll-icon": {
          "0%, 100%": { top: "0.125rem" },
          "50%": { top: "var(--scroll-icon-top)" },
        },
        "expand-button": {
          "0%": {
            borderTop: "1px solid transparent",
            borderBottom: "1px solid transparent",
            height: "100%",
          },
          "50%": {
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            height: "0%",
          },
          "100%": {
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            height: "100%",
          },
        },
        "collapse-button": {
          "0%": {
            borderTop: "1px solid transparent",
            borderBottom: "1px solid transparent",
            height: "100%",
          },
          "50%": {
            borderTop: "1px solid white",
            borderBottom: "1px solid white",
            height: "0%",
          },
          "100%": {
            borderTop: "1px solid transparent",
            borderBottom: "1px solid transparent",
            height: "100%",
          },
        },
        "flash-loader-text": {
          "50%": {
            opacity: "0",
          },
        },
      },
      colors: {
        "title-purple": "#ceb7ff",
        "title-purple-dark": "#75629f",
      },
      fontFamily: {
        "just-in-the-firestorm": ["var(--font-just-in-the-firestorm)"],
        "star-date-81316": ["var(--font-star-date-81316)"],
        "bebas-neue": ["var(--font-bebas-neue)"],
        montserrat: ["var(--font-montserrat)"],
        "stop-motion": ["var(--font-stop-motion)"],
        "karantina-regular": ["var(--font-karantina-regular)"],
        "varela-round-regular": ["var(--font-varela-round-regular)"],
        handjet: ["var(--font-handjet)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-skills":
          "linear-gradient(90deg, white 25%, #fde071 37.5%, #ef9671, #996a6e 62.5%, white 75%)",
        "contact-sm": `url('/images/contact-sm.webp?cacheVersion=${CACHE_VERSION}')`,
        "contact-md": `url('/images/contact-md.webp?cacheVersion=${CACHE_VERSION}')`,
        "contact-lg": `url('/images/contact-lg.webp?cacheVersion=${CACHE_VERSION}')`,
        "contact-xl": `url('/images/contact-xl.webp?cacheVersion=${CACHE_VERSION}')`,
        "contact-2xl": `url('/images/contact-2xl.webp?cacheVersion=${CACHE_VERSION}')`,
      },
    },
  },
  plugins: [],
} satisfies Config;
