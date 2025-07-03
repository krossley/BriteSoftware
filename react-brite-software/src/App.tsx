import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import TiltedCardWrapper from './TiltedCardWrapper';
import './index.css';

function Header() {
  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">Brite Software</a>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Custom Software Development</h1>
          <p className="subtitle">Transforming ideas into powerful applications with .NET, C#, and modern web technologies</p>
          <a href="#contact" className="cta-button">Start Your Project</a>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Custom Web Applications</h3>
              <p>Full-stack development using .NET, Blazor, and modern web technologies to create scalable business solutions.</p>
            </div>
          </TiltedCardWrapper>
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Solutions</h3>
              <p>Azure-based applications with secure authentication, APIs, and cloud-native architecture for maximum scalability.</p>
            </div>
          </TiltedCardWrapper>
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>AI & Automation</h3>
              <p>Integrate AI agents and workflow automation using tools like n8n and Auto-GPT to streamline your business processes.</p>
            </div>
          </TiltedCardWrapper>
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Database Solutions</h3>
              <p>SQL Server and Azure SQL database design, optimization, and integration for robust data management.</p>
            </div>
          </TiltedCardWrapper>
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Blazor Applications</h3>
              <p>Modern web applications using Blazor WebAssembly for rich, interactive user experiences.</p>
            </div>
          </TiltedCardWrapper>
          <TiltedCardWrapper>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Business Automation</h3>
              <p>Custom tools for quotes, invoices, lead tracking, and client portals to simplify your daily operations.</p>
            </div>
          </TiltedCardWrapper>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Brite Software</h2>
            <p>Led by Bryan Krossley, a self-taught developer with over 10 years of experience, Brite Software specializes in delivering real-world applications that solve business problems through clean code and smart architecture.</p>
            <p>We focus on .NET technologies, cloud solutions, and emerging AI tools to create modern, efficient applications for small businesses and internal teams.</p>
            <p>Currently exploring how AI agents and automation tools can transform modern application workflows to provide even more value to our clients.</p>
            <div className="about-highlights">
              <h3>What Sets Us Apart:</h3>
              <ul>
                <li><strong>Custom Solutions:</strong> Tailored applications built specifically for your business needs</li>
                <li><strong>Modern Technology Stack:</strong> Leveraging the latest .NET, Blazor, and Azure technologies</li>
                <li><strong>AI Integration:</strong> Incorporating automation tools like n8n and Auto-GPT for enhanced workflows</li>
                <li><strong>Full-Stack Expertise:</strong> From database design to user interface development</li>
                <li><strong>Small Business Focus:</strong> Understanding the unique challenges of growing companies</li>
                <li><strong>Proven Track Record:</strong> Successfully delivered applications for workflow automation, client portals, and marketplaces</li>
                <li><strong>Ongoing Innovation:</strong> Continuously learning and implementing cutting-edge development practices</li>
              </ul>
            </div>
          </div>
          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Core Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Azure</span>
              <span className="stat-label">Cloud Platform</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24h</span>
              <span className="stat-label">Average Response Time</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99%</span>
              <span className="stat-label">Uptime Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>bryank@britesoftware.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>770-324-1818</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Adairsville, GA</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/bryan-krossley-826a2a1a2/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <a href="https://github.com/krossley" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </div>
          </div>
          <form className="contact-form" action="https://formspree.io/f/mwpbzvab" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company (Optional)</label>
              <input type="text" id="company" name="company" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" placeholder="Tell us about your project requirements..." required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-icons">
          <div className="tech-icon" data-tooltip=".NET Framework">
            {/* SVG icon code here */}
          </div>
          <div className="tech-icon" data-tooltip="C#">
            {/* SVG icon code here */}
          </div>
          <div className="tech-icon" data-tooltip="SQL Server">
            <i className="fas fa-database"></i>
          </div>
          <div className="tech-icon" data-tooltip="HTML5">
            <i className="fab fa-html5"></i>
          </div>
          <div className="tech-icon" data-tooltip="CSS3">
            <i className="fab fa-css3-alt"></i>
          </div>
          <div className="tech-icon" data-tooltip="JavaScript">
            <i className="fab fa-js-square"></i>
          </div>
          <div className="tech-icon" data-tooltip="Azure Cloud">
            {/* SVG icon code here */}
          </div>
          <div className="tech-icon" data-tooltip="Git">
            <i className="fab fa-git-alt"></i>
          </div>
          <div className="tech-icon" data-tooltip="GitHub">
            <i className="fab fa-github"></i>
          </div>
          <div className="tech-icon" data-tooltip="Blazor">
            {/* SVG icon code here */}
          </div>
          <div className="tech-icon" data-tooltip="API">
            <i className="fas fa-plug"></i>
          </div>
          <div className="tech-icon" data-tooltip="Visual Studio">
            {/* SVG icon code here */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Brite Software. All rights reserved. | Developed by <a href="mailto:bryank@britesoftware.com">Bryan Krossley</a></p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
          header.style.background = 'rgba(0, 0, 0, 0.9)';
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <TechStackSection />
      <Footer />
    </div>
  );
}

export default App;
