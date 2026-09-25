import React, { useEffect } from "react";

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>
        <div className="lightbox-image-wrapper">
          <img src={item.image} alt={item.title} className="lightbox-image" />
        </div>
        <div className="lightbox-info">
          <span className="lightbox-location">{item.location} &middot; {item.yearPlaceholder}</span>
          <h3 className="lightbox-title">{item.title}</h3>
          <p className="lightbox-desc">{item.description}</p>
        </div>
      </div>

      <style>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(14, 16, 19, 0.94);
          backdrop-filter: blur(14px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          position: relative;
          max-width: 1100px;
          width: 100%;
          max-height: 92vh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-dark);
          border: 1px solid var(--border-dark);
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.65);
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(31, 34, 38, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: var(--text-light);
          font-size: 2rem;
          cursor: pointer;
          z-index: 25;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          transition: all 0.2s ease;
        }
        .lightbox-close:hover {
          background: var(--accent-gold-dark);
          border-color: var(--accent-gold-dark);
          color: #ffffff;
          transform: scale(1.06);
        }
        .lightbox-image-wrapper {
          width: 100%;
          flex: 1 1 auto;
          min-height: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #0b0d10;
          padding: 1.25rem;
          overflow: hidden;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 62vh;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 2px;
        }
        .lightbox-info {
          padding: 1.25rem 2rem;
          color: var(--text-light);
          background-color: var(--bg-dark);
          border-top: 1px solid var(--border-dark);
          flex-shrink: 0;
          overflow-y: auto;
          max-height: 28vh;
        }
        .lightbox-location {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--accent-gold-dark);
          display: block;
          margin-bottom: 0.35rem;
        }
        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 500;
          letter-spacing: -0.015em;
          margin-bottom: 0.35rem;
          line-height: 1.3;
        }
        .lightbox-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 0.75rem;
          }
          .lightbox-content {
            max-height: 94vh;
          }
          .lightbox-image-wrapper {
            padding: 0.75rem;
          }
          .lightbox-image {
            max-height: 48vh;
          }
          .lightbox-info {
            padding: 1rem 1.25rem;
            max-height: 38vh;
          }
          .lightbox-title {
            font-size: 1.25rem;
          }
          .lightbox-desc {
            font-size: 0.82rem;
          }
          .lightbox-close {
            top: 0.75rem;
            right: 0.75rem;
            width: 36px;
            height: 36px;
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  );
}
