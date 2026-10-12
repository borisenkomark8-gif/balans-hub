import LanguageSwitcher from "./language-switcher";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/i18n/get-messages";
import type { Messages } from "@/lib/i18n/messages/ru";

type Props = {
  locale: Locale;
  t: Messages;
  active?: "news" | "coaching" | null;
  variant?: "home" | "platform";
};

export default function SiteHeader({ locale, t, active = null, variant = "platform" }: Props) {
  const home = localePath(locale, "/");
  return (
    <header className={`site-header${variant === "platform" ? " platform-header" : ""}`}>
      <a className="brand" href={variant === "home" ? "#top" : home} aria-label={t.nav.homeAria}>
        <span className="brand-mark" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>BALANS</span>
      </a>
      <div className="header-tools">
        <nav aria-label={t.nav.aria}>
          <a href={localePath(locale, "/balans")}>{t.nav.balans}</a>
          <a href={variant === "home" ? "#projects" : `${home}#projects`}>{t.nav.projects}</a>
          <a
            className={active === "news" ? "active" : undefined}
            href={localePath(locale, "/news")}
            aria-current={active === "news" ? "page" : undefined}
          >
            {t.nav.news}
          </a>
          <a
            className={active === "coaching" ? "active" : undefined}
            href={localePath(locale, "/coaching")}
            aria-current={active === "coaching" ? "page" : undefined}
          >
            {t.nav.coaching}
          </a>
          <a href={variant === "home" ? "#author" : `${home}#author`}>{t.nav.author}</a>
        </nav>
        <LanguageSwitcher locale={locale} labels={t.lang} />
      </div>
    </header>
  );
}
