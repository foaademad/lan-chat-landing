type StoreButtonsProps = {
  getOn: string;
  appStore: string;
  googlePlay: string;
  onStoreClick: (store: "ios" | "android") => void;
};

function AppleIcon() {
  return (
    <svg className="store-btn__icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.37 12.74c.02 2.34 2.05 3.12 2.08 3.13-.02.06-.32 1.12-1.07 2.22-.64.95-1.31 1.9-2.36 1.92-1.03.02-1.36-.61-2.54-.61s-1.55.59-2.52.63c-1.01.04-1.78-1.03-2.43-1.97-1.33-1.93-2.34-5.45-0.98-7.83.68-1.18 1.89-1.93 3.2-1.95 1 .02 1.94.67 2.54.67.61 0 1.76-.83 2.97-.71.51.02 1.93.2 2.85 1.54-.07.05-1.7 1-1.74 2.96ZM14.7 6.2c.54-.66.91-1.57.81-2.48-.78.03-1.73.52-2.29 1.18-.5.58-.94 1.51-.82 2.4.87.07 1.76-.44 2.3-1.1Z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="store-btn__icon" viewBox="0 0 24 24" aria-hidden>
      <path fill="#EA4335" d="M3.6 2.3c-.4.2-.6.6-.6 1.1v17.2c0 .5.2.9.6 1.1l9.7-9.7L3.6 2.3Z" />
      <path fill="#FBBC04" d="m14.1 12.9-1.8-1.8 9.1-5.3c.4.3.7.8.7 1.4v10.6c0 .6-.3 1.1-.7 1.4l-7.3-6.3Z" />
      <path fill="#34A853" d="M14.1 12.9 3.6 21.7c.2.1.4.2.7.2.3 0 .5-.1.8-.3l10.6-6.1-1.6-2.6Z" />
      <path fill="#4285F4" d="M21.4 6.8 14.1 12.9l1.8 1.8 5.5-3.2c.4-.2.6-.6.6-1.1 0-.5-.2-.9-.6-1.2Z" />
    </svg>
  );
}

export function StoreButtons({
  getOn,
  appStore,
  googlePlay,
  onStoreClick,
}: StoreButtonsProps) {
  return (
    <div className="store-row">
      <button
        type="button"
        className="store-btn store-btn--gold"
        onClick={() => onStoreClick("ios")}
      >
        <AppleIcon />
        <span className="store-btn__meta">
          <span className="store-btn__eyebrow">{getOn}</span>
          <span className="store-btn__name">{appStore}</span>
        </span>
      </button>
      <button type="button" className="store-btn" onClick={() => onStoreClick("android")}>
        <PlayIcon />
        <span className="store-btn__meta">
          <span className="store-btn__eyebrow">{getOn}</span>
          <span className="store-btn__name">{googlePlay}</span>
        </span>
      </button>
    </div>
  );
}
