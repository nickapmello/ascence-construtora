import React, { useState, useEffect, useRef } from "react";
import { DEVELOPMENTS } from "../data/mockData";
import ContactForm from "../components/ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PropertyDetail({ propertyId, setActivePage }) {
  const property = DEVELOPMENTS.find((d) => d.id === propertyId);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const detailPageRef = useRef(null);

  useEffect(() => {
    if (!property) return;
    
    const ctx = gsap.context(() => {
      // 1. Initial elements fade-in
      gsap.fromTo(
        ".detail-anim-fade",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power3.out" }
      );

      // 2. Animate construction progress bars on scroll
      gsap.utils.toArray(".p-bar-fill").forEach((bar) => {
        const targetWidth = bar.getAttribute("data-width");
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 95%",
            }
          }
        );
      });
    }, detailPageRef);

    return () => ctx.revert();
  }, [propertyId, property]);

  if (!property) {
    return (
      <div className="section-padding text-center">
        <div className="container">
          <h2>Empreendimento não encontrado</h2>
          <button onClick={() => setActivePage("empreendimentos")} className="btn btn-primary mt-4">
            Voltar para Empreendimentos
          </button>
        </div>
      </div>
    );
  }

  const progress = property.constructionProgress;

  return (
    <div ref={detailPageRef} className="property-detail-page">
      {/* Back navigation bar */}
      <div className="back-nav-bar">
        <div className="container">
          <button onClick={() => setActivePage("empreendimentos")} className="back-link-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="back-icon">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Voltar para Empreendimentos</span>
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="detail-hero-section">
        <div className="detail-hero-grid">
          <div className="detail-hero-image-wrapper detail-anim-fade">
            <img src={property.images[activeImageIndex]} alt={property.name} className="detail-hero-img" />
          </div>
          <div className="detail-hero-content detail-anim-fade">
            <span className="overline">{property.neighborhood} &middot; {property.city}</span>
            <h1 className="detail-title">{property.name}</h1>
            <p className="detail-tagline">{property.tagline}</p>
            <div className="detail-status-wrapper">
              <span className="status-label">Status:</span>
              <span className="status-value">{property.status}</span>
            </div>
            
            {/* Gallery Thumbnail Selector */}
            <div className="thumbnail-gallery">
              {property.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${activeImageIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <img src={img} alt={`Slide ${idx + 1}`} className="thumb-img" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Bar */}
      <section className="stats-bar-section detail-anim-fade">
        <div className="container stats-bar-grid">
          <div className="stat-box">
            <span className="stat-label">Área Privativa</span>
            <span className="stat-value">{property.areaRange}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Dormitórios</span>
            <span className="stat-value">{property.bedrooms}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Suítes</span>
            <span className="stat-value">{property.suites} Suítes</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Vagas</span>
            <span className="stat-value">{property.parkingSpots} Vagas</span>
          </div>
        </div>
      </section>

      {/* Editorial Content & Construction Progress */}
      <section className="editorial-detail-section section-padding">
        <div className="container editorial-detail-grid">
          {/* Left: Conception and amenities */}
          <div className="editorial-left detail-anim-fade">
            <span className="overline">Conceito do Projeto</span>
            <h2 className="section-title">Harmonia entre concreto, madeira e luz</h2>
            <p className="body-text mt-4">{property.description}</p>
            
            <div className="amenities-container mt-6">
              <h3 className="sub-section-title">Lazer & Conveniência</h3>
              <ul className="amenities-list">
                {property.amenities.map((item, idx) => (
                  <li key={idx} className="amenity-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="check-icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Construction Stages */}
          <div className="editorial-right detail-anim-fade">
            <div className="construction-panel">
              <h3 className="sub-section-title">Estágio da Obra</h3>
              <p className="progress-intro">
                Entrega prevista para: <strong>{property.deliveryDate}</strong>
              </p>

              <div className="progress-bars-list">
                {/* Total Bar */}
                <div className="progress-bar-item">
                  <div className="progress-bar-labels">
                    <span className="p-label font-semibold">Evolução Geral</span>
                    <span className="p-percentage font-semibold">{progress.total}%</span>
                  </div>
                  <div className="p-bar-track">
                    <div className="p-bar-fill gold-fill" data-width={`${progress.total}%`} style={{ width: "0%" }}></div>
                  </div>
                </div>

                {/* Foundation Bar */}
                <div className="progress-bar-item">
                  <div className="progress-bar-labels">
                    <span className="p-label">Fundações / Terraplanagem</span>
                    <span className="p-percentage">{progress.foundation}%</span>
                  </div>
                  <div className="p-bar-track">
                    <div className="p-bar-fill" data-width={`${progress.foundation}%`} style={{ width: "0%" }}></div>
                  </div>
                </div>

                {/* Structure Bar */}
                <div className="progress-bar-item">
                  <div className="progress-bar-labels">
                    <span className="p-label">Estrutura / Alvenaria</span>
                    <span className="p-percentage">{progress.structure}%</span>
                  </div>
                  <div className="p-bar-track">
                    <div className="p-bar-fill" data-width={`${progress.structure}%`} style={{ width: "0%" }}></div>
                  </div>
                </div>

                {/* Finishing Bar */}
                <div className="progress-bar-item">
                  <div className="progress-bar-labels">
                    <span className="p-label">Acabamento e Paisagismo</span>
                    <span className="p-percentage">{progress.finishing}%</span>
                  </div>
                  <div className="p-bar-track">
                    <div className="p-bar-fill" data-width={`${progress.finishing}%`} style={{ width: "0%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Neighborhood Box */}
            <div className="neighborhood-panel mt-6">
              <h3 className="sub-section-title">Localização & Bairro</h3>
              <p className="body-text">{property.aboutNeighborhood}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans / Architectural Layouts */}
      <section className="plans-section section-padding">
        <div className="container">
          <div className="section-header text-center mx-auto">
            <span className="overline">Distribuição Inteligente</span>
            <h2 className="section-title">Plantas Disponíveis</h2>
            <p className="section-desc">
              Ambientes desenhados para oferecer a máxima flexibilidade de layout, com amplos vãos livres e integração natural.
            </p>
          </div>

          <div className="plans-grid mt-6">
            {property.plans.map((plan, idx) => (
              <div key={idx} className="plan-card">
                <div className="plan-card-meta">
                  <h3 className="plan-name">{plan.name}</h3>
                  <span className="plan-area">{plan.area}</span>
                </div>
                <p className="plan-details">{plan.details}</p>
                <div className="plan-blueprint-placeholder">
                  <div className="blueprint-grid-overlay"></div>
                  <span className="blueprint-tag">Planta Conceito Disponível</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action form */}
      <section className="detail-contact-section section-padding">
        <div className="container contact-section-grid">
          <div className="contact-info-panel">
            <span className="overline">Atendimento Personalizado</span>
            <h2 className="section-title">Tenha acesso à apresentação completa</h2>
            <p className="body-text mb-6">
              Preencha os dados abaixo e agende uma conversa particular com nossa equipe técnica de vendas para conhecer todos os diferenciais construtivos.
            </p>
          </div>
          <div className="contact-form-panel">
            <ContactForm propertyName={property.name} />
          </div>
        </div>
      </section>

      <style>{`
        .property-detail-page {
          background-color: var(--bg-primary);
        }
        
        /* Back nav bar */
        .back-nav-bar {
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
          padding: 1.25rem 0;
          margin-top: 5.5rem;
        }
        .back-link-btn {
          background: none;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .back-link-btn:hover {
          color: var(--accent-gold-dark);
        }
        .back-icon {
          width: 16px;
          height: 16px;
        }
        
        /* Detail Hero Section */
        .detail-hero-section {
          background-color: var(--bg-secondary);
        }
        .detail-hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
        }
        .detail-hero-image-wrapper {
          position: relative;
          padding-top: 60%;
          overflow: hidden;
          background-color: #eee;
        }
        .detail-hero-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .detail-hero-content {
          padding: 4rem 4rem 4rem 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-color: var(--bg-primary);
        }
        .detail-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 400;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .detail-tagline {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .detail-status-wrapper {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          margin-bottom: 2.5rem;
        }
        .status-label {
          color: var(--text-muted);
          margin-right: 0.5rem;
        }
        .status-value {
          font-weight: 600;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* Thumbnail Selector */
        .thumbnail-gallery {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .thumb-btn {
          width: 60px;
          height: 45px;
          border: 1px solid var(--border-light);
          cursor: pointer;
          overflow: hidden;
          background: none;
          padding: 0;
          transition: var(--transition-fast);
        }
        .thumb-btn.active {
          border-color: var(--accent-gold);
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }
        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Stats bar */
        .stats-bar-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 2.5rem 0;
          border-bottom: 1px solid var(--border-dark);
        }
        .stats-bar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          text-align: center;
          gap: 2rem;
        }
        .stat-box {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .stat-box:not(:last-child) {
          border-right: 1px solid var(--border-dark);
        }
        .stat-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
        }
        .stat-value {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 500;
        }
        
        /* Editorial Detail Section */
        .editorial-detail-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: start;
        }
        .sub-section-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
        }
        .amenities-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .amenity-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }
        .check-icon {
          width: 16px;
          height: 16px;
          color: var(--accent-gold-dark);
          flex-shrink: 0;
          margin-top: 3px;
        }
        
        /* Construction Panel */
        .construction-panel {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem;
        }
        .progress-intro {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }
        .progress-bars-list {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }
        .progress-bar-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .progress-bar-labels {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .p-bar-track {
          width: 100%;
          height: 4px;
          background-color: var(--border-light);
          overflow: hidden;
        }
        .p-bar-fill {
          height: 100%;
          background-color: var(--text-muted);
          transition: width 1s ease-out;
        }
        .gold-fill {
          background-color: var(--accent-gold);
        }
        .font-semibold {
          font-weight: 600;
        }
        
        /* Neighborhood box */
        .neighborhood-panel {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem;
        }
        
        /* Plans grid */
        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }
        .plan-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .plan-card-meta {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }
        .plan-name {
          font-family: var(--font-serif);
          font-size: 1.4rem;
        }
        .plan-area {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-gold-dark);
        }
        .plan-details {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }
        .plan-blueprint-placeholder {
          height: 160px;
          background-color: #f5f4ef;
          border: 1px dashed var(--border-light);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          overflow: hidden;
        }
        .blueprint-grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 20px 20px;
          background-image: 
            linear-gradient(to right, rgba(197, 168, 128, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(197, 168, 128, 0.05) 1px, transparent 1px);
        }
        .blueprint-tag {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          border: 1px solid var(--accent-gold);
          padding: 0.4rem 0.8rem;
          background-color: var(--bg-secondary);
          z-index: 2;
        }
        
        /* Contact Section */
        .detail-contact-section {
          background-color: var(--bg-secondary);
        }
        
        @media (max-width: 1024px) {
          .detail-hero-grid {
            grid-template-columns: 1fr;
          }
          .detail-hero-content {
            padding: 3rem 2rem;
          }
          .stats-bar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .stat-box:not(:last-child) {
            border-right: none;
          }
          .stat-box:nth-child(1), .stat-box:nth-child(2) {
            border-bottom: 1px solid var(--border-dark);
            padding-bottom: 1rem;
          }
          .editorial-detail-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .plans-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .back-nav-bar {
            margin-top: 4.5rem;
          }
          .amenities-list {
            grid-template-columns: 1fr;
          }
          .construction-panel, .neighborhood-panel {
            padding: 1.5rem;
          }
          .plan-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
