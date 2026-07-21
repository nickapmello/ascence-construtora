import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_INFO } from "../data/mockData";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    privacyAccepted: false
  });

  const [errorMsg, setErrorMsg] = useState("");

  // Máscara de telefone automática: (XX) XXXXX-XXXX
  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (val.length > 11) val = val.slice(0, 11);

    if (val.length > 6) {
      val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
    } else if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    } else if (val.length > 0) {
      val = `(${val}`;
    }

    setFormData((prev) => ({ ...prev, phone: val }));
  };

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

    // Formata a mensagem para envio direto e real via WhatsApp oficial
    const textMsg = `*Contato via Site ASCENCE Construtora*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Assunto:* ${formData.subject || "Informações Gerais / Lançamento"}\n\n` +
      `*Mensagem:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/5543999323043?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="institutional-contact-card">
      <form onSubmit={handleSubmit} className="institutional-form">
        <h3 className="form-heading">Fale com a ASCENCE</h3>
        <p className="form-subheading">
          Preencha os dados para iniciar o atendimento direto via WhatsApp com a nossa equipe.
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
              onChange={handlePhoneChange}
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
            placeholder="Ex: Informações sobre o lançamento"
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
            <span className="checkbox-text">
              Concordo com a <Link to="/politica-de-privacidade" target="_blank" className="privacy-link">Política de Privacidade</Link> da ASCENCE Construtora.
            </span>
          </label>
        </div>

        <button type="submit" className="btn btn-gold w-full mt-4">
          <span>Enviar via WhatsApp</span>
        </button>
      </form>

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
