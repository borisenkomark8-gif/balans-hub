import type { Locale } from "@/lib/i18n/config";

/** Live BALANS app (tools, calculators, materials). */
export const BALANS_APP_ORIGIN = "https://balans-gamma.vercel.app";

/** Hub locales that the app also supports (ru, en). Others fall back to ru. */
const APP_LOCALES = new Set(["ru", "en"]);

export function balansAppLocale(locale: string): "ru" | "en" {
  return APP_LOCALES.has(locale) ? (locale as "ru" | "en") : "ru";
}

export function balansAppHomeUrl(locale: Locale | string) {
  return `${BALANS_APP_ORIGIN}/${balansAppLocale(locale)}`;
}

/** Beginner intro path in the live app. */
export function balansAppStartUrl(locale: Locale | string) {
  return `${balansAppHomeUrl(locale)}/start`;
}

/** Legacy Hub /balans/[slug] bookmarks → app paths. */
const SLUG_TO_APP_PATH: Record<string, string> = {
  assessment: "/assessment",
  control: "/log",
  progress: "/progress",
  learn: "/learn",
  train: "/train",
  clinical: "/nutrition-training",
  "clinical-arrhythmias": "/nutrition-training",
  "clinical-asthma": "/nutrition-training/asthma",
  "clinical-children-adolescents": "/nutrition-training/children",
  "clinical-copd": "/nutrition-training/copd",
  "clinical-diabetes-type-2": "/nutrition-training/type2-diabetes",
  "clinical-hypertension": "/nutrition-training/hypertension",
  "clinical-ischemic-heart-disease": "/nutrition-training",
  "clinical-post-mi-stroke": "/nutrition-training/post-mi",
  "clinical-spine-joints-sarcopenia": "/nutrition-training",
  "nutrition-child-by-age": "/nutrition-training/children",
  "train-child-by-age": "/nutrition-training/children",
};

export function balansAppUrlForSlug(locale: string, slug: string) {
  const appLocale = balansAppLocale(locale);
  const path = SLUG_TO_APP_PATH[slug] ?? "";
  return `${BALANS_APP_ORIGIN}/${appLocale}${path}`;
}
