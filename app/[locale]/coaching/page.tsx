import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "@/app/components/site-header";
import InquiryForm from "./inquiry-form";
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
    title: t.coaching.metaTitle,
    description: t.coaching.metaDescription,
    alternates: {
      canonical: localePath(raw, "/coaching"),
      languages: { ru: "/ru/coaching", en: "/en/coaching" },
    },
    openGraph: {
      url: localePath(raw, "/coaching"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function CoachingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);

  const directions = [
    { title: t.coaching.dir1Title, text: t.coaching.dir1Text },
    { title: t.coaching.dir2Title, text: t.coaching.dir2Text },
    { title: t.coaching.dir3Title, text: t.coaching.dir3Text },
    { title: t.coaching.dir4Title, text: t.coaching.dir4Text },
  ];

  return (
    <div className="platform-page">
      <SiteHeader locale={locale} t={t} active="coaching" />
      <main className="coaching-main">
        <section className="page-intro coaching-intro" aria-labelledby="coaching-title">
          <p className="eyebrow">{t.coaching.eyebrow}</p>
          <h1 id="coaching-title">{t.coaching.title}</h1>
          <p>{t.coaching.lead}</p>
        </section>

        <section className="coaching-directions" aria-labelledby="directions-title">
          <h2 id="directions-title">{t.coaching.directionsTitle}</h2>
          <ul>
            {directions.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="medical-note coaching-boundary">
          <strong>{t.coaching.boundaryStrong}</strong>
          {t.coaching.boundary}
        </aside>

        <section className="coaching-form-section" aria-labelledby="inquiry-title">
          <div>
            <p className="eyebrow">{t.coaching.formEyebrow}</p>
            <h2 id="inquiry-title">{t.coaching.formTitle}</h2>
            <p>{t.coaching.formLead}</p>
          </div>
          <InquiryForm locale={locale} t={t.coaching} />
        </section>

        <a className="back-link" href={localePath(locale, "/")}>
          {t.coaching.back}
        </a>
      </main>

      <footer>
        <a className="brand footer-brand" href={localePath(locale, "/")}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>BALANS</span>
        </a>
        <p>{t.footer.disclaimerShort}</p>
        <div className="footer-actions">
          <a
            className="support-link"
            href="https://ko-fi.com/balans"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.footer.support}
          </a>
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
