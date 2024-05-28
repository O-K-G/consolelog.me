import type { Metadata, Viewport } from 'next';

import './globals.css';
import { JUST_IN_THE_FIRESTORM_REGULAR_FONT } from '@constants/fonts';

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
  const className = `${JUST_IN_THE_FIRESTORM_REGULAR_FONT.variable}`;

  return (
    <html lang='en'>
      <body className={className}>{children}</body>
    </html>
  );
}
