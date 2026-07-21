import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutAscence from "./pages/AboutAscence";
import Trajectory from "./pages/Trajectory";
import WayOfBuilding from "./pages/WayOfBuilding";
import SingleLaunch from "./pages/SingleLaunch";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { COMPANY_INFO, IMAGES } from "./data/mockData";

export default function App() {
  const location = useLocation();

  // Dynamic SEO Page Titles, Canonical & Open Graph Metatags
  useEffect(() => {
    const baseUrl = "https://ascence-construtora.vercel.app";
    const currentUrl = `${baseUrl}${location.pathname}`;

    let title = "ASCENCE Construtora | Arquitetura, Bem-Estar e Confiança em Arapongas";
    let desc = "Construtora e incorporadora em Arapongas - PR. Da experiência de construir lares, nasce uma nova forma de viver.";
    let ogImage = IMAGES.heroBg;

    switch (location.pathname) {
      case "/a-ascence":
        title = "A Ascence | Construtora e Incorporadora em Arapongas";
        desc = "Conheça a história, filosofia e o compromisso da ASCENCE Construtora com a arquitetura e a vida das famílias.";
        ogImage = IMAGES.aboutStory;
        break;
      case "/nossa-trajetoria":
        title = "Nossa Trajetória | Da Experiência em Casas ao Primeiro Lançamento";
        desc = "Acompanhe a evolução da ASCENCE: da fundação em Curitiba e experiência construindo lares até o primeiro empreendimento em Arapongas.";
        ogImage = IMAGES.manifesto;
        break;
      case "/nosso-jeito-de-construir":
        title = "Nosso Jeito de Construir | Qualidade e Transparência";
        desc = "Conheça os quatro pilares construtivos da ASCENCE: qualidade construtiva, arquitetura funcional, cuidado com os detalhes e relacionamento ético.";
        ogImage = IMAGES.lifestyle;
        break;
      case "/lancamento":
        title = "Breve Lançamento em Arapongas | ASCENCE Construtora";
        desc = "Um novo capítulo está chegando a Arapongas. Conheça a proposta do nosso próximo projeto residencial.";
        ogImage = IMAGES.launchConcept;
        break;
      case "/contato":
        title = "Contato | ASCENCE Construtora em Arapongas";
        desc = "Fale com a equipe da ASCENCE Construtora. Atendimento transparente via WhatsApp, telefone ou formulário direto.";
        ogImage = IMAGES.heroBg;
        break;
      case "/politica-de-privacidade":
        title = "Política de Privacidade | ASCENCE Construtora";
        desc = "Transparência e compromisso com a proteção de seus dados pessoais nos termos da LGPD.";
        break;
      default:
        break;
    }

    document.title = title;

    // Helper para atualizar ou criar meta tags
    const updateMetaTag = (selector, attribute, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Meta Description
    updateMetaTag('meta[name="description"]', 'name', 'description', desc);

    // Open Graph
    updateMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    updateMetaTag('meta[property="og:description"]', 'property', 'og:description', desc);
    updateMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    updateMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // Twitter Card
    updateMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    updateMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', desc);
    updateMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);
  }, [location]);

  return (
    <div className="app-root-layout">
      {/* Scroll restoration to top on route change */}
      <ScrollToTop />

      {/* Schema.org LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GeneralContractor",
            "name": "ASCENCE Construtora",
            "description": COMPANY_INFO.aboutBrief,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Tucanos, 273 - Sl 02 - Centro",
              "addressLocality": "Arapongas",
              "addressRegion": "PR",
              "postalCode": "86700-070",
              "addressCountry": "BR"
            },
            "telephone": COMPANY_INFO.contact.phone,
            "email": COMPANY_INFO.contact.email,
            "url": "https://ascence-construtora.vercel.app/",
            "sameAs": [COMPANY_INFO.contact.instagram]
          })
        }}
      />

      {/* Inline Noise Filter SVG */}
      <svg style={{ display: "none" }} aria-hidden="true">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      
      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Floating Header */}
      <Header />

      {/* Main View Routes */}
      <main className="main-content-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-ascence" element={<AboutAscence />} />
          <Route path="/nossa-trajetoria" element={<Trajectory />} />
          <Route path="/nosso-jeito-de-construir" element={<WayOfBuilding />} />
          <Route path="/lancamento" element={<SingleLaunch />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY_INFO.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.224h.005c5.505 0 9.989-4.478 9.99-9.985A9.983 9.983 0 0 0 12.012 2zm4.957 14.135c-.273.767-1.562 1.47-2.148 1.525-.53.05-1.214.074-1.99-.175a10.02 10.02 0 0 1-4.048-2.613 10.51 10.51 0 0 1-2.457-3.693c-.422-.724-.716-1.561-.716-2.404 0-1.636.852-2.44 1.157-2.748.27-.272.6-.339.79-.339.19 0 .38.004.545.012.174.008.406-.063.637.492.238.57.813 1.986.883 2.128.07.142.115.308.02.492-.095.186-.142.302-.284.469-.142.167-.3.376-.428.505-.143.142-.293.298-.127.585.166.288.737 1.215 1.583 1.966.862.766 1.59 1.002 1.879 1.144.29.142.455.118.621-.073.166-.192.716-.832.906-1.117.19-.285.38-.238.643-.142.264.095 1.673.789 1.96.932.285.143.475.214.545.334.07.12.07.697-.203 1.464z" />
        </svg>
      </a>

      {/* Footer */}
      <Footer />

      <style>{`
        .app-root-layout {
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-primary);
          position: relative;
        }
        .main-content-layout {
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
}
