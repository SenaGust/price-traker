import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

const DEFAULT_LOCALE = "en-US";
const SUPPORTED_LANGUAGES = ["en", "pt"];
const SUPPORTED_LOCALES = ["en-US", "pt-BR"];

const isSupportedLocale = (locale: string | undefined): locale is string => {
  if (!locale) {
    return false;
  }

  if (locale?.includes("-")) {
    return SUPPORTED_LOCALES.includes(locale);
  }

  return SUPPORTED_LANGUAGES.includes(locale);
};

export default getRequestConfig(async () => {
  const cookiesStore = await cookies();
  const headersStore = await headers();

  const languages = new Negotiator({
    headers: Object.fromEntries(headersStore.entries()),
  }).languages();

  const localeFromCookies = cookiesStore.get("locale")?.value;

  const allLanguages = [localeFromCookies, ...languages];

  const onlySupportedLanguages = allLanguages.filter(isSupportedLocale);

  const locale = match(
    onlySupportedLanguages,
    SUPPORTED_LOCALES,
    DEFAULT_LOCALE
  );

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
