import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  // Typing animation
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const codeLines = [
    { text: 'const', cls: 'keyword' },
    { text: ' student', cls: 'variable' },
    { text: ' = {', cls: 'punctuation' },
    { text: '\n  name: ', cls: 'property' },
    { text: '"Divi Sukesh Babu"', cls: 'string' },
    { text: ',', cls: 'punctuation' },
    { text: '\n  role: ', cls: 'property' },
    { text: '"CSBS Student"', cls: 'string' },
    { text: ',', cls: 'punctuation' },
    { text: '\n  location: ', cls: 'property' },
    { text: '"Vignan University"', cls: 'string' },
    { text: ',', cls: 'punctuation' },
    { text: '\n};', cls: 'punctuation' },
    { text: '\n\n▶ Compiling portfolio...', cls: 'comment' },
  ];

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    let built = '';
    const interval = setInterval(() => {
      if (lineIdx >= codeLines.length) {
        clearInterval(interval);
        return;
      }
      const current = codeLines[lineIdx];
      built += current.text[charIdx];
      charIdx++;
      setDisplayText(built);
      if (charIdx >= current.text.length) {
        lineIdx++;
        charIdx = 0;
      }
    }, 45);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  // Build highlighted HTML from typed text
  const getHighlightedCode = () => {
    let remaining = displayText;
    let html = '';
    let lineIdx = 0;
    let pos = 0;

    for (const line of codeLines) {
      const chunk = remaining.substring(0, line.text.length);
      if (chunk.length === 0) break;
      remaining = remaining.substring(chunk.length);
      html += `<span class="${line.cls}">${chunk.replace(/\n/g, '<br/>')}</span>`;
    }
    return html;
  };

  return (
    <section id="hero" className="hero-section" style={{ opacity: 1, transform: 'none' }}>
      <div className="hero-bg">
        <div className="bg-blob top-right animate-float"></div>
        <div className="bg-blob bottom-left animate-float-slow"></div>
        <div className="bg-grid"></div>
      </div>

      <div className="container hero-grid">
        <div className="hero-text" data-animate="fade-right">
          <div className="badge" data-animate data-delay="300">
            <span className="badge-dot"></span>
            Available for Internship Opportunities
          </div>
          <h1 className="hero-title">
            Hello, I'm<br />
            <span className="gradient-name">Divi Sukesh</span><br />
            <span className="gradient-name">Babu</span>
          </h1>
          <p className="hero-desc">
            Computer Science Student specializing in CSBS.
            Passionate about building scalable software and
            solving complex problems through code.
          </p>

          <div className="hero-actions" data-animate data-delay="400">
            <a href="#projects" className="btn-primary">
              <span className="material-icons btn-icon">rocket_launch</span> View Projects
            </a>
            <a href="#certifications-leadership" className="btn-outline-hero">
              <span className="material-icons btn-icon">description</span> My Resume
            </a>
          </div>

          <div className="social-row" data-animate data-delay="600">
            <a href="#" className="social-pill" aria-label="GitHub">
              <span className="font-bold text-xs">GH</span>
            </a>
            <a href="#" className="social-pill" aria-label="LinkedIn">
              <span className="font-bold text-xs">in</span>
            </a>
            <a href="mailto:sukeshdivi2003@gmail.com" className="social-pill" aria-label="Email">
              <span className="material-icons text-sm">email</span>
            </a>
          </div>
        </div>

        <div className="hero-visual" data-animate="fade-left" data-delay="200">
          <div className="code-editor">
            <div className="editor-titlebar">
              <div className="editor-dots">
                <span className="dot-red"></span>
                <span className="dot-yellow"></span>
                <span className="dot-green"></span>
              </div>
              <span className="editor-title">portfolio.js</span>
            </div>
            <div className="editor-body">
              <pre>
                <code dangerouslySetInnerHTML={{ __html: getHighlightedCode() }} />
                <span className={`typing-cursor ${showCursor ? '' : 'hidden'}`}>|</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .bg-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.5;
          transition: transform 0.3s ease-out;
        }

        .top-right {
          top: -10%;
          right: -10%;
          background-color: rgba(99, 102, 241, 0.15);
        }

        .bottom-left {
          bottom: -15%;
          left: -10%;
          background-color: rgba(52, 211, 153, 0.1);
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(var(--color-border-light) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border-light) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.3;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent);
          -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, black, transparent);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.375rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          color: var(--color-accent);
          background-color: rgba(52, 211, 153, 0.08);
          border: 1px solid rgba(52, 211, 153, 0.25);
        }

        .badge-dot {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background-color: var(--color-accent);
          animation: pulse 2s infinite;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
        }

        .gradient-name {
          background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }

        .hero-desc {
          color: var(--color-text-secondary);
          font-size: 1.125rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          max-width: 32rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: white;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .btn-primary:hover::after {
          transform: translateX(100%);
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(99, 102, 241, 0.4);
          color: white;
        }

        .btn-outline-hero {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.875rem;
          color: var(--color-text-secondary);
          border: 1px solid var(--color-border-light);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-outline-hero:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
          background-color: rgba(99, 102, 241, 0.05);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
        }

        .btn-icon {
          font-size: 1.125rem;
        }

        .social-row {
          display: flex;
          gap: 0.75rem;
        }

        .social-pill {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background-color: var(--color-surface-dark);
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-pill:hover {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          border-color: transparent;
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
        }

        /* Code Editor */
        .code-editor {
          background-color: var(--color-surface-dark);
          border: 1px solid var(--color-border-light);
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          animation: float-slow 8s ease-in-out infinite;
        }

        .editor-titlebar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--color-border-light);
          background-color: var(--color-card-dark);
        }

        .editor-dots {
          display: flex;
          gap: 0.375rem;
        }

        .dot-red, .dot-yellow, .dot-green {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 50%;
        }

        .dot-red { background-color: #ef4444; }
        .dot-yellow { background-color: #f59e0b; }
        .dot-green { background-color: #22c55e; }

        .editor-title {
          font-size: 0.75rem;
          color: var(--color-text-secondary);
        }

        .editor-body {
          padding: 1.5rem;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 0.875rem;
          line-height: 1.8;
          min-height: 220px;
        }

        .editor-body pre {
          margin: 0;
          white-space: pre-wrap;
        }

        .keyword { color: var(--color-primary); }
        .variable { color: var(--color-text-primary); }
        .punctuation { color: var(--color-text-secondary); }
        .property { color: var(--color-primary-light); }
        .string { color: var(--color-accent); }
        .comment { color: var(--color-text-secondary); opacity: 0.7; }

        .typing-cursor {
          color: var(--color-primary);
          font-weight: 300;
          animation: blink 1s infinite;
        }
        .typing-cursor.hidden { opacity: 0; }

        /* Glow effect line at top of hero */
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(to right, transparent, var(--color-primary), var(--color-accent), transparent);
          opacity: 0.4;
        }
      `}</style>
    </section>
  );
};

export default Hero;
