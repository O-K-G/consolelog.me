import { getRequestConfig } from 'next-intl/server';
import { routing } from '@i18n/routing';
import { i18nFilenames } from '@constants/i18nFilenames';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'he')) {
    locale = routing.defaultLocale;
  }

  const jsonFiles = await Promise.all(
    i18nFilenames.map(
      async (str) =>
        (
          await import(`../../messages/${locale}/${str}.json`)
        ).default
    )
  );

  const messages = jsonFiles.reduce((prev, curr) => {
    Object.assign(prev, curr);
    return prev;
  }, {});

  return {
    locale,
    messages,
  };
});
