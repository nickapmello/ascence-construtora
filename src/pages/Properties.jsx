import React, { useState, useEffect, useRef } from "react";
import { DEVELOPMENTS } from "../data/mockData";
import PropertyCard from "../components/PropertyCard";
import gsap from "gsap";

export default function Properties({ setActivePage, setSelectedPropertyId }) {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const pageRef = useRef(null);

  const neighborhoods = ["all", ...new Set(DEVELOPMENTS.map((d) => d.neighborhood))];
  const statuses = ["all", ...new Set(DEVELOPMENTS.map((d) => d.status))];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".properties-header-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".filter-bar-anim",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: "power3.out" }
      );
      gsap.fromTo(
        ".catalog-card-anim",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.25, stagger: 0.12, ease: "power3.out" }
      );
    }, pageRef);
    return () => ctx.revert();
  }, [selectedNeighborhood, selectedStatus]);

  const handlePropertyClick = (id) => {
    setSelectedPropertyId(id);
    setActivePage("empreendimento-detalhe", id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProperties = DEVELOPMENTS.filter((property) => {
    const matchNeighborhood = selectedNeighborhood === "all" || property.neighborhood === selectedNeighborhood;
    const matchStatus = selectedStatus === "all" || property.status === selectedStatus;
    return matchNeighborhood && matchStatus;
  });

  return (
    <div ref={pageRef} className="properties-page section-padding">
      <div className="container">
        {/* Page Header */}
        <div className="properties-header text-center properties-header-anim">
          <span className="overline">Exclusividade em Detalhes</span>
          <h1 className="display-title">Nossos Empreendimentos</h1>
          <p className="body-text mx-auto mt-4 text-center">
            Explore nossa curadoria de imóveis residenciais premium em Arapongas. Espaços projetados com inteligência, refinamento arquitetônico e acabamentos de alto padrão.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar-container filter-bar-anim">
          <div className="filter-group">
            <label className="filter-label">Bairro</label>
            <div className="select-wrapper">
              <select
                value={selectedNeighborhood}
                onChange={(e) => setSelectedNeighborhood(e.target.value)}
                className="filter-select"
              >
                <option value="all">Todos os Bairros</option>
                {neighborhoods.filter(n => n !== "all").map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="filter-group">
            <label className="filter-label">Status da Obra</label>
            <div className="select-wrapper">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="filter-select"
              >
                <option value="all">Todos os Status</option>
                {statuses.filter(s => s !== "all").map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="properties-catalog-grid">
            {filteredProperties.map((property) => (
              <div key={property.id} className="catalog-card-anim">
                <PropertyCard
                  property={property}
                  onViewDetails={() => handlePropertyClick(property.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-properties-state">
            <h3 className="empty-state-title">Nenhum empreendimento encontrado</h3>
            <p className="empty-state-desc">
              Não encontramos imóveis correspondentes aos filtros selecionados. Tente alterar suas opções de bairro ou status.
            </p>
            <button
              onClick={() => { setSelectedNeighborhood("all"); setSelectedStatus("all"); }}
              className="btn btn-secondary mt-4"
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>

      <style>{`
        .properties-page {
          padding-top: 9rem;
          background-color: var(--bg-primary);
        }
        .properties-header {
          margin-bottom: 5rem;
        }
        .properties-header .body-text {
          max-width: 600px;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Filter bar */
        .filter-bar-container {
          display: flex;
          gap: 2.5rem;
          justify-content: center;
          margin-bottom: 4rem;
          padding: 2rem;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          border-radius: 2rem !important;
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 220px;
        }
        .filter-label {
          font-family: var(--font-sans);
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold);
        }
        .select-wrapper {
          position: relative;
        }
        .select-wrapper::after {
          content: "";
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid var(--text-muted);
          pointer-events: none;
        }
        .filter-select {
          width: 100%;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          padding: 0.75rem 1rem;
          border: 1px solid var(--border-light);
          background-color: var(--bg-primary);
          color: var(--text-primary);
          outline: none;
          appearance: none;
          cursor: pointer;
          border-radius: 3rem; /* Pill shape for filters */
          transition: var(--transition-fast);
        }
        .filter-select:focus {
          border-color: var(--accent-gold);
        }
        
        /* Catalog Grid */
        .properties-catalog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        
        /* Empty State */
        .empty-properties-state {
          text-align: center;
          padding: 5rem 2rem;
          border: 1px solid var(--border-light);
          background-color: var(--bg-secondary);
          border-radius: 2rem;
        }
        .empty-state-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
        }
        .empty-state-desc {
          font-family: var(--font-sans);
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 500px;
          margin: 0 auto;
        }
        
        @media (max-width: 1024px) {
          .properties-catalog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }
        }
        @media (max-width: 768px) {
          .properties-page {
            padding-top: 7rem;
          }
          .filter-bar-container {
            flex-direction: column;
            gap: 1.5rem;
            padding: 1.5rem;
          }
          .filter-group {
            min-width: 100%;
          }
          .properties-catalog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
