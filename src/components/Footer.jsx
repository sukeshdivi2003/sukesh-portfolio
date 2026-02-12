import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h4 className="brand-name">Divi Sukesh Babu</h4>
            <p className="brand-subtitle">Computer Science Student & Tech Enthusiast</p>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/sukeshdivi2003" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.03.66-3.72-1.455-3.72-1.455-.54-1.38-1.335-1.755-1.335-1.755-1.095-.75.09-.735.09-.735 1.2.09 1.83 1.23 1.83 1.23 1.08 1.83 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.28-1.56 3.285-1.23 3.285-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/sukesh-dev/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="mailto:sukeshdivi2003@gmail.com" className="social-link" aria-label="Email">
              <span className="material-icons text-sm">email</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Divi Sukesh Babu. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
                .footer-section {
                    border-top: 1px solid var(--color-border-light);
                    background-color: var(--color-bg-dark);
                    padding-top: 3rem;
                    padding-bottom: 2rem;
                    margin-top: 3rem;
                }
                
                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: center;
                    text-align: center;
                }
                
                @media (min-width: 768px) {
                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                        text-align: left;
                    }
                }
                
                .brand-name {
                    font-size: 1.125rem;
                    font-weight: 700;
                    color: var(--color-text-primary);
                    margin-bottom: 0.5rem;
                }
                
                .brand-subtitle {
                    color: var(--color-text-secondary);
                    font-size: 0.875rem;
                }
                
                .footer-socials {
                    display: flex;
                    gap: 1.5rem;
                }
                
                .social-link {
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background-color: var(--color-surface-dark);
                    border: 1px solid var(--color-border-light);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--color-text-secondary);
                    transition: all 0.3s;
                }
                
                .social-link:hover {
                    background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
                    color: white;
                    border-color: transparent;
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-glow);
                }
                
                .footer-bottom {
                    border-top: 1px solid var(--color-border-light);
                    margin-top: 2rem;
                    padding-top: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    align-items: center;
                    font-size: 0.75rem;
                    color: var(--color-text-secondary);
                }
                
                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                    }
                }
                
                .footer-links {
                    display: flex;
                    gap: 1rem;
                }
                
                .footer-links a {
                    color: var(--color-text-secondary);
                    transition: color 0.2s;
                }
                
                .footer-links a:hover {
                    color: var(--color-primary);
                }
            `}</style>
    </footer>
  );
};

export default Footer;
