import type { LandingContent } from "./types";
import type { Locale } from "./types";

import zh from "./landing/zh.json";
import en from "./landing/en.json";

const contentByLocale: Record<Locale, LandingContent> = {
  zh: zh as LandingContent,
  en: en as LandingContent,
};

export function getLandingContent(locale: Locale): LandingContent {
  return contentByLocale[locale];
}
