import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import About from "./pages/About";
import Differentials from "./pages/Differentials";
import Contact from "./pages/Contact";
import { COMPANY_INFO } from "./data/mockData";

export default function App() {
  const [activePage, setActivePage] = useState("inicio");
  const [selectedPropertyId, setSelectedPropertyId] = useState("");

  // Handle Hash Routing for deep linking and back/forward browser support
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#empreendimento/")) {
        const id = hash.replace("#empreendimento/", "");
        setSelectedPropertyId(id);
        setActivePage("empreendimento-detalhe");
      } else if (hash === "#empreendimentos") {
        setActivePage("empreendimentos");
      } else if (hash === "#construtora") {
        setActivePage("construtora");
      } else if (hash === "#diferenciais") {
        setActivePage("diferenciais");
      } else if (hash === "#contato") {
        setActivePage("contato");
      } else {
        setActivePage("inicio");
      }
    };

    window.addEventListener("hashchange", parseHash);
    parseHash(); // Initial check on mount

    return () => {
      window.removeEventListener("hashchange", parseHash);
    };
  }, []);

  const handlePageChange = (pageId, propertyId = "") => {
    if (pageId === "empreendimento-detalhe") {
      window.location.hash = `#empreendimento/${propertyId}`;
    } else if (pageId === "inicio") {
      // Clear hash
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
      setActivePage("inicio");
    } else {
      window.location.hash = `#${pageId}`;
    }
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "inicio":
        return (
          <Home
            setActivePage={(page, propId) => handlePageChange(page, propId)}
            setSelectedPropertyId={setSelectedPropertyId}
          />
        );
      case "empreendimentos":
        return (
          <Properties
            setActivePage={(page, propId) => handlePageChange(page, propId)}
            setSelectedPropertyId={setSelectedPropertyId}
          />
        );
      case "empreendimento-detalhe":
        return (
          <PropertyDetail
            propertyId={selectedPropertyId}
            setActivePage={(page, propId) => handlePageChange(page, propId)}
          />
        );
      case "construtora":
        return <About />;
      case "diferenciais":
        return <Differentials />;
      case "contato":
        return <Contact />;
      default:
        return (
          <Home
            setActivePage={(page, propId) => handlePageChange(page, propId)}
            setSelectedPropertyId={setSelectedPropertyId}
          />
        );
    }
  };

  return (
    <div className="app-root-layout">
      {/* Inline Noise Filter SVG */}
      <svg style={{ display: "none" }} aria-hidden="true">
        <filter id="noise-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
      
      {/* Global Noise Overlay */}
      <div className="noise-overlay"></div>

      {/* Premium Floating Header */}
      <Header activePage={activePage} setActivePage={(page) => handlePageChange(page)} />

      {/* Main View Area */}
      <main className="main-content-layout">
        {renderActivePage()}
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

      {/* Structured Footer */}
      <Footer setActivePage={(page) => handlePageChange(page)} />

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
