import React from "react";
import { Link } from "react-router-dom";
import { TRAJECTORY_CHAPTERS, IMAGES } from "../data/mockData";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

export default function Trajectory() {
  return (
    <div className="trajectory-page section-padding-top">
      <div className="container">
        {/* Page Header */}
        <div className="page-header text-center mx-auto">
          <span className="overline">Nossa Evolução</span>
          <h1 className="display-title">Uma trajetória pautada no cuidado</h1>
          <p className="body-text lead-text mx-auto mt-4">
            A história da ASCENCE é marcada pelo aprendizado constante na construção residencial, pela busca contínua de qualidade e pela evolução natural rumo ao nosso primeiro lançamento imobiliário em Arapongas.
          </p>
        </div>

        {/* Chapters Detailed Timeline */}
        <div className="timeline-stream mt-8">
          {TRAJECTORY_CHAPTERS.map((item, index) => (
            <div
              key={item.chapter}
              className={`timeline-block ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <div className="timeline-content-card">
                <span className="timeline-num">{item.chapter}</span>
                <span className="timeline-subtitle">{item.subtitle}</span>
                <h2 className="timeline-title">{item.title}</h2>
                <p className="timeline-desc">{item.description}</p>
              </div>
              <div className="timeline-image-wrapper">
                <ImageWithPlaceholder
                  src={
                    index === 0
                      ? IMAGES.aboutStory
                      : index === 1
                      ? IMAGES.manifesto
                      : index === 2
                      ? IMAGES.lifestyle
                      : IMAGES.launchConcept
                  }
                  alt={item.title}
                  className="timeline-img-wrapper"
                  aspectRatio="16 / 11"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Page Bottom CTA */}
        <div className="trajectory-cta-box text-center mt-8">
          <span className="overline gold-overline">Próximo Passo</span>
          <h2 className="cta-title">Conheça o nosso breve lançamento.</h2>
          <p className="cta-desc mt-2">
            Saiba mais sobre a proposta residencial da ASCENCE em Arapongas.
          </p>
          <div className="mt-6">
            <Link to="/lancamento" className="btn btn-gold">
              <span>Ver detalhes do lançamento</span>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .trajectory-page {
          padding-top: 9rem;
          padding-bottom: 6rem;
          background-color: var(--bg-primary);
        }
        .page-header {
          max-width: 800px;
          margin-bottom: 4rem;
        }
        .lead-text {
          font-size: 1.15rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }
        .timeline-stream {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }
        .timeline-block {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .timeline-block.reverse {
          grid-template-columns: 1fr 1.1fr;
        }
        .timeline-block.reverse .timeline-content-card {
          order: 2;
        }
        .timeline-block.reverse .timeline-image-wrapper {
          order: 1;
        }
        .timeline-content-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-light);
          padding: 3.5rem 3rem;
          border-radius: 4px;
        }
        .timeline-num {
          font-family: var(--font-serif);
          font-size: 3rem;
          color: var(--accent-gold-dark);
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .timeline-subtitle {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--accent-gold-dark);
          margin-bottom: 0.75rem;
          display: block;
        }
        .timeline-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 1rem;
        }
        .timeline-desc {
          font-size: 0.98rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }
        .timeline-img-wrapper {
          width: 100%;
          border-radius: 2px;
        }
        .trajectory-cta-box {
          background-color: var(--bg-dark);
          color: var(--text-light);
          padding: 5rem 2rem;
          border-radius: 4px;
        }
        .cta-title {
          font-family: var(--font-serif);
          font-size: 2.4rem;
          font-weight: 300;
        }
        .cta-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
        }
        @media (max-width: 900px) {
          .timeline-block,
          .timeline-block.reverse {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .timeline-block.reverse .timeline-content-card {
            order: 1;
          }
          .timeline-block.reverse .timeline-image-wrapper {
            order: 2;
          }
          .trajectory-page {
            padding-top: 7rem;
          }
          .timeline-content-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
