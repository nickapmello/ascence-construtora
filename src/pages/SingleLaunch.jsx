import React from "react";
import { COMPANY_INFO, SINGLE_LAUNCH } from "../data/mockData";
import ContactForm from "../components/ContactForm";

export default function SingleLaunch() {
  return (
    <div className="single-launch-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline gold-overline">Próximo Capítulo em Arapongas</span>
          <h1 className="display-title">{SINGLE_LAUNCH.namePlaceholder}</h1>
          <p className="body-text lead-text mx-auto mt-4 text-center">
            {SINGLE_LAUNCH.concept}
          </p>
        </div>

        {/* Hero Banner for Launch */}
        <div className="launch-hero-card mt-6">
          <div className="launch-hero-image-wrapper">
            <img
              src={SINGLE_LAUNCH.imagePlaceholder}
              alt="Imagens conceituais do empreendimento"
              className="launch-hero-img"
            />
            <div className="launch-status-badge">
              <span>{SINGLE_LAUNCH.stagePlaceholder}</span>
            </div>
          </div>

          <div className="launch-hero-details-bar">
            <div className="detail-item">
              <span className="detail-label">Empreendimento</span>
              <span className="detail-val">{SINGLE_LAUNCH.namePlaceholder}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Localização</span>
              <span className="detail-val">{SINGLE_LAUNCH.locationPlaceholder}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estágio Construtivo</span>
              <span className="detail-val">{SINGLE_LAUNCH.stagePlaceholder}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Realização</span>
              <span className="detail-val">ASCENCE Construtora</span>
            </div>
          </div>
        </div>

        {/* Concept & Features Grid */}
        <div className="launch-content-grid mt-8">
          <div className="launch-narrative-col">
            <span className="overline">Conceito do Projeto</span>
            <h2 className="section-title">Engenharia e arquitetura voltadas ao bem-estar.</h2>
            <p className="body-text mt-4">
              Cada detalhe do nosso primeiro empreendimento em Arapongas foi planejado a partir da experiência acumulada em nossas obras residenciais. O projeto reúne a privacidade e o acabamento cuidadoso das casas de alto padrão à segurança e conveniência do morar contemporâneo.
            </p>
            <p className="body-text mt-4">
              Priorizamos a abundância de luz solar, a circulação de ar natural e soluções construtivas que oferecem proteção acústica entre os ambientes.
            </p>
            
            <div className="whatsapp-launch-cta-box mt-6">
              <h3 className="cta-box-title">Deseja receber informações exclusivas em primeira mão?</h3>
              <p className="cta-box-desc">
                Converse com nossa equipe para se cadastrar na lista de interesse do lançamento.
              </p>
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mt-4 inline-flex"
              >
                <span>Falar com a ASCENCE no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="launch-features-col">
            <h3 className="features-col-title">Diferenciais do Projeto</h3>
            <ul className="features-list">
              {SINGLE_LAUNCH.features.map((feat, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-bullet"></span>
                  <span className="feature-text">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interest Contact Form Section */}
        <div className="launch-contact-section mt-8" id="lista-de-interesse">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Lista de Interesse</span>
            <h2 className="section-title">Cadastre-se para receber atualizações</h2>
            <p className="section-desc">
              Preencha seus dados para ter atendimento prioritário assim que as informações oficiais do lançamento forem apresentadas.
            </p>
          </div>
          <div className="contact-form-container mx-auto" style={{ maxWidth: "720px" }}>
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        .single-launch-page {
          padding-top: 9rem;
          padding-bottom: 6rem;
          background-color: var(--bg-primary);
        }
        .page-header {
          max-width: 800px;
          margin-bottom: 3.5rem;
        }
        .lead-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .launch-hero-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          overflow: hidden;
        }
        .launch-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 480px;
          background-color: var(--bg-dark);
        }
        .launch-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .launch-status-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          background-color: var(--bg-dark);
          color: var(--accent-gold);
          border: 1px solid var(--accent-gold);
          padding: 0.5rem 1.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .launch-hero-details-bar {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          padding: 2rem 2.5rem;
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-top: 1px solid var(--border-dark);
        }
        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .detail-label {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
        }
        .detail-val {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-light);
        }
        .launch-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: start;
        }
        .whatsapp-launch-cta-box {
          background-color: var(--accent-gold-light);
          border: 1px solid var(--border-light);
          padding: 2rem;
          border-radius: 4px;
        }
        .cta-box-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          color: var(--accent-gold-dark);
        }
        .cta-box-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }
        .features-col-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 1.25rem 1.5rem;
          border-radius: 4px;
        }
        .feature-bullet {
          width: 8px;
          height: 8px;
          background-color: var(--accent-gold);
          border-radius: 50%;
          margin-top: 0.4rem;
          flex-shrink: 0;
        }
        .feature-text {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.5;
        }
        .launch-contact-section {
          padding-top: 5rem;
          border-top: 1px solid var(--border-light);
        }
        @media (max-width: 900px) {
          .launch-content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .single-launch-page {
            padding-top: 7rem;
          }
          .launch-hero-image-wrapper {
            height: 320px;
          }
          .launch-hero-details-bar {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
