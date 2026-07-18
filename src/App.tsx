import { useEffect, useState } from "react";
import "./App.css";
import { ComingSoonModal } from "./components/ComingSoonModal";
import { StoreButtons } from "./components/StoreButtons";
import { copy, type Lang } from "./content";

const featureIcons = [
  // chat
  <svg key="chat" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v7A2.5 2.5 0 0 1 16.5 16H10l-3.8 2.9A.8.8 0 0 1 5 18.3V6.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>,
  // call
  <svg key="call" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M7.2 4.8c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8l-1 1a11.2 11.2 0 0 0 5.4 5.4l1-1c.5-.5 1.3-.5 1.8 0l1.5 1.5c.5.5.5 1.3 0 1.8l-.7.7c-.7.7-1.7 1-2.7.8A15.8 15.8 0 0 1 5.7 8.2c-.2-1 .1-2 .8-2.7l.7-.7Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>,
  // status
  <svg key="status" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="7.25" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3.2" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
  </svg>,
  // live
  <svg key="live" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="6" width="13" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M16.5 10.2 20 8v8l-3.5-2.2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>,
  // privacy
  <svg key="privacy" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3.5 19 6.5v5.2c0 4.2-2.8 7.4-7 8.8-4.2-1.4-7-4.6-7-8.8V6.5L12 3.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>,
  // devices
  <svg key="devices" width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3.5" y="5" width="12" height="9.5" rx="1.6" stroke="currentColor" strokeWidth="1.8" />
    <rect x="16" y="9" width="4.5" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M7 17.5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

function App() {
  const [lang, setLang] = useState<Lang>("ar");
  const [modalOpen, setModalOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dataset.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <div className="page">
      <div className="ambient" aria-hidden>
        <div className="ambient__wash" />
        <div className="ambient__glow ambient__glow--tl" />
        <div className="ambient__glow ambient__glow--br" />
        <div className="ambient__pattern" />
      </div>

      <div className="content">
        <header className="shell topbar">
          <a className="brand-lockup" href="#top" aria-label="LanChat">
            <img
              className="brand-wordmark"
              src="/brand/wordmark.png"
              alt="LanChat"
            />
          </a>
          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang((prev) => (prev === "ar" ? "en" : "ar"))}
          >
            {t.langSwitch}
          </button>
        </header>

        <main id="top">
          <section className="shell hero">
            <h1 className="hero__brand">
              <img
                className="hero__wordmark"
                src="/brand/wordmark.png"
                alt="LanChat"
              />
            </h1>
            <p className="hero__headline">{t.headline}</p>
            <p className="hero__lead">{t.lead}</p>
            <StoreButtons
              getOn={t.getOn}
              appStore={t.appStore}
              googlePlay={t.googlePlay}
              onStoreClick={() => setModalOpen(true)}
            />
          </section>

          <section className="shell section" aria-labelledby="about-title">
            <p className="section__label">{t.aboutLabel}</p>
            <h2 className="section__title" id="about-title">
              {t.aboutTitle}
            </h2>
            <div className="about-panel">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
          </section>

          <section className="shell section" aria-labelledby="features-title">
            <p className="section__label">{t.featuresLabel}</p>
            <h2 className="section__title" id="features-title">
              {t.featuresTitle}
            </h2>
            <div className="feature-grid">
              {t.features.map((feature, index) => (
                <article className="feature" key={feature.title}>
                  <div className="feature__icon">{featureIcons[index]}</div>
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__desc">{feature.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="shell section" aria-labelledby="privacy-title">
            <div className="privacy-band">
              <p className="section__label">{t.privacyLabel}</p>
              <h2 className="section__title" id="privacy-title">
                {t.privacyTitle}
              </h2>
              <p className="section__text">{t.privacyText}</p>
              <ul className="privacy-list">
                {t.privacyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="shell section">
            <div className="cta">
              <h2>{t.ctaTitle}</h2>
              <p>{t.ctaText}</p>
              <StoreButtons
                getOn={t.getOn}
                appStore={t.appStore}
                googlePlay={t.googlePlay}
                onStoreClick={() => setModalOpen(true)}
              />
            </div>
          </section>
        </main>

        <footer className="shell footer">
          <p className="footer__brand">
            <img
              className="footer__wordmark"
              src="/brand/wordmark.png"
              alt="LanChat"
            />
          </p>
          <p className="footer__copy">{t.footerCopy}</p>
          <p className="footer__copy">
            <a href={`mailto:${t.support}`} style={{ color: "inherit" }}>
              {t.support}
            </a>
          </p>
        </footer>
      </div>

      <ComingSoonModal
        open={modalOpen}
        title={t.modalTitle}
        body={t.modalBody}
        okLabel={t.modalOk}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
