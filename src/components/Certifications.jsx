import React from 'react';

const Certifications = () => {
  return (
    <div className="certifications-content">
      <div className="certs-header" data-animate data-delay="0">
        <div className="icon-wrapper">
          <span className="material-icons text-primary">verified</span>
        </div>
        <h3 className="certs-heading">Certifications</h3>
      </div>

      {/* Card 1 — Cisco CCNA */}
      <div className="cert-card" data-animate data-delay="100">
        <div className="status-badge verified">
          <span className="material-icons badge-icon">check_circle</span> Verified
        </div>
        <div className="card-body">
          <div className="cert-icon">
            <span className="material-icons">security</span>
          </div>
          <div>
            <h3 className="cert-title">Cisco CCNA: Enterprise & Security</h3>
            <p className="cert-issuer">Cisco Networking Academy</p>
            <p className="cert-date">Issued: Dec 2023</p>
          </div>
        </div>
        <div className="card-footer">
          <span className="cert-id">Credential ID: CS-99120</span>
          <a href="#" className="cert-link">View Credential <span className="material-icons text-sm">open_in_new</span></a>
        </div>
      </div>

      {/* Card 2 — MERN Stack */}
      <div className="cert-card" data-animate data-delay="200">
        <div className="status-badge progress">
          <span className="material-icons badge-icon">schedule</span> In Progress
        </div>
        <div className="card-body">
          <div className="cert-icon">
            <span className="material-icons">code</span>
          </div>
          <div style={{ width: '100%' }}>
            <h3 className="cert-title">MERN Stack Development</h3>
            <p className="cert-issuer">Full Stack Web Bootcamp</p>
            <div className="progress-bg">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
            <p className="cert-date">85% Completed</p>
          </div>
        </div>
      </div>

      <style>{`
        .certs-header {
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
          transition: all 0.3s;
        }

        .icon-wrapper:hover {
          transform: rotate(-8deg) scale(1.1);
          background: rgba(99, 102, 241, 0.2);
        }

        .certs-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 0;
        }
        
        .cert-card {
          position: relative;
          background-color: var(--color-card-dark); 
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid var(--color-border-light);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .cert-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--color-primary), var(--color-accent));
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .cert-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
          transform: translateX(4px);
        }

        .cert-card:hover::before {
          transform: scaleY(1);
        }
        
        .status-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          padding: 0.125rem 0.625rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .badge-icon {
          font-size: 0.875rem;
        }
        
        .status-badge.verified {
          background-color: rgba(52, 211, 153, 0.1);
          color: var(--color-accent);
        }
        
        .status-badge.progress {
          background-color: rgba(99, 102, 241, 0.1);
          color: var(--color-primary);
        }
        
        .card-body {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .cert-icon {
          width: 4rem;
          height: 4rem;
          border-radius: 0.5rem;
          background-color: var(--color-surface-dark);
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .cert-card:hover .cert-icon {
          border-color: var(--color-primary);
          background: rgba(99, 102, 241, 0.08);
        }
        
        .cert-icon .material-icons {
          font-size: 2rem;
          color: var(--color-text-secondary);
          transition: color 0.3s;
        }

        .cert-card:hover .cert-icon .material-icons {
          color: var(--color-primary);
        }
        
        .cert-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin-bottom: 0.25rem;
          transition: color 0.3s;
        }
        
        .cert-card:hover .cert-title {
          color: var(--color-primary);
        }
        
        .cert-issuer {
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          margin-bottom: 0.75rem;
        }
        
        .cert-date {
          font-size: 0.75rem;
          font-family: monospace;
          color: var(--color-text-secondary);
        }
        
        .card-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .cert-id {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }
        
        .cert-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s;
        }
        
        .cert-link:hover {
           color: var(--color-primary-light);
           transform: translateX(3px);
        }
        
        .progress-bg {
          width: 100%;
          height: 0.375rem;
          background-color: var(--color-border-light);
          border-radius: 9999px;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          max-width: 140px;
          overflow: hidden;
        }
        
        .progress-bar {
          height: 100%;
          background: linear-gradient(to right, var(--color-primary), var(--color-accent));
          border-radius: 9999px;
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </div >
  );
};

export default Certifications;
