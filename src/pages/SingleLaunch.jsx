import React from "react";
import { COMPANY_INFO, EXPECTATION_LAUNCH } from "../data/mockData";
import ContactForm from "../components/ContactForm";

export default function SingleLaunch() {
  return (
    <div className="single-launch-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline gold-overline">{EXPECTATION_LAUNCH.eyebrow}</span>
          <h1 className="display-title">{EXPECTATION_LAUNCH.title}</h1>
          <p className="body-text lead-text mx-auto mt-4 text-center">
            {EXPECTATION_LAUNCH.text}
          </p>
        </div>

        {/* Expectation Teaser Banner */}
        <div className="launch-expectation-card mt-6">
          <div className="launch-hero-image-wrapper">
            {/* IMAGEM CONCEITUAL - BREVE LANÇAMENTO */}
            <img
              src={EXPECTATION_LAUNCH.conceptImage}
              alt="Imagem conceitual do breve lançamento residencial da ASCENCE"
              className="launch-hero-img"
            />
            <div className="launch-status-badge">
              <span>BREVE LANÇAMENTO</span>
            </div>
          </div>

          <div className="launch-notice-bar">
            <div className="notice-bar-content">
              <span className="notice-icon-dot"></span>
              <span className="notice-text">{EXPECTATION_LAUNCH.notice}</span>
            </div>
          </div>
        </div>

        {/* Institutional Teaser Content */}
        <div className="launch-content-grid mt-8">
          <div className="launch-narrative-col">
            <span className="overline">Conceito e Filosofia</span>
            <h2 className="section-title">Arquitetura e cuidado dedicados ao seu bem-estar.</h2>
            <p className="body-text mt-4">
              A ASCENCE Construtora está preparando um projeto residencial que traz a experiência adquirida em obras de lares para um novo patamar em Arapongas.
            </p>
            <p className="body-text mt-4">
              O projeto valorizará o bom aproveitamento da iluminação natural, ambientes integrados para convivência familiar e o respeito à privacidade dos moradores.
            </p>

            <div className="whatsapp-launch-cta-box mt-6">
              <h3 className="cta-box-title">Deseja ser informado em primeira mão?</h3>
              <p className="cta-box-desc">
                Converse com nossa equipe para tirar dúvidas ou se cadastrar na lista de interesse.
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

          <div className="launch-pillars-col">
            <h3 className="features-col-title">O que esperar do projeto</h3>
            <ul className="features-list">
              <li className="feature-item">
                <span className="feature-bullet"></span>
                <span className="feature-text">Projeto pensado para o conforto e funcionalidade da rotina residencial</span>
              </li>
              <li className="feature-item">
                <span className="feature-bullet"></span>
                <span className="feature-text">Valorização da iluminação solar e ventilação natural</span>
              </li>
              <li className="feature-item">
                <span className="feature-bullet"></span>
                <span className="feature-text">Localização estratégica em Arapongas</span>
              </li>
              <li className="feature-item">
                <span className="feature-bullet"></span>
                <span className="feature-text">Acompanhamento próximo e transparente em todas as etapas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Form Section */}
        <div className="launch-contact-section mt-8" id="lista-de-interesse">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Lista de Interesse</span>
            <h2 className="section-title">Cadastre-se para receber atualizações</h2>
            <p className="section-desc">
              Preencha seus dados para receber o atendimento prioritário assim que as informações forem apresentadas.
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
        .launch-expectation-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          overflow: hidden;
        }
        .launch-hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 460px;
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
        .launch-notice-bar {
          padding: 1.25rem 2rem;
          background-color: var(--bg-dark);
          color: var(--text-light);
          border-top: 1px solid var(--border-dark);
        }
        .notice-bar-content {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .notice-icon-dot {
          width: 8px;
          height: 8px;
          background-color: var(--accent-gold);
          border-radius: 50%;
        }
        .notice-text {
          font-size: 0.9rem;
          color: var(--text-light);
          letter-spacing: 0.05em;
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
          gap: 1rem;
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
          width: 6px;
          height: 6px;
          background-color: var(--accent-gold);
          border-radius: 50%;
          margin-top: 0.5rem;
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
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
}
