import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/mockData";
import logoDark from "../assets/logo-ascence-horizontal-trimmed.png";
import symbolDark from "../assets/symbol_3_copper_charcoal.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollPosition = useRef(0);

  // Scroll detection for floating navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Robust cross-browser (iOS Safari & Android) body scroll lock when mobile menu is open
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
    <header className={`header-nav ${isScrolled ? "header-active" : ""}`}>
      <div className="header-container">
        {/* Logo Link */}
        <Link to="/" className="logo-area" onClick={() => setMobileMenuOpen(false)}>
          <img 
            src={logoDark} 
            alt="ASCENCE Construtora" 
            className="logo-img-desktop" 
          />
          <img 
            src={symbolDark} 
            alt="ASCENCE Construtora" 
            className="logo-img-mobile" 
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-menu" aria-label="Navegação Principal">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            >
              {item.label}
              <span className="nav-line"></span>
            </NavLink>
          ))}
        </nav>

        {/* Header CTA Button */}
        <div className="cta-area">
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-header-btn"
          >
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir Menu de Navegação"
          aria-expanded={mobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer (Portaled directly to document.body) */}
      {mobileMenuOpen && createPortal(
        <div className="mobile-menu-overlay">
          <button
            className="mobile-menu-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Fechar Menu"
          >
            &times;
          </button>
          <div className="mobile-menu-drawer">
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold mobile-cta-btn"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        .header-nav {
          position: fixed;
          top: 1.25rem;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          width: 92%;
          max-width: 1240px;
          z-index: 100;
          background: #ffffff;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(167, 119, 101, 0.2);
          border-radius: 4rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          height: 4.6rem;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .header-active {
          top: 0.75rem;
          background: #ffffff !important;
          border: 1px solid rgba(167, 119, 101, 0.35) !important;
          box-shadow: 0 10px 30px rgba(28, 28, 26, 0.08) !important;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 2rem;
          box-sizing: border-box;
          min-width: 0;
        }
        .logo-area {
          display: flex;
          align-items: center;
          text-decoration: none;
          height: 36px;
        }
        .logo-img-desktop {
          height: 32px;
          width: auto;
          max-width: 220px;
          object-fit: contain;
          display: block;
        }
        .logo-img-mobile {
          height: 28px;
          width: auto;
          max-width: 60px;
          object-fit: contain;
          display: none;
        }
        .desktop-menu {
          display: flex;
          gap: 1.8rem;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          text-decoration: none;
          padding: 0.4rem 0;
          position: relative;
          transition: var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--accent-gold-dark);
        }
        .nav-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--accent-gold-dark);
          transition: var(--transition-smooth);
        }
        .nav-link:hover .nav-line, .nav-link.active .nav-line {
          width: 100%;
        }
        .cta-header-btn {
          font-size: 0.7rem;
          padding: 0.6rem 1.25rem;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          z-index: 110;
          padding: 5px;
        }
        .hamburger-line {
          display: block;
          width: 22px;
          height: 2px;
          background-color: var(--text-primary);
          transition: var(--transition-smooth);
        }
        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu Overlay & Drawer */
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          width: auto;
          max-width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow-x: clip;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 1.5rem 2rem 1.5rem;
          animation: mobileMenuFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-sizing: border-box;
          z-index: 9999;
        }
        @supports not (overflow-x: clip) {
          .mobile-menu-overlay {
            overflow-x: hidden;
          }
        }
        .mobile-menu-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 2.5rem;
          cursor: pointer;
          z-index: 10001;
          line-height: 1;
          padding: 0.5rem;
          transition: color 0.2s ease;
        }
        .mobile-menu-close-btn:hover {
          color: var(--accent-gold-dark);
        }
        .mobile-menu-drawer {
          min-height: 100%;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          overscroll-behavior: contain;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        @keyframes mobileMenuFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (min-width: 1081px) {
          .mobile-menu-overlay {
            display: none !important;
          }
        }
        .mobile-nav {
          width: 100%;
          max-width: 420px;
          min-width: 0;
          margin: 0 auto;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          gap: 1.5rem;
          text-align: center;
          box-sizing: border-box;
        }
        .mobile-nav-link {
          width: 100%;
          max-width: 340px;
          min-width: 0;
          margin: 0 auto;
          padding: 0.5rem 1rem;

          display: flex;
          align-items: center;
          justify-content: center;

          text-align: center;
          line-height: 1.35;
          white-space: normal;
          text-wrap: balance;
          box-sizing: border-box;

          text-decoration: none;
          font-family: var(--font-sans);
          font-size: 1.15rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-primary);
          transition: var(--transition-fast);
        }
        .mobile-nav-link.active, .mobile-nav-link:hover {
          color: var(--accent-gold-dark);
          text-align: center;
        }
        .mobile-cta-btn {
          margin-top: 1rem;
          width: 100%;
          max-width: 340px;
          min-width: 0;
          text-align: center;
          box-sizing: border-box;
        }
        @media (max-width: 1080px) {
          .desktop-menu, .cta-area {
            display: none;
          }
          .logo-img-desktop {
            display: none;
          }
          .logo-img-mobile {
            display: block;
            height: 28px;
          }
          .hamburger {
            display: flex;
          }
          .header-nav {
            height: 4rem;
            top: 0.75rem;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: 94%;
          }
          .header-container {
            padding: 0 1.25rem;
          }
        }
      `}</style>
    </header>
  );
}
