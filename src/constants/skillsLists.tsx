const BASE_LIST = [
  { row1: ['HTML', 'React.js', 'Async JS', 'A11y'] },
  { row2: ['JavaScript', 'tailwindcss', 'REST API', 'i18n'] },
  { row3: ['CSS', 'Next.js', 'Microservices', 'Zod'] },
  { row4: ['TypeScript', 'Node.js', 'MongoDB', 'Unit tests'] },
] as const;

export const SKILLS_LISTS = [
  ...BASE_LIST,
  {
    mobileRow: [
      BASE_LIST[0].row1[3],
      BASE_LIST[1].row2[3],
      BASE_LIST[2].row3[3],
      BASE_LIST[3].row4[3],
    ],
  },
] as const;
