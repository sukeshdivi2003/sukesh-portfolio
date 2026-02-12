import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Leadership from './components/Leadership'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Section-level reveal
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          sectionObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px', threshold: 0.08 });

    document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
    });

    // Staggered item reveals — elements with data-animate
    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, Number(delay));
          itemObserver.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      itemObserver.observe(el);
    });

    // Progress bar fill on scroll
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fill');
          progressObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress-bar').forEach(bar => {
      progressObserver.observe(bar);
    });

    // Counter animation for percentages
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          if (!target) return;
          let current = 0;
          const step = target / 30;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = Math.round(current) + '%';
          }, 30);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => {
      counterObserver.observe(el);
    });

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
      progressObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  // Parallax-lite effect on mouse move for hero
  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.bg-blob');
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      blobs.forEach((blob, i) => {
        const factor = i === 0 ? 1 : -0.7;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Projects />

      {/* Group Certifications and Leadership */}
      <section id="certifications-leadership" className="container mx-auto px-4 fade-up">
        <header className="mb-12 max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold section-title mb-6">
            Professional <span className="text-gradient-primary">Milestones</span>
          </h2>
          <p className="subtitle leading-relaxed max-w-2xl">
            A showcase of technical certifications and leadership roles that demonstrate my commitment to continuous learning and community building.
          </p>
        </header>

        <div className="flex flex-col gap-12 xl:gap-20">
          <div className="certs-col w-full" data-animate data-delay="0">
            <Certifications />
          </div>
          <div className="leadership-col w-full" data-animate data-delay="200">
            <Leadership />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default App
