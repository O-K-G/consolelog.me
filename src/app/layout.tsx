import type { Metadata, Viewport } from 'next';

import './globals.css';
import localFont from 'next/font/local';

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
  const className = `${justInTheFirestormRegular.variable} ${starDate81316.variable}`;

  return (
    <html lang='en'>
      <body className={className}>{children}</body>
    </html>
  );
}
