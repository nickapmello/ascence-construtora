import React from "react";
import { COMPANY_INFO } from "../data/mockData";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page section-padding-top">
      <div className="container" style={{ maxWidth: "860px" }}>
        <div className="page-header text-center mx-auto">
          <span className="overline">Transparência & LGPD</span>
          <h1 className="display-title">Política de Privacidade</h1>
          <p className="body-text text-muted mt-2">Última atualização: Julho de 2026</p>
        </div>

        <div className="policy-content-body mt-8">
          <section className="policy-section">
            <h2 className="policy-heading">1. Compromisso com a sua Privacidade</h2>
            <p>
              A <strong>ASCENCE Construtora</strong>, inscrita sob os dados de contato oficiais situados em Arapongas - PR ({COMPANY_INFO.contact.address}), tem o compromisso de proteger a privacidade e os dados pessoais de seus clientes, parceiros e visitantes do site.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">2. Coleta de Dados Pessoais</h2>
            <p>
              Coletamos informações pessoais que você nos fornece voluntariamente ao preencher o formulário de contato ou solicitar atendimento via WhatsApp. Os dados incluem:
            </p>
            <ul>
              <li>Nome completo;</li>
              <li>Endereço de e-mail;</li>
              <li>Número de telefone / WhatsApp;</li>
              <li>Mensagem ou dúvidas enviadas voluntariamente.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">3. Finalidade do Tratamento de Dados</h2>
            <p>
              Os dados coletados são utilizados exclusivamente para:
            </p>
            <ul>
              <li>Responder a solicitações de informações sobre a construtora;</li>
              <li>Enviar atualizações sobre nosso lançamento imobiliário a clientes cadastrados na lista de interesse;</li>
              <li>Prestar atendimento consultivo e personalizado via WhatsApp ou e-mail.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">4. Compartilhamento e Segurança</h2>
            <p>
              A ASCENCE Construtora não comercializa nem compartilha seus dados pessoais com terceiros para fins de marketing sem sua autorização expressa. Adotamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acessos não autorizados.
            </p>
          </section>

          <section className="policy-section">
            <h2 className="policy-heading">5. Direitos do Titular (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar a confirmação, acesso, correção ou eliminação de seus dados pessoais armazenados por nossa equipe a qualquer momento através do e-mail <strong>{COMPANY_INFO.contact.email}</strong>.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .privacy-policy-page {
          padding-top: 9rem;
          padding-bottom: 6rem;
          background-color: var(--bg-primary);
        }
        .policy-content-body {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3.5rem 3rem;
          border-radius: 4px;
        }
        .policy-section {
          margin-bottom: 2.5rem;
        }
        .policy-section:last-child {
          margin-bottom: 0;
        }
        .policy-heading {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 400;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }
        .policy-section p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1rem;
        }
        .policy-section ul {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        .policy-section li {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 0.4rem;
        }
        @media (max-width: 768px) {
          .policy-content-body {
            padding: 2rem 1.5rem;
          }
          .privacy-policy-page {
            padding-top: 7rem;
          }
        }
      `}</style>
    </div>
  );
}
