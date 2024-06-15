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
      animation: {
        'fade-in': 'fade-in 1s linear forwards',
        'fade-out': 'fade-out 1s linear forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            display: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            opacity: '0',
            height: '100svh',
            width: '100svw',
            backgroundColor: 'transparent',
          },
          '100%': {
            display: 'block',
            position: 'fixed',
            top: '0',
            left: '0',
            opacity: '100',
            height: '100svh',
            width: '100svw',
            backgroundColor: '#000000cc',
          },
        },
        'fade-out': {
          '0%': {
            display: 'block',
            position: 'fixed',
            top: '0',
            left: '0',
            opacity: '100',
            height: '100svh',
            width: '100svw',
            backgroundColor: '#000000cc',
          },
          '100%': {
            display: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            opacity: '0',
            height: '100svh',
            width: '100svw',
            backgroundColor: 'transparent',
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
        'about-background': `url('/about-background.webp?cacheVersion=${CACHE_VERSION}')`,
        'contact-background': `url('/contact-background.webp?cacheVersion=${CACHE_VERSION}')`,
        'skills-background': `url('/skills-background.webp?cacheVersion=${CACHE_VERSION}')`,
        'projects-background': `url('/projects-background.webp?cacheVersion=${CACHE_VERSION}')`,
        'experience-background': `url('/experience-background.webp?cacheVersion=${CACHE_VERSION}')`,
      },
    },
  },
  plugins: [],
};
export default config;
