import React from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/mockData";
import symbolDark from "../assets/symbol_3_copper_charcoal.png";

export default function Footer() {
  return (
    <footer className="institutional-footer">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <Link to="/" className="footer-logo-link">
            <img src={symbolDark} alt="ASCENCE Construtora" className="footer-symbol" />
            <span className="footer-brand-name">ASCENCE</span>
          </Link>
          <p className="footer-tagline">
            "{COMPANY_INFO.tagline}"
          </p>
          <p className="footer-desc">
            {COMPANY_INFO.aboutBrief}
          </p>
        </div>

        {/* Navigation Links Column */}
        <div className="footer-col links-col">
          <h4 className="footer-col-title">Navegação</h4>
          <ul className="footer-menu">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/a-ascence">A Ascence</Link></li>
            <li><Link to="/nossa-trajetoria">Nossa Trajetória</Link></li>
            <li><Link to="/nosso-jeito-de-construir">Nosso Jeito de Construir</Link></li>
            <li><Link to="/lancamento">Lançamento</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col contact-col">
          <h4 className="footer-col-title">Contato & Endereço</h4>
          <p className="footer-contact-item">
            <strong>Endereço:</strong><br />
            {COMPANY_INFO.contact.address}
          </p>
          <p className="footer-contact-item">
            <strong>Telefone / WhatsApp:</strong><br />
            {COMPANY_INFO.contact.phone}
          </p>
          <p className="footer-contact-item">
            <strong>E-mail:</strong><br />
            {COMPANY_INFO.contact.email}
          </p>

          <div className="footer-social-row">
            <a
              href={COMPANY_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram da ASCENCE Construtora"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>{COMPANY_INFO.contact.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-content">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} ASCENCE Construtora. Todos os direitos reservados.
          </p>
          <div className="legal-links">
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          </div>
        </div>
      </div>

      <style>{`
        .institutional-footer {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding-top: 5rem;
          border-top: 1px solid var(--border-dark);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.2fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }
        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          margin-bottom: 1.25rem;
        }
        .footer-symbol {
          height: 36px;
          width: auto;
          background: transparent !important;
        }
        .footer-brand-name {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--text-light);
          letter-spacing: 0.15em;
        }
        .footer-tagline {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-style: italic;
          color: var(--accent-gold-dark);
          margin-bottom: 1rem;
        }
        .footer-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 420px;
        }
        .footer-col-title {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: var(--accent-gold-dark);
          margin-bottom: 1.5rem;
        }
        .footer-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-menu a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .footer-menu a:hover {
          color: var(--text-light);
        }
        .footer-contact-item {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 0.6rem;
          line-height: 1.5;
        }
        .footer-social-row {
          margin-top: 1.5rem;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          color: var(--text-light);
          text-decoration: none;
          font-size: 0.88rem;
          transition: color 0.2s ease;
        }
        .social-link:hover {
          color: var(--accent-gold-dark);
        }
        .footer-bottom-bar {
          border-top: 1px solid var(--border-dark);
          padding: 1.75rem 0;
          background-color: var(--bg-dark-gray);
        }
        .bottom-bar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .copyright-text {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin: 0;
        }
        .legal-links a {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .legal-links a:hover {
          color: var(--text-light);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .bottom-bar-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
