import "@locale/globals.css";
import { Metadata, Viewport } from "next";
import { CACHE_VERSION } from "@root/postcss.config.mjs";
import handleFontsByLocale from "@utils/handleFontsByLocale";
import getDirByLocale from "@utils/getDirByLocale";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const { fontsByLocale } = handleFontsByLocale();

export const metadata: Metadata = {
  title: "console.log(me)",
  description:
    "This is my landing page to showcase some of my web development skills. ",
  applicationName: "consolelogme",
  keywords: [
    "console",
    "log",
    "HTML",
    "React.js",
    "Async JS",
    "A11y",
    "JavaScript",
    "tailwindcss",
    "REST API",
    "i18n",
    "CSS",
    "Next.js",
    "Microservices",
    "Zod",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Unit tests",
    "Web development",
  ],
  manifest: "/manifest.webmanifest",
  icons: {
    icon: `/images/icon.png?cacheVersion=${CACHE_VERSION}`,
    shortcut: `/images/shortcut-icon.png?cacheVersion=${CACHE_VERSION}`,
    apple: `/images/apple-icon.png?cacheVersion=${CACHE_VERSION}`,
    other: [
      {
        rel: "mask-icon",
        url: `/images/safari-pinned-tab.svg?cacheVersion=${CACHE_VERSION}`,
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  interactiveWidget: "resizes-content",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const selectedLocale = locale || "en";
  const dir = getDirByLocale({ locale: selectedLocale }) || "ltr";

  const { mainTitle, borderTitle, infoText, regularText, shenanigansText } =
    fontsByLocale[selectedLocale as keyof typeof fontsByLocale];

  return (
    <html dir={dir} lang={selectedLocale}>
      <NextIntlClientProvider>
        <body
          className={`has-[dialog[data-open=true]]:overflow-hidden has-[main_aside[data-open=true]]:overflow-hidden ${mainTitle} ${borderTitle} ${infoText} ${regularText} ${shenanigansText}`}
        >
          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
