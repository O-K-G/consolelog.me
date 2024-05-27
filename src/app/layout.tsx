import type { Metadata, Viewport } from 'next';
// import { Inter } from "next/font/google";
import './globals.css';

// const inter = Inter({ subsets: ["latin"] });
// className={inter.className}

// TODO: Remove comments and set metadada.

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
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
