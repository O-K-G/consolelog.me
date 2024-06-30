import fs from 'fs';
import about from './src/i18n/en/about.json';

/** Both 'tailwindContentGenerator.js' and 'contentClassNames.tsx' are ignored by ESLint,
 * at .eslintignore.
 *
 * 'contentClassNames.tsx' is ignored, as it is auto-generated.
 *
 * The aim of this file is to generate pre-build Tailwind content-[] classes.
 * To generate them during development, add a string entry below,
 *  and run 'node tailwindContentGenerator'.
 *
 * The output will be created at contentClassNames.tsx.
 *
 * This file must be run during development, before running the build.
 */

const PATH = './src/contentClassNames/contentClassNames.tsx';

const handleReplaceAll = (val) => val.replaceAll(' ', '_');

const data = {
  aboutGlowText: {
    mainTitle: `before:content-['${handleReplaceAll(about.mainTitle)}']`,
    subtitle: `before:content-['${handleReplaceAll(about.subtitle)}']`,
  },
};

fs.writeFile(
  PATH,
  `/** This file is ignored by ESLint, at .eslintignore, as it is auto-generated. */
  
  export const contentClassNames = 
  ${JSON.stringify(data)}
;
`,
  (err) => {
    if (err) {
      throw new Error(err);
    }
  }
);
