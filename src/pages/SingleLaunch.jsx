import React, { useState } from "react";
import { COMPANY_INFO, EXPECTATION_LAUNCH, LAUNCH_GALLERY } from "../data/mockData";
import ContactForm from "../components/ContactForm";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";
import LightboxModal from "../components/LightboxModal";

export default function SingleLaunch() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedLightboxItem, setSelectedLightboxItem] = useState(null);

  const categories = [
    { id: "todos", label: "Todas as Perspectivas" },
    { id: "fachadas", label: "Fachadas & Edifício" },
    { id: "apto-2-quartos", label: "Apto 2 Quartos" },
    { id: "apto-1-quarto", label: "Apto 1 Quarto" },
    { id: "lazer", label: "Áreas Comuns & Lazer" },
    { id: "plantas", label: "Plantas Técnicas 4K" }
  ];

  const filteredItems = activeCategory === "todos"
    ? LAUNCH_GALLERY
    : LAUNCH_GALLERY.filter((item) => item.category === activeCategory);

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
            {/* IMAGEM REAL DA FACHADA ILUMINADA */}
            <ImageWithPlaceholder
              src={EXPECTATION_LAUNCH.conceptImage}
              alt="Perspectiva ilustrada da fachada do empreendimento da ASCENCE"
              className="launch-hero-img-wrapper"
              aspectRatio="16 / 9"
            />
            <div className="launch-status-badge">
              <span>BREVE LANÇAMENTO</span>
            </div>
            <div className="launch-conceptual-disclaimer">
              <span>Perspectiva artística ilustrada da fachada &middot; Projeto autoral ASCENCE</span>
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

        {/* Galeria Exclusiva de Perspectivas e Plantas Humanizadas */}
        <section className="launch-gallery-section mt-8">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Galeria do Empreendimento</span>
            <h2 className="section-title">Conheça os detalhes do projeto</h2>
            <p className="section-desc">
              Explore as perspectivas dos apartamentos, fachada contemporânea, áreas sociais e plantas humanizadas. Clique em qualquer imagem para ampliar em tela cheia.
            </p>
          </div>

          {/* Abas de Categorias */}
          <div className="gallery-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`gallery-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de Imagens */}
          <div className="gallery-cards-grid mt-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => setSelectedLightboxItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelectedLightboxItem(item); }}
              >
                <div className="gallery-card-img-wrapper">
                  <ImageWithPlaceholder
                    src={item.image}
                    alt={item.title}
                    className="gallery-item-img"
                    aspectRatio="16 / 11"
                  />
                  <div className="gallery-card-overlay">
                    <span className="zoom-hint">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <span>Ampliar em tela cheia</span>
                    </span>
                  </div>
                </div>
                <div className="gallery-card-body">
                  <span className="gallery-card-cat">{item.categoryLabel}</span>
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

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

      {/* Lightbox Modal para Zoom em Tela Cheia */}
      {selectedLightboxItem && (
        <LightboxModal
          item={selectedLightboxItem}
          onClose={() => setSelectedLightboxItem(null)}
        />
      )}

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
          color: var(--accent-gold-dark);
          border: 1px solid var(--accent-gold);
          padding: 0.5rem 1.25rem;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
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
          letter-spacing: 0.02em;
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
          background-color: var(--accent-gold-dark);
          border-radius: 50%;
        }
        .notice-text {
          font-size: 0.9rem;
          color: var(--text-light);
          letter-spacing: 0;
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
          font-weight: 500;
          letter-spacing: -0.01em;
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
        /* --- GALERIA DO EMPREENDIMENTO --- */
        .launch-gallery-section {
          padding-top: 5rem;
          border-top: 1px solid var(--border-light);
        }
        .gallery-category-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 2.5rem;
        }
        .gallery-tab-btn {
          padding: 0.6rem 1.25rem;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          border-radius: 9999px;
          color: var(--text-secondary);
          font-family: var(--font-main);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
        }
        .gallery-tab-btn:hover {
          color: var(--text-primary);
          border-color: var(--accent-gold);
          transform: translateY(-1px);
        }
        .gallery-tab-btn.active {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(31, 34, 38, 0.15);
        }
        .gallery-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .gallery-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 32px rgba(31, 34, 38, 0.08);
          border-color: rgba(167, 119, 101, 0.35);
        }
        .gallery-card:focus-visible {
          outline: 2px solid var(--accent-gold-dark);
          outline-offset: 2px;
        }
        .gallery-card-img-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background-color: var(--bg-dark);
        }
        .gallery-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(31, 34, 38, 0.45);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
        }
        .gallery-card:hover .gallery-card-overlay {
          opacity: 1;
        }
        .zoom-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 1.15rem;
          background-color: rgba(251, 251, 249, 0.95);
          border-radius: 9999px;
          color: var(--text-primary);
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transform: translateY(6px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .gallery-card:hover .zoom-hint {
          transform: translateY(0);
        }
        .zoom-hint svg {
          color: var(--accent-gold-dark);
        }
        .gallery-card-body {
          padding: 1.5rem 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .gallery-card-cat {
          font-size: 0.72rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--accent-gold-dark);
          margin-bottom: 0.35rem;
        }
        .gallery-card-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .gallery-card-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 900px) {
          .launch-content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .single-launch-page {
            padding-top: 7rem;
          }
          .gallery-cards-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .gallery-category-tabs {
            justify-content: flex-start;
            overflow-x: auto;
            flex-wrap: nowrap;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .gallery-tab-btn {
            flex-shrink: 0;
          }
          .gallery-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
