import { useEffect, useState, type CSSProperties } from "react";
import "./App.css";
import { FeatureOrbit } from "./components/FeatureOrbit";
import { StoreButtons } from "./components/StoreButtons";
import { copy, STORE_URLS, type Lang } from "./content";
import { useReveal } from "./hooks/useReveal";

function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const t = copy[lang];
  useReveal([lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.lang = lang;
    document.title =
      lang === "ar"
        ? "LanChat — تواصل بثقة"
        : "LanChat — Connect with confidence";
  }, [lang]);

  return (
    <div className="page">
      <div className="ambient" aria-hidden>
        <div className="ambient__wash" />
        <div className="ambient__beam" />
        <div className="ambient__glow ambient__glow--a" />
        <div className="ambient__glow ambient__glow--b" />
        <div className="ambient__grid" />
        <div className="ambient__crest" />
      </div>

      <div className="content">
        <header className="shell topbar">
          <a className="brand-lockup" href="#top" aria-label={t.brand}>
            <img className="brand-wordmark" src="/brand/wordmark.png" alt={t.brand} />
          </a>
          <nav className="topnav" aria-label="Primary">
            <a href="#features">{t.navFeatures}</a>
            <a href="#privacy">{t.navPrivacy}</a>
            <a href="#download">{t.navDownload}</a>
          </nav>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
          >
            {t.langSwitch}
          </button>
        </header>

        <main id="top">
          {/* Hero: one composition — brand, headline, lead, CTAs, visual */}
          <section className="hero" aria-labelledby="hero-brand">
            <div className="shell hero__grid">
              <div className="hero__copy">
                <h1 id="hero-brand" className="hero__brand">
                  <img
                    className="hero__wordmark"
                    src="/brand/wordmark.png"
                    alt={t.brand}
                  />
                </h1>
                <p className="hero__headline">{t.headline}</p>
                <p className="hero__lead">{t.lead}</p>
                <div className="hero__actions">
                  <a className="btn btn--primary" href="#download">
                    {t.ctaPrimary}
                  </a>
                  <a
                    className="btn btn--ghost"
                    href={STORE_URLS.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.ctaWeb}
                  </a>
                </div>
              </div>

              <div className="hero__stage" aria-hidden>
                <div className="device">
                  <div className="device__bezel">
                    <div className="device__notch" />
                    <div className="device__screen">
                      <img src="/brand/logo.png" alt="" className="device__crest" />
                      <span className="device__script">{t.brand}</span>
                      <div className="device__pulse" />
                    </div>
                  </div>
                </div>
                <div className="hero__orbit" />
              </div>
            </div>
          </section>

          <div className="marquee" aria-hidden>
            <div className="marquee__track">
              {[...t.marquee, ...t.marquee].map((item, i) => (
                <span key={`${item}-${i}`} className="marquee__item">
                  {item}
                  <span className="marquee__dot" />
                </span>
              ))}
            </div>
          </div>

          <section className="shell section promise" data-reveal aria-labelledby="promise-title">
            <div className="promise__frame">
              <p className="section__label">{t.promiseLabel}</p>
              <h2 className="section__title" id="promise-title">
                {t.promiseTitle}
              </h2>
              <p className="section__lead">{t.promiseText}</p>
            </div>
          </section>

          <section
            id="features"
            className="shell section features"
            aria-labelledby="features-title"
          >
            <header className="section__head" data-reveal>
              <p className="section__label">{t.featuresLabel}</p>
              <h2 className="section__title" id="features-title">
                {t.featuresTitle}
              </h2>
              <p className="section__lead">{t.featuresLead}</p>
            </header>

            <div data-reveal>
              <FeatureOrbit
                key={lang}
                chapters={t.chapters}
                hint={t.featuresHint}
                prevLabel={t.featuresPrev}
                nextLabel={t.featuresNext}
              />
            </div>
          </section>

          <section className="shell section extras" data-reveal aria-labelledby="extras-title">
            <div className="extras__intro">
              <p className="section__label">{t.extrasLabel}</p>
              <h2 className="section__title" id="extras-title">
                {t.extrasTitle}
              </h2>
            </div>
            <ul className="extras__constellation">
              {t.extras.map((item, i) => (
                <li key={item} style={{ "--i": i } as CSSProperties}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="section web-band" data-reveal aria-labelledby="web-title">
            <div className="shell web-band__frame">
              <div className="web-band__copy">
                <p className="section__label">{t.webLabel}</p>
                <h2 className="section__title" id="web-title">
                  {t.webTitle}
                </h2>
                <p className="section__lead">{t.webText}</p>
                <a
                  className="btn btn--primary"
                  href={STORE_URLS.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.webCta}
                </a>
              </div>

              <div className="web-band__stage" aria-hidden>
                <div className="browser">
                  <div className="browser__chrome">
                    <span />
                    <span />
                    <span />
                    <div className="browser__url">web.lanchat.net</div>
                  </div>
                  <div className="browser__body">
                    <img src="/brand/wordmark.png" alt="" className="browser__mark" />
                    <div className="browser__qr">
                      <div className="browser__qr-grid" />
                      <span>QR</span>
                    </div>
                  </div>
                </div>
                <div className="web-band__float">
                  <strong>01</strong>
                  <span>Scan</span>
                </div>
                <div className="web-band__float web-band__float--b">
                  <strong>02</strong>
                  <span>Link</span>
                </div>
              </div>
            </div>
          </section>

          <section
            id="privacy"
            className="section privacy"
            data-reveal
            aria-labelledby="privacy-title"
          >
            <div className="shell privacy__frame">
              <div className="privacy__manifesto">
                <p className="section__label">{t.privacyLabel}</p>
                <h2 className="section__title" id="privacy-title">
                  {t.privacyTitle}
                </h2>
                <p className="section__lead">{t.privacyText}</p>
              </div>
              <ol className="privacy__pillars">
                {t.privacyItems.map((item, i) => (
                  <li key={item}>
                    <span className="privacy__num" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            id="download"
            className="section download"
            data-reveal
            aria-labelledby="download-title"
          >
            <div className="shell download__frame">
              <img src="/brand/logo.png" alt="" className="download__crest" aria-hidden />
              <h2 className="section__title" id="download-title">
                {t.downloadTitle}
              </h2>
              <p className="section__lead">{t.downloadText}</p>
              <div className="download__actions">
                <StoreButtons
                  getOn={t.getOn}
                  appStore={t.appStore}
                  googlePlay={t.googlePlay}
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer__glow" aria-hidden />
          <div className="shell footer__inner">
            <div className="footer__brand">
              <a href="#top" className="footer__brand-link" aria-label={t.brand}>
                <img src="/brand/logo.png" alt="" className="footer__crest" />
                <img
                  className="footer__wordmark"
                  src="/brand/wordmark.png"
                  alt={t.brand}
                />
              </a>
              <p className="footer__tagline">{t.footerTagline}</p>
            </div>

            <div className="footer__col">
              <p className="footer__heading">{t.footerExplore}</p>
              <nav className="footer__nav" aria-label={t.footerExplore}>
                <a href="#features">{t.navFeatures}</a>
                <a href="#privacy">{t.navPrivacy}</a>
                <a href="#download">{t.navDownload}</a>
                <a
                  href={STORE_URLS.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.ctaWeb}
                </a>
              </nav>
            </div>

            <div className="footer__col footer__col--contact">
              <p className="footer__heading">{t.footerContact}</p>
              <a className="footer__mail" href={`mailto:${t.support}`}>
                {t.support}
              </a>
              <a
                className="footer__web"
                href={STORE_URLS.web}
                target="_blank"
                rel="noopener noreferrer"
              >
                web.lanchat.net
              </a>
            </div>
          </div>

          <div className="footer__bar">
            <div className="shell footer__bar-inner">
              <p className="footer__copy">{t.footerCopy}</p>
              <button
                type="button"
                className="footer__lang"
                onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
              >
                {t.langSwitch}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
