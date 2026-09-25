import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link, useLocation } from "react-router-dom";
import { COMPANY_INFO } from "../data/mockData";
import logoDark from "../assets/logo_4_copper_charcoal.png";
import logoLight from "../assets/logo_1_copper_light.png";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useRef(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Define se o header deve operar no estado claro (páginas internas com fundo branco ou após scroll)
  const isLightMode = !isHome || isScrolled;

  // Auto-hide e auto-show no scroll + detecção de página rolada (> 40px)
  useEffect(() => {
    const threshold = 10;

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

          // Proteção iOS Safari rubber-band
          if (currentScrollY < 0 || currentScrollY > maxScroll) {
            ticking.current = false;
            return;
          }

          setIsScrolled(currentScrollY > 40);

          if (mobileMenuOpen) {
            setHeaderVisible(true);
          } else if (currentScrollY <= 40) {
            setHeaderVisible(true);
          } else {
            const diff = currentScrollY - lastScrollY.current;
            if (Math.abs(diff) >= threshold) {
              if (diff > 0) {
                setHeaderVisible(false); // Scroll para baixo -> esconde
              } else {
                setHeaderVisible(true);  // Scroll para cima -> revela
              }
              lastScrollY.current = currentScrollY;
            }
          }

          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setHeaderVisible(true);
  }, [mobileMenuOpen]);

  // Bloqueio seguro de scroll do body no mobile menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    scrollPosition.current = window.scrollY;
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollPosition.current);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { to: "/", label: "Início" },
    { to: "/a-ascence", label: "A Ascence" },
    { to: "/nossa-trajetoria", label: "Nossa Trajetória" },
    { to: "/nosso-jeito-de-construir", label: "Nosso Jeito de Construir" },
    { to: "/lancamento", label: "Lançamento" },
    { to: "/contato", label: "Contato" }
  ];

  return (
    <header 
      className={`luxury-header ${isLightMode ? "luxury-theme-light" : "luxury-theme-dark"} ${isScrolled ? "luxury-scrolled" : ""} ${!headerVisible && !mobileMenuOpen ? "luxury-hidden" : ""}`}
    >
      <div className="luxury-header-wrapper">
        {/* ILHA 1: Logotipo Livre e Sofisticado */}
        <Link 
          to="/" 
          className="luxury-logo-island" 
          onClick={() => setMobileMenuOpen(false)}
          aria-label="ASCENCE Construtora - Página Inicial"
        >
          <img 
            src={isLightMode ? logoDark : logoLight} 
            alt="ASCENCE Construtora" 
            className="luxury-logo-img desktop-logo" 
          />
          <img 
            src={isLightMode ? logoDark : logoLight} 
            alt="ASCENCE Construtora" 
            className="luxury-logo-img mobile-logo" 
          />
        </Link>

        {/* ILHA 2: Cápsula Central Frosted Glass */}
        <nav className="luxury-nav-capsule" aria-label="Navegação Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `luxury-nav-link ${isActive ? "active" : ""}`}
            >
              <span className="link-text">{item.label}</span>
              <span className="link-indicator" />
            </NavLink>
          ))}
        </nav>

        {/* ILHA 3: Botão CTA Pílula */}
        <div className="luxury-cta-island">
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="luxury-pill-btn"
          >
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Gatilho Mobile (Hambúrguer de Vidro Fosco) */}
        <button
          className={`luxury-hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar Menu" : "Abrir Menu de Navegação"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Menu Overlay Mobile Minimalista */}
      {mobileMenuOpen && createPortal(
        <div className="luxury-mobile-overlay">
          <div className="luxury-mobile-topbar">
            <img 
              src={logoLight} 
              alt="ASCENCE Construtora" 
              className="luxury-mobile-logo" 
            />
            <button
              className="luxury-mobile-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar Menu"
            >
              &times;
            </button>
          </div>

          <div className="luxury-mobile-content">
            <nav className="luxury-mobile-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `luxury-mobile-item ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="luxury-mobile-footer">
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="luxury-mobile-whatsapp-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
              <p className="luxury-mobile-tagline">
                Projetos pensados para a vida e a arquitetura
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        /* =========================================================
           ESTILOS DO HEADER LUXURY (INSPIRADO NA REFERÊNCIA HVOYA)
           ========================================================= */
        
        .luxury-header {
          position: fixed;
          top: 1.6rem;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          pointer-events: none; /* Deixa cliques passarem fora das ilhas */
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), top 0.4s ease;
        }

        .luxury-header-wrapper {
          width: 92%;
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: auto;
          box-sizing: border-box;
        }

        /* --- ILHA 1: LOGOTIPO LIVRE --- */
        .luxury-logo-island {
          display: flex;
          align-items: center;
          text-decoration: none;
          padding: 0.35rem 0;
          background: transparent !important;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        }

        .luxury-logo-island:hover {
          transform: translateY(-1px);
        }

        .luxury-logo-img {
          display: block;
          height: 40px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          transition: filter 0.3s ease, opacity 0.3s ease;
        }

        .luxury-theme-dark:not(.luxury-scrolled) .luxury-logo-img {
          filter: brightness(1.2) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.4));
        }

        .luxury-theme-light .luxury-logo-img {
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.05));
        }

        .mobile-logo {
          display: none;
        }

        /* --- ILHA 2: CÁPSULA FROSTED GLASS (ESTRUTURA COMUM) --- */
        .luxury-nav-capsule {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          padding: 0.65rem 2.2rem;
          border-radius: 9999px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .luxury-nav-link {
          position: relative;
          font-family: var(--font-main, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          font-size: 0.78rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          text-decoration: none;
          padding: 0.3rem 0;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          transition: color 0.25s ease, opacity 0.25s ease;
        }

        .link-indicator {
          display: block;
          width: 0;
          height: 1.5px;
          margin-top: 3px;
          border-radius: 2px;
          transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease;
        }

        .luxury-nav-link:hover .link-indicator,
        .luxury-nav-link.active .link-indicator {
          width: 100%;
        }

        .luxury-nav-link.active {
          font-weight: 500;
        }

        /* --- ILHA 3: BOTÃO CTA PÍLULA (ESTRUTURA COMUM) --- */
        .luxury-cta-island {
          display: flex;
          align-items: center;
        }

        .luxury-pill-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-main, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          font-size: 0.76rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          text-decoration: none;
          padding: 0.72rem 1.65rem;
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .luxury-pill-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
        }

        .luxury-hamburger {
          display: none;
        }

        /* =========================================================
           CALIBRAÇÃO DE CORES: DARK (HOME SOBRE HERO) VS LIGHT (PÁGINAS INTERNAS E SCROLL)
           ========================================================= */

        /* 1. ESTADO DARK (Home sobre o hero escuro) */
        .luxury-theme-dark .luxury-nav-capsule {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.28);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.12),
                      inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .luxury-theme-dark .luxury-nav-link {
          color: rgba(255, 255, 255, 0.88);
        }

        .luxury-theme-dark .luxury-nav-link:hover,
        .luxury-theme-dark .luxury-nav-link.active {
          color: #ffffff;
        }

        .luxury-theme-dark .link-indicator {
          background: #ffffff;
        }

        .luxury-theme-dark .luxury-pill-btn {
          background: #ffffff;
          color: #1a1a1a;
          border: 1px solid rgba(255, 255, 255, 0.9);
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
        }

        .luxury-theme-dark .luxury-pill-btn:hover {
          background: #f7f6f3;
          color: #0d0e0f;
        }

        /* 2. ESTADO LIGHT (Páginas internas com fundo claro ou rolagem) */
        .luxury-theme-light .luxury-nav-capsule {
          background: rgba(255, 255, 255, 0.88);
          border: 1px solid rgba(167, 119, 101, 0.28);
          box-shadow: 0 10px 30px rgba(28, 28, 26, 0.08);
        }

        .luxury-theme-light .luxury-nav-link {
          color: #1F2328;
        }

        .luxury-theme-light .luxury-nav-link:hover,
        .luxury-theme-light .luxury-nav-link.active {
          color: var(--accent-gold, #a77765);
        }

        .luxury-theme-light .link-indicator {
          background: var(--accent-gold, #a77765);
        }

        .luxury-theme-light .luxury-pill-btn {
          background: #1F2328;
          color: #ffffff;
          border: 1px solid #1F2328;
          box-shadow: 0 4px 18px rgba(31, 35, 40, 0.2);
        }

        .luxury-theme-light .luxury-pill-btn:hover {
          background: var(--accent-gold, #a77765);
          border-color: var(--accent-gold, #a77765);
          color: #ffffff;
        }

        /* 3. COMPORTAMENTO DE TRANSIÇÃO DE POSIÇÃO NO SCROLL */
        .luxury-scrolled {
          top: 0.9rem;
        }

        /* =========================================================
           RESPONSIVIDADE E MOBILE (< 1080px)
           ========================================================= */
        @media (max-width: 1080px) {
          .luxury-header.luxury-hidden {
            transform: translateY(calc(-100% - 2.5rem));
            pointer-events: none;
          }

          .luxury-nav-capsule,
          .luxury-cta-island,
          .desktop-logo {
            display: none !important;
          }

          .mobile-logo {
            display: block;
            height: 32px;
          }

          .luxury-header-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-radius: 9999px;
            padding: 0.55rem 1.25rem;
            transition: all 0.3s ease;
          }

          /* Mobile Tema Dark */
          .luxury-theme-dark .luxury-header-wrapper {
            background: rgba(255, 255, 255, 0.12);
            border: 1px solid rgba(255, 255, 255, 0.22);
            box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
          }

          .luxury-theme-dark .luxury-hamburger {
            background: rgba(255, 255, 255, 0.18);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .luxury-theme-dark .hamburger-bar {
            background-color: #ffffff;
          }

          /* Mobile Tema Light (Páginas internas ou scroll) */
          .luxury-theme-light .luxury-header-wrapper {
            background: rgba(255, 255, 255, 0.92);
            border: 1px solid rgba(167, 119, 101, 0.28);
            box-shadow: 0 10px 30px rgba(28, 28, 26, 0.08);
          }

          .luxury-theme-light .luxury-hamburger {
            background: rgba(31, 35, 40, 0.06);
            border: 1px solid rgba(167, 119, 101, 0.25);
          }

          .luxury-theme-light .hamburger-bar {
            background-color: #1F2328;
          }

          .luxury-hamburger {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            padding: 0;
            transition: all 0.3s ease;
          }

          .hamburger-bar {
            display: block;
            width: 18px;
            height: 2px;
            border-radius: 2px;
            transition: all 0.3s ease;
          }

          .luxury-hamburger.open .hamburger-bar:nth-child(1) {
            transform: translateY(4px) rotate(45deg);
          }

          .luxury-hamburger.open .hamburger-bar:nth-child(2) {
            transform: translateY(-4px) rotate(-45deg);
          }
        }

        /* =========================================================
           DRAWER MOBILE FULLSCREEN SOFISTICADO
           ========================================================= */
        .luxury-mobile-overlay {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          background: rgba(18, 20, 23, 0.96);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          z-index: 9999;
          display: flex;
          flex-direction: column;
          animation: luxuryFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes luxuryFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .luxury-mobile-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 1.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .luxury-mobile-logo {
          height: 32px;
          width: auto;
          object-fit: contain;
        }

        .luxury-mobile-close {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 1.8rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .luxury-mobile-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 2.5rem 1.75rem 2rem 1.75rem;
          overflow-y: auto;
        }

        .luxury-mobile-links {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }

        .luxury-mobile-item {
          color: rgba(255, 255, 255, 0.85);
          font-family: var(--font-main, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
          font-size: 1.15rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          text-decoration: none;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
        }

        .luxury-mobile-item.active,
        .luxury-mobile-item:hover {
          color: var(--accent-gold, #a77765);
          transform: translateX(6px);
        }

        .luxury-mobile-footer {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .luxury-mobile-whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #121417;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          padding: 1rem;
          border-radius: 9999px;
          text-decoration: none;
          font-size: 0.88rem;
        }

        .luxury-mobile-tagline {
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.78rem;
          text-align: center;
          margin: 0;
          letter-spacing: 0.04em;
        }

        @media (prefers-reduced-motion: reduce) {
          .luxury-header,
          .luxury-nav-capsule,
          .luxury-pill-btn,
          .luxury-mobile-overlay {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </header>
  );
}
