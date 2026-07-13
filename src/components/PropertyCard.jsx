import React from "react";

export default function PropertyCard({ property, onViewDetails }) {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "lançamento":
        return "status-badge status-launch";
      case "em construção":
        return "status-badge status-construction";
      case "pronto para morar":
        return "status-badge status-ready";
      default:
        return "status-badge status-soon";
    }
  };

  return (
    <div className="property-card" onClick={onViewDetails}>
      <div className="card-image-wrapper">
        <img
          src={property.images[0]}
          alt={property.name}
          className="card-image"
          loading="lazy"
        />
        <span className={getStatusClass(property.status)}>{property.status}</span>
      </div>

      <div className="card-content">
        <span className="card-location">
          {property.neighborhood} &middot; {property.city}
        </span>
        <h3 className="card-title">{property.name}</h3>
        <p className="card-tagline">{property.tagline}</p>

        <div className="card-specs">
          <div className="spec-item">
            <span className="spec-label">Área</span>
            <span className="spec-val">{property.areaRange}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Suítes</span>
            <span className="spec-val">{property.suites}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Vagas</span>
            <span className="spec-val">{property.parkingSpots}</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Entrega</span>
            <span className="spec-val">{property.deliveryDate}</span>
          </div>
        </div>

        <div className="card-footer">
          <button className="card-btn" onClick={(e) => { e.stopPropagation(); onViewDetails(); }}>
            <span>Ver detalhes</span>
            <svg className="card-btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .property-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          cursor: pointer;
          transition: var(--transition-smooth);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .property-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(28, 28, 26, 0.04);
          border-color: var(--accent-gold);
        }
        .card-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 66.66%; /* 3:2 Aspect Ratio */
          overflow: hidden;
          background-color: #eee;
        }
        .card-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .property-card:hover .card-image {
          transform: scale(1.08);
        }
        .status-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          padding: 0.4rem 1rem;
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          z-index: 2;
        }
        .status-launch {
          background-color: var(--accent-gold-light);
          color: var(--accent-gold-dark);
          border: 1px solid var(--accent-gold);
        }
        .status-construction {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }
        .status-ready {
          background-color: #f0f7f4;
          color: #2b704c;
          border: 1px solid rgba(43, 112, 76, 0.2);
        }
        .status-soon {
          background-color: var(--bg-primary);
          color: var(--text-muted);
          border: 1px solid var(--border-light);
        }
        .card-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-location {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          margin-bottom: 0.5rem;
        }
        .card-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 1.2;
          margin-bottom: 0.6rem;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .property-card:hover .card-title {
          color: var(--accent-gold-dark);
        }
        .card-tagline {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card-specs {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          padding: 1.2rem 0;
          margin-top: auto;
          margin-bottom: 1.5rem;
        }
        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .spec-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .spec-val {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }
        .card-btn {
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          cursor: pointer;
          padding: 0.25rem 0;
          position: relative;
        }
        .card-btn-arrow {
          width: 14px;
          height: 14px;
          transition: transform 0.3s ease;
        }
        .property-card:hover .card-btn-arrow {
          transform: translateX(5px);
        }
      `}</style>
    </div>
  );
}
