import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/app/components/language-switcher";
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
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function BalansPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const base = localePath(locale, "/balans");

  const modules = [
    { href: `${base}/assessment`, index: "01", title: t.balans.m1Title, text: t.balans.m1Text, action: t.balans.m1Action, accent: "accent-blue" },
    { href: `${base}/control`, index: "02", title: t.balans.m2Title, text: t.balans.m2Text, action: t.balans.m2Action, accent: "accent-cyan" },
    { href: `${base}/progress`, index: "03", title: t.balans.m3Title, text: t.balans.m3Text, action: t.balans.m3Action, accent: "accent-mint" },
    { href: `${base}/learn`, index: "04", title: t.balans.m4Title, text: t.balans.m4Text, action: t.balans.m4Action, accent: "accent-cyan" },
    { href: `${base}/train`, index: "05", title: t.balans.m5Title, text: t.balans.m5Text, action: t.balans.m5Action, accent: "accent-mint" },
    { href: `${base}/clinical`, index: "06", title: t.balans.m6Title, text: t.balans.m6Text, action: t.balans.m6Action, accent: "accent-navy" },
  ];

  return (
    <div className="platform-page">
      <header className="site-header platform-header">
        <a className="brand" href={localePath(locale, "/")} aria-label={t.balans.homeAria}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>BALANS</span>
        </a>
        <div className="header-tools">
          <nav aria-label={t.balans.navAria}>
            <a href={`${base}/assessment`}>{t.balans.navAssessment}</a>
            <a href={`${base}/control`}>{t.balans.navControl}</a>
            <a href={`${base}/progress`}>{t.balans.navProgress}</a>
            <a href={`${base}/learn`}>{t.balans.navLearn}</a>
            <a href={`${base}/train`}>{t.balans.navTrain}</a>
            <a href={`${base}/clinical`}>{t.balans.navClinical}</a>
          </nav>
          <LanguageSwitcher locale={locale} labels={t.lang} />
        </div>
      </header>
      <main className="platform-main">
        <section className="platform-hero">
          <div>
            <p className="eyebrow">{t.balans.eyebrow}</p>
            <h1>
              <span className="wordplay">
                {locale === "ru" ? (
                  <>
                    с<span>BALANS</span>
                    <wbr />
                    ированное
                  </>
                ) : (
                  <>
                    <span>BALANS</span>ed
                  </>
                )}
              </span>
              {t.balans.titleAfter}
            </h1>
            <p className="hero-lead">{t.balans.lead}</p>
          </div>
          <div className="route-note" aria-label={t.balans.routeAria}>
            <span>{t.balans.route1}</span>
            <span>{t.balans.route2}</span>
            <span>{t.balans.route3}</span>
            <span>{t.balans.route4}</span>
            <span>{t.balans.route5}</span>
            <span>{t.balans.route6}</span>
          </div>
        </section>
        <section className="platform-modules" aria-labelledby="modules-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow">{t.balans.modulesEyebrow}</p>
            <h2 id="modules-title">{t.balans.modulesTitle}</h2>
          </div>
          <div className="module-grid">
            {modules.map((item) => (
              <a key={item.href} className={`module-card ${item.accent}`} href={item.href}>
                <span className="module-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <b>{item.action}</b>
              </a>
            ))}
          </div>
        </section>
        <section className="migration-note">
          <div>
            <p className="eyebrow">{t.balans.howEyebrow}</p>
            <h2>{t.balans.howTitle}</h2>
          </div>
          <p>{t.balans.howText}</p>
        </section>
      </main>
      <footer>
        <a className="brand footer-brand" href={localePath(locale, "/")}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>{t.balans.footerBrand}</span>
        </a>
        <p>{t.balans.footerDisclaimer}</p>
        <p>{t.footer.copyright}</p>
      </footer>
    </div>
  );
}
