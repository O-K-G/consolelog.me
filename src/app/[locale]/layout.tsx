import '@locale/globals.css';
import type { Metadata, Viewport } from 'next';
import { CACHE_VERSION } from '@root/tailwind.config';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { DIRECTION_BY_LANGUAGE } from '@constants/LocaleDirection';
import handleFontsByLocale from '@utils/handleFontsByLocale';

const { fontsByLocale } = handleFontsByLocale();

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
  const messages = await getMessages();
  const selectedLocale = locale || 'en';

  const { mainTitle, borderTitle, infoText, regularText } =
    fontsByLocale[selectedLocale as keyof typeof fontsByLocale];

  const dir =
    DIRECTION_BY_LANGUAGE[
      selectedLocale as keyof typeof DIRECTION_BY_LANGUAGE
    ] || 'ltr';

  return (
    <html dir={dir} lang={selectedLocale}>
      <NextIntlClientProvider messages={messages}>
        <body
          className={`${mainTitle} ${borderTitle} ${infoText} ${regularText}`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
