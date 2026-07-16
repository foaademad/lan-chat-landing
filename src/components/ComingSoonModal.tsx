type ComingSoonModalProps = {
  open: boolean;
  title: string;
  body: string;
  okLabel: string;
  onClose: () => void;
};

export function ComingSoonModal({
  open,
  title,
  body,
  okLabel,
  onClose,
}: ComingSoonModalProps) {
  if (!open) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-title"
      onClick={onClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__badge" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 3v10"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="12" cy="18.5" r="1.6" fill="currentColor" />
            <path
              d="M5 9a7 7 0 0 1 14 0"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3 id="coming-soon-title">{title}</h3>
        <p>{body}</p>
        <div className="modal__actions">
          <button type="button" className="modal__btn" onClick={onClose}>
            {okLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
