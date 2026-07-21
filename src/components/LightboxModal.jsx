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
          background: rgba(18, 20, 23, 0.92);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }
        .lightbox-content {
          position: relative;
          max-width: 1000px;
          width: 100%;
          background-color: var(--bg-dark);
          border: 1px solid var(--border-dark);
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .lightbox-close {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-light);
          font-size: 2.5rem;
          cursor: pointer;
          z-index: 10;
          line-height: 1;
          transition: color 0.2s ease;
        }
        .lightbox-close:hover {
          color: var(--accent-gold);
        }
        .lightbox-image-wrapper {
          width: 100%;
          max-height: 65vh;
          overflow: hidden;
          background-color: #000;
        }
        .lightbox-image {
          width: 100%;
          height: 100%;
          max-height: 65vh;
          object-fit: cover;
          display: block;
        }
        .lightbox-info {
          padding: 2rem 2.5rem;
          color: var(--text-light);
        }
        .lightbox-location {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.4rem;
        }
        .lightbox-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 0.5rem;
        }
        .lightbox-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 1rem;
          }
          .lightbox-info {
            padding: 1.5rem;
          }
          .lightbox-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
