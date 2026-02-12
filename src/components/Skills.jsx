import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header" data-animate>
          <div className="divider"></div>
          <h2 className="section-title">
            <span className="material-icons text-primary title-icon">terminal</span> Skills
          </h2>
          <div className="divider"></div>
        </div>

        <div className="skills-grid">
          {/* OS */}
          <div className="skill-card" data-animate data-delay="0">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">desktop_windows</span>
              </div>
              <h3>Operating Systems</h3>
            </div>
            <ul className="skill-list">
              <li><span className="dot"></span> Linux (Ubuntu, CentOS)</li>
              <li><span className="dot"></span> Windows Server</li>
              <li><span className="dot"></span> macOS</li>
            </ul>
          </div>

          {/* Networking */}
          <div className="skill-card" data-animate data-delay="100">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">hub</span>
              </div>
              <h3>Networking</h3>
            </div>
            <div className="tag-container">
              <span className="tag">TCP/IP</span>
              <span className="tag">DNS</span>
              <span className="tag">HTTP/HTTPS</span>
              <span className="tag">SSH</span>
              <span className="tag">Firewalls</span>
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill-card" data-animate data-delay="200">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">cloud_queue</span>
              </div>
              <h3>Cloud / DevOps</h3>
            </div>
            <ul className="skill-list-detailed">
              <li>
                <span>AWS (EC2, S3)</span>
                <span className="level-badge">Intermediate</span>
              </li>
              <li>
                <span>Docker</span>
                <span className="level-badge proficient">Proficient</span>
              </li>
              <li>
                <span>Kubernetes</span>
                <span className="level-badge basic">Basic</span>
              </li>
            </ul>
          </div>

          {/* Databases */}
          <div className="skill-card" data-animate data-delay="300">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">storage</span>
              </div>
              <h3>Databases</h3>
            </div>
            <div className="progress-container">
              <div className="progress-item">
                <div className="progress-label">
                  <span>MySQL</span>
                  <span data-count="90">0%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-label">
                  <span>MongoDB</span>
                  <span data-count="80">0%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="progress-item">
                <div className="progress-label">
                  <span>PostgreSQL</span>
                  <span data-count="75">0%</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Programming */}
          <div className="skill-card" data-animate data-delay="400">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">code</span>
              </div>
              <h3>Programming</h3>
            </div>
            <div className="tag-container">
              <span className="tag">Java</span>
              <span className="tag">Python</span>
              <span className="tag">JavaScript</span>
              <span className="tag">C++</span>
              <span className="tag">TypeScript</span>
            </div>
          </div>

          {/* Tools */}
          <div className="skill-card" data-animate data-delay="500">
            <div className="card-header">
              <div className="icon-box">
                <span className="material-icons">build</span>
              </div>
              <h3>Tools & Frameworks</h3>
            </div>
            <ul className="check-list">
              <li><span className="material-icons check-icon">check_circle</span> Git & GitHub</li>
              <li><span className="material-icons check-icon">check_circle</span> VS Code</li>
              <li><span className="material-icons check-icon">check_circle</span> Jira</li>
              <li><span className="material-icons check-icon">check_circle</span> Postman</li>
            </ul>
          </div>
        </div>
      </div>
      <style>{`
        .section-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }
        
        .divider {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--color-border-light), transparent);
          flex-grow: 1;
        }
        
        .section-title {
          font-size: 1.5rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0;
          white-space: nowrap;
        }
        
        .title-icon {
          font-size: 1.75rem;
        }
        
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        
        .skill-card {
          background-color: var(--color-card-dark);
          border: 1px solid var(--color-border-light);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, var(--color-primary), var(--color-accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .skill-card:hover {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-glow);
          transform: translateY(-4px);
        }

        .skill-card:hover::before {
          transform: scaleX(1);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .icon-box {
          padding: 0.5rem;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(52, 211, 153, 0.08));
          border-radius: 0.5rem;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .skill-card:hover .icon-box {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(52, 211, 153, 0.15));
          transform: rotate(-8deg) scale(1.15);
        }
        
        .skill-card h3 {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--color-text-primary);
          margin: 0;
        }
        
        .skill-list, .check-list, .skill-list-detailed {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .skill-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          transition: color 0.2s;
        }

        .skill-list li:hover {
          color: var(--color-text-primary);
        }
        
        .dot {
          width: 0.375rem;
          height: 0.375rem;
          border-radius: 50%;
          background-color: var(--color-primary);
          opacity: 0.6;
          transition: all 0.2s;
        }

        .skill-list li:hover .dot {
          opacity: 1;
          transform: scale(1.5);
          background-color: var(--color-accent);
        }
        
        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tag {
          padding: 0.25rem 0.625rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: rgba(99, 102, 241, 0.08);
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-light);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
        }

        .tag:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background-color: rgba(99, 102, 241, 0.12);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(99, 102, 241, 0.1);
        }
        
        .level-badge {
          font-size: 0.75rem;
          padding: 0.125rem 0.5rem;
          border-radius: 0.25rem;
          background-color: rgba(99, 102, 241, 0.1);
          color: var(--color-primary);
        }

        .level-badge.proficient {
          background-color: rgba(52, 211, 153, 0.1);
          color: var(--color-accent);
        }

        .level-badge.basic {
          background-color: rgba(148, 163, 184, 0.1);
          color: var(--color-text-secondary);
        }
        
        .skill-list-detailed li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--color-text-secondary);
          font-size: 0.875rem;
          transition: color 0.2s;
        }

        .skill-list-detailed li:hover {
          color: var(--color-text-primary);
        }
        
        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
        }
        
        .progress-bar-bg {
          width: 100%;
          height: 0.375rem;
          background-color: var(--color-border-light);
          border-radius: 9999px;
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
        
        .check-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
        }
        
        .check-list li {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           color: var(--color-text-secondary);
           font-size: 0.875rem;
           transition: color 0.2s;
        }

        .check-list li:hover {
          color: var(--color-text-primary);
        }
        
        .check-icon {
          font-size: 1rem;
          color: var(--color-accent);
          transition: transform 0.3s;
        }

        .check-list li:hover .check-icon {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Skills;
