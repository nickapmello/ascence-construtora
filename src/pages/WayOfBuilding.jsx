import React from "react";
import { Link } from "react-router-dom";
import { CONSTRUCTION_PILLARS } from "../data/mockData";

export default function WayOfBuilding() {
  return (
    <div className="way-of-building-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Compromisso com a Qualidade</span>
          <h1 className="display-title">Nosso Jeito de Construir</h1>
          <p className="body-text lead-text mx-auto mt-4">
            Estruturamos nosso trabalho com base em quatro pilares fundamentais, orientados pelo respeito ao cliente, pela organização de etapas e pela busca de soluções duradouras.
          </p>
        </div>

        {/* Pillars Stream */}
        <div className="pillars-stream mt-8">
          {CONSTRUCTION_PILLARS.map((pillar) => (
            <div key={pillar.id} className="pillar-detail-card">
              <div className="pillar-card-header">
                <span className="pillar-number">{pillar.number}</span>
                <h2 className="pillar-title">{pillar.title}</h2>
              </div>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Institutional Callout */}
        <div className="lifestyle-banner-callout text-center mx-auto">
          <div className="callout-content mx-auto">
            <span className="overline gold-overline">Filosofia de Trabalho</span>
            <h2 className="callout-title">Construir com proximidade e responsabilidade.</h2>
            <p className="callout-desc mt-4">
              Cada projeto reflete a dedicação contínua da equipe da ASCENCE, combinando rigor técnico, clareza no relacionamento e o cuidado de quem entende o valor do lar.
            </p>
            <div className="mt-6">
              <Link to="/lancamento" className="btn btn-gold">
                <span>Conheça nosso lançamento</span>
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
          color: var(--accent-gold-dark);
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
