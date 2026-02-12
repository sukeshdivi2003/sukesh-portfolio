import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* State for theme */
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    /* Apply theme to document */
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications-leadership' },
    { name: 'Leadership', href: '#certifications-leadership' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Divi <span className="logo-accent">Sukesh Babu</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-icons">{menuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>{link.name}</a>
              </li>
            ))}
            {/* Theme Toggle (Desktop & Mobile) */}
            <li>
              <button
                className="theme-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                }}
                aria-label="Toggle Theme"
              >
                <span className="material-icons">
                  {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s ease-in-out;
          background: transparent;
        }
        
        .navbar.scrolled {
          background: rgba(10, 15, 26, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--color-border-light);
          padding: 1rem 0;
        }

        [data-theme="light"] .navbar.scrolled {
          background: rgba(248, 250, 252, 0.88);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-text-primary);
          text-decoration: none;
          letter-spacing: -0.025em;
        }
        
        .logo-accent {
          color: var(--color-primary);
          transition: color 0.3s;
        }
        
        .logo:hover .logo-accent {
          color: var(--color-primary-light);
        }
        
        /* Theme Toggle Button */
        .theme-toggle {
          background: var(--color-surface-dark);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          margin-left: 1rem;
        }

        .theme-toggle:hover {
          color: var(--color-primary);
          border-color: var(--color-primary);
          background: var(--color-card-dark);
          box-shadow: var(--shadow-glow);
        }

        .menu-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          color: var(--color-text-primary);
        }

        /* Desktop Styles */
        @media (min-width: 768px) {
          .menu-toggle {
            display: none;
          }

          .nav-menu {
            display: flex !important;
            align-items: center;
            opacity: 1 !important;
            transform: none !important;
            position: static !important;
            background: transparent !important;
            padding: 0 !important;
            border: none !important;
          }

          .nav-links {
             flex-direction: row !important;
             gap: 2rem !important;
             align-items: center !important;
          }
        }
        
        /* Mobile/Tablet Styles */
        @media (max-width: 767px) {
          .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--color-bg-dark);
            border-bottom: 1px solid var(--color-border);
            padding: 1rem;
            display: none;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s;
            box-shadow: var(--shadow-lg);
          }
          
          .nav-menu.active {
            display: block;
            opacity: 1;
            transform: translateY(0);
          }
          
          .nav-links {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
            width: 100%;
          }
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-links a {
          color: var(--color-text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          transition: color 0.3s;
        }
        
        .nav-links a:hover {
          color: var(--color-primary);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
