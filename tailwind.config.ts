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
      rotate: { 270: '270deg' },
      animation: {
        'flash-loader-text': 'flash-loader-text 1s linear infinite',
        'left-to-right-bar': 'left-to-right-bar 1s linear infinite',
        'expand-button': 'expand-button 1s linear forwards',
        'collapse-button': 'collapse-button 1s linear forwards',
      },
      keyframes: {
        'expand-button': {
          '0%': {
            borderTop: '1px solid transparent',
            borderBottom: '1px solid transparent',
            height: '100%',
          },
          '50%': {
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            height: '0%',
          },
          '100%': {
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            height: '100%',
          },
        },
        'collapse-button': {
          '0%': {
            borderTop: '1px solid transparent',
            borderBottom: '1px solid transparent',
            height: '100%',
          },
          '50%': {
            borderTop: '1px solid white',
            borderBottom: '1px solid white',
            height: '0%',
          },
          '100%': {
            borderTop: '1px solid transparent',
            borderBottom: '1px solid transparent',
            height: '100%',
          },
        },
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
        'contact-sm': `url('/contact-sm.webp?cacheVersion=${CACHE_VERSION}')`,
        'contact-md': `url('/contact-md.webp?cacheVersion=${CACHE_VERSION}')`,
        'contact-lg': `url('/contact-lg.webp?cacheVersion=${CACHE_VERSION}')`,
        'contact-xl': `url('/contact-xl.webp?cacheVersion=${CACHE_VERSION}')`,
        'contact-2xl': `url('/contact-2xl.webp?cacheVersion=${CACHE_VERSION}')`,
      },
    },
  },
  plugins: [],
};
export default config;
