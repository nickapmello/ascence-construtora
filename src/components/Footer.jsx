import React from "react";
import { COMPANY_INFO } from "../data/mockData";
import logoDark from "../assets/logo_4_copper_charcoal.png";

export default function Footer({ setActivePage }) {
  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-area">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="logo-area" onClick={() => handleNavClick("inicio")}>
            <img
              src={logoDark}
              alt="ASCENCE Incorporadora"
              className="logo-img-footer"
            />
          </div>
          <div className="footer-socials">
            <a href={COMPANY_INFO.contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <p className="footer-description">
            {COMPANY_INFO.aboutBrief}
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-links-col">
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links-list">
            <li><button onClick={() => handleNavClick("inicio")}>Início</button></li>
            <li><button onClick={() => handleNavClick("empreendimentos")}>Empreendimentos</button></li>
            <li><button onClick={() => handleNavClick("construtora")}>A Construtora</button></li>
            <li><button onClick={() => handleNavClick("diferenciais")}>Diferenciais</button></li>
            <li><button onClick={() => handleNavClick("contato")}>Fale Conosco</button></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact-col">
          <h4 className="footer-title">Contato</h4>
          <ul className="footer-contact-list">
            <li>
              <span className="contact-label">Telefone:</span>
              <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\D/g, '')}`}>{COMPANY_INFO.contact.phone}</a>
            </li>
            <li>
              <span className="contact-label">WhatsApp:</span>
              <a href={COMPANY_INFO.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                {COMPANY_INFO.contact.phone}
              </a>
            </li>
            <li>
              <span className="contact-label">E-mail:</span>
              <a href={`mailto:${COMPANY_INFO.contact.email}`}>{COMPANY_INFO.contact.email}</a>
            </li>
            <li>
              <span className="contact-label">Endereço:</span>
              <address className="footer-address">{COMPANY_INFO.contact.address}</address>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-flex">
          <p className="copyright">
            &copy; {new Date().getFullYear()} ASCENCE Construtora. Todos os direitos reservados.
          </p>
          <div className="footer-status-mono">
            <span className="pulse-green-dot"></span>
            <span>SISTEMA OPERACIONAL</span>
          </div>
          <div className="footer-legal">
            <button className="legal-link" onClick={() => alert("Política de Privacidade: Seus dados estão seguros e protegidos de acordo com a LGPD.")}>
              Política de Privacidade
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-area {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding-top: 6rem;
          border-top: 1px solid var(--border-dark);
          border-top-left-radius: 4rem;
          border-top-right-radius: 4rem;
          overflow: hidden;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 5rem;
        }
        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .logo-img-footer {
          height: 143px; /* Aumentado em mais 10% conforme solicitado */
          margin-top: -44px;
          margin-bottom: -44px;
          margin-left: -12px;
          object-fit: contain;
          display: block;
          cursor: pointer;
        }
        .footer-description {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 320px;
        }
        .footer-socials {
          display: flex;
          gap: 1rem;
          margin-top: -1rem;
          margin-bottom: 1rem;
        }
        .social-icon {
          width: 1.25rem;
          height: 1.25rem;
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .social-icon:hover {
          color: var(--accent-gold);
          transform: translateY(-2px);
        }
        .footer-title {
          font-family: var(--font-sans);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--accent-gold);
          margin-bottom: 1.8rem;
        }
        .footer-links-list, .footer-contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .footer-links-list button {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-align: left;
          cursor: pointer;
          padding: 0;
          transition: var(--transition-fast);
        }
        .footer-links-list button:hover {
          color: var(--accent-gold);
          padding-left: 4px;
        }
        .footer-contact-list {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        .contact-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--text-light);
          margin-bottom: 0.15rem;
        }
        .footer-contact-list a {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }
        .footer-contact-list a:hover {
          color: var(--accent-gold);
        }
        .footer-address {
          font-style: normal;
          line-height: 1.4;
        }
        .footer-bottom {
          border-top: 1px solid var(--border-dark);
          padding: 2rem 0;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          color: var(--text-muted);
        }
        .footer-bottom-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-status-mono {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: "JetBrains Mono", monospace;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.45);
        }
        .pulse-green-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #25d366;
          box-shadow: 0 0 8px rgba(37, 211, 102, 0.8);
          animation: pulse-dot-green 2s infinite ease-in-out;
        }
        @keyframes pulse-dot-green {
          0% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.4; transform: scale(0.9); }
        }
        .legal-link {
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 0.8rem;
          cursor: pointer;
          transition: var(--transition-fast);
        }
        .legal-link:hover {
          color: var(--accent-gold);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .footer-brand-col {
            align-items: flex-start; /* Alinhamento à esquerda das informações */
            text-align: left;
          }
          .logo-area {
            width: 100%;
            display: flex;
            justify-content: center; /* Centraliza o contêiner da logo */
          }
          .logo-img-footer {
            margin: -44px auto; /* Centraliza a logo */
          }
          .footer-socials {
            width: 100%;
            display: flex;
            justify-content: center; /* Centraliza os ícones no mobile */
            margin-top: -1rem;
            margin-bottom: 1.5rem;
          }
          .footer-bottom-flex {
            flex-direction: column;
            gap: 1.2rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
