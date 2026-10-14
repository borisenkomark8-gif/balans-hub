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
    title: t.feedback.metaTitle,
    description: t.feedback.metaDescription,
    alternates: {
      canonical: localePath(raw, "/feedback"),
      languages: { ru: "/ru/feedback", en: "/en/feedback" },
    },
    openGraph: {
      url: localePath(raw, "/feedback"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function FeedbackPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const f = t.feedback;

  return (
    <div className="platform-page">
      <SiteHeader locale={locale} t={t} />
      <main className="coaching-main contact-main">
        <section className="page-intro" aria-labelledby="feedback-title">
          <p className="eyebrow">{f.eyebrow}</p>
          <h1 id="feedback-title">{f.title}</h1>
          <p>{f.lead}</p>
        </section>

        <aside className="medical-note coaching-boundary">
          <strong>{f.boundaryStrong}</strong>
          {f.boundary}
        </aside>

        <section className="coaching-form-section" aria-labelledby="feedback-form-title">
          <div>
            <p className="eyebrow">{f.formEyebrow}</p>
            <h2 id="feedback-form-title">{f.formTitle}</h2>
            <p>{f.formLead}</p>
          </div>
          <ContactForm
            kind="feedback"
            locale={locale}
            subjectPrefix="BALANS feedback"
            t={{
              email: f.email,
              emailOptional: f.emailOptional,
              topic: f.topic,
              topicPlaceholder: f.topicPlaceholder,
              topics: [
                { value: "site", label: f.topicSite },
                { value: "content", label: f.topicContent },
                { value: "bug", label: f.topicBug },
                { value: "other", label: f.topicOther },
              ],
              message: f.message,
              messagePlaceholder: f.messagePlaceholder,
              consent: f.consent,
              submit: f.submit,
              sending: f.sending,
              note: f.note,
              success: f.success,
              errorFields: f.errorFields,
              errorConsent: f.errorConsent,
              errorUnavailable: f.errorUnavailable,
              errorSend: f.errorSend,
              errorNetwork: f.errorNetwork,
            }}
          />
        </section>

        <a className="back-link" href={localePath(locale, "/")}>
          {f.back}
        </a>
      </main>
      <SiteFooter locale={locale} t={t} disclaimer="short" />
    </div>
  );
}
