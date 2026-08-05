import {
  useCallback,
  useEffect,
  useId,
  useState,
  type CSSProperties,
} from "react";
import type { FeatureChapter } from "../content";

type FeatureOrbitProps = {
  chapters: readonly FeatureChapter[];
  hint: string;
  prevLabel: string;
  nextLabel: string;
};

/** Interactive gold dial — one feature at a time, orbit nodes around the crest. */
export function FeatureOrbit({
  chapters,
  hint,
  prevLabel,
  nextLabel,
}: FeatureOrbitProps) {
  const uid = useId();
  const [active, setActive] = useState(0);
  const total = chapters.length;
  const chapter = chapters[active] ?? chapters[0];

  const go = useCallback(
    (index: number) => {
      if (!total) return;
      setActive(((index % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        go(active - 1);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        go(active + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  if (!chapter) return null;

  return (
    <div className="orbit-theater" data-active={chapter.id}>
      <div className="orbit-dial" role="tablist" aria-label={hint}>
        <div className="orbit-dial__ring" aria-hidden />
        <div className="orbit-dial__ring orbit-dial__ring--inner" aria-hidden />
        <div className="orbit-dial__core" aria-hidden>
          <img src="/brand/logo.png" alt="" />
          <span className="orbit-dial__index">{chapter.index}</span>
        </div>

        {chapters.map((item, index) => {
          const angle = (360 / total) * index - 90;
          const selected = index === active;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`${uid}-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              className={`orbit-node ${selected ? "is-active" : ""}`}
              style={{ "--a": `${angle}deg` } as CSSProperties}
              onClick={() => go(index)}
            >
              <span className="orbit-node__dot" aria-hidden />
              <span className="orbit-node__label">{item.short}</span>
            </button>
          );
        })}
      </div>

      <div
        className="orbit-stage"
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${chapter.id}`}
        key={chapter.id}
      >
        <p className="orbit-stage__kicker">{chapter.index}</p>
        <h3 className="orbit-stage__title">{chapter.title}</h3>
        <p className="orbit-stage__desc">{chapter.desc}</p>
        <ul className="orbit-stage__points">
          {chapter.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>

        <div className="orbit-controls">
          <button
            type="button"
            className="orbit-controls__btn"
            onClick={() => go(active - 1)}
            aria-label={prevLabel}
          >
            ←
          </button>
          <p className="orbit-controls__hint">{hint}</p>
          <button
            type="button"
            className="orbit-controls__btn"
            onClick={() => go(active + 1)}
            aria-label={nextLabel}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
