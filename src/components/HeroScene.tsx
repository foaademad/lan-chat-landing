import type { Lang } from '../content';
import { landingCopy } from '../landingContent';
import { Icon } from './Icon';

export function VoiceWave({ small = false }: { small?: boolean }) {
  return <span className={`voice-wave ${small ? 'voice-wave--small' : ''}`} aria-hidden="true">{Array.from({ length: small ? 13 : 27 }, (_, i) => <i key={i} style={{ height: `${8 + ((i * 17 + 7) % 26)}px`, animationDelay: `${i * 65}ms` }} />)}</span>;
}

export function HeroScene({ lang }: { lang: Lang }) {
  const t = landingCopy[lang];
  return <figure className="hero-scene">
    <div className="scene-halo" aria-hidden="true"><span /><span /><span /></div>
    <div className="scene-spark scene-spark--one" aria-hidden="true">✦</div>
    <div className="scene-spark scene-spark--two" aria-hidden="true">✦</div>
    <div className="scene-card scene-card--room" aria-hidden="true">
      <span className="scene-card__icon"><Icon name="mic" /></span>
      <div><strong>{t.chat.room}</strong><small>{t.chat.roomSub}</small></div>
      <span className="live-bars"><i /><i /><i /></span>
    </div>
    <div className="chat-device" aria-hidden="true">
      <div className="chat-device__island" />
      <div className="chat-device__status"><span>9:41</span><span>▮▮▮ ▰</span></div>
      <div className="chat-device__header">
        <span className="mock-avatar mock-avatar--gold"><Icon name="people" /></span>
        <div><strong>{t.chat.title}</strong><small>{t.chat.subtitle}</small></div>
        <Icon name="video" />
      </div>
      <div className="chat-device__body">
        <span className="mock-date">{t.chat.today}</span>
        <div className="mock-message mock-message--incoming">{t.chat.first}<small>10:24</small></div>
        <div className="mock-message mock-message--outgoing">{t.chat.second}<small>10:25 <span>✓✓</span></small></div>
        <div className="mock-message mock-message--incoming mock-voice"><span className="play-icon">▶</span><VoiceWave small /><span>0:12</span></div>
        <div className="mock-message mock-message--outgoing">{t.chat.third}<small>10:26 <span>✓✓</span></small></div>
        <div className="mock-typing"><i /><i /><i /></div>
      </div>
      <div className="chat-device__composer"><Icon name="plus" /><span>{t.chat.input}</span><span className="composer-mic"><Icon name="mic" /></span></div>
      <span className="chat-device__home" />
    </div>
    <div className="scene-card scene-card--call" aria-hidden="true"><span className="scene-card__icon"><Icon name="phone" /></span><div><strong>{t.chat.call}</strong><small>{t.chat.callSub}</small></div><VoiceWave small /></div>
    <div className="scene-note" aria-hidden="true"><span>♡</span>{t.chat.status}</div>
    <figcaption>{t.preview}</figcaption>
  </figure>;
}
