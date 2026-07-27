import type { Locale } from "@/i18n/config";
import de from "./de";
import en from "./en";
import fr from "./fr";
import it from "./it";
import type { Dictionary } from "./de";

export type { Dictionary, FeatureItem, ProcessStep, ImageCardCopy, ProductCopy } from "./de";

export const dictionaries: Record<Locale, Dictionary> = {
  de,
  en,
  fr,
  it,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
