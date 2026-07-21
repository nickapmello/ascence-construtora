import React from "react";
import { COMPANY_INFO, EXPECTATION_LAUNCH } from "../data/mockData";
import ContactForm from "../components/ContactForm";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

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
            {/* IMAGEM CONCEITUAL - BREVE LANÇAMENTO (Com Skeleton Placeholder) */}
            <ImageWithPlaceholder
              src={EXPECTATION_LAUNCH.conceptImage}
              alt="Imagem conceitual sobre o próximo lançamento da ASCENCE"
              className="launch-hero-img-wrapper"
              aspectRatio="16 / 9"
            />
            <div className="launch-status-badge">
              <span>BREVE LANÇAMENTO</span>
            </div>
            <div className="launch-conceptual-disclaimer">
              <span>Imagem conceitual &middot; Ilustração meramente inspiracional</span>
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
            <span className="overline">Institucional</span>
            <h2 className="section-title">O próximo capítulo da nossa história em Arapongas.</h2>
            <p className="body-text mt-4">
              A ASCENCE Construtora está trabalhando no planejamento do seu primeiro projeto residencial em Arapongas, unindo o aprendizado de nossa trajetória na construção residencial com um olhar atento à qualidade e à organização.
            </p>
            <p className="body-text mt-4">
              Todas as especificações técnicas, metragens e plantas serão apresentadas de forma transparente assim que o projeto for oficialmente lançado.
            </p>
          </div>

          <div className="whatsapp-launch-cta-box">
            <h3 className="cta-box-title">Deseja receber novidades em primeira mão?</h3>
            <p className="cta-box-desc mt-2">
              Cadastre-se no formulário abaixo ou fale diretamente com a equipe da ASCENCE para ser notificado assim que as informações forem disponibilizadas.
            </p>
            <div className="mt-6">
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold inline-flex w-full"
              >
                <span>Falar com a ASCENCE no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="launch-contact-section mt-8" id="lista-de-interesse">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Lista de Interesse</span>
            <h2 className="section-title">Quero receber novidades</h2>
            <p className="section-desc">
              Preencha seus dados abaixo para receber atualizações oficiais assim que o lançamento for anunciado.
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
          background-color: var(--bg-dark);
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
          z-index: 2;
        }
        .launch-conceptual-disclaimer {
          position: absolute;
          bottom: 1rem;
          right: 1.5rem;
          background: rgba(31, 34, 38, 0.75);
          backdrop-filter: blur(8px);
          color: #ffffff;
          padding: 0.4rem 0.85rem;
          font-size: 0.7rem;
          border-radius: 2px;
          letter-spacing: 0.05em;
          z-index: 2;
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
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem 2rem;
          border-radius: 4px;
        }
        .cta-box-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
        }
        .cta-box-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
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
        }
      `}</style>
    </div>
  );
}
