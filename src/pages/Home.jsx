import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO, TRAJECTORY_CHAPTERS, CONSTRUCTION_PILLARS, CARE_EXPERIENCE_PRINCIPLES, EXPECTATION_LAUNCH, IMAGES } from "../data/mockData";
import ContactForm from "../components/ContactForm";
import symbolDark from "../assets/symbol_3_copper_charcoal.png";

export default function Home() {
  return (
    <div className="home-page-container">
      {/* 1. HERO PRINCIPAL */}
      <section className="hero-section">
        <div className="hero-bg-wrapper">
          {/* IMAGEM LIFESTYLE / HERO PRINCIPAL */}
          <img
            src={IMAGES.heroBg}
            alt="Arquitetura contemporânea e bom aproveitamento da luz natural"
            className="hero-bg-img"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="container hero-content">
          <span className="overline hero-badge">ASCENCE Construtora</span>
          <h1 className="hero-title">
            Espaços que elevam <br />
            <span className="serif-italic-gold">a forma de viver.</span>
          </h1>
          <p className="hero-subtitle">
            A experiência de construir lares encontra um novo propósito: criar empreendimentos pensados para o bem-estar, a arquitetura e a vida em Arapongas.
          </p>
          <div className="hero-actions">
            <Link to="/a-ascence" className="btn btn-gold">
              <span>Conheça a Ascence</span>
            </Link>
            <Link to="/lancamento" className="btn btn-secondary text-white-btn">
              <span>Conheça nosso lançamento</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO DA MARCA */}
      <section className="manifesto-section section-padding">
        <div className="container manifesto-grid">
          <div className="manifesto-text-col">
            <span className="overline">Filosofia Institucional</span>
            <h2 className="section-title">Construir vai além da estrutura.</h2>
            <p className="body-text lead-text mt-4">
              {COMPANY_INFO.manifestoText}
            </p>
            <div className="manifesto-quote-box mt-6">
              <img src={symbolDark} alt="ASCENCE" className="quote-symbol" />
              <p className="quote-text">
                "{COMPANY_INFO.tagline}"
              </p>
            </div>
          </div>
          <div className="manifesto-image-col">
            {/* IMAGEM INSTITUCIONAL - MANIFESTO */}
            <img
              src={IMAGES.manifesto}
              alt="Cuidado com a arquitetura e espaços de convivência"
              className="manifesto-img"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* 3. NOSSA TRAJETÓRIA */}
      <section className="trajectory-section section-padding bg-dark-section">
        <div className="container">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline gold-overline">Nossa Evolução</span>
            <h2 className="section-title text-light">Uma história construída com experiência e confiança.</h2>
            <p className="section-desc text-muted-light">
              Da bagagem adquirida na construção de casas ao desenvolvimento de um novo capítulo em Arapongas.
            </p>
          </div>

          <div className="trajectory-chapters-grid mt-6">
            {TRAJECTORY_CHAPTERS.map((item) => (
              <div key={item.chapter} className="trajectory-card">
                <span className="chapter-num">{item.chapter}</span>
                <span className="chapter-subtitle">{item.subtitle}</span>
                <h3 className="chapter-title">{item.title}</h3>
                <p className="chapter-desc">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/nossa-trajetoria" className="btn btn-gold">
              <span>Conheça nossa trajetória</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. EXPERIÊNCIA CONSTRUÍDA COM CUIDADO (Substituição institucional) */}
      <section className="care-experience-section section-padding">
        <div className="container">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Compromisso com a Qualidade</span>
            <h2 className="section-title">Experiência construída com cuidado.</h2>
            <p className="section-desc">
              A trajetória da ASCENCE foi formada pela experiência prática na construção residencial e pelo compromisso de tratar cada projeto com atenção, responsabilidade e proximidade.
            </p>
          </div>

          <div className="care-principles-grid mt-6">
            {CARE_EXPERIENCE_PRINCIPLES.map((item) => (
              <div key={item.id} className="care-card">
                <h3 className="care-card-title">{item.title}</h3>
                <p className="care-card-desc">{item.description}</p>
              </div>
            ))}
          </div>

          {/* 
            PREPARAÇÃO PARA FUTURA GALERIA DE OBRAS REAIS (Grid 2x2 Desktop, 1 Col Mobile):
            Quando forem fornecidas fotografias reais de obras da ASCENCE, descomentar o bloco abaixo.
          */}
          {/*
          <div className="real-projects-grid-2x2 mt-8">
            {REAL_PROJECTS_GALLERY.map((project) => (
              <div key={project.id} className="real-project-card">
                <img src={project.image} alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          */}
        </div>
      </section>

      {/* 5. NOSSO JEITO DE CONSTRUIR */}
      <section className="way-of-building-section section-padding bg-secondary-section">
        <div className="container">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Pilares Institucionais</span>
            <h2 className="section-title">Nosso Jeito de Construir</h2>
            <p className="section-desc">
              Quatro compromissos fundamentais que orientam cada etapa de trabalho da ASCENCE.
            </p>
          </div>

          <div className="pillars-grid">
            {CONSTRUCTION_PILLARS.map((pilar) => (
              <div key={pilar.id} className="pilar-card">
                <span className="pilar-badge">{pilar.number}</span>
                <h3 className="pilar-title">{pilar.title}</h3>
                <p className="pilar-desc">{pilar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link to="/nosso-jeito-de-construir" className="btn btn-secondary">
              <span>Saiba mais sobre nosso método</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. SEÇÃO LIFESTYLE */}
      <section className="lifestyle-section section-padding">
        <div className="container lifestyle-grid">
          <div className="lifestyle-image-wrapper">
            {/* IMAGEM LIFESTYLE - QUALIDADE DE VIDA */}
            <img
              src={IMAGES.lifestyle}
              alt="Qualidade de vida, bom aproveitamento da luz natural e convivência"
              className="lifestyle-img"
              loading="lazy"
            />
          </div>
          <div className="lifestyle-content">
            <span className="overline">Viver com Propósito</span>
            <h2 className="section-title">Projetamos espaços para tudo aquilo que realmente importa.</h2>
            <p className="body-text mt-4">
              Acreditamos que uma boa edificação transcende as paredes físicas. Ela deve proporcionar conforto térmico, privacidade nos momentos de descanso e ambientes acolhedores onde a rotina da família acontece de forma leve.
            </p>
            <ul className="lifestyle-bullets-list mt-6">
              <li>
                <span className="bullet-dot"></span>
                <span>Bom aproveitamento da luz natural e ventilação cruzada</span>
              </li>
              <li>
                <span className="bullet-dot"></span>
                <span>Privacidade e conforto para o descanso pleno</span>
              </li>
              <li>
                <span className="bullet-dot"></span>
                <span>Integração harmoniosa entre os ambientes de convivência</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. ÚNICO LANÇAMENTO (Expectativa "Em Breve") */}
      <section className="single-launch-home-section section-padding bg-dark-section">
        <div className="container">
          <div className="single-launch-card-home">
            <div className="launch-home-content">
              <span className="overline gold-overline">{EXPECTATION_LAUNCH.eyebrow}</span>
              <h2 className="section-title text-light">{EXPECTATION_LAUNCH.title}</h2>
              <p className="body-text text-muted-light mt-4">
                {EXPECTATION_LAUNCH.text}
              </p>
              
              <div className="launch-notice-badge mt-6">
                <span className="notice-dot"></span>
                <span>{EXPECTATION_LAUNCH.notice}</span>
              </div>

              <div className="launch-home-actions mt-6">
                <a href="#contato" className="btn btn-gold">
                  <span>Quero receber novidades</span>
                </a>
                <a
                  href={COMPANY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-white-btn"
                >
                  <span>Falar com a ASCENCE</span>
                </a>
              </div>
            </div>
            
            <div className="launch-home-image-wrapper">
              {/* IMAGEM CONCEITUAL - BREVE LANÇAMENTO */}
              <img
                src={EXPECTATION_LAUNCH.conceptImage}
                alt="Imagem conceitual do breve lançamento residencial da ASCENCE"
                className="launch-home-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTATO */}
      <section className="home-contact-section section-padding" id="contato">
        <div className="container contact-section-grid">
          <div className="contact-info-panel">
            <span className="overline">Relacionamento & Atendimento</span>
            <h2 className="section-title">Inicie uma conversa conosco.</h2>
            <p className="body-text mb-6">
              Estamos prontos para atender você com transparência, clareza e atenção. Entre em contato para saber mais sobre a ASCENCE ou receber novidades sobre nosso lançamento.
            </p>
            <div className="mini-info-list">
              <div className="mini-info-item">
                <span className="mini-label">Atendimento</span>
                <span className="mini-val">{COMPANY_INFO.contact.hours}</span>
              </div>
              <div className="mini-info-item">
                <span className="mini-label">Endereço Comercial</span>
                <span className="mini-val">{COMPANY_INFO.contact.address}</span>
              </div>
              <div className="mini-info-item">
                <span className="mini-label">Contato Direto</span>
                <span className="mini-val">{COMPANY_INFO.contact.phone} &middot; {COMPANY_INFO.contact.email}</span>
              </div>
            </div>
          </div>
          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        .home-page-container {
          background-color: var(--bg-primary);
        }

        /* HERO STYLING */
        .hero-section {
          height: 100dvh;
          min-height: 580px;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding-bottom: 5rem;
          background-color: var(--bg-dark);
          overflow: hidden;
        }
        .hero-bg-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.55;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(31, 34, 38, 0.3) 0%,
            rgba(31, 34, 38, 0.75) 75%,
            var(--bg-dark) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }
        .hero-badge {
          color: var(--accent-gold);
          margin-bottom: 0.75rem;
        }
        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(2.6rem, 5vw, 4.4rem);
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }
        .serif-italic-gold {
          font-style: italic;
          color: var(--accent-gold);
        }
        .hero-subtitle {
          font-size: clamp(1rem, 1.2vw, 1.2rem);
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 2.25rem;
          max-width: 700px;
        }
        .hero-actions {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        /* MANIFESTO SECTION */
        .manifesto-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .lead-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .manifesto-quote-box {
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-light);
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .quote-symbol {
          height: 32px;
          opacity: 0.85;
        }
        .quote-text {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-style: italic;
          color: var(--accent-gold-dark);
        }
        .manifesto-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          border-radius: 2px;
        }

        /* TRAJECTORY SECTION */
        .bg-dark-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
        }
        .gold-overline {
          color: var(--accent-gold);
        }
        .text-light {
          color: var(--text-light);
        }
        .text-muted-light {
          color: var(--text-muted);
        }
        .trajectory-chapters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .trajectory-card {
          background-color: var(--bg-dark-gray);
          border: 1px solid var(--border-dark);
          padding: 2.25rem 1.75rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
        }
        .chapter-num {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          color: var(--accent-gold);
          line-height: 1;
          margin-bottom: 0.4rem;
        }
        .chapter-subtitle {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }
        .chapter-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          font-weight: 400;
          color: var(--text-light);
          margin-bottom: 0.85rem;
        }
        .chapter-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        /* CARE EXPERIENCE PRINCIPLES */
        .care-principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        .care-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem 2rem;
          border-radius: 4px;
          transition: var(--transition-fast);
        }
        .care-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-3px);
        }
        .care-card-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .care-card-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* PILLARS / NOSSO JEITO DE CONSTRUIR */
        .bg-secondary-section {
          background-color: var(--bg-secondary);
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }
        .pilar-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 2.25rem 1.75rem;
          transition: var(--transition-fast);
        }
        .pilar-card:hover {
          border-color: var(--accent-gold);
          transform: translateY(-3px);
        }
        .pilar-badge {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          color: var(--accent-gold);
          display: block;
          margin-bottom: 0.75rem;
        }
        .pilar-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }
        .pilar-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* LIFESTYLE SECTION */
        .lifestyle-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .lifestyle-img {
          width: 100%;
          height: 460px;
          object-fit: cover;
          border-radius: 2px;
        }
        .lifestyle-bullets-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .lifestyle-bullets-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
        }
        .bullet-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-gold);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* SINGLE LAUNCH HOME SECTION */
        .single-launch-card-home {
          background-color: var(--bg-dark-gray);
          border: 1px solid var(--border-dark);
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          overflow: hidden;
        }
        .launch-home-content {
          padding: 4rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .launch-notice-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: rgba(167, 119, 101, 0.15);
          border: 1px solid var(--accent-gold);
          color: var(--accent-gold);
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          width: fit-content;
        }
        .notice-dot {
          width: 6px;
          height: 6px;
          background-color: var(--accent-gold);
          border-radius: 50%;
        }
        .launch-home-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .launch-home-image-wrapper {
          width: 100%;
          min-height: 360px;
        }
        .launch-home-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* CONTACT SECTION */
        .contact-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: start;
        }
        .mini-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
          border-top: 1px solid var(--border-light);
          padding-top: 2rem;
        }
        .mini-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mini-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
        }
        .mini-val {
          font-size: 0.95rem;
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .manifesto-grid,
          .lifestyle-grid,
          .single-launch-card-home,
          .contact-section-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .launch-home-content {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
