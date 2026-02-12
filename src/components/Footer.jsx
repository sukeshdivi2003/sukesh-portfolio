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
            <a href="#" className="social-link" aria-label="GitHub">
              <span className="font-bold text-xs">GH</span>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
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
