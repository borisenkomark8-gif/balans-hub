import type { Locale } from "./config";
import { en } from "./messages/en";
import { ru, type Messages } from "./messages/ru";

const catalogs: Record<Locale, Messages> = { ru, en };

export function getMessages(locale: Locale): Messages {
  return catalogs[locale];
}

export function localePath(locale: Locale, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") return `/${locale}`;
  return `/${locale}${normalized}`;
}
