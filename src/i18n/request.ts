import { i18nFilenames } from "@constants/i18nFilenames";
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

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
