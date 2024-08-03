import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'he'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  const messages = {
    ...(await import(`./i18n/${locale}/about.json`)).default,
    ...(await import(`./i18n/${locale}/attributionText.json`)).default,
    ...(await import(`./i18n/${locale}/contact.json`)).default,
    ...(await import(`./i18n/${locale}/contactGoBackButtonText.json`)).default,
    ...(await import(`./i18n/${locale}/dialogComponentText.json`)).default,
    ...(await import(`./i18n/${locale}/errorDialog.json`)).default,
    ...(await import(`./i18n/${locale}/expandableButtonText.json`)).default,
    ...(await import(`./i18n/${locale}/experience.json`)).default,
    ...(await import(`./i18n/${locale}/inputComponentText.json`)).default,
    ...(await import(`./i18n/${locale}/projects.json`)).default,
    ...(await import(`./i18n/${locale}/scrollableSectionText.json`)).default,
    ...(await import(`./i18n/${locale}/scrollIconText.json`)).default,
    ...(await import(`./i18n/${locale}/scrollToTopText.json`)).default,
    ...(await import(`./i18n/${locale}/shenanigansText.json`)).default,
    ...(await import(`./i18n/${locale}/sideLinks.json`)).default,
    ...(await import(`./i18n/${locale}/skills.json`)).default,
    ...(await import(`./i18n/${locale}/changeLanguage.json`)).default,
  };

  return {
    messages,
  };
});
