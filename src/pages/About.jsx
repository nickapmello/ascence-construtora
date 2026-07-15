import React, { useEffect, useRef } from "react";
import { COMPANY_INFO } from "../data/mockData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutPageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header fade
      gsap.fromTo(
        ".about-header-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" }
      );
      
      // 2. Manifest section animate on scroll
      gsap.fromTo(
        ".manifest-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-manifest-section",
            start: "top 80%",
          }
        }
      );

      // 3. Value cards stagger
      gsap.fromTo(
        ".value-card-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-values-section",
            start: "top 80%",
          }
        }
      );

      // 4. Timeline nodes stagger on scroll
      gsap.utils.toArray(".timeline-node-anim").forEach((node) => {
        gsap.fromTo(
          node,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: node,
              start: "top 90%",
            }
          }
        );
      });
    }, aboutPageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutPageRef} className="about-page">
      {/* Editorial Header */}
      <section className="about-header section-padding">
        <div className="container text-center about-header-anim">
          <span className="overline">Legado & Propósito</span>
          <h1 className="display-title">Arquitetura que desafia o tempo</h1>
          <p className="body-text mx-auto mt-4 text-center">
            Fundada sobre os pilares da solidez da engenharia tradicional e da sofisticação do design contemporâneo, a ASCENCE cria verdadeiras obras de arte residenciais.
          </p>
        </div>
      </section>

      {/* Main Context Grid */}
      <section className="about-manifest-section section-padding">
        <div className="container manifest-grid">
          <div className="manifest-text-col manifest-anim">
            <span className="overline">Nosso Manifesto</span>
            <h2 className="section-title">A busca obstinada pela perfeição construtiva</h2>
            <p className="body-text mt-4">
              {COMPANY_INFO.aboutFull}
            </p>
            <p className="body-text mt-4">
              Cada canteiro de obras da ASCENCE funciona como um ateliê de alta costura. Do assentamento meticuloso de pedras naturais na fachada à especificação de tubulações de alta performance acústica escondidas nas lajes, o nosso compromisso é oferecer um habitar silencioso, seguro e imensamente prazeroso.
            </p>
          </div>

          <div className="manifest-image-col manifest-anim">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
              alt="Obra prima de concreto e vidro"
              className="manifest-img"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section section-padding">
        <div className="container">
          <div className="section-header text-center mx-auto">
            <span className="overline">Nossos Valores</span>
            <h2 className="section-title">Como Moldamos Nosso Trabalho</h2>
            <p className="section-desc">
              Mais do que erguer edifícios, nós estabelecemos compromissos de vida com nossos clientes.
            </p>
          </div>

          <div className="values-grid mt-6">
            {COMPANY_INFO.manifest.map((item, idx) => (
              <div key={idx} className="value-card value-card-anim">
                <span className="value-number">0{idx + 1}.</span>
                <h3 className="value-title">{item.title}</h3>
                <p className="value-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="overline">Nossa História</span>
            <h2 className="section-title">Marcos da Trajetória</h2>
          </div>

          <div className="timeline-trail mt-6">
            <div className="timeline-node timeline-node-anim">
              <div className="node-year">2012</div>
              <div className="node-content">
                <h4 className="node-title">Fundação da ASCENCE</h4>
                <p className="node-desc">Nascimento da incorporadora em Curitiba, focada em revitalizar o cenário urbano de alto padrão com projetos de arquitetura autoral.</p>
              </div>
            </div>

            <div className="timeline-node timeline-node-anim">
              <div className="node-year">2017</div>
              <div className="node-content">
                <h4 className="node-title">Expansão de Portfólio</h4>
                <p className="node-desc">Lançamento de nossos primeiros edifícios com assinatura de arquitetos nacionais de renome, consolidando a marca no segmento de luxo.</p>
              </div>
            </div>

            <div className="timeline-node timeline-node-anim">
              <div className="node-year">2022</div>
              <div className="node-content">
                <h4 className="node-title">Certificação de Excelência</h4>
                <p className="node-desc">Conquista de marcas históricas de satisfação do cliente na entrega da obra, além de processos de engenharia com padrão global de isolamento acústico.</p>
              </div>
            </div>

            <div className="timeline-node timeline-node-anim">
              <div className="node-year">Hoje</div>
              <div className="node-content">
                <h4 className="node-title">Arquitetura que Inspira</h4>
                <p className="node-desc">Consolidada como sinônimo de elegância discreta e segurança financeira, expandindo sua atuação de alto padrão para Arapongas com novos lançamentos icônicos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-page {
          background-color: var(--bg-primary);
        }
        .about-header {
          padding-top: 9rem;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-light);
        }
        .about-header .body-text {
          max-width: 650px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Manifest split */
        .manifest-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .manifest-text-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .manifest-image-col {
          position: relative;
          padding-top: 120%;
          overflow: hidden;
        }
        .manifest-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .value-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .value-number {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          font-weight: 300;
          color: var(--accent-gold-dark);
          letter-spacing: 0.05em;
        }
        .value-title {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-weight: 400;
        }
        .value-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        /* Timeline style */
        .about-timeline-section {
          background-color: var(--bg-secondary);
        }
        .timeline-trail {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          position: relative;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 2rem;
        }
        .timeline-trail::before {
          content: "";
          position: absolute;
          top: 0;
          left: calc(2rem + 6px);
          bottom: 0;
          width: 1px;
          background-color: var(--border-light);
        }
        .timeline-node {
          display: flex;
          gap: 3rem;
          position: relative;
        }
        .node-year {
          font-family: var(--font-sans);
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--accent-gold-dark);
          width: 70px;
          text-align: right;
          flex-shrink: 0;
          position: relative;
        }
        .node-year::after {
          content: "";
          position: absolute;
          right: -28px;
          top: 6px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: var(--accent-gold);
          border: 3px solid var(--bg-secondary);
          z-index: 2;
          box-shadow: 0 0 0 1px var(--accent-gold);
        }
        .node-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .node-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
        }
        .node-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 550px;
        }
        
        @media (max-width: 1024px) {
          .manifest-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .manifest-image-col {
            padding-top: 75%;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .value-card {
            padding: 2rem;
          }
        }
        @media (max-width: 768px) {
          .about-header {
            padding-top: 7rem;
          }
          .timeline-node {
            gap: 1.5rem;
          }
          .node-year {
            width: 50px;
            font-size: 1rem;
          }
          .node-year::after {
            right: -22px;
          }
          .timeline-trail::before {
            left: calc(2rem + 3px);
          }
        }
      `}</style>
    </div>
  );
}
