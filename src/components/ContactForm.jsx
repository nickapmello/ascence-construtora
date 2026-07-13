import React, { useState } from "react";
import { COMPANY_INFO } from "../data/mockData";

export default function ContactForm({ propertyName }) {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    interesse: propertyName || "geral",
    mensagem: propertyName ? `Gostaria de receber mais informações sobre o empreendimento ${propertyName}.` : "",
    aceitePolitica: false
  });

  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.aceitePolitica) {
      setStatus({ type: "error", message: "É necessário aceitar os termos da política de privacidade para continuar." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso! Um de nossos consultores de alto padrão entrará em contato em breve."
      });
      // Clear form except interest
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        cidade: "",
        interesse: propertyName || "geral",
        mensagem: "",
        aceitePolitica: false
      });
    }, 1500);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="premium-form">
        <div className="form-grid">
          {/* Nome */}
          <div className="form-group">
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Nome completo"
              required
              className="form-input"
            />
            <span className="input-focus-line"></span>
          </div>

          {/* E-mail */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              required
              className="form-input"
            />
            <span className="input-focus-line"></span>
          </div>

          {/* Telefone */}
          <div className="form-group">
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="Telefone / Celular"
              required
              className="form-input"
            />
            <span className="input-focus-line"></span>
          </div>

          {/* Cidade */}
          <div className="form-group">
            <input
              type="text"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Cidade / Estado"
              required
              className="form-input"
            />
            <span className="input-focus-line"></span>
          </div>
        </div>

        {/* Interesse Select */}
        <div className="form-group select-group">
          <select
            name="interesse"
            value={formData.interesse}
            onChange={handleChange}
            className="form-select"
            required
          >
            <option value="geral">Interesse geral</option>
            <option value="AURA Residencial">AURA Residencial (Batel)</option>
            <option value="VANGUARD Cabral">VANGUARD Cabral (Cabral)</option>
            <option value="L'HARMONIE Ecoville">L'HARMONIE Ecoville (Ecoville)</option>
          </select>
          <span className="input-focus-line"></span>
        </div>

        {/* Mensagem */}
        <div className="form-group textarea-group">
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Mensagem (opcional)"
            className="form-textarea"
            rows="4"
          ></textarea>
          <span className="input-focus-line"></span>
        </div>

        {/* Consent/Checkbox */}
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="aceitePolitica"
              checked={formData.aceitePolitica}
              onChange={handleChange}
              required
              className="form-checkbox"
            />
            <span className="checkbox-custom"></span>
            <span className="checkbox-text">
              Aceito a Política de Privacidade e autorizo a ASCENCE Construtora a entrar em contato.
            </span>
          </label>
        </div>

        {/* Status Alerts */}
        {status.type && (
          <div className={`form-alert alert-${status.type}`}>
            {status.message}
          </div>
        )}

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit" disabled={isSubmitting} className="btn btn-primary form-submit-btn">
            <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
          </button>

          <div className="form-divider-text">ou se preferir</div>

          <a
            href={COMPANY_INFO.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary whatsapp-direct-btn"
          >
            <svg className="wp-btn-icon" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm4.957 14.135c-.273.767-1.562 1.47-2.148 1.525-.53.05-1.214.074-1.99-.175a10.02 10.02 0 0 1-4.048-2.613 10.51 10.51 0 0 1-2.457-3.693c-.422-.724-.716-1.561-.716-2.404 0-1.636.852-2.44 1.157-2.748.27-.272.6-.339.79-.339.19 0 .38.004.545.012.174.008.406-.063.637.492.238.57.813 1.986.883 2.128.07.142.115.308.02.492-.095.186-.142.302-.284.469-.142.167-.3.376-.428.505-.143.142-.293.298-.127.585.166.288.737 1.215 1.583 1.966.862.766 1.59 1.002 1.879 1.144.29.142.455.118.621-.073.166-.192.716-.832.906-1.117.19-.285.38-.238.643-.142.264.095 1.673.789 1.96.932.285.143.475.214.545.334.07.12.07.697-.203 1.464z"/>
            </svg>
            <span>Conversar via WhatsApp</span>
          </a>
        </div>
      </form>

      <style>{`
        .contact-form-container {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3rem;
        }
        @media (max-width: 768px) {
          .contact-form-container {
            padding: 1.5rem;
          }
        }
        .premium-form {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
        .form-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .form-input, .form-select, .form-textarea {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          padding: 0.8rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-light);
          color: var(--text-primary);
          outline: none;
          transition: var(--transition-fast);
          width: 100%;
        }
        .form-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%238c8c88' stroke-width='1.5' viewBox='0 0 24 24'><polyline points='6 9 12 15 18 9'></polyline></svg>");
          background-repeat: no-repeat;
          background-position: right center;
          padding-right: 1.5rem;
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color: var(--text-muted);
          opacity: 0.8;
        }
        .input-focus-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--accent-gold);
          transition: var(--transition-smooth);
        }
        .form-input:focus ~ .input-focus-line,
        .form-select:focus ~ .input-focus-line,
        .form-textarea:focus ~ .input-focus-line {
          width: 100%;
        }
        .checkbox-group {
          display: flex;
          align-items: flex-start;
          margin-top: 0.5rem;
        }
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
          position: relative;
          user-select: none;
        }
        .form-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .checkbox-custom {
          position: relative;
          display: inline-block;
          height: 16px;
          width: 16px;
          border: 1px solid var(--border-light);
          margin-right: 0.75rem;
          margin-top: 3px;
          transition: var(--transition-fast);
          flex-shrink: 0;
        }
        .form-checkbox:checked ~ .checkbox-custom {
          background-color: var(--bg-dark);
          border-color: var(--bg-dark);
        }
        .checkbox-custom::after {
          content: "";
          position: absolute;
          display: none;
          left: 5px;
          top: 2px;
          width: 4px;
          height: 8px;
          border: solid white;
          border-width: 0 1.5px 1.5px 0;
          transform: rotate(45deg);
        }
        .form-checkbox:checked ~ .checkbox-custom::after {
          display: block;
        }
        .checkbox-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          line-height: 1.4;
          color: var(--text-secondary);
        }
        .form-alert {
          padding: 1rem;
          font-family: var(--font-sans);
          font-size: 0.85rem;
          border-radius: 0;
        }
        .alert-success {
          background-color: #f0f7f4;
          color: #2b704c;
          border: 1px solid rgba(43, 112, 76, 0.2);
        }
        .alert-error {
          background-color: #fdf2f2;
          color: #9b1c1c;
          border: 1px solid rgba(155, 28, 28, 0.2);
        }
        .form-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }
        .form-submit-btn {
          min-width: 180px;
        }
        .form-divider-text {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }
        .whatsapp-direct-btn {
          gap: 0.5rem;
          border-color: #25d366;
          color: #25d366;
        }
        .whatsapp-direct-btn:hover {
          background-color: #25d366;
          border-color: #25d366;
          color: white;
        }
        .wp-btn-icon {
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .form-actions {
            flex-direction: column;
            align-items: stretch;
            width: 100%;
          }
          .form-submit-btn, .whatsapp-direct-btn {
            width: 100%;
          }
          .form-divider-text {
            text-align: center;
            margin: 0.25rem 0;
          }
        }
      `}</style>
    </div>
  );
}
