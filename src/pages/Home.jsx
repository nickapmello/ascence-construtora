import React, { useEffect, useRef, useState } from "react";
import { DEVELOPMENTS, COMPANY_INFO, DIFFERENTIALS } from "../data/mockData";
import PropertyCard from "../components/PropertyCard";
import ContactForm from "../components/ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import symbolDark from "../assets/symbol_3_copper_charcoal.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ setActivePage, setSelectedPropertyId }) {
  const featuredProperties = DEVELOPMENTS.slice(0, 3);
  const homeDifferentials = DIFFERENTIALS.slice(0, 4);

  const heroRef = useRef(null);
  const philosophyRef = useRef(null);
  const protocolContainerRef = useRef(null);

  // Card 1: Diagnostic Shuffler State
  const [shuffledCards, setShuffledCards] = useState([0, 1, 2]);

  // Card 2: Telemetry Typewriter State
  const typewriterMessages = [
    "ACÚSTICA PREMEDITADA: +35dB de atenuação sonora nas lajes.",
    "CONFORTO TÉRMICO: Vidros insulados de duplo painel contra calor.",
    "DOMÓTICA INTEGRADA: Automação predial inteligente via biometria.",
    "PRODUTO CERTIFICADO: Auditorias independentes em todas as fundações."
  ];
  const [msgIdx, setMsgIdx] = useState(0);
  const [typewriterText, setTypewriterText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Auto shuffler for Card 1
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        next.unshift(last);
        return next;
      });
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for Card 2
  useEffect(() => {
    let timer;
    const currentMessage = typewriterMessages[msgIdx];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypewriterText(currentMessage.substring(0, typewriterText.length - 1));
      }, 25);
    } else {
      timer = setTimeout(() => {
        setTypewriterText(currentMessage.substring(0, typewriterText.length + 1));
      }, 55);
    }

    if (!isDeleting && typewriterText === currentMessage) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typewriterText === "") {
      setIsDeleting(false);
      setMsgIdx((prev) => (prev + 1) % typewriterMessages.length);
    }

    return () => clearTimeout(timer);
  }, [typewriterText, isDeleting, msgIdx]);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Text Reveal Animation
      gsap.fromTo(
        ".hero-fade-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.12, ease: "power3.out" }
      );

      // 2. Cursor Protocol Scheduler Animation (Card 3)
      const schedulerTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
      schedulerTimeline
        .to(".animated-cursor", { x: 75, y: 40, duration: 1.2, ease: "power2.inOut" })
        .to(".cal-day-wed", { scale: 0.93, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".cal-day-wed", { backgroundColor: "var(--accent-gold)", color: "var(--bg-dark)", duration: 0.25 })
        .to(".animated-cursor", { x: 140, y: 110, duration: 1.2, ease: "power2.inOut" })
        .to(".scheduler-action-btn", { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 })
        .to(".scheduler-action-btn", { backgroundColor: "var(--accent-gold-dark)", color: "var(--text-light)", duration: 0.25 })
        .to(".animated-cursor", { opacity: 0, duration: 0.4, delay: 1 })
        .to(".cal-day-wed", { backgroundColor: "transparent", color: "var(--text-secondary)", duration: 0.2 })
        .to(".scheduler-action-btn", { backgroundColor: "var(--bg-dark)", color: "var(--text-light)", duration: 0.2 })
        .to(".animated-cursor", { x: 0, y: 0, opacity: 1, duration: 0.1 });

      // 3. Featured Section Title Reveal
      gsap.from(".featured-header-reveal", {
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      // 4. Philosophy Manifesto (Split Reveal)
      gsap.from(".manifesto-line", {
        scrollTrigger: {
          trigger: philosophyRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });

      // 5. Stacking Cards for Protocol Section
      const cards = gsap.utils.toArray(".protocol-card");
      if (cards.length > 0) {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1025px)", () => {
          // Inicializa os cards subsequentes abaixo e define z-index crescente
          gsap.set(cards.slice(1), { yPercent: 120 });
          cards.forEach((card, index) => {
            gsap.set(card, { zIndex: index + 1 });
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: protocolContainerRef.current,
              start: "top 80px",
              end: `+=${cards.length * 100}%`,
              pin: true,
              scrub: true,
              anticipatePin: 1,
            }
          });

          cards.forEach((card, index) => {
            if (index === 0) return;
            const prevCard = cards[index - 1];

            // Card anterior reduz, desfoca e some
            tl.to(prevCard, {
              scale: 0.92,
              filter: "blur(12px)",
              opacity: 0.45,
              duration: 1,
              ease: "none"
            }, index - 1)
            // Card atual sobe no viewport
            .to(card, {
              yPercent: 0,
              duration: 1,
              ease: "none"
            }, index - 1);
          });
        });

        mm.add("(max-width: 1024px)", () => {
          gsap.set(cards, { clearProps: "all" });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handlePropertyClick = (id) => {
    setSelectedPropertyId(id);
    setActivePage("empreendimento-detalhe", id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={heroRef} className="home-page">
      {/* 1. HERO SECTION (Cinematic Scale) */}
      <section className="hero-section">
        <div className="hero-background-wrapper">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
            alt="Arquitetura de luxo contemporânea"
            className="hero-background-img"
          />
          <div className="hero-gradient-overlay"></div>
        </div>

        <div className="hero-content-container">
          <span className="overline hero-fade-item">Alto Padrão Construtivo</span>
          <h1 className="hero-main-title hero-fade-item">
            Projetos pensados para{" "}
            <span className="hero-drama-title">transformar o seu viver.</span>
          </h1>
          <p className="hero-subtitle-text hero-fade-item">
            Incorporação residencial contemporânea de altíssimo luxo, conectando localizações exclusivas à precisão da engenharia de vanguarda.
          </p>
          <div className="hero-actions-row hero-fade-item">
            <button onClick={() => setActivePage("empreendimentos")} className="btn btn-gold">
              <span>Conhecer Empreendimentos</span>
            </button>
            <button onClick={() => setActivePage("contato")} className="btn btn-secondary text-white-btn">
              <span>Fale Conosco</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURED DEVELOPMENTS SECTION */}
      <section className="featured-section section-padding">
        <div className="container">
          <div className="section-header featured-header-reveal">
            <span className="overline">Exclusividade & Conforto</span>
            <h2 className="section-title">Empreendimentos em Destaque</h2>
            <p className="section-desc">
              Imóveis de alta grife construtiva em Arapongas. Sofisticação planejada para residências imponentes e definitivas.
            </p>
          </div>

          {/* Properties Grid */}
          <div className="featured-properties-grid">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={() => handlePropertyClick(property.id)}
              />
            ))}
          </div>

          <div className="section-actions text-center featured-header-reveal mt-6">
            <button onClick={() => setActivePage("empreendimentos")} className="btn btn-secondary">
              <span>Ver todos os empreendimentos</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER SECTION */}
      <section className="about-teaser-section section-padding">
        <div className="container about-teaser-grid">
          <div className="about-teaser-image">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
              alt="Detalhes construtivos e sofisticação"
              className="teaser-img"
            />
          </div>
          <div className="about-teaser-text">
            <span className="overline">A Construtora</span>
            <h2 className="section-title">Construindo espaços para viver histórias únicas</h2>
            <p className="body-text">
              {COMPANY_INFO.aboutBrief}
            </p>
            <p className="body-text mt-4">
              Cada projeto que assinamos na <strong>ASCENCE Construtora</strong> é guiado por uma busca incessante pela excelência. Trabalhamos lado a lado com os principais designers e engenheiros para garantir solidez construtiva, conforto acústico absoluto e materiais impecáveis.
            </p>
            <div>
              <button onClick={() => setActivePage("construtora")} className="btn btn-primary mt-6">
                <span>Conhecer a Construtora</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PHILOSOPHY SECTION (Manifesto) */}
      <section ref={philosophyRef} className="philosophy-section section-padding">
        <div className="philosophy-bg-parallax"></div>
        <div className="container manifesto-content">
          <div className="manifesto-logo-symbol manifesto-line">
            <img 
              src={symbolDark} 
              alt="ASCENCE Symbol" 
              className="manifesto-symbol-img"
            />
          </div>
          <span className="overline manifesto-line">Nosso Manifesto</span>
          <p className="manifesto-contrast-muted manifesto-line">
            A maioria das construtoras foca em: <span className="text-white">volume, padronização e velocidade.</span>
          </p>
          <p className="manifesto-contrast-large manifesto-line">
            Nós focamos em: <span className="highlight-serif-italic">obras exclusivas,</span> engenharia de precisão e <span className="highlight-serif-italic">design autoral.</span>
          </p>
        </div>
      </section>

      {/* 5. INTERACTIVE FEATURES (Micro-UIs) */}
      <section className="interactive-features-section section-padding">
        <div className="container">
          <div className="section-header text-center mx-auto">
            <span className="overline">Habilidades Técnicas</span>
            <h2 className="section-title">Diferenciais Funcionais</h2>
            <p className="section-desc">
              Não fazemos marketing estático. Nossos pilares são demonstrados através de dados integrados de engenharia.
            </p>
          </div>

          <div className="micro-ui-grid mt-6">
            {/* Card 1: Diagnostic Shuffler */}
            <div className="micro-ui-card shuffler-card">
              <div className="shuffler-stage">
                {shuffledCards.map((cardVal, idx) => {
                  let titleText = "";
                  let valText = "";
                  if (cardVal === 0) {
                    titleText = "LOCALIZAÇÃO";
                    valText = "Os terrenos mais ensolarados e nobres de Arapongas.";
                  } else if (cardVal === 1) {
                    titleText = "TECNOLOGIA";
                    valText = "Lajes com manta acústica dupla e vidros insulados.";
                  } else {
                    titleText = "EXCLUSIVIDADE";
                    valText = "Torre única com hall de elevador privativo biométrico.";
                  }
                  
                  // Translate vertical stack depending on index in state
                  const yOffset = idx * 28;
                  const scale = 1 - idx * 0.05;
                  const opacity = 1 - idx * 0.25;
                  const zIndex = 10 - idx;

                  return (
                    <div
                      key={cardVal}
                      className="shuffle-item"
                      style={{
                        transform: `translateY(${yOffset}px) scale(${scale})`,
                        opacity: opacity,
                        zIndex: zIndex,
                      }}
                    >
                      <span className="shuffle-badge">{titleText}</span>
                      <p className="shuffle-desc">{valText}</p>
                    </div>
                  );
                })}
              </div>
              <div className="micro-ui-card-footer">
                <h4 className="micro-card-title">Painel de Diferenciais</h4>
                <p className="micro-card-desc">Lógica de empilhamento vertical e mola demonstrando nossas prioridades construtivas.</p>
              </div>
            </div>

            {/* Card 2: Telemetry Typewriter */}
            <div className="micro-ui-card typewriter-card">
              <div className="typewriter-screen">
                <div className="screen-header">
                  <span className="pulse-dot"></span>
                  <span className="screen-title-mono">TELEMETRIA EM TEMPO REAL</span>
                </div>
                <div className="screen-body">
                  <span className="typed-text">{typewriterText}</span>
                  <span className="typewriter-cursor">|</span>
                </div>
              </div>
              <div className="micro-ui-card-footer">
                <h4 className="micro-card-title">Painel de Telemetria</h4>
                <p className="micro-card-desc">Monitoramento contínuo em tempo real sobre os sistemas acústicos e térmicos residenciais.</p>
              </div>
            </div>

            {/* Card 3: Cursor Protocol Scheduler */}
            <div className="micro-ui-card scheduler-card">
              <div className="scheduler-board">
                <div className="scheduler-header">
                  <span className="sch-title">Agendar Reunião</span>
                  <span className="sch-subtitle">Selecione uma data</span>
                </div>
                
                {/* Week Calendar */}
                <div className="calendar-week-grid">
                  <div className="cal-day">D</div>
                  <div className="cal-day">S</div>
                  <div className="cal-day">T</div>
                  <div className="cal-day cal-day-wed">Q</div>
                  <div className="cal-day">Q</div>
                  <div className="cal-day">S</div>
                  <div className="cal-day">S</div>
                </div>

                <button className="btn btn-primary scheduler-action-btn">
                  <span>Confirmar</span>
                </button>

                {/* Automated Cursor SVG */}
                <svg className="animated-cursor" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
                    fill="var(--accent-gold)"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div className="micro-ui-card-footer">
                <h4 className="micro-card-title">Agendador de Protocolo</h4>
                <p className="micro-card-desc">Simulação iterativa de agendamento de consultoria particular para clientes premium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROTOCOL SECTION (Sticky Stacking Cards) */}
      <section ref={protocolContainerRef} className="protocol-stacking-section">
        <div className="container">
          <div className="section-header text-center mx-auto mb-6">
            <span className="overline">Nosso Processo</span>
            <h2 className="section-title">Protocolo de Criação</h2>
            <p className="section-desc">
              O caminho percorrido para materializar visões arrojadas em estruturas de solidez atemporal.
            </p>
          </div>

          <div className="protocol-cards-stack">
            {/* Card 1: Concepção */}
            <div className="protocol-card bg-dark-card text-light">
              <div className="protocol-card-grid">
                <div className="protocol-info">
                  <span className="step-num">01 / CONCEPÇÃO</span>
                  <h3 className="protocol-title">Luz & Concepção</h3>
                  <p className="protocol-desc">
                    Trabalhamos junto a arquitetos renomados para modelar a incidência de luz solar, vãos livres de concreto e a integração visual com as praças locais de Arapongas.
                  </p>
                </div>
                <div className="protocol-visual flex-center">
                  {/* Rotating Geometric SVG */}
                  <svg viewBox="0 0 100 100" className="spinning-geometric-svg">
                    <circle cx="50" cy="50" r="42" stroke="var(--accent-gold)" strokeWidth="0.75" fill="none" />
                    <circle cx="50" cy="50" r="30" stroke="var(--text-muted)" strokeWidth="0.5" fill="none" strokeDasharray="6,4" />
                    <path d="M 50 5 L 50 95 M 5 50 L 95 50" stroke="rgba(197, 168, 128, 0.2)" strokeWidth="0.5" />
                    <polygon points="50,15 80,50 50,85 20,50" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Engenharia */}
            <div className="protocol-card bg-dark-card text-light">
              <div className="protocol-card-grid">
                <div className="protocol-info">
                  <span className="step-num">02 / ESTRUTURA</span>
                  <h3 className="protocol-title">Engenharia de Solidez</h3>
                  <p className="protocol-desc">
                    Cálculo estrutural rígido, isolamento termoacústico com mantas sob a laje, vidros insulados e concreto de alta resistência. Testes laboratoriais em cada etapa.
                  </p>
                </div>
                <div className="protocol-visual flex-center">
                  {/* Scanning Laser Line Grid */}
                  <div className="scanning-laser-container">
                    <div className="laser-dot-grid"></div>
                    <div className="laser-beam-line"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Entrega */}
            <div className="protocol-card bg-dark-card text-light">
              <div className="protocol-card-grid">
                <div className="protocol-info">
                  <span className="step-num">03 / CURADORIA</span>
                  <h3 className="protocol-title">Curadoria e Chaves</h3>
                  <p className="protocol-desc">
                    Acabamentos de grifes premium importadas, marcenaria fina de alto luxo nas áreas comuns e entrega com assessoria exclusiva de engenharia integrada.
                  </p>
                </div>
                <div className="protocol-visual flex-center">
                  {/* Pulsing EKG Wave SVG */}
                  <svg viewBox="0 0 200 60" className="pulse-wave-svg">
                    <path
                      d="M0 30 L50 30 L60 10 L68 50 L75 30 L110 30 L120 5 L128 55 L135 30 L200 30"
                      stroke="var(--accent-gold)"
                      strokeWidth="1.5"
                      fill="none"
                      className="ekg-path-draw"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GET STARTED / PLANOS */}
      <section className="pricing-plans-section section-padding">
        <div className="container">
          <div className="section-header text-center mx-auto">
            <span className="overline">Opções de Moradia</span>
            <h2 className="section-title">Tipos de Unidades</h2>
            <p className="section-desc">
              Escolha a escala ideal de exclusividade para o seu próximo endereço residencial.
            </p>
          </div>

          <div className="plans-pricing-grid mt-6">
            <div className="plan-tier-card">
              <h3 className="plan-tier-title">Signature Suite</h3>
              <span className="plan-tier-subtitle">Apartamento Tipo</span>
              <p className="plan-tier-desc">Apartamentos com plantas inteligentes de 180m² a 220m², integrando áreas íntimas a varandas gourmet amplas.</p>
              <div className="plan-tier-divider"></div>
              <button onClick={() => setActivePage("empreendimentos")} className="btn btn-secondary w-full">
                <span>Ver Disponíveis</span>
              </button>
            </div>

            <div className="plan-tier-card featured-tier-card">
              <h3 className="plan-tier-title text-white">Horizon Duplex</h3>
              <span className="plan-tier-subtitle gold-text">Apartamento Duplex</span>
              <p className="plan-tier-desc text-muted-white">Unidades lineares ou duplex de 260m² a 380m² com pé-direito duplo e terraço integrado.</p>
              <div className="plan-tier-divider dark-divider"></div>
              <button onClick={() => setActivePage("empreendimentos")} className="btn btn-gold w-full">
                <span>Conhecer Projetos</span>
              </button>
            </div>

            <div className="plan-tier-card">
              <h3 className="plan-tier-title">Penthouse Palace</h3>
              <span className="plan-tier-subtitle">Coberturas Exclusivas</span>
              <p className="plan-tier-desc">Coberturas majestosas lineares de até 450m², com spa privativo, piscina externa aquecida e bosque privativo.</p>
              <div className="plan-tier-divider"></div>
              <button onClick={() => setActivePage("contato")} className="btn btn-secondary w-full">
                <span>Falar com Diretor</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMMERCIAL CTA BANNER */}
      <section className="commercial-banner">
        <div className="commercial-banner-content">
          <h2 className="banner-title">Encontre o imóvel ideal para o seu momento</h2>
          <p className="banner-subtitle">
            Nossa equipe de consultores especializados está pronta para desenhar a melhor proposta e agendar visitas exclusivas.
          </p>
          <button onClick={() => setActivePage("contato")} className="btn btn-gold banner-btn">
            <span>Entrar em contato</span>
          </button>
        </div>
      </section>

      {/* 9. CONTACT FORM SECTION */}
      <section className="home-contact-section section-padding" id="contato-secao">
        <div className="container contact-section-grid">
          <div className="contact-info-panel">
            <span className="overline">Fale Conosco</span>
            <h2 className="section-title">Inicie uma conversa exclusiva</h2>
            <p className="body-text mb-6">
              Preencha o formulário e tenha atendimento imediato focado em discrição, transparência e consultoria inteligente.
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
            </div>
          </div>
          <div className="contact-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>

      <style>{`
        /* Hero Section Styling */
        .hero-section {
          height: 100dvh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding-bottom: 6rem;
          background-color: var(--bg-dark);
          overflow: hidden;
        }
        .hero-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-background-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4; /* Aumenta a transparência da foto (mais escura) para melhorar a leitura do texto */
          transition: opacity 0.3s ease;
        }
        .hero-gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.6) 50%, rgba(18, 18, 18, 0.2) 100%);
          z-index: 2;
        }
        .hero-content-container {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: var(--container-max);
          margin: 0 auto;
          padding: 0 4rem;
          color: var(--text-light);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }
        .hero-main-title {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          max-width: 20ch;
          display: flex;
          flex-direction: column;
          color: var(--text-muted); /* Mesma cor de "Incorporação residencial contemporânea..." */
        }
        .hero-drama-title {
          font-family: var(--font-serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(2.6rem, 5.5vw, 4.8rem);
          color: var(--accent-gold);
          margin-top: 0.25rem;
        }
        .hero-subtitle-text {
          font-family: var(--font-sans);
          font-size: 1.15rem;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 48ch;
        }
        .hero-actions-row {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .text-white-btn {
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: white !important;
        }
        .text-white-btn:hover {
          border-color: white !important;
          background-color: white !important;
          color: var(--bg-dark) !important;
        }

        /* Section header */
        .section-header {
          max-width: 700px;
          margin-bottom: 4.5rem;
        }
        .section-desc {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-top: 0.75rem;
        }

        /* Featured catalog */
        .featured-properties-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 4rem;
        }

        /* About Teaser */
        .about-teaser-section {
          background-color: var(--bg-secondary);
        }
        .about-teaser-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 5rem;
          align-items: center;
        }
        .about-teaser-image {
          position: relative;
          padding-top: 110%;
          overflow: hidden;
        }
        .teaser-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .about-teaser-text {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        /* Philosophy Section (Manifesto) */
        .philosophy-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          position: relative;
          overflow: hidden;
          padding-top: 10rem;
          padding-bottom: 10rem;
        }
        .philosophy-bg-parallax {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070');
          background-size: cover;
          background-position: center;
          opacity: 0.08;
          z-index: 1;
        }
        .manifesto-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }
        .manifesto-logo-symbol {
          display: flex;
          justify-content: center;
          margin-bottom: 0.5rem;
        }
        .manifesto-symbol-img {
          height: 3.5rem;
          object-fit: contain;
          opacity: 0.75;
        }
        .manifesto-contrast-muted {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          color: var(--text-muted);
          max-width: 45ch;
          line-height: 1.6;
        }
        .manifesto-contrast-large {
          font-family: var(--font-sans);
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 300;
          line-height: 1.2;
          color: white;
          max-width: 25ch;
        }
        .highlight-serif-italic {
          font-family: var(--font-serif);
          font-style: italic;
          color: var(--accent-gold);
        }

        /* Interactive Features (Micro UIs) */
        .interactive-features-section {
          background-color: var(--bg-primary);
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .micro-ui-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        .micro-ui-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 380px;
          justify-content: space-between;
        }
        .micro-ui-card-footer {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .micro-card-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .micro-card-desc {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Diagnostic Shuffler UI */
        .shuffler-stage {
          height: 160px;
          position: relative;
          width: 100%;
        }
        .shuffle-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 1.25rem;
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease;
        }
        .shuffle-badge {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--accent-gold-dark);
          text-transform: uppercase;
        }
        .shuffle-desc {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          line-height: 1.4;
          color: var(--text-primary);
        }

        /* Telemetry Typewriter UI */
        .typewriter-screen {
          background-color: #121215;
          border-radius: 1rem;
          height: 170px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border: 1px solid rgba(197, 168, 128, 0.15);
        }
        .screen-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding-bottom: 0.5rem;
        }
        .pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #25d366;
          animation: pulse-green 1.5s infinite;
        }
        @keyframes pulse-green {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
        .screen-title-mono {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.1em;
        }
        .screen-body {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.85rem;
          line-height: 1.5;
          color: #f5f5f3;
        }
        .typewriter-cursor {
          color: var(--accent-gold);
          font-weight: 700;
          animation: blink 1s infinite step-end;
        }
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }

        /* Calendar Scheduler UI */
        .scheduler-board {
          border: 1px solid var(--border-light);
          background-color: var(--bg-primary);
          padding: 1.25rem;
          border-radius: 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          position: relative;
          overflow: hidden;
        }
        .scheduler-header {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }
        .sch-title {
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 0.85rem;
        }
        .sch-subtitle {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .calendar-week-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 0.35rem;
          text-align: center;
        }
        .cal-day {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          padding: 0.4rem 0;
          border-radius: 0.25rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }
        .cal-day-wed {
          border: 1px solid var(--accent-gold);
        }
        .scheduler-action-btn {
          font-size: 0.65rem !important;
          padding: 0.5rem 1rem !important;
          margin-top: 0.25rem;
        }
        .animated-cursor {
          position: absolute;
          width: 22px;
          height: 22px;
          top: 0;
          left: 0;
          z-index: 10;
          pointer-events: none;
        }

        /* Protocol section (stacking) */
        .protocol-stacking-section {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding-top: 7.5rem;
          padding-bottom: 7.5rem;
        }
        .protocol-cards-stack {
          position: relative;
          max-width: 1000px;
          height: 520px;
          margin: 4rem auto 0 auto;
        }
        .protocol-card {
          width: 100%;
          min-height: 480px;
          background-color: #16161c;
          border: 1px solid rgba(197, 168, 128, 0.15);
          padding: 4rem;
          display: flex;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 2.5rem !important;
        }
        .protocol-card-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          width: 100%;
          align-items: center;
        }
        .protocol-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .step-num {
          font-family: "JetBrains Mono", monospace;
          font-size: 0.85rem;
          color: var(--accent-gold);
          letter-spacing: 0.15em;
        }
        .protocol-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.5vw, 2.6rem);
          font-weight: 400;
        }
        .protocol-desc {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
        }
        .protocol-visual {
          width: 100%;
          height: 250px;
          position: relative;
        }
        .flex-center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Rotating Geometric SVG */
        .spinning-geometric-svg {
          width: 180px;
          height: 180px;
          animation: spin-slow 20s infinite linear;
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        /* Laser Sweep Scanner */
        .scanning-laser-container {
          width: 200px;
          height: 200px;
          border: 1px dashed rgba(197, 168, 128, 0.25);
          position: relative;
          overflow: hidden;
        }
        .laser-dot-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: 20px 20px;
          background-image: radial-gradient(rgba(197, 168, 128, 0.15) 1px, transparent 1px);
        }
        .laser-beam-line {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-gold);
          box-shadow: 0 0 10px rgba(197, 168, 128, 0.8);
          animation: laser-sweep 4s infinite ease-in-out;
        }
        @keyframes laser-sweep {
          0% { top: 0%; }
          50% { top: 100%; }
          100% { top: 0%; }
        }

        /* Pulse wave EKG */
        .pulse-wave-svg {
          width: 250px;
          height: 80px;
        }
        .ekg-path-draw {
          stroke-dasharray: 600;
          stroke-dashoffset: 600;
          animation: ekg-stroke 4.5s infinite linear;
        }
        @keyframes ekg-stroke {
          to { stroke-dashoffset: 0; }
        }

        /* Pricing units section */
        .pricing-plans-section {
          background-color: var(--bg-secondary);
        }
        .plans-pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          align-items: stretch;
        }
        .plan-tier-card {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-light);
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 2rem;
          gap: 1.5rem;
        }
        .plan-tier-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 500;
        }
        .plan-tier-subtitle {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          margin-top: -0.5rem;
        }
        .plan-tier-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }
        .plan-tier-divider {
          width: 100%;
          height: 1px;
          background-color: var(--border-light);
          margin-bottom: 0.5rem;
        }
        .featured-tier-card {
          background-color: var(--bg-dark) !important;
          border-color: var(--accent-gold) !important;
          transform: scale(1.03);
          box-shadow: 0 15px 45px rgba(28, 28, 26, 0.08);
        }
        .text-white {
          color: white !important;
        }
        .gold-text {
          color: var(--accent-gold) !important;
        }
        .text-muted-white {
          color: var(--text-muted) !important;
        }
        .dark-divider {
          background-color: var(--border-dark) !important;
        }

        /* Commercial CTA Banner */
        .commercial-banner {
          background-image: linear-gradient(rgba(18, 18, 18, 0.8), rgba(18, 18, 18, 0.8)), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 10rem 2rem;
          text-align: center;
          color: var(--text-light);
        }
        .commercial-banner-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .banner-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 300;
          color: var(--text-light);
        }
        .banner-subtitle {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 50ch;
          line-height: 1.6;
        }
        .banner-btn {
          margin-top: 1rem;
        }

        /* Contact Section */
        .contact-section-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 5rem;
          align-items: start;
        }
        .contact-info-panel {
          padding-top: 2rem;
        }
        .mini-info-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-top: 2rem;
        }
        .mini-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .mini-label {
          font-family: var(--font-sans);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
        }
        .mini-val {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        /* Responsiveness adjustments */
        @media (max-width: 1200px) {
          .hero-content-container {
            padding: 0 2.5rem;
          }
          .about-teaser-grid {
            gap: 3rem;
          }
          .micro-ui-grid {
            gap: 1.5rem;
          }
        }
        @media (max-width: 1024px) {
          .featured-properties-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
          .micro-ui-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .micro-ui-card {
            height: 320px;
          }
          .shuffler-stage {
            height: 130px;
          }
          .typewriter-screen {
            height: 130px;
          }
          .protocol-cards-stack {
            height: auto !important;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }
          .protocol-card {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            min-height: auto;
            padding: 2.5rem;
          }
          .protocol-card-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .protocol-visual {
            height: 150px;
          }
          .plans-pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .featured-tier-card {
            transform: scale(1);
          }
        }
        @media (max-width: 768px) {
          .hero-background-img {
            opacity: 0.25; /* Ainda mais transparente no mobile para legibilidade máxima */
          }
          .hero-content-container {
            padding: 0 1.5rem;
          }
          .about-teaser-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .about-teaser-image {
            padding-top: 75%;
          }
          .contact-section-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 600px) {
          .featured-properties-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
