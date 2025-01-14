import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = {
    ...(await import(`../../messages/${locale}/about.json`)).default,
    ...(await import(`../../messages/${locale}/attributionText.json`)).default,
    ...(await import(`../../messages/${locale}/contact.json`)).default,
    ...(await import(`../../messages/${locale}/contactGoBackButtonText.json`))
      .default,
    ...(await import(`../../messages/${locale}/dialogComponentText.json`))
      .default,
    ...(await import(`../../messages/${locale}/errorDialog.json`)).default,
    ...(await import(`../../messages/${locale}/expandableButtonText.json`))
      .default,
    ...(await import(`../../messages/${locale}/experience.json`)).default,
    ...(await import(`../../messages/${locale}/inputComponentText.json`))
      .default,
    ...(await import(`../../messages/${locale}/projects.json`)).default,
    ...(await import(`../../messages/${locale}/scrollableSectionText.json`))
      .default,
    ...(await import(`../../messages/${locale}/scrollIconText.json`)).default,
    ...(await import(`../../messages/${locale}/scrollToTopText.json`)).default,
    ...(await import(`../../messages/${locale}/shenanigansText.json`)).default,
    ...(await import(`../../messages/${locale}/sideLinks.json`)).default,
    ...(await import(`../../messages/${locale}/skills.json`)).default,
    ...(await import(`../../messages/${locale}/languageSelect.json`)).default,
    ...(await import(`../../messages/${locale}/planet.json`)).default,
    ...(await import(`../../messages/${locale}/error.json`)).default,
    ...(await import(`../../messages/${locale}/cv.json`)).default,
  };

  return {
    locale,
    messages,
  };
});
