import React from 'react';
import previewImg from '../assets/project-preview.png';

const Projects = () => {
  const projects = [
    {
      title: "Vehicle Rental Booking System",
      description: "A comprehensive desktop application designed to streamline the process of booking and managing vehicle rentals. The system features a robust admin dashboard for inventory management, secure user authentication, and real-time availability tracking.",
      techStack: ["Java", "MySQL", "Java Swing", "JDBC"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkgc1XdS7YkI1bq5wYpCMWwh3K3hJ7N-P6i2d4rz6i3OaoZtSam8DGzr1wFwYoI0g54JfRGPZB9DUdpmKUE9OF5_4cfd58U2RYciDb9ZsHlP8f7EwP1lo0_C8QxoLrYmlTCNqsMkHPSI87wmsI3z7lq4JMZjHYud5avB44F_HdbiQITmcEb-plHClreqGdJu1YBwH_FeG6EF1friy04kSn9G0O6meYJT88BzZbrD_RpDSne-1k_MwBwxV1j7XsDUv5q_yd-sNMwzE"
    },
    {
      title: "Blog Website Platform",
      description: "A dynamic content management system (CMS) built for scalability and performance. It allows users to create, edit, and publish rich-text articles. Includes a commenting system, tag-based categorization, and a responsive frontend for optimal reading experience.",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFQ3YwCR4tTjNhh4VlLFHEaISIU68YUavEuJKZjQNkbBHT-fspu1itRmKjo-rRY4EoV1NxBLpHEZoH6fcXbiRpOLBuwDJCB7tTtHkePwxiG0lce9jF4IMfUWUgT-Mr0xhWOCPORYv7KAa3YmQI1A2jJJLPX3ZxqEUuHfu5tkgFqNHiv60QUU87jZjrxCVDLezQQsgXhphEzQOm8rEHvZi4PBeSUapp1LJudDI9xhhdtQM4Zigdk9jCSoEc97LU5yP9BBrJLi0IiFc"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header" data-animate>
          <div className="divider"></div>
          <h2 className="section-title">
            <span className="material-icons text-primary title-icon">rocket_launch</span> Featured Projects
          </h2>
          <div className="divider"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article key={index} className="project-card" data-animate={index === 0 ? "fade-right" : "fade-left"} data-delay={index * 200}>
              <div className="card-image-wrapper">
                <div className="overlay"></div>
                <img
                  src={project.image || previewImg}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                  onError={(e) => { e.target.src = previewImg }}
                />
                <div className="title-overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>

              <div className="card-content">
                <p className="description">
                  {project.description}
                </p>

                <div className="tech-stack-container">
                  <h4 className="tech-label">Tech Stack</h4>
                  <div className="tech-tags">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="card-actions">
                  <a href="#" className="btn-outline">
                    <span className="material-icons btn-icon">code</span> View Source
                  </a>
                  <a href="#" className="btn-solid">
                    <span className="material-icons btn-icon">visibility</span> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .project-card {
           display: flex;
           flex-direction: column;
           background-color: var(--color-card-dark);
           border-radius: 0.75rem;
           overflow: hidden;
           border: 1px solid var(--color-border-light);
           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
           height: 100%;
        }
        
        .project-card:hover {
          border-color: var(--color-primary);
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px rgba(99, 102, 241, 0.2),
                      0 0 0 1px rgba(99, 102, 241, 0.1);
        }
        
        .card-image-wrapper {
          height: 12rem;
          position: relative;
          overflow: hidden;
        }
        
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, var(--color-card-dark), transparent 60%);
          z-index: 10;
          transition: opacity 0.4s;
        }

        .project-card:hover .overlay {
          opacity: 0.8;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-card:hover .card-image {
          transform: scale(1.08);
        }
        
        .title-overlay {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          z-index: 20;
        }
        
        .title-overlay h3 {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          transition: transform 0.3s;
        }

        .project-card:hover .title-overlay h3 {
          transform: translateX(4px);
        }
        
        .card-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        
        .description {
          color: var(--color-text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          flex-grow: 1;
          font-size: 0.875rem;
        }
        
        .tech-stack-container {
          margin-bottom: 1.5rem;
        }
        
        .tech-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-secondary);
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          padding: 0.25rem 0.625rem;
          border-radius: 0.375rem;
          font-size: 0.75rem;
          font-weight: 500;
          background-color: rgba(99, 102, 241, 0.08);
          color: var(--color-primary);
          border: 1px solid rgba(99, 102, 241, 0.15);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tech-tag:hover {
          background-color: rgba(99, 102, 241, 0.15);
          border-color: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(99, 102, 241, 0.12);
        }
        
        .card-actions {
          display: flex;
          gap: 1rem;
          margin-top: auto;
        }
        
        .btn-outline, .btn-solid {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        
        .btn-outline {
          border: 1px solid var(--color-border-light);
          color: var(--color-text-secondary);
        }
        
        .btn-outline:hover {
          background-color: var(--color-surface-dark);
          color: var(--color-text-primary);
          border-color: var(--color-text-secondary);
          transform: translateY(-2px);
        }
        
        .btn-solid {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2);
        }

        .btn-solid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }

        .btn-solid:hover::after {
          transform: translateX(100%);
        }
        
        .btn-solid:hover {
          background: linear-gradient(135deg, var(--color-primary-light), var(--color-primary));
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px -4px rgba(99, 102, 241, 0.35);
        }
        
        .btn-icon {
          font-size: 1rem;
          margin-right: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Projects;
