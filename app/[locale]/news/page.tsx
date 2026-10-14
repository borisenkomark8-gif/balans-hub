import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/app/components/site-footer";
import SiteHeader from "@/app/components/site-header";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getMessages, localePath } from "@/lib/i18n/get-messages";
import { newsArticles } from "@/lib/i18n/news-articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const t = getMessages(raw);
  return {
    title: t.news.metaTitle,
    description: t.news.metaDescription,
    alternates: {
      canonical: localePath(raw, "/news"),
      languages: { ru: "/ru/news", en: "/en/news" },
    },
    openGraph: {
      url: localePath(raw, "/news"),
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "BALANS Hub" }],
    },
  };
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const t = getMessages(locale);

  const categoryLabel = {
    medicine: t.news.categoryMedicine,
    nutrition: t.news.categoryNutrition,
    training: t.news.categoryTraining,
  };

  const sourceLabel = {
    pubmed: t.news.sourcePubMed,
    cochrane: t.news.sourceCochrane,
    meta: t.news.sourceMeta,
  };

  return (
    <div className="platform-page">
      <SiteHeader locale={locale} t={t} active="news" />
      <main className="news-main">
        <section className="news-hero" aria-labelledby="news-page-title">
          <div>
            <p className="eyebrow">{t.news.updated}</p>
            <h1 id="news-page-title">{t.news.title}</h1>
          </div>
          <p>{t.news.lead}</p>
        </section>
        <div className="news-filter" aria-label={t.news.filterAria}>
          <span>{t.news.filterMedicine}</span>
          <span>{t.news.filterNutrition}</span>
          <span>{t.news.filterTraining}</span>
        </div>
        <p className="issue-note">{t.news.issueNote}</p>
        <section className="news-feed" aria-label={t.news.feedAria}>
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className={`news-card${article.featured ? " news-featured" : ""}`}
            >
              <div className="news-meta">
                <span className={`category ${article.category}`}>
                  {categoryLabel[article.category]}
                </span>
                <time dateTime={article.date}>{article.dateLabel[locale]}</time>
              </div>
              <h2>{article.title[locale]}</h2>
              <div className="news-explainer">
                <p>
                  <strong>{t.news.whatHappened}</strong>
                  {article.happened[locale]}
                </p>
                <p>
                  <strong>{t.news.whatMeans}</strong>
                  {article.means[locale]}
                </p>
              </div>
              <a
                className="source-link"
                href={article.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sourceLabel[article.sourceKind]}
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </section>
        <aside className="news-disclaimer">
          <strong>{t.news.disclaimerStrong}</strong>
          {t.news.disclaimer}
        </aside>
        <a className="back-link" href={localePath(locale, "/")}>
          {t.news.back}
        </a>
      </main>
      <SiteFooter locale={locale} t={t} />
    </div>
  );
}
