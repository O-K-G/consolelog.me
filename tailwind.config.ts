import type { Config } from 'tailwindcss';

const CACHE_VERSION = 1;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
