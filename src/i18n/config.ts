export const locales = ["vi", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "vi";

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const currentLocale = segments[1];

  if (currentLocale && hasLocale(currentLocale)) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}
