import React, { useState } from "react";

export default function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  aspectRatio = "4 / 3",
  eager = false,
}) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`image-placeholder ${loaded ? "loaded" : ""} ${className}`}
      style={{ aspectRatio }}
    >
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="image-fallback" aria-label={alt}>
          Imagem indisponível
        </div>
      )}

      <style>{`
        .image-placeholder {
          position: relative;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
          background: linear-gradient(
            110deg,
            var(--bg-secondary) 8%,
            var(--accent-gold-light) 18%,
            var(--bg-secondary) 33%
          );
          background-size: 200% 100%;
          animation: imageLoading 1.5s linear infinite;
        }

        .image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.5s ease;
          display: block;
        }

        .image-placeholder.loaded {
          animation: none;
          background: var(--bg-secondary);
        }

        .image-placeholder.loaded img {
          opacity: 1;
        }

        .image-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          background: var(--bg-secondary);
          font-size: 0.85rem;
          font-family: var(--font-sans);
        }

        @keyframes imageLoading {
          to {
            background-position-x: -200%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-placeholder {
            animation: none;
          }

          .image-placeholder img {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
