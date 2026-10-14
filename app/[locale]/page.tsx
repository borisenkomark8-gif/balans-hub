import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    title: t.meta.siteTitle,
    description: t.meta.siteDescription,
    alternates: {
      canonical: localePath(raw, "/"),
      languages: { ru: "/ru", en: "/en" },
    },
    openGraph: {
      url: localePath(raw, "/"),
      locale: raw === "en" ? "en_US" : "ru_RU",
      title: t.meta.siteTitle,
      description: t.meta.siteDescription,
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);
  const medBalans = "https://medbalans-kids.vercel.app/hub";
  const medExam = "https://medical-exam-platform-ten.vercel.app/ru";

  return (
    <>
      <SiteHeader locale={locale} t={t} variant="home" />
      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1 id="hero-title">{t.home.title}</h1>
            <p className="hero-lead">{t.home.lead}</p>
            <a className="primary-action" href="#projects">
              {t.home.cta}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M4 10h11M11 6l4 4-4 4" />
              </svg>
            </a>
          </div>
          <div className="hero-map planetary-system" aria-label={t.home.mapAria}>
            <div className="orbit orbit-outer" aria-hidden="true" />
            <div className="orbit orbit-mid" aria-hidden="true" />
            <div className="orbit orbit-inner" aria-hidden="true" />
            <div className="map-center">
              <img src="/assets/dr-mark-logo.jpeg" alt={t.home.logoAlt} />
            </div>
            <a
              className="planet planet-balans"
              href={localePath(locale, "/balans")}
              aria-label={t.home.planetBalansAria}
            >
              <span className="planet-core" aria-hidden="true" />
              <span className="planet-copy">
                <span className="planet-name">BALANS</span>
                <span className="planet-tag">{t.home.planetBalansTag}</span>
              </span>
            </a>
            <a
              className="planet planet-medicine"
              href={medBalans}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.home.planetMedAria}
            >
              <span className="planet-core" aria-hidden="true" />
              <span className="planet-copy">
                <span className="planet-name">MedBalans</span>
                <span className="planet-tag">{t.home.planetMedTag}</span>
              </span>
            </a>
            <a
              className="planet planet-exam"
              href={medExam}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.home.planetExamAria}
            >
              <span className="planet-core" aria-hidden="true" />
              <span className="planet-copy">
                <span className="planet-name">MED EXAM</span>
                <span className="planet-tag">{t.home.planetExamTag}</span>
              </span>
            </a>
          </div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">{t.home.projectsEyebrow}</p>
            <h2 id="projects-title">{t.home.projectsTitle}</h2>
            <p>{t.home.projectsLead}</p>
          </div>
          <div className="project-grid">
            <a
              className="project-card project-balans"
              href={localePath(locale, "/balans")}
              aria-label={t.home.balansAria}
            >
              <div className="project-topline">
                <span className="project-number">01</span>
                <span className="status">
                  <i /> {" BALANS"}
                </span>
              </div>
              <div>
                <p className="project-type">{t.home.balansType}</p>
                <h3 className="long-title">{t.home.balansTitle}</h3>
                <p className="project-description">
                  <span className="wordplay">
                    {locale === "ru" ? (
                      <>
                        с<span>BALANS</span>ированное
                      </>
                    ) : (
                      <>
                        <span>BALANS</span>ed
                      </>
                    )}
                  </span>
                  {t.home.balansDescBefore}
                </p>
              </div>
              <div className="topic-list" aria-label={t.home.balansTopicsAria}>
                <span>{t.home.balansTopic1}</span>
                <span>{t.home.balansTopic2}</span>
                <span>{t.home.balansTopic3}</span>
              </div>
              <span className="card-action">
                {t.home.balansAction}
                <span aria-hidden="true">→</span>
              </span>
            </a>

            <a
              className="project-card project-kids"
              href={medBalans}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.home.medAria}
            >
              <div className="project-topline">
                <span className="project-number">02</span>
                <span className="status">
                  <i /> {" MedBalans"}
                </span>
              </div>
              <div>
                <p className="project-type">{t.home.medType}</p>
                <h3 className="long-title">{t.home.medTitle}</h3>
                <p className="project-description">{t.home.medDesc}</p>
              </div>
              <div className="topic-list" aria-label={t.home.medTopicsAria}>
                <span>{t.home.medTopic1}</span>
                <span>{t.home.medTopic2}</span>
                <span>{t.home.medTopic3}</span>
              </div>
              <span className="card-action">
                {t.home.medAction}
                <span aria-hidden="true">↗</span>
              </span>
            </a>

            <a
              className="project-card project-exam"
              href={medExam}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.home.examAria}
            >
              <div className="project-topline">
                <span className="project-number">03</span>
                <span className="status">
                  <i /> {" MED EXAM"}
                </span>
              </div>
              <div>
                <p className="project-type">{t.home.examType}</p>
                <h3>MED EXAM</h3>
                <p className="project-description">{t.home.examDesc}</p>
              </div>
              <div className="topic-list" aria-label={t.home.examTopicsAria}>
                <span>{t.home.examTopic1}</span>
                <span>{t.home.examTopic2}</span>
                <span>{t.home.examTopic3}</span>
              </div>
              <span className="card-action">
                {t.home.examAction}
                <span aria-hidden="true">↗</span>
              </span>
            </a>
          </div>
          <div className="projects-support">
            <a
              className="support-link support-link-secondary"
              href="https://ko-fi.com/balans"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.footer.support}
            </a>
          </div>
        </section>

        <section className="news" id="news" aria-labelledby="news-title">
          <div className="news-label">
            <span className="news-pulse" aria-hidden="true" />
            {t.home.newsUpdated}
          </div>
          <div className="news-copy">
            <p className="eyebrow">{t.home.newsEyebrow}</p>
            <h2 id="news-title">{t.home.newsTitle}</h2>
            <p>{t.home.newsLead}</p>
            <a className="news-action" href={localePath(locale, "/news")}>
              {t.home.newsAction}
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="news-topics" aria-label={t.home.newsTopicsAria}>
            <span>{t.home.newsTopic1}</span>
            <span>{t.home.newsTopic2}</span>
            <span>{t.home.newsTopic3}</span>
          </div>
        </section>

        <section className="author" id="author" aria-labelledby="author-title">
          <div className="author-kicker">
            <figure className="author-photo">
              <img src="/assets/mark-borisenko.jpeg" alt={t.home.photoAlt} />
            </figure>
            <p>
              {t.home.authorRole}
              <br />
              {t.home.authorRoleLine2}
            </p>
          </div>
          <div className="author-copy">
            <p className="eyebrow">{t.home.authorEyebrow}</p>
            <h2 id="author-title">{t.home.authorName}</h2>
            <p className="author-summary">{t.home.authorSummary}</p>
            <details className="author-details">
              <summary>{t.home.authorMore}</summary>
              <div>
                <p>{t.home.authorP1}</p>
                <p>{t.home.authorP2}</p>
                <p>{t.home.authorP3}</p>
                <p>{t.home.authorP4}</p>
                <p>{t.home.authorP5}</p>
              </div>
            </details>
          </div>
        </section>
      </main>
      <SiteFooter locale={locale} t={t} homeHref="#top" />
    </>
  );
}
