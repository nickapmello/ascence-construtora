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
            Metodologia pautada no rigor técnico, no conforto humano e na transparência ética em todas as fases da obra.
          </p>
        </div>

        {/* Pillars Deep Dive */}
        <div className="pillars-stream mt-8">
          {CONSTRUCTION_PILLARS.map((pilar, idx) => (
            <div key={pilar.id} className="pillar-detail-card">
              <div className="pillar-card-header">
                <span className="pillar-number">{pilar.number}</span>
                <h3 className="pillar-title">{pilar.title}</h3>
              </div>
              <p className="pillar-desc">{pilar.description}</p>
              <div className="pillar-subpoints mt-4">
                {idx === 0 && (
                  <ul>
                    <li>Fundações testadas e auditadas por engenharia independente</li>
                    <li>Cálculos estruturais projetados para solidez atemporal</li>
                    <li>Seleção criteriosa de matérias-primas e fornecedores</li>
                  </ul>
                )}
                {idx === 1 && (
                  <ul>
                    <li>Estudo detalhado de orientação solar e ventilação natural</li>
                    <li>Integração orgânica de áreas internas com áreas externas</li>
                    <li>Plantas pensadas para o aproveitamento inteligente de espaço</li>
                  </ul>
                )}
                {idx === 2 && (
                  <ul>
                    <li>Atenuação acústica em lajes e tubulações sanitárias</li>
                    <li>Esquadrias de alta performance com controle térmico e ruído</li>
                    <li>Detalhamento de marcenaria e encontro de materiais nobres</li>
                  </ul>
                )}
                {idx === 3 && (
                  <ul>
                    <li>Comunicação contínua e relatórios claros de evolução</li>
                    <li>Cumprimento rigoroso de cronogramas e orçamentos acordados</li>
                    <li>Atendimento pós-obra consultivo e dedicado</li>
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Banner Lifestyle */}
        <div className="lifestyle-banner-callout mt-8">
          <div className="callout-content text-center mx-auto">
            <h2 className="callout-title">Construir com cuidado é respeitar a vida de quem vai morar.</h2>
            <p className="callout-desc mt-4">
              Cada tijolo, laje e janela é instalado pensando na tranquilidade e no conforto dos próximos anos da sua família.
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
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          margin-bottom: 1.5rem;
        }
        .pillar-subpoints ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          border-top: 1px solid var(--border-light);
          padding-top: 1.25rem;
        }
        .pillar-subpoints li {
          font-size: 0.85rem;
          color: var(--text-primary);
          position: relative;
          padding-left: 1.2rem;
        }
        .pillar-subpoints li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: var(--accent-gold-dark);
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
