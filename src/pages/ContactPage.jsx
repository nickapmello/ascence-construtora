import React from "react";
import { COMPANY_INFO } from "../data/mockData";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="contact-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Relacionamento</span>
          <h1 className="display-title">Fale com a ASCENCE</h1>
          <p className="body-text lead-text mx-auto mt-4">
            Estamos à disposição para ouvir suas dúvidas, apresentar a construtora ou fornecer informações sobre nosso primeiro lançamento em Arapongas.
          </p>
        </div>

        <div className="contact-page-grid mt-8">
          {/* Info Card */}
          <div className="contact-info-card">
            <h2 className="info-card-title">Canais de Atendimento</h2>
            <p className="info-card-desc">
              Prezamos por um atendimento ético, transparente e sem burocracias. Escolha o canal de sua preferência.
            </p>

            <div className="contact-details-list mt-6">
              <div className="detail-row">
                <span className="detail-label">Endereço Comercial</span>
                <span className="detail-value">{COMPANY_INFO.contact.address}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Telefone</span>
                <span className="detail-value">{COMPANY_INFO.contact.phone}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">WhatsApp Oficial</span>
                <a
                  href={COMPANY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-link"
                >
                  Falar via WhatsApp ({COMPANY_INFO.contact.phone})
                </a>
              </div>

              <div className="detail-row">
                <span className="detail-label">E-mail</span>
                <span className="detail-value">{COMPANY_INFO.contact.email}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Horário de Funcionamento</span>
                <span className="detail-value">{COMPANY_INFO.contact.hours}</span>
              </div>

              <div className="detail-row">
                <span className="detail-label">Instagram Oficial</span>
                <a
                  href={COMPANY_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-direct-link"
                >
                  {COMPANY_INFO.contact.instagramHandle}
                </a>
              </div>
            </div>

            {/* Bloco de Localização com Mapa e Atalhos de Rota */}
            <div className="contact-map-block mt-8">
              <div className="map-block-header mb-3">
                <span className="detail-label">Localização</span>
              </div>
              <div className="map-frame-wrapper">
                <iframe
                  title="Localização da ASCENCE Construtora em Arapongas"
                  src="https://maps.google.com/maps?q=R.+Tucanos,+273+-+Sl+02+-+Centro,+Arapongas+-+PR,+86700-070&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="map-route-actions mt-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.+Tucanos,+273+-+Sl+02+-+Centro,+Arapongas+-+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-route-action"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Abrir no Google Maps</span>
                </a>
                <a
                  href="https://waze.com/ul?q=R.+Tucanos,+273+Arapongas+PR&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-route-action"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="3 11 22 2 13 21 11 13 3 11" />
                  </svg>
                  <span>Abrir no Waze</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-container">
            <ContactForm />
          </div>
        </div>
      </div>

      <style>{`
        .contact-page {
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
        .contact-page-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
          align-items: start;
        }
        .contact-info-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          border-radius: 4px;
        }
        .info-card-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: -0.015em;
          margin-bottom: 0.75rem;
        }
        .info-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          border-top: 1px solid var(--border-light);
          padding-top: 1.75rem;
        }
        .detail-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .detail-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--accent-gold-dark);
          font-weight: 500;
        }
        .detail-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .whatsapp-direct-link, .social-direct-link {
          font-size: 0.95rem;
          color: var(--accent-gold-dark);
          font-weight: 500;
          text-decoration: underline;
        }

        /* BLOCO DE LOCALIZAÇÃO & MAPA */
        .contact-map-block {
          border-top: 1px solid var(--border-light);
          padding-top: 1.75rem;
        }
        .map-block-header {
          margin-bottom: 0.75rem;
        }
        .map-frame-wrapper {
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid var(--border-light);
          background-color: var(--bg-primary);
          box-shadow: 0 1px 3px rgba(31, 34, 38, 0.03);
        }
        .map-frame-wrapper iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
          filter: contrast(1.01) saturate(0.96);
        }
        .map-route-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }
        .btn-route-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.48rem;
          padding: 0.7rem 1.15rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          color: var(--text-primary);
          font-family: var(--font-main);
          font-size: 0.76rem;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: all 0.25s ease;
          flex: 1 1 0;
          white-space: nowrap;
        }
        .btn-route-action:hover {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .btn-route-action svg {
          flex-shrink: 0;
          color: var(--accent-gold-dark);
          transition: color 0.25s ease;
        }
        .btn-route-action:hover svg {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .contact-page-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .contact-page {
            padding-top: 7rem;
          }
          .contact-info-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .map-frame-wrapper {
            height: 192px;
          }
        }

        @media (max-width: 640px) {
          .map-route-actions {
            flex-direction: column;
            gap: 0.65rem;
          }
          .btn-route-action {
            width: 100%;
            padding: 0.75rem 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
