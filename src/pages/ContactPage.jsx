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
          font-weight: 300;
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
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          font-weight: 600;
        }
        .detail-value {
          font-size: 0.95rem;
          color: var(--text-primary);
          line-height: 1.4;
        }
        .whatsapp-direct-link, .social-direct-link {
          font-size: 0.95rem;
          color: var(--accent-gold-dark);
          font-weight: 600;
          text-decoration: underline;
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
      `}</style>
    </div>
  );
}
