import { MobileSiteNav, SiteNav } from "@riebeckite/plugin-navigation";
import { useSiteContext } from "@riebeckite/ui";

export function SiteHeader() {
  return (
    <header class="site-header rb-site-header">
      <a href="/" class="site-header__home rb-site-header__home">
        <img
          src="/logo.svg"
          alt=""
          class="site-header__logo"
          width="153"
          height="40"
        />
      </a>
      <div class="site-header__primary-navigation">
        <SiteNav placement="primary" />
      </div>
      <div class="site-header__mobile-navigation">
        <MobileSiteNav placement="primary" />
      </div>
    </header>
  );
}

export function SiteFooter() {
  const site = useSiteContext();

  return (
    <footer class="site-footer rb-site-footer">
      <div class="site-footer__inner">
        <div class="site-footer__identity">
          <a href="/" class="site-footer__home">
            <img
              src="/logo.svg"
              alt=""
              class="site-footer__logo"
              width="77"
              height="20"
            />
            <span>{site?.config.site.title}</span>
          </a>
          {site?.config.site.description ? (
            <p class="site-footer__description">
              {site.config.site.description}
            </p>
          ) : null}
        </div>
        <SiteNav placement="secondary" />
        <p class="site-footer__meta">
          Built with <a href="https://riebeckite.dev">Riebeckite</a>
        </p>
      </div>
    </footer>
  );
}
