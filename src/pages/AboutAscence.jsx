import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/mockData";
import symbolDark from "../assets/symbol_3_copper_charcoal.png";

export default function AboutAscence() {
  return (
    <div className="about-ascence-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Institucional</span>
          <h1 className="display-title">A ASCENCE Construtora</h1>
          <p className="body-text lead-text mx-auto mt-4">
            Uma empresa pautada na paixão pela boa arquitetura, no respeito à vida das famílias e na busca contínua pela excelência construtiva em Arapongas.
          </p>
        </div>

        {/* Story Section */}
        <div className="about-narrative-grid mt-8">
          <div className="narrative-text-col">
            <span className="overline">Nossa História</span>
            <h2 className="section-title">Confiança e solidez construídas com o tempo.</h2>
            <p className="body-text mt-4">
              {COMPANY_INFO.aboutFull}
            </p>
            <p className="body-text mt-4">
              Não buscamos a produção em massa nem a padronização simplista. Acreditamos que cada edificação deve ser tratada como um compromisso de vida, unindo estética atemporal, funcionalidade inteligente e acolhimento humano.
            </p>
          </div>
          <div className="narrative-image-col">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Arquitetura de luxo contemporânea ASCENCE"
              className="narrative-img"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section mt-8">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Nossos Valores</span>
            <h2 className="section-title">O que orienta cada decisão</h2>
          </div>

          <div className="values-cards-grid">
            <div className="value-card">
              <div className="value-icon-symbol">
                <img src={symbolDark} alt="Símbolo ASCENCE" className="symbol-icon" />
              </div>
              <h3 className="value-title">Respeito ao Cliente</h3>
              <p className="value-desc">
                Tratamos a construção do imóvel com a seriedade e o carinho de quem entende que ali será o refúgio diário da família.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-symbol">
                <img src={symbolDark} alt="Símbolo ASCENCE" className="symbol-icon" />
              </div>
              <h3 className="value-title">Excelência Técnica</h3>
              <p className="value-desc">
                Cálculo estrutural rigoroso, isolamento termoacústico e materiais comprovados para garantir longevidade.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-symbol">
                <img src={symbolDark} alt="Símbolo ASCENCE" className="symbol-icon" />
              </div>
              <h3 className="value-title">Transparência Ética</h3>
              <p className="value-desc">
                Relacionamento claro e direto em todas as fases da obra, sem exageros publicitários ou surpresas contratuais.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="page-cta-box text-center mt-8">
          <h2 className="cta-title">Quer saber mais sobre nossa trajetória?</h2>
          <div className="cta-btns-row mt-4">
            <Link to="/nossa-trajetoria" className="btn btn-gold">
              <span>Conheça Nossa Trajetória</span>
            </Link>
            <Link to="/contato" className="btn btn-secondary">
              <span>Fale Conosco</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .about-ascence-page {
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
        .about-narrative-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .narrative-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          border-radius: 2px;
        }
        .values-section {
          padding: 5rem 0;
          border-top: 1px solid var(--border-light);
        }
        .values-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2.5rem;
        }
        .value-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem 2rem;
          text-align: center;
          transition: var(--transition-fast);
        }
        .value-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-4px);
        }
        .symbol-icon {
          height: 28px;
          opacity: 0.8;
          margin-bottom: 1.25rem;
        }
        .value-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .value-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
          .about-narrative-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .about-ascence-page {
            padding-top: 7rem;
          }
        }
      `}</style>
    </div>
  );
}
