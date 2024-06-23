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
        test: 'test 1s linear infinite',
        'flash-loader-text': 'flash-loader-text 1s linear infinite',
        'dialog-backdrop-fade-in':
          'dialog-backdrop-fade-in 0.2s linear forwards',
        'dialog-backdrop-fade-out':
          'dialog-backdrop-fade-out 0.2s linear forwards',
        'dialog-fade-in': 'dialog-fade-in 0.2s linear forwards',
        'dialog-fade-out': 'dialog-fade-out 0.2s linear forwards',
      },
      keyframes: {
        test: {
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
        'flash-loader-text': {
          '50%': {
            opacity: '0',
          },
        },
        'dialog-backdrop-fade-in': {
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
        'dialog-backdrop-fade-out': {
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
        'dialog-fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '100',
          },
        },
        'dialog-fade-out': {
          '0%': {
            opacity: '100',
          },
          '100%': {
            opacity: '0',
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
