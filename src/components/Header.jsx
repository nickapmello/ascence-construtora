import React, { useState, useEffect } from "react";
import { COMPANY_INFO } from "../data/mockData";
import logoLight from "../assets/logo_1_copper_light.png";
import symbolLight from "../assets/symbol_1_copper_light.png";

export default function Header({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Início" },
    { id: "empreendimentos", label: "Empreendimentos" },
    { id: "construtora", label: "A Construtora" },
    { id: "diferenciais", label: "Diferenciais" },
    { id: "contato", label: "Fale Conosco" }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className={`header-nav ${isScrolled ? "header-active" : ""}`}>
      <div className="header-container">
        {/* Elegant Logo Images */}
        <div className="logo-area" onClick={() => handleNavClick("inicio")}>
          <img 
            src={logoLight} 
            alt="ASCENCE Incorporadora" 
            className="logo-img-desktop" 
          />
          <img 
            src={symbolLight} 
            alt="ASCENCE" 
            className="logo-img-mobile" 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
              <span className="nav-line"></span>
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="cta-area">
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary cta-header-btn"
          >
            <span>Fale com um consultor</span>
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          className={`hamburger ${mobileMenuOpen ? "open" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu principal"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Drawer (Curtain Reveal Menu) */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activePage === item.id ? "active" : ""}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold mobile-cta-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            Fale com um consultor
          </a>
        </nav>
      </div>

      {/* Header Specific Custom CSS (Scoped Styles inside central file or component style helper) */}
      <style>{`
        .header-nav {
          position: fixed;
          top: 1.5rem;
          left: 50%;
          transform: translateX(-50%);
          width: 92%;
          max-width: 1200px;
          z-index: 100;
          background: #ffffff;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(197, 168, 128, 0.12);
          border-radius: 4rem;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          height: 4.8rem;
          display: flex;
          align-items: center;
        }
        .header-active {
          top: 1rem;
          background: #fbfbf9 !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          border: 1px solid rgba(197, 168, 128, 0.25) !important;
          box-shadow: 0 12px 35px rgba(28, 28, 26, 0.04) !important;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 2.5rem;
        }
        .logo-area {
          display: flex;
          align-items: center;
          cursor: pointer;
          user-select: none;
        }
        .logo-img-desktop {
          height: 140px;
          margin-top: -46px;
          margin-bottom: -46px;
          width: auto;
          max-width: 300px;
          object-fit: contain;
          display: block;
        }
        .logo-img-mobile {
          height: 30px;
          width: auto;
          max-width: 80px;
          object-fit: contain;
          display: none;
        }
        .desktop-menu {
          display: flex;
          gap: 2.2rem;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          cursor: pointer;
          padding: 0.5rem 0;
          position: relative;
          transition: var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }
        .nav-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-gold);
          transition: var(--transition-smooth);
        }
        .nav-link:hover .nav-line, .nav-link.active .nav-line {
          width: 100%;
        }
        .cta-header-btn {
          font-size: 0.7rem;
          padding: 0.65rem 1.4rem;
        }
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          flex-direction: column;
          gap: 6px;
          z-index: 110;
          padding: 5px;
        }
        .hamburger-line {
          display: block;
          width: 24px;
          height: 1px;
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
        .mobile-menu-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--bg-primary);
          z-index: 105;
          transform: translateX(100%);
          transition: var(--transition-smooth);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-drawer.open {
          transform: translateX(0);
        }
        @media (min-width: 1025px) {
          .mobile-menu-drawer {
            display: none !important;
          }
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          width: 80%;
        }
        .mobile-nav-link {
          background: none;
          border: none;
          font-family: var(--font-sans);
          font-size: 1.4rem;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          transition: var(--transition-fast);
        }
        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--accent-gold);
          transform: scale(1.05);
        }
        .mobile-cta-btn {
          margin-top: 1rem;
          width: 100%;
        }
        @media (max-width: 1024px) {
          .desktop-menu, .cta-area {
            display: none;
          }
          .logo-img-desktop {
            display: none;
          }
          .logo-img-mobile {
            display: block;
          }
          .hamburger {
            display: flex;
          }
          .header-nav {
            height: 4.2rem;
            top: 1rem;
            width: 94%;
          }
          .header-container {
            padding: 0 1.5rem;
          }
        }
      `}</style>
    </header>
  );
}
