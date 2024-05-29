import type { Metadata, Viewport } from 'next';

import './globals.css';
import localFont from 'next/font/local';

/** https://www.fontspace.com/just-in-the-firestorm-font-f31017 */
const justInTheFirestormRegular = localFont({
  src: '../../public/fonts/JustInTheFirestormRegular-z291.ttf',
  variable: '--font-just-in-the-firestorm',
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
  const className = `${justInTheFirestormRegular.variable}`;

  return (
    <html lang='en'>
      <body className={className}>{children}</body>
    </html>
  );
}
