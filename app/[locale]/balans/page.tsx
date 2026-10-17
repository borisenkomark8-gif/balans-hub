import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/app/components/language-switcher";
import { balansAppStartUrl } from "@/lib/balans-app";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getMessages, localePath } from "@/lib/i18n/get-messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.balans.metaTitle,
    description: t.balans.metaDescription,
    alternates: {
      canonical: localePath(raw, "/balans"),
      languages: { ru: "/ru/balans", en: "/en/balans" },
    },
    openGraph: {
      url: localePath(raw, "/balans"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS" }],
    },
  };
}

export default async function BalansPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const appUrl = balansAppStartUrl(locale);

  return (
    <div className="balans-entry">
      <header className="balans-entry-header">
        <a className="balans-entry-brand" href={localePath(locale, "/")} aria-label={t.balans.homeAria}>
          <span className="balans-entry-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>BALANS</span>
        </a>
        <LanguageSwitcher locale={locale} labels={t.lang} />
      </header>

      <main className="balans-entry-main">
        <p className="balans-entry-eyebrow">{t.balans.eyebrow}</p>
        <h1 className="balans-entry-title">BALANS</h1>
        <p className="balans-entry-lead">{t.balans.lead}</p>
        <a className="balans-entry-cta" href={appUrl}>
          {t.balans.openApp}
        </a>
        <p className="balans-entry-note">{t.balans.openNote}</p>
        <a className="balans-entry-back" href={localePath(locale, "/")}>
          {t.balans.backHub}
        </a>
      </main>

      <footer className="balans-entry-footer">
        <p>{t.balans.footerDisclaimer}</p>
      </footer>
    </div>
  );
}
