import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="text-center mb-16" data-animate>
          <h2 className="text-accent font-semibold tracking-wide uppercase text-sm">My Journey</h2>
          <p className="section-title-large mt-2">Education</p>
          <div className="section-subtitle mt-4">
            Building a strong theoretical and practical foundation in computer science and business systems.
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {/* Education Item 1 */}
          <div className="timeline-entry" data-animate="fade-right" data-delay="200">
            <div className="timeline-date">
              <span className="date-badge">2022 — 2026</span>
            </div>

            <div className="timeline-dot-wrapper">
              <div className="timeline-dot-large"></div>
            </div>

            <div className="timeline-content">
              <div className="education-card">
                <div className="card-header-flex">
                  <div className="icon-box-small">
                    <span className="material-icons text-primary">school</span>
                  </div>
                  <div className="cgpa-badge">
                    <span>CGPA: 6.57</span>
                  </div>
                </div>

                <h3 className="degree-title">B.Tech in CSBS</h3>
                <p className="university-name">Vignan University</p>
                <p className="description">
                  Pursuing Computer Science and Business Systems. Focusing on software development life cycles, business analytics, and core CS fundamentals.
                </p>

                <div className="tags-row">
                  <span className="edu-tag">Data Structures</span>
                  <span className="edu-tag">Algorithms</span>
                  <span className="edu-tag">Business Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .text-accent {
          color: var(--color-accent);
        }

        .section-title-large {
          font-size: 2.25rem;
          font-weight: 800;
          letter-spacing: -0.025em;
          color: var(--color-text-primary);
        }
        
        .section-subtitle {
          font-size: 1.125rem;
          max-width: 42rem;
          margin-left: auto;
          margin-right: auto;
          color: var(--color-text-secondary);
        }
        
        .timeline-container {
          position: relative;
          max-width: 56rem;
          margin: 0 auto;
        }
        
        .timeline-line {
          position: absolute;
          left: 1.5rem;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--color-primary), var(--color-accent), transparent);
        }

        @media (min-width: 768px) {
          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }
        }
        
        .timeline-entry {
          position: relative;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
        }
        
        @media (min-width: 768px) {
          .timeline-entry {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
        }
        
        .timeline-date {
          width: 100%;
          margin-bottom: 1rem;
          padding-left: 4rem;
        }
        
        @media (min-width: 768px) {
          .timeline-date {
            width: 41.666667%;
            margin-bottom: 0;
            padding-left: 0;
            padding-right: 2rem;
            text-align: right;
            order: 1;
          }
        }
        
        .date-badge {
          display: inline-block;
          padding: 0.375rem 1rem;
          background-color: var(--color-surface-dark);
          border: 1px solid var(--color-border-light);
          border-radius: 9999px;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s;
        }

        .education-card:hover ~ .timeline-date .date-badge,
        .timeline-entry:hover .date-badge {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        
        .timeline-dot-wrapper {
          position: absolute;
          left: 1.5rem;
          top: 0;
          transform: translateX(-50%);
          z-index: 10;
        }
        
        @media (min-width: 768px) {
          .timeline-dot-wrapper {
            left: 50%;
            position: absolute;
          }
        }
        
        .timeline-dot-large {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: var(--color-bg-dark);
          border: 4px solid var(--color-primary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
          transition: all 0.3s;
        }

        .timeline-entry:hover .timeline-dot-large {
          background-color: var(--color-primary);
          box-shadow: 0 0 0 6px rgba(99, 102, 241, 0.25), 0 0 20px rgba(99, 102, 241, 0.3);
        }
        
        .timeline-content {
          width: 100%;
          padding-left: 4rem;
        }
        
        @media (min-width: 768px) {
          .timeline-content {
            width: 41.666667%;
            padding-left: 2rem;
            order: 2;
          }
        }
        
        .education-card {
          background-color: var(--color-surface-dark);
          border: 1px solid var(--color-border-light);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .education-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }
        
        .card-header-flex {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .icon-box-small {
          padding: 0.5rem;
          background-color: rgba(99, 102, 241, 0.1);
          border-radius: 0.5rem;
          transition: all 0.3s;
        }

        .education-card:hover .icon-box-small {
          background-color: rgba(99, 102, 241, 0.2);
          transform: rotate(-8deg) scale(1.1);
        }
        
        .cgpa-badge {
          background-color: rgba(52, 211, 153, 0.1);
          color: var(--color-accent);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid rgba(52, 211, 153, 0.2);
        }
        
        .degree-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.25rem;
          transition: color 0.3s;
        }
        
        .education-card:hover .degree-title {
           color: var(--color-primary);
        }
        
        .university-name {
          color: var(--color-primary-light);
          font-weight: 500;
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }
        
        .description {
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          margin-bottom: 1rem;
          line-height: 1.6;
        }
        
        .tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .edu-tag {
          padding: 0.25rem 0.5rem;
          background-color: var(--color-bg-dark);
          border: 1px solid var(--color-border-light);
          border-radius: 0.25rem;
          font-size: 0.75rem;
          color: var(--color-text-secondary);
          transition: all 0.2s;
        }

        .edu-tag:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
      `}</style>
    </section>
  );
};

export default Education;
