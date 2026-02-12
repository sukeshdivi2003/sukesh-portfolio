import React from 'react';

const Leadership = () => {
  return (
    <div className="leadership-content">
      <div className="lead-header">
        <div className="icon-wrapper">
          <span className="material-icons text-primary">diversity_3</span>
        </div>
        <h3 className="lead-heading">Leadership Experience</h3>
      </div>

      {/* Timeline Item 1 — Current */}
      <div className="timeline-item">
        <div className="timeline-dot primary"></div>
        <div className="timeline-card">
          <div className="card-top">
            <h3 className="role-title">Mahotsav 2K25 Core Committee Lead</h3>
            <span className="badge-current">Current</span>
          </div>
          <p className="date-row">
            <span className="material-icons text-sm">event</span> Upcoming Jan 2025
          </p>
          <ul className="points-list">
            <li>
              <span className="material-icons bullet">check_circle</span>
              <span>Leading the core committee for strategic planning and execution of the college's flagship technical fest.</span>
            </li>
            <li>
              <span className="material-icons bullet">check_circle</span>
              <span>Coordinating with 15+ sponsors to secure funding and establish industry partnerships.</span>
            </li>
            <li>
              <span className="material-icons bullet">check_circle</span>
              <span>Designing event roadmap including technical workshops, hackathons, and guest lectures.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Timeline Item 2 — Past */}
      <div className="timeline-item">
        <div className="timeline-dot grey"></div>
        <div className="timeline-card past">
          <div className="card-top">
            <h3 className="role-title">Mahotsav 2K24 Coordinator</h3>
            <span className="badge-past">Completed</span>
          </div>
          <p className="date-row">
            <span className="material-icons text-sm">event</span> Feb 2024 - Mar 2024
          </p>
          <ul className="points-list">
            <li>
              <span className="material-icons bullet-dim">check_circle</span>
              <span>Managed a team of 30 student volunteers ensuring smooth logistics for 3 days.</span>
            </li>
            <li>
              <span className="material-icons bullet-dim">check_circle</span>
              <span>Oversaw budget allocation of ₹50,000, optimizing costs by 15% through vendor negotiations.</span>
            </li>
            <li>
              <span className="material-icons bullet-dim">check_circle</span>
              <span>Facilitated communication between faculty heads and student bodies to resolve conflicts.</span>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .lead-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .icon-wrapper {
          padding: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lead-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 0;
        }
        
        .timeline-item {
          position: relative;
          padding-left: 2rem;
          border-left: 2px solid var(--color-border-light);
          padding-bottom: 2.5rem;
        }
        
        .timeline-item:last-child {
          border-left: 2px solid transparent;
          padding-bottom: 0;
        }
        
        .timeline-dot {
          position: absolute;
          left: -11px;
          top: 0;
          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          border: 4px solid var(--color-bg-dark);
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
        }
        
        .timeline-dot.primary {
          background-color: var(--color-primary);
        }
        
        .timeline-dot.grey {
          background-color: var(--color-text-secondary);
        }
        
        .timeline-card {
           background-color: var(--color-card-dark);
           border-radius: 0.75rem;
           padding: 1.5rem;
           border: 1px solid var(--color-border-light);
           transition: all 0.3s;
        }

        .timeline-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
        }

        .timeline-card.past {
          opacity: 0.85;
        }

        .timeline-card.past:hover {
          opacity: 1;
        }
        
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .role-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-text-primary);
        }
        
        .badge-current {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          background-color: rgba(52, 211, 153, 0.1);
          color: var(--color-accent);
          border-radius: 0.25rem;
          border: 1px solid rgba(52, 211, 153, 0.2);
        }
        
        .badge-past {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.25rem 0.5rem;
          background-color: var(--color-surface-dark);
          color: var(--color-text-secondary);
          border-radius: 0.25rem;
          border: 1px solid var(--color-border-light);
        }
        
        .date-row {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .points-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .points-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.875rem;
          color: var(--color-text-secondary);
        }
        
        .bullet {
          color: var(--color-accent);
          font-size: 1rem;
          margin-top: 0.125rem;
        }
        
        .bullet-dim {
          color: var(--color-text-secondary);
          font-size: 1rem;
          margin-top: 0.125rem;
          opacity: 0.6;
        }
      `}</style>
    </div >
  );
};

export default Leadership;
