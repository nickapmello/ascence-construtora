import React from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_PILLARS } from "../data/mockData";

export default function WayOfBuilding() {
  return (
    <div className="way-of-building-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Compromisso Institucional</span>
          <h1 className="display-title">Nosso Jeito de Construir</h1>
          <p className="body-text lead-text mx-auto mt-4">
            Quatro princípios que orientam o trabalho da ASCENCE com organização, cuidado e respeito às pessoas.
          </p>
        </div>

        {/* Pillars Deep Dive */}
        <div className="pillars-stream mt-8">
          {CONSTRUCTION_PILLARS.map((pilar) => (
            <div key={pilar.id} className="pillar-detail-card">
              <div className="pillar-card-header">
                <span className="pillar-number">{pilar.number}</span>
                <h3 className="pillar-title">{pilar.title}</h3>
              </div>
              <p className="pillar-desc">{pilar.description}</p>
            </div>
          ))}
        </div>

        {/* Banner Lifestyle */}
        <div className="lifestyle-banner-callout mt-8">
          <div className="callout-content text-center mx-auto">
            <h2 className="callout-title">Construir com cuidado é respeitar a vida de quem vai morar.</h2>
            <p className="callout-desc mt-4">
              Cada ambiente é idealizado pensando na tranquilidade, na funcionalidade e no conforto da sua família.
            </p>
            <div className="mt-6">
              <Link to="/lancamento" className="btn btn-gold">
                <span>Conheça Nosso Lançamento</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .way-of-building-page {
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
        .pillars-stream {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .pillar-detail-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          transition: var(--transition-fast);
        }
        .pillar-detail-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-4px);
        }
        .pillar-card-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }
        .pillar-number {
          font-family: var(--font-serif);
          font-size: 2.2rem;
          color: var(--accent-gold);
        }
        .pillar-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 300;
        }
        .pillar-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .lifestyle-banner-callout {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 5rem 2rem;
          border-radius: 4px;
          margin-top: 5rem;
        }
        .callout-content {
          max-width: 750px;
        }
        .callout-title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 300;
          line-height: 1.2;
        }
        .callout-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
        }
        @media (max-width: 900px) {
          .way-of-building-page {
            padding-top: 7rem;
          }
          .pillar-detail-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
