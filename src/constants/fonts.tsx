import localFont from 'next/font/local';

/** https://www.fontspace.com/just-in-the-firestorm-font-f31017 */
export const JUST_IN_THE_FIRESTORM_REGULAR_FONT = localFont({
  src: [
    {
      path: '../../public/fonts/justInTheFirestormRegular-z291.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-just-in-the-firestorm',
});
