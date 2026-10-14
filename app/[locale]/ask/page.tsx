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
    title: t.ask.metaTitle,
    description: t.ask.metaDescription,
    alternates: {
      canonical: localePath(raw, "/ask"),
      languages: { ru: "/ru/ask", en: "/en/ask" },
    },
    openGraph: {
      url: localePath(raw, "/ask"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function AskPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const a = t.ask;

  return (
    <div className="platform-page">
      <SiteHeader locale={locale} t={t} />
      <main className="coaching-main contact-main">
        <section className="page-intro" aria-labelledby="ask-title">
          <p className="eyebrow">{a.eyebrow}</p>
          <h1 id="ask-title">{a.title}</h1>
          <p>{a.lead}</p>
        </section>

        <aside className="medical-note coaching-boundary">
          <strong>{a.boundaryStrong}</strong>
          {a.boundary}
        </aside>

        <section className="coaching-form-section" aria-labelledby="ask-form-title">
          <div>
            <p className="eyebrow">{a.formEyebrow}</p>
            <h2 id="ask-form-title">{a.formTitle}</h2>
            <p>{a.formLead}</p>
          </div>
          <ContactForm
            kind="ask"
            locale={locale}
            subjectPrefix="BALANS ask"
            t={{
              name: a.name,
              email: a.email,
              emailOptional: a.emailOptional,
              message: a.message,
              messagePlaceholder: a.messagePlaceholder,
              consent: a.consent,
              submit: a.submit,
              sending: a.sending,
              note: a.note,
              success: a.success,
              errorFields: a.errorFields,
              errorConsent: a.errorConsent,
              errorUnavailable: a.errorUnavailable,
              errorSend: a.errorSend,
              errorNetwork: a.errorNetwork,
            }}
          />
        </section>

        <a className="back-link" href={localePath(locale, "/")}>
          {a.back}
        </a>
      </main>
      <SiteFooter locale={locale} t={t} disclaimer="short" />
    </div>
  );
}
