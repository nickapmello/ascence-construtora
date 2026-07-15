import React, { useEffect, useRef } from "react";
import { COMPANY_INFO } from "../data/mockData";
import ContactForm from "../components/ContactForm";
import gsap from "gsap";

export default function Contact() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-anim",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="contact-page">
      {/* Header */}
      <section className="contact-header section-padding">
        <div className="container text-center contact-anim">
          <span className="overline font-semibold">Atendimento Exclusivo</span>
          <h1 className="display-title">Fale Conosco</h1>
          <p className="body-text mx-auto mt-4 text-center">
            Para dúvidas, agendamentos de reuniões particulares ou informações detalhadas sobre nossos lançamentos residenciais, entre em contato.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-body section-padding">
        <div className="container contact-body-grid">
          {/* Left Column: Info Cards & Map */}
          <div className="contact-details-col contact-anim">
            <h2 className="section-title mb-6">Central de Atendimento</h2>
            
            <div className="contact-info-blocks">
              <div className="info-block-item">
                <h4 className="info-block-title">Endereço Comercial</h4>
                <address className="info-block-content">{COMPANY_INFO.contact.address}</address>
              </div>

              <div className="info-block-row">
                <div className="info-block-item">
                  <h4 className="info-block-title">Telefone</h4>
                  <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\D/g,'')}`} className="info-block-content link-highlight">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>

                <div className="info-block-item">
                  <h4 className="info-block-title">WhatsApp</h4>
                  <a href={COMPANY_INFO.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="info-block-content link-highlight">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="info-block-item">
                <h4 className="info-block-title">E-mail</h4>
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="info-block-content link-highlight">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>

              <div className="info-block-item">
                <h4 className="info-block-title">Horário de Funcionamento</h4>
                <p className="info-block-content">{COMPANY_INFO.contact.hours}</p>
              </div>
            </div>

            {/* Simulated Interactive Map */}
            <div className="map-wrapper-container mt-6">
              <div className="map-placeholder">
                {/* Visual grid backdrop for abstract premium layout map */}
                <div className="map-grid-layer"></div>
                <div className="map-marker-pin">
                  <div className="pin-pulse"></div>
                  <div className="pin-core"></div>
                </div>
                <span className="map-lbl">R. Tucanos, 273 - Sl 02 &middot; Centro</span>
                <span className="map-lbl-sub">Arapongas - PR</span>
                <a
                  href="https://maps.google.com/?q=R.+Tucanos,+273+-+Sl+02+-+Centro,+Arapongas+-+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary map-btn"
                >
                  <span>Abrir no Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-col contact-anim">
            <div className="form-card-title-group mb-6">
              <h2 className="section-title">Canal Direto</h2>
              <p className="form-caption">Preencha o formulário abaixo e receba assessoria qualificada de alto padrão.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          background-color: var(--bg-primary);
        }
        .contact-header {
          padding-top: 9rem;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }
        .contact-header .body-text {
          max-width: 600px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .mb-6 {
          margin-bottom: 1.5rem;
        }
        
        /* Grid split */
        .contact-body-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-info-blocks {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .info-block-row {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .info-block-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .info-block-title {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
        }
        .info-block-content {
          font-family: var(--font-sans);
          font-size: 1rem;
          line-height: 1.4;
          color: var(--text-secondary);
          font-style: normal;
        }
        .link-highlight {
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .link-highlight:hover {
          color: var(--accent-gold-dark);
          text-decoration: underline;
        }
        
        /* Map styling */
        .map-wrapper-container {
          position: relative;
          width: 100%;
          border: 1px solid var(--border-light);
          border-radius: 2rem !important;
          overflow: hidden;
        }
        .map-placeholder {
          height: 280px;
          background-color: #f6f5ef;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .map-grid-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 30px 30px;
          background-image: 
            linear-gradient(to right, rgba(197, 168, 128, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(197, 168, 128, 0.04) 1px, transparent 1px);
        }
        .map-marker-pin {
          position: relative;
          width: 24px;
          height: 24px;
          margin-bottom: 1rem;
          z-index: 2;
        }
        .pin-core {
          position: absolute;
          top: 7px;
          left: 7px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--accent-gold-dark);
          border: 2px solid white;
        }
        .pin-pulse {
          position: absolute;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(197, 168, 128, 0.25);
          animation: pulse 2s infinite ease-in-out;
        }
        @keyframes pulse {
          0% { transform: scale(0.6); opacity: 0.9; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .map-lbl {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--text-primary);
          z-index: 2;
        }
        .map-lbl-sub {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.15rem;
          z-index: 2;
          margin-bottom: 1.5rem;
          z-index: 2;
        }
        .map-btn {
          z-index: 2;
          font-size: 0.7rem;
          padding: 0.5rem 1.2rem;
        }
        
        /* Form column caption */
        .form-card-title-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .form-caption {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-secondary);
        }
        
        @media (max-width: 1024px) {
          .contact-body-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        @media (max-width: 768px) {
          .contact-header {
            padding-top: 7rem;
          }
          .info-block-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .map-placeholder {
            height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
