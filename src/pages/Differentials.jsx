import React, { useEffect, useRef } from "react";
import { DIFFERENTIALS } from "../data/mockData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Differentials() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header fade
      gsap.fromTo(
        ".diff-header-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }
      );

      // 2. Grid cards stagger on scroll
      gsap.fromTo(
        ".diff-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".detailed-diff-grid",
            start: "top 85%",
          }
        }
      );

      // 3. Craft section scroll reveal
      gsap.fromTo(
        ".craft-anim",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".diff-craft-section",
            start: "top 80%",
          }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case "localizacao":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        );
      case "arquitetura":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
          </svg>
        );
      case "acabamento":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        );
      case "plantas":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="3" y1="9" x2="21" y2="9"></line>
          </svg>
        );
      case "funcionalidade":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
            <path d="M12 6v6l4 2"></path>
          </svg>
        );
      case "tecnologia":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        );
      case "atendimento":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case "seguranca":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" className="diff-icon">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        );
    }
  };

  return (
    <div ref={pageRef} className="differentials-page">
      {/* Header */}
      <section className="diff-header section-padding">
        <div className="container text-center diff-header-anim">
          <span className="overline">Padrão ASCENCE</span>
          <h1 className="display-title">Nossos Diferenciais</h1>
          <p className="body-text mx-auto mt-4 text-center">
            Cada escolha no desenvolvimento de nossos projetos reflete nossa filosofia de entregar solidez, design impecável e bem-estar perpétuo aos moradores.
          </p>
        </div>
      </section>

      {/* Grid of details */}
      <section className="diff-grid-section section-padding">
        <div className="container">
          <div className="detailed-diff-grid">
            {DIFFERENTIALS.map((item, idx) => (
              <div key={item.id} className="detailed-diff-card diff-card-anim">
                <div className="diff-card-header">
                  <div className="diff-icon-circle">
                    {getIcon(item.id)}
                  </div>
                  <span className="diff-index">0{idx + 1}.</span>
                </div>
                <h3 className="diff-card-title">{item.title}</h3>
                <p className="diff-card-desc">{item.description}</p>
                <div className="diff-accent-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship focus */}
      <section className="diff-craft-section section-padding">
        <div className="container craft-grid">
          <div className="craft-image craft-anim">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070"
              alt="Mármore e metais importados"
              className="craft-img"
            />
          </div>
          <div className="craft-content craft-anim">
            <span className="overline">Artesania</span>
            <h2 className="section-title">A beleza que reside nos detalhes invisíveis</h2>
            <p className="body-text">
              Para nós, alto padrão vai além dos olhos. Trata-se do silêncio proporcionado por mantas acústicas importadas sob o piso, da precisão térmica dos vidros insulados e do conforto do piso aquecido inteligente.
            </p>
            <p className="body-text mt-4">
              Cada etapa construtiva é fiscalizada por engenheiros especializados de controle de qualidade, assegurando solidez técnica e acabamentos irretocáveis.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        .differentials-page {
          background-color: var(--bg-primary);
        }
        .diff-header {
          padding-top: 9rem;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }
        .diff-header .body-text {
          max-width: 600px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Detailed Grid */
        .detailed-diff-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem 2.5rem;
        }
        .detailed-diff-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: var(--transition-smooth);
        }
        .detailed-diff-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-gold);
        }
        .diff-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .diff-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background-color: var(--bg-primary);
          border-radius: 50%;
          color: var(--accent-gold-dark);
        }
        .diff-icon {
          width: 1.75rem;
          height: 1.75rem;
        }
        .diff-index {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.05em;
        }
        .diff-card-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 400;
          margin-bottom: 0.75rem;
        }
        .diff-card-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        .diff-accent-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-gold);
          transition: var(--transition-smooth);
        }
        .detailed-diff-card:hover .diff-accent-line {
          width: 100%;
        }
        
        /* Craft section split */
        .diff-craft-section {
          background-color: var(--bg-secondary);
        }
        .craft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        .craft-image {
          position: relative;
          padding-top: 66.66%;
          overflow: hidden;
        }
        .craft-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .craft-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .detailed-diff-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .craft-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 768px) {
          .diff-header {
            padding-top: 7rem;
          }
          .detailed-diff-grid {
            grid-template-columns: 1fr;
          }
          .detailed-diff-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
