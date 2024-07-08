import type { Metadata, Viewport } from 'next';

import '@root/src/app/globals.css';
import localFont from 'next/font/local';
import { Bebas_Neue, Montserrat } from 'next/font/google';
import { CACHE_VERSION } from '@root/tailwind.config';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-montserrat',
});

/** https://www.fontspace.com/just-in-the-firestorm-font-f31017 */
const justInTheFirestormRegular = localFont({
  src: '../../public/fonts/JustInTheFirestormRegular-z291.ttf',
  variable: '--font-just-in-the-firestorm',
});

/** https://www.fontspace.com/stardate-81316-font-f28430  */
const starDate81316 = localFont({
  src: '../../public/fonts/Stardate81316-aolE.ttf',
  variable: '--font-star-date-81316',
});

// TODO: Set metadada.

export const metadata: Metadata = {
  title: 'TBD',
  description: 'TBD',
  applicationName: 'consolelogme',
  keywords: ['TBD'],
  manifest: '/manifest.json',
  icons: {
    icon: `/icon.png?cacheVersion=${CACHE_VERSION}`,
    shortcut: `/shortcut-icon?cacheVersion=${CACHE_VERSION}`,
    apple: `/apple-icon.png?cacheVersion=${CACHE_VERSION}`,
    other: [
      {
        rel: 'mask-icon',
        url: `/safari-pinned-tab.svg?cacheVersion=${CACHE_VERSION}`,
        type: 'image/svg+xml',
        sizes: 'any',
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const className = `${justInTheFirestormRegular.variable} ${starDate81316.variable} ${bebasNeue.variable} ${montserrat.variable}`;

  return (
    <html lang='en'>
      <body className={className}>{children}</body>
    </html>
  );
}
