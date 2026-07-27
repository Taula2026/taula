export const locales = ["de", "en", "fr", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export const ROUTE_SEGMENTS = {
  home: "",
  about: "about",
  products: "products",
  supplyChain: "supply-chain",
  contact: "contact",
  imprint: "imprint",
} as const;

export type RouteKey = keyof typeof ROUTE_SEGMENTS;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an absolute path for a given locale + route key, e.g. path("fr", "products") -> "/fr/products" */
export function path(locale: Locale, route: RouteKey): string {
  const segment = ROUTE_SEGMENTS[route];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

/** Builds the hreflang alternates map (including x-default) for a given route. */
export function buildLanguageAlternates(route: RouteKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = path(locale, route);
  }
  languages["x-default"] = path(defaultLocale, route);
  return languages;
}
