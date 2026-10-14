import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/get-messages";
import type { Messages } from "@/lib/i18n/messages/ru";

type Props = {
  locale: Locale;
  t: Messages;
  homeHref?: string;
  disclaimer?: "full" | "short";
};

export default function SiteFooter({
  locale,
  t,
  homeHref,
  disclaimer = "full",
}: Props) {
  const home = homeHref ?? localePath(locale, "/");
  return (
    <footer>
      <div className="footer-top">
        <a className="brand footer-brand" href={home}>
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>BALANS</span>
        </a>
        <p className="footer-disclaimer">
          {disclaimer === "short" ? t.footer.disclaimerShort : t.footer.disclaimer}
        </p>
        <p className="footer-copyright">{t.footer.copyright}</p>
      </div>
      <nav className="footer-nav" aria-label={t.footer.navAria}>
        <a href={localePath(locale, "/feedback")}>{t.footer.feedback}</a>
        <a href={localePath(locale, "/ask")}>{t.footer.ask}</a>
        <a href={localePath(locale, "/services")}>{t.footer.services}</a>
      </nav>
      <div className="footer-actions">
        <a
          className="support-link"
          href="https://ko-fi.com/balans"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.footer.support}
        </a>
      </div>
    </footer>
  );
}
