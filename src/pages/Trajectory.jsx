import React from "react";
import { Link } from "react-router-dom";
import { TRAJECTORY_CHAPTERS } from "../data/mockData";

export default function Trajectory() {
  return (
    <div className="trajectory-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Nossa Evolução</span>
          <h1 className="display-title">Nossa Trajetória</h1>
          <p className="body-text lead-text mx-auto mt-4">
            Uma história construída com experiência, aprendizado contínuo e a paixão por criar lares que elevam a qualidade de vida.
          </p>
        </div>

        {/* Detailed Timeline Stream */}
        <div className="timeline-stream mt-8">
          {TRAJECTORY_CHAPTERS.map((chap, idx) => (
            <div key={chap.chapter} className={`timeline-block ${idx % 2 === 1 ? "reverse" : ""}`}>
              <div className="timeline-content-card">
                <span className="timeline-num">{chap.chapter}</span>
                <span className="timeline-subtitle">{chap.subtitle}</span>
                <h3 className="timeline-title">{chap.title}</h3>
                <p className="timeline-desc">{chap.description}</p>
              </div>
              <div className="timeline-image-wrapper">
                <img
                  src={
                    idx === 0
                      ? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                      : idx === 1
                      ? "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                      : idx === 2
                      ? "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
                      : "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
                  }
                  alt={chap.title}
                  className="timeline-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="page-cta-box text-center mt-8">
          <h2 className="cta-title">Quer entender como construímos?</h2>
          <div className="cta-btns-row mt-4">
            <Link to="/nosso-jeito-de-construir" className="btn btn-gold">
              <span>Conheça Nosso Jeito de Construir</span>
            </Link>
            <Link to="/lancamento" className="btn btn-secondary text-white-btn">
              <span>Ver Nosso Lançamento</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .trajectory-page {
          padding-top: 9rem;
          padding-bottom: 6rem;
          background-color: var(--bg-primary);
        }
        .page-header {
          max-width: 800px;
          margin-bottom: 4rem;
        }
        .lead-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .timeline-stream {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }
        .timeline-block {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .timeline-block.reverse {
          grid-template-columns: 1fr 1.1fr;
        }
        .timeline-block.reverse .timeline-content-card {
          order: 2;
        }
        .timeline-block.reverse .timeline-image-wrapper {
          order: 1;
        }
        .timeline-content-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3.5rem 3rem;
          border-radius: 4px;
        }
        .timeline-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--accent-gold);
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .timeline-subtitle {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          margin-bottom: 0.75rem;
          display: block;
        }
        .timeline-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 300;
          margin-bottom: 1.25rem;
        }
        .timeline-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .timeline-img {
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 2px;
        }
        .page-cta-box {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 4rem 2rem;
          border-radius: 4px;
        }
        .cta-title {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 300;
        }
        .cta-btns-row {
          display: flex;
          justify-content: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .timeline-block, .timeline-block.reverse {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .timeline-block.reverse .timeline-content-card {
            order: 1;
          }
          .timeline-block.reverse .timeline-image-wrapper {
            order: 2;
          }
          .timeline-content-card {
            padding: 2rem 1.5rem;
          }
          .trajectory-page {
            padding-top: 7rem;
          }
        }
      `}</style>
    </div>
  );
}
