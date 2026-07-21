import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    privacyAccepted: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMsg("Por favor, preencha os campos obrigatórios (Nome, Telefone, E-mail e Mensagem).");
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMsg("Por favor, aceite os termos da Política de Privacidade para continuar.");
      return;
    }

    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <div className="institutional-contact-card">
      {submitted ? (
        <div className="form-success-box text-center">
          <div className="success-icon-circle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="22 4 12 14.01 9 11.01" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="success-title">Mensagem Enviada</h3>
          <p className="success-desc">
            Obrigado pelo seu contato. Nossa equipe retornará seu atendimento com total atenção e discrição em breve.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", phone: "", email: "", subject: "", message: "", privacyAccepted: false });
            }}
            className="btn btn-secondary mt-6"
          >
            <span>Enviar nova mensagem</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="institutional-form">
          <h3 className="form-heading">Fale Conosco</h3>
          <p className="form-subheading">
            Tire dúvidas sobre nossa construtora ou solicite informações sobre nosso próximo lançamento em Arapongas.
          </p>

          {errorMsg && <div className="form-error-alert">{errorMsg}</div>}

          <div className="form-field">
            <label htmlFor="name" className="field-label">Nome Completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className="field-input"
              required
            />
          </div>

          <div className="form-row-two">
            <div className="form-field">
              <label htmlFor="phone" className="field-label">Telefone / WhatsApp *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(43) 99999-9999"
                className="field-input"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email" className="field-label">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu.email@exemplo.com"
                className="field-input"
                required
              />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="subject" className="field-label">Assunto</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Ex: Informações institucionais / Lançamento"
              className="field-input"
            />
          </div>

          <div className="form-field">
            <label htmlFor="message" className="field-label">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Como podemos ajudar você?"
              className="field-textarea"
              required
            ></textarea>
          </div>

          <div className="form-privacy-check">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              <span className="checkmark"></span>
              <span className="checkbox-text">
                Li e concordo com a <Link to="/politica-de-privacidade" target="_blank" className="privacy-link">Política de Privacidade</Link> da ASCENCE Construtora.
              </span>
            </label>
          </div>

          <button type="submit" className="btn btn-gold w-full mt-4">
            <span>Enviar Mensagem</span>
          </button>
        </form>
      )}

      <style>{`
        .institutional-contact-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 2.5rem;
          border-radius: 4px;
        }
        .form-heading {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 300;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .form-subheading {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 2rem;
        }
        .form-error-alert {
          background-color: #fdf2f2;
          color: #9b2c2c;
          border: 1px solid #f8b4b4;
          padding: 0.8rem 1rem;
          font-size: 0.85rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
        }
        .form-field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }
        .form-row-two {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .field-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--accent-gold-dark);
        }
        .field-input, .field-textarea {
          width: 100%;
          padding: 0.85rem 1rem;
          border: 1px solid var(--border-light);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s ease;
          border-radius: 2px;
        }
        .field-input:focus, .field-textarea:focus {
          border-color: var(--accent-gold);
        }
        .form-privacy-check {
          margin: 1.25rem 0;
        }
        .checkbox-container {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          cursor: pointer;
          line-height: 1.4;
        }
        .checkbox-container input {
          margin-top: 0.2rem;
        }
        .privacy-link {
          color: var(--accent-gold-dark);
          text-decoration: underline;
        }
        .success-icon-circle {
          width: 64px;
          height: 64px;
          background-color: var(--accent-gold-light);
          color: var(--accent-gold-dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }
        .success-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .success-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 420px;
          margin: 0 auto;
          line-height: 1.6;
        }
        @media (max-width: 640px) {
          .form-row-two {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .institutional-contact-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
