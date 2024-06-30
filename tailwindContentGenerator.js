const fs = require('node:fs');
const about = require('../consolelog.me/src/i18n/en/about.json');

/** Both 'tailwindContentGenerator.js' and 'contentClassNames.tsx' are ignored by ESLint,
 * at .eslintignore.
 *
 * 'contentClassNames.tsx' is ignored, as it is auto-generated.
 *
 * The aim of this file is to pre-generate Tailwind content-[] classes at a pre-build stage.
 * To generate them mid-development, add an entry below and run 'node tailwindContentGenerator'.
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
