import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Locale } from "@/lib/i18n/config";
import { isLocale } from "@/lib/i18n/config";

const siteUrl = "https://balans-hub.vercel.app";

const pages = [
  "assessment",
  "control",
  "progress",
  "learn",
  "train",
  "clinical",
  "clinical-arrhythmias",
  "clinical-asthma",
  "clinical-children-adolescents",
  "clinical-copd",
  "clinical-diabetes-type-2",
  "clinical-hypertension",
  "clinical-ischemic-heart-disease",
  "clinical-post-mi-stroke",
  "clinical-spine-joints-sarcopenia",
  "nutrition-child-by-age",
  "train-child-by-age",
] as const;

export type BalansPageName = (typeof pages)[number];

export function isBalansPageName(value: string): value is BalansPageName {
  return (pages as readonly string[]).includes(value);
}

function resolveHtmlPath(locale: Locale, name: string) {
  const localized = path.join(process.cwd(), "content", "balans", locale, `${name}.html`);
  if (existsSync(localized)) return localized;
  const legacy = path.join(process.cwd(), "content", "balans", `${name}.html`);
  if (existsSync(legacy)) return legacy;
  const fallbackRu = path.join(process.cwd(), "content", "balans", "ru", `${name}.html`);
  return fallbackRu;
}

function withLaunchMeta(html: string, name: string, locale: Locale) {
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "BALANS";
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const canonical = `${siteUrl}/${locale}/balans/${name}`;
  const ogLocale = locale === "en" ? "en_US" : "ru_RU";
  const meta = [
    `<link rel="icon" href="/icon" type="image/png" />`,
    `<link rel="apple-touch-icon" href="/apple-icon" />`,
    `<link rel="canonical" href="${canonical}" />`,
    `<link rel="alternate" hreflang="ru" href="${siteUrl}/ru/balans/${name}" />`,
    `<link rel="alternate" hreflang="en" href="${siteUrl}/en/balans/${name}" />`,
    `<meta property="og:site_name" content="BALANS Hub" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${siteUrl}/opengraph-image" />`,
  ].join("\n    ");

  const switcher = `<div class="lang-switch" role="group" aria-label="${locale === "en" ? "Site language" : "Язык сайта"}"><a href="/ru/balans/${name}" class="${locale === "ru" ? "active" : ""}" hreflang="ru"${locale === "ru" ? ' aria-current="true"' : ""}>RU</a><a href="/en/balans/${name}" class="${locale === "en" ? "active" : ""}" hreflang="en"${locale === "en" ? ' aria-current="true"' : ""}>EN</a></div>`;

  let next = html.replace("<head>", `<head>\n    ${meta}`);
  next = next.replace(/<html\s+lang="[^"]*"/, `<html lang="${locale}"`);
  // Normalize hub links to the active locale.
  next = next.replace(/(href=")\/(?:ru|en)?\/?balans(\/[^"#?]*)?/g, `$1/${locale}/balans$2`);
  next = next.replace(/(href=")\/"(?=[>\s])/g, `$1/${locale}"`);
  next = next.replace(/href="\/"/g, `href="/${locale}"`);
  // Wrap header content with tools row + language switcher when possible.
  if (!next.includes('class="lang-switch"')) {
    next = next.replace(
      /(<header class="site-header[^"]*">)([\s\S]*?)(<\/header>)/,
      (_match, open: string, inner: string, close: string) => {
        if (inner.includes("header-tools")) {
          return `${open}${inner.replace(/<\/nav>/, `</nav>${switcher}`)}${close}`;
        }
        return `${open}<div class="header-tools">${inner}${switcher}</div>${close}`;
      },
    );
  }
  return next;
}

export function serveBalansPage(name: BalansPageName, locale: Locale = "ru") {
  const filePath = resolveHtmlPath(locale, name);
  const html = withLaunchMeta(readFileSync(filePath, "utf8"), name, locale);

  return function GET() {
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  };
}

export function serveBalansPageFromParams(localeRaw: string, nameRaw: string) {
  if (!isLocale(localeRaw) || !isBalansPageName(nameRaw)) {
    return new Response("Not Found", { status: 404 });
  }
  return serveBalansPage(nameRaw, localeRaw)();
}
