import type { Config } from 'tailwindcss';

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
        'about-background-svg': "url('/about-background.svg')",
        'contact-background-svg': "url('/contact-background.svg')",
        'skills-background-svg': "url('/skills-background.svg')",
        'projects-background-svg': "url('/projects-background.svg')",
        'experience-background-svg': "url('/experience-background.svg')",
        'about-background-webp': "url('/about-background.webp')",
        'contact-background-webp': "url('/contact-background.webp')",
        'skills-background-webp': "url('/skills-background.webp')",
        'projects-background-webp': "url('/projects-background.webp')",
        'experience-background-webp': "url('/experience-background.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
