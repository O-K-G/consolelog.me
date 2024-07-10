import type { Config } from 'tailwindcss';

export const CACHE_VERSION = 1;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      rotate: { 270: '270deg', 360: '360deg' },
      animation: {
        'flash-loader-text': 'flash-loader-text 1s linear infinite',
        'left-to-right-bar': 'left-to-right-bar 1s linear infinite',
      },
      keyframes: {
        'flash-loader-text': {
          '50%': {
            opacity: '0',
          },
        },
        'left-to-right-bar': {
          '0%': {
            left: '0',
            opacity: '0%',
            backgroundColor: 'white',
          },
          '50%': {
            left: '50%',
            opacity: '100%',
            backgroundColor: 'pink',
          },
          '100%': {
            left: '100%',
            opacity: '0%',
            backgroundColor: 'white',
          },
        },
      },
      colors: {
        'title-purple': '#ceb7ff',
        'title-orange': 'orange',
        'title-red': 'red',
      },
      fontFamily: {
        'just-in-the-firestorm': ['var(--font-just-in-the-firestorm)'],
        'star-date-81316': ['var(--font-star-date-81316)'],
        'bebas-neue': ['var(--font-bebas-neue)'],
        montserrat: ['var(--font-montserrat)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
