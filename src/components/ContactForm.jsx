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

  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Máscara de telefone automática: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
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

  // Validação estrita de formato de e-mail
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const messageText = formData.message.trim();

    if (!name) {
      setErrorMsg("Por favor, preencha o seu nome completo.");
      return;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone || digitsOnly.length < 10) {
      setErrorMsg("Por favor, informe um telefone/WhatsApp válido com DDD.");
      return;
    }

    if (!email || !isValidEmail(email)) {
      setErrorMsg("Por favor, informe um endereço de e-mail válido.");
      return;
    }

    if (!messageText) {
      setErrorMsg("Por favor, escreva a sua mensagem.");
      return;
    }

    if (!formData.privacyAccepted) {
      setErrorMsg("Por favor, aceite os termos da Política de Privacidade para continuar.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Formata a mensagem com encodeURIComponent para o WhatsApp oficial
    const message = `\nOlá, gostaria de entrar em contato com a ASCENCE.\n\nNome: ${name}\nTelefone: ${phone}\nE-mail: ${email}\nAssunto: ${subject || "Contato pelo site"}\nMensagem: ${messageText}\n`;

    const whatsappUrl = `https://wa.me/5543999323043?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp sem resetar os dados em caso de retorno do usuário
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="institutional-contact-card">
      <form onSubmit={handleSubmit} className="institutional-form" noValidate>
        <h3 className="form-heading">Fale com a ASCENCE</h3>
        <p className="form-subheading">
          Preencha os dados abaixo para abrir o atendimento direto via WhatsApp com nossa equipe.
        </p>

        {errorMsg && <div className="form-error-alert" role="alert">{errorMsg}</div>}

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
            disabled={isSubmitting}
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
              disabled={isSubmitting}
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
              disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
              disabled={isSubmitting}
              required
            />
            <span className="checkbox-text">
              Concordo com a <Link to="/politica-de-privacidade" target="_blank" className="privacy-link">Política de Privacidade</Link> da ASCENCE Construtora.
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          className="btn btn-gold w-full mt-4"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? "Abrindo WhatsApp..." : "Enviar via WhatsApp"}</span>
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
