"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";

type Props = {
  locale: Locale;
  labels: { aria: string; ru: string; en: string };
};

function swapLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/");
  if (parts.length > 1 && (parts[1] === "ru" || parts[1] === "en")) {
    parts[1] = next;
    return parts.join("/") || `/${next}`;
  }
  return `/${next}${pathname === "/" ? "" : pathname}`;
}

export default function LanguageSwitcher({ locale, labels }: Props) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div className="lang-switch" role="group" aria-label={labels.aria}>
      {locales.map((code) => {
        const active = code === locale;
        const href = swapLocale(pathname, code);
        return (
          <Link
            key={code}
            href={href}
            className={active ? "active" : undefined}
            aria-current={active ? "true" : undefined}
            hrefLang={code}
          >
            {labels[code]}
          </Link>
        );
      })}
    </div>
  );
}
