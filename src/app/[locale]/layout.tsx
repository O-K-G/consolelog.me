import type { Metadata, Viewport } from 'next';
import '@locale/globals.css';
import localFont from 'next/font/local';
import { CACHE_VERSION } from '@root/tailwind.config';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';

const bebasNeue = localFont({
  src: '../../../public/fonts/Bebas_Neue/BebasNeue-Regular.ttf',
  variable: '--font-bebas-neue',
});

const montserrat = localFont({
  src: '../../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
  variable: '--font-montserrat',
});

/** https://www.fontspace.com/just-in-the-firestorm-font-f31017 */
const justInTheFirestormRegular = localFont({
  src: '../../../public/fonts/JustInTheFirestormRegular-z291.ttf',
  variable: '--font-just-in-the-firestorm',
});

/** https://www.fontspace.com/stardate-81316-font-f28430  */
const starDate81316 = localFont({
  src: '../../../public/fonts/Stardate81316-aolE.ttf',
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
    icon: `/images/icon.png?cacheVersion=${CACHE_VERSION}`,
    shortcut: `/images/shortcut-icon?cacheVersion=${CACHE_VERSION}`,
    apple: `/images/apple-icon.png?cacheVersion=${CACHE_VERSION}`,
    other: [
      {
        rel: 'mask-icon',
        url: `/images/safari-pinned-tab.svg?cacheVersion=${CACHE_VERSION}`,
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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const className = `${justInTheFirestormRegular.variable} ${starDate81316.variable} ${bebasNeue.variable} ${montserrat.variable}`;
  const messages = await getMessages();
  const selectedLocale = locale || 'en';
  const dir =
    DIRECTION_BY_LANGUAGE[locale as keyof typeof DIRECTION_BY_LANGUAGE] ||
    'ltr';

  return (
    <html dir={dir} lang={selectedLocale}>
      <NextIntlClientProvider messages={messages}>
        <body className={className}>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
