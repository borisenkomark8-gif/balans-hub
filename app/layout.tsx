import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { headers } from "next/headers";
import "../public/styles.css";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

const manrope = Manrope({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "greek", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://balans-hub.vercel.app";
const description =
  "BALANS Hub — авторские проекты врача о питании, тренировках, практической медицине и подготовке к медицинским экзаменам.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BALANS Hub — здоровье, движение, медицинские знания",
    template: "%s",
  },
  description,
  applicationName: "BALANS Hub",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "BALANS Hub",
    title: "BALANS Hub — здоровье, движение, медицинские знания",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "BALANS Hub — здоровье, движение, медицинские знания",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#081b2e",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerLocale = (await headers()).get("x-balans-locale");
  const lang = headerLocale && isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
