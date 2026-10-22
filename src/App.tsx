import { useEffect, useId, useState, type CSSProperties, type KeyboardEvent } from 'react';
import './App.css';
import { FeatureOrbit } from './components/FeatureOrbit';
import { StoreButtons } from './components/StoreButtons';
import { HeroScene } from './components/HeroScene';
import { Icon } from './components/Icon';
import { copy, STORE_URLS, type Lang } from './content';
import { landingCopy } from './landingContent';
import { useReveal } from './hooks/useReveal';

function initialLang(): Lang {
  try { return localStorage.getItem('lanchat-language') === 'en' ? 'en' : 'ar'; } catch { return 'ar'; }
}

function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [audience, setAudience] = useState(0);
  const t = copy[lang];
  const c = landingCopy[lang];
  const selected = c.audiences[audience];
  const audienceId = useId();
  useReveal([lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.dataset.lang = lang;
    const title = lang === 'ar' ? 'لان شات — لنكن أقرب | LanChat' : 'LanChat — Let’s be closer';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.lead);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', c.lead);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', c.lead);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', lang === 'ar' ? 'ar' : 'en_US');
    try { localStorage.setItem('lanchat-language', lang); } catch { /* Storage is optional. */ }
  }, [lang, c.lead]);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll-progress', String(max > 0 ? window.scrollY / max : 0));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: globalThis.KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus(); } };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [menuOpen]);

  const changeLanguage = () => { setLang(lang === 'ar' ? 'en' : 'ar'); setMenuOpen(false); };
  const navItems = [ ['#features', t.navFeatures], ['#about', c.aboutNav], ['#vision', c.visionNav], ['#faq', c.faqNav] ];
  const audienceKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    const isRtl = lang === 'ar';
    let next = audience;
    if (event.key === 'ArrowRight') next += isRtl ? -1 : 1;
    else if (event.key === 'ArrowLeft') next += isRtl ? 1 : -1;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = c.audiences.length - 1;
    else return;
    event.preventDefault();
    next = (next + c.audiences.length) % c.audiences.length;
    setAudience(next);
    document.getElementById(`${audienceId}-tab-${next}`)?.focus();
  };

  return <div className="page">
    <a className="skip-link" href="#main">{c.skip}</a>
    <div className="reading-progress" aria-hidden="true" />
    <header className="site-header">
      <div className="shell topbar">
        <a className="brand-lockup" href="#top" aria-label="LanChat"><img src="/brand/logo.webp" alt="" /><span>Lan<span>Chat</span><i /></span></a>
        <nav id="primary-navigation" className={`topnav ${menuOpen ? 'is-open' : ''}`} aria-label={c.navigation}>
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="mobile-download" href="#download" onClick={() => setMenuOpen(false)}>{t.ctaPrimary}</a>
        </nav>
        <div className="header-actions">
          <button type="button" className="lang-toggle" onClick={changeLanguage}><Icon name="globe" />{t.langSwitch}</button>
          <a className="btn btn--small btn--primary header-download" href="#download">{t.ctaPrimary}<Icon name="download" /></a>
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? c.close : c.menu} onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? 'close' : 'menu'} /></button>
        </div>
      </div>
    </header>

    <main id="main">
      <section id="top" className="hero" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true" />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow"><span className="status-dot" />{c.eyebrow}</p>
            <h1 id="hero-title">{c.headline[0]}<br /><span>{c.headline[1]}</span></h1>
            <p className="hero__lead">{c.lead}</p>
            <div className="hero__actions"><a className="btn btn--primary" href="#download">{t.ctaPrimary}<Icon name="arrow" className="direction-arrow" /></a><a className="btn btn--ghost" href="#features">{c.discover}<span className="down-arrow">↓</span></a></div>
            <p className="hero__availability"><span>iOS</span><span>Android</span><span>Web</span><i />{c.available}</p>
          </div>
          <HeroScene lang={lang} />
        </div>
        <div className="shell hero__bottom"><span className="hero__signature">A LITTLE CLOSER. EVERY DAY.</span><a href="#about">{c.scroll}<span>↓</span></a><span className="hero__edition">LANCHAT / CONNECTED BY YOU</span></div>
      </section>

      <div className="principles-strip"><div className="shell">{c.principles.map((item, i) => <span key={item}><Icon name={['chat', 'people', 'shield', 'globe'][i]} />{item}<i>✦</i></span>)}</div></div>

      <section id="features" className="shell section features" aria-labelledby="features-title">
        <div className="section-head" data-reveal><div><p className="eyebrow">01 / {c.featuresLabel}</p><h2 id="features-title">{c.featuresTitle}</h2></div><p className="section-lead">{c.featuresLead}</p></div>
        <div data-reveal><FeatureOrbit key={lang} chapters={t.chapters} hint={t.featuresHint} prevLabel={t.featuresPrev} nextLabel={t.featuresNext} /></div>
        <div className="feature-extras" data-reveal>{t.extras.map(item => <span key={item}><Icon name="check" />{item}</span>)}</div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title">
        <div className="shell about-grid">
          <div className="about-art" data-reveal aria-hidden="true"><div className="connection-ring connection-ring--outer" /><div className="connection-ring connection-ring--inner" /><div className="about-art__logo"><img src="/brand/logo.webp" alt="" /></div><div className="connection-node node-one"><Icon name="heart" /></div><div className="connection-node node-two"><Icon name="chat" /></div><div className="connection-node node-three"><Icon name="mic" /></div><span className="about-art__word">closer.</span><span className="about-art__caption">THE SPACE BETWEEN US, REIMAGINED.</span></div>
          <div className="about-copy" data-reveal><p className="eyebrow">02 / {c.aboutLabel}</p><h2 id="about-title">{c.aboutTitle}</h2><p>{c.aboutText}</p><p>{c.aboutSecond}</p><div className="about-note"><span>✦</span>{c.aboutNote}</div></div>
        </div>
      </section>

      <section id="vision" className="shell section vision-section" aria-labelledby="vision-title">
        <div className="section-head" data-reveal><div><p className="eyebrow">03 / {c.visionLabel}</p><h2 id="vision-title">{c.visionTitle}</h2></div><p className="section-lead">{c.visionLead}</p></div>
        <div className="purpose-grid">{c.purpose.map((item, i) => <article className={`purpose-card ${i === 0 ? 'purpose-card--gold' : ''}`} key={item.label} data-reveal style={{ '--delay': `${i * 90}ms` } as CSSProperties}><div className="purpose-card__top"><span>{item.label}</span><Icon name={item.icon} /></div><span className="purpose-card__index" aria-hidden="true">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        <div className="values" data-reveal><p className="eyebrow">{c.valuesLabel}</p><div className="values__grid">{c.values.map((value, i) => <div key={value.title}><span className="value-number">0{i + 1}</span><h3>{value.title}</h3><p>{value.text}</p></div>)}</div></div>
      </section>

      <section id="everyday" className="everyday-section" aria-labelledby="everyday-title">
        <div className="shell section">
          <div className="section-head" data-reveal><div><p className="eyebrow">04 / {c.lifeLabel}</p><h2 id="everyday-title">{c.lifeTitle}</h2></div><p className="section-lead">{c.lifeLead}</p></div>
          <div className="audience-tabs" role="tablist" aria-label={c.lifeLabel} onKeyDown={audienceKeys}>{c.audiences.map((item, i) => <button type="button" role="tab" key={item.tab} id={`${audienceId}-tab-${i}`} aria-selected={audience === i} aria-controls={`${audienceId}-panel`} tabIndex={audience === i ? 0 : -1} onClick={() => setAudience(i)}><Icon name={item.icon} />{item.tab}</button>)}</div>
          <div className="audience-panel" role="tabpanel" id={`${audienceId}-panel`} aria-labelledby={`${audienceId}-tab-${audience}`} tabIndex={0}>
            <div className="audience-copy" key={`copy-${audience}-${lang}`}><h3>{selected.title}</h3><p>{selected.text}</p><ul>{selected.points.map(point => <li key={point}><Icon name="check" />{point}</li>)}</ul><a className="text-link" href="#download">{t.ctaPrimary}<Icon name="arrow" className="direction-arrow" /></a></div>
            <div className="conversation-preview" key={`preview-${audience}-${lang}`} aria-hidden="true"><div className="conversation-preview__header"><span className="mock-avatar"><Icon name={selected.icon} /></span><strong>{selected.room}</strong><span>•••</span></div><div className="conversation-preview__body">{selected.messages.map((message, i) => <div className={`preview-bubble ${i === 2 ? 'preview-bubble--gold' : ''}`} key={message} style={{ '--delay': `${i * 120}ms` } as CSSProperties}><span className="bubble-avatar">{(lang === 'ar' ? ['م', 'س', 'ن'] : ['M', 'S', 'N'])[i]}</span><p>{message}<small>10:{24 + i} <span>✓✓</span></small></p></div>)}</div><div className="conversation-preview__caption">{c.preview}</div></div>
          </div>
        </div>
      </section>

      <section className="shell section steps-section" aria-labelledby="steps-title">
        <div className="section-head section-head--center" data-reveal><p className="eyebrow">05 / {c.stepsLabel}</p><h2 id="steps-title">{c.stepsTitle}</h2><p className="section-lead">{c.stepsLead}</p></div>
        <ol className="steps">{c.steps.map((step, i) => <li key={step.title} data-reveal style={{ '--delay': `${i * 100}ms` } as CSSProperties}><span className="step-number">0{i + 1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>

      <section className="shell web-section" aria-labelledby="web-title">
        <div className="web-copy" data-reveal><p className="eyebrow">{c.webLabel}</p><h2 id="web-title">{c.webTitle}</h2><p>{c.webText}</p><a className="btn btn--primary" href={STORE_URLS.web} target="_blank" rel="noopener noreferrer">{c.webCta}<Icon name="arrow" className="direction-arrow" /></a><small>{c.webNote}</small></div>
        <div className="web-visual" data-reveal aria-hidden="true"><div className="browser-mock"><div className="browser-mock__bar"><div><i /><i /><i /></div><span><Icon name="lock" />web.lanchat.net</span></div><div className="browser-mock__body"><aside><img src="/brand/logo.webp" alt="" /><Icon name="chat" /><Icon name="people" /><Icon name="phone" /><Icon name="globe" /></aside><div className="browser-mock__conversation"><span className="browser-mock__label">LanChat <span>Web</span></span><div className="browser-bubble">{c.chat.first}</div><div className="browser-bubble browser-bubble--gold">{c.chat.second}</div><div className="browser-bubble">{c.chat.third}</div><div className="browser-composer"><span>{c.chat.input}</span><Icon name="mic" /></div></div></div></div><div className="linked-badge"><Icon name="check" />{c.webSteps[2]}</div></div>
      </section>

      <section id="privacy" className="shell section privacy-section" aria-labelledby="privacy-title">
        <div className="section-head" data-reveal><div><p className="eyebrow">06 / {c.privacyLabel}</p><h2 id="privacy-title">{c.privacyTitle}</h2></div><p className="section-lead">{c.privacyLead}</p></div>
        <div className="privacy-grid">{c.privacy.map((item, i) => <article key={item.title} data-reveal style={{ '--delay': `${i * 90}ms` } as CSSProperties}><span className="privacy-icon"><Icon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>

      <section id="faq" className="shell section faq-section" aria-labelledby="faq-title">
        <div className="faq-intro" data-reveal><p className="eyebrow">07 / {c.faqLabel}</p><h2 id="faq-title">{c.faqTitle}</h2><p className="section-lead">{c.faqLead}</p><a className="text-link" href={`mailto:${t.support}`}>{c.contactCta}<Icon name="arrow" className="direction-arrow" /></a></div>
        <div className="faq-list" data-reveal>{c.faq.map((item, i) => <details key={item.question}><summary><span className="faq-index">0{i + 1}</span><span>{item.question}</span><Icon name="plus" /></summary><div className="faq-answer"><p>{item.answer}</p></div></details>)}</div>
      </section>

      <section className="shell contact-section" data-reveal aria-labelledby="contact-title"><span className="contact-icon" aria-hidden="true"><Icon name="mail" /></span><div><p className="eyebrow">{c.contactLabel}</p><h2 id="contact-title">{c.contactTitle}</h2><p>{c.contactText}</p></div><a className="btn btn--ghost" href={`mailto:${t.support}`}>{c.contactCta}<Icon name="arrow" className="direction-arrow" /></a></section>

      <section id="download" className="download-section" aria-labelledby="download-title"><div className="download-orbit" aria-hidden="true" /><div className="shell download-inner" data-reveal><img src="/brand/logo.webp" alt="" className="download-logo" /><p className="eyebrow">{c.downloadLabel}</p><h2 id="download-title">{c.downloadTitle}</h2><p>{c.downloadText}</p><StoreButtons getOn={t.getOn} appStore={t.appStore} googlePlay={t.googlePlay} /><a className="download-web" href={STORE_URLS.web} target="_blank" rel="noopener noreferrer">{t.ctaWeb}<Icon name="arrow" className="direction-arrow" /></a></div></section>
    </main>

    <footer className="footer"><div className="shell footer-main"><div className="footer-brand"><a className="brand-lockup" href="#top" aria-label="LanChat"><img src="/brand/logo.webp" alt="" /><span>Lan<span>Chat</span><i /></span></a><p>{c.footerStatement}</p></div><div><h3>{c.footerCompany}</h3><nav aria-label={c.company}><a href="#about">{c.aboutNav}</a><a href="#vision">{c.visionNav}</a><a href="#privacy">{t.navPrivacy}</a><a href="#faq">{c.faqNav}</a></nav></div><div><h3>{t.footerExplore}</h3><nav aria-label={t.footerExplore}><a href="#features">{t.navFeatures}</a><a href="#everyday">{c.lifeTitle}</a><a href="#download">{t.navDownload}</a><a href={STORE_URLS.web} target="_blank" rel="noopener noreferrer">LanChat Web ↗</a></nav></div><div className="footer-contact"><h3>{c.footerConnect}</h3><a href={`mailto:${t.support}`} dir="ltr">{t.support}</a><p>{c.contactLabel}</p><button type="button" className="lang-toggle" onClick={changeLanguage}><Icon name="globe" />{t.langSwitch}</button></div></div><div className="shell footer-bottom"><p>© {new Date().getFullYear()} · {t.footerCopy.replace(' ©', '')}</p><a className="footer-madeby" href="https://fmnsoft.com/" target="_blank" rel="noopener noreferrer">{c.madeBy}</a><span>MADE FOR REAL CONNECTION.</span><a href="#top">{c.backTop} ↑</a></div></footer>
  </div>;
}

export default App;
