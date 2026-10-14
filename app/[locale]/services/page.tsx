import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/app/components/contact-form";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
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
    title: t.services.metaTitle,
    description: t.services.metaDescription,
    alternates: {
      canonical: localePath(raw, "/services"),
      languages: { ru: "/ru/services", en: "/en/services" },
    },
    openGraph: {
      url: localePath(raw, "/services"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const s = t.services;

  const areas = [
    { title: s.area1Title, text: s.area1Text },
    { title: s.area2Title, text: s.area2Text },
    { title: s.area3Title, text: s.area3Text },
  ];

  return (
    <div className="platform-page">
      <SiteHeader locale={locale} t={t} />
      <main className="coaching-main contact-main">
        <section className="page-intro" aria-labelledby="services-title">
          <p className="eyebrow">{s.eyebrow}</p>
          <h1 id="services-title">{s.title}</h1>
          <p>{s.lead}</p>
          <a className="primary-action services-cta" href="#consultation">
            {s.cta}
          </a>
        </section>

        <section className="coaching-directions" aria-labelledby="areas-title">
          <h2 id="areas-title">{s.areasTitle}</h2>
          <ul>
            {areas.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <aside className="medical-note coaching-boundary">
          <strong>{s.limitsStrong}</strong>
          {s.limits}
        </aside>

        <p className="services-related">
          <a href={localePath(locale, "/coaching")}>{s.relatedCoaching}</a>
        </p>

        <section
          id="consultation"
          className="coaching-form-section"
          aria-labelledby="consultation-title"
        >
          <div>
            <p className="eyebrow">{s.formEyebrow}</p>
            <h2 id="consultation-title">{s.formTitle}</h2>
            <p>{s.formLead}</p>
          </div>
          <ContactForm
            kind="consultation"
            locale={locale}
            subjectPrefix="BALANS consultation"
            requireName
            requireEmail
            id="consultation-form"
            t={{
              name: s.name,
              email: s.email,
              message: s.message,
              messagePlaceholder: s.messagePlaceholder,
              consent: s.consent,
              submit: s.submit,
              sending: s.sending,
              note: s.note,
              success: s.success,
              errorFields: s.errorFields,
              errorConsent: s.errorConsent,
              errorUnavailable: s.errorUnavailable,
              errorSend: s.errorSend,
              errorNetwork: s.errorNetwork,
            }}
          />
        </section>

        <a className="back-link" href={localePath(locale, "/")}>
          {s.back}
        </a>
      </main>
      <SiteFooter locale={locale} t={t} disclaimer="short" />
    </div>
  );
}