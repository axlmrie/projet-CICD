import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, ChevronLeft, Code, Database, Globe, Layers, Server, Cpu } from 'lucide-react';
import './App.css';

const skills = [
  { name: 'React', icon: <Code size={24} />, level: 'Expert' },
  { name: 'JavaScript', icon: <Globe size={24} />, level: 'Expert' },
  { name: 'CSS/Sass', icon: <Layers size={24} />, level: 'Avancé' },
  { name: 'Java', icon: <Server size={24} />, level: 'Intermédiaire' },
  { name: 'Git', icon: <Database size={24} />, level: 'Avancé' },
  { name: 'Next.js', icon: <Cpu size={24} />, level: 'Avancé' },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    desc: "Une interface d'administration complète avec graphiques en temps réel.",
    stack: ["React", "Recharts", "Firebase"],
    img: "https://placehold.co/600x400/1e293b/64ffda?text=Dashboard"
  },
  {
    id: 2,
    title: "Social Media App",
    desc: "Réseau social minimaliste axé sur la photographie.",
    stack: ["Next.js", "Tailwind", "Prisma"],
    img: "https://placehold.co/600x400/1e293b/64ffda?text=Social+App"
  },
  {
    id: 3,
    title: "Task Manager AI",
    desc: "Gestionnaire de tâches intelligent qui priorise via une IA.",
    stack: ["React", "Python", "OpenAI API"],
    img: "https://placehold.co/600x400/1e293b/64ffda?text=Task+AI"
  }
];

const experiences = [
  {
    role: "Senior Front-End Dev",
    company: "Tech Solutions Inc.",
    period: "2021 - Présent",
    desc: "Leadership technique sur la refonte de l'application client. Amélioration des perf de 40%."
  },
  {
    role: "Fullstack Developer",
    company: "Creative Agency",
    period: "2018 - 2021",
    desc: "Développement de sites vitrines et e-commerce pour des clients internationaux."
  }
];

const App = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Variants pour les animations
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="portfolio-container">
      {/* --- HEADER --- */}
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        className="navbar"
      >
        <div className="logo">PORTFOLIO.</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#experience">Expérience</a></li>
        </ul>
      </motion.nav>

      {/* --- SECTION 1: HOME --- */}
      <section id="home" className="section home-section">
        <div className="home-content">
          <motion.div 
            className="intro-text"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <span className="accent-text">Bonjour, je suis</span>
            <h1>Alexandre Dev</h1>
            <h2>Creative Developer.</h2>
            <p>
              Je conçois des expériences numériques exceptionnelles, accessibles et performantes.
              Spécialisé en React et écosystèmes modernes.
            </p>
            <div className="social-links">
              <Github className="icon" />
              <Linkedin className="icon" />
              <Mail className="icon" />
            </div>
          </motion.div>

          <motion.div 
            className="avatar-container"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="avatar-wrapper">
               {/* Remplace src par ta photo */}
              <img src="https://placehold.co/400x400/112240/64ffda?text=Avatar" alt="Avatar" className="avatar-img" />
              <div className="avatar-border"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: STACK --- */}
      <section id="stack" className="section stack-section">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">Ma Stack Technique</motion.h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#64ffda' }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: PROJETS (CAROUSEL) --- */}
      <section id="projects" className="section projects-section">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">Projets Récents</motion.h2>
        
        <div className="carousel-container">
          <button onClick={prevProject} className="nav-btn left"><ChevronLeft /></button>
          
          <div className="carousel-wrapper">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={currentProject}
                className="project-card"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                <div className="project-image">
                  <img src={projects[currentProject].img} alt={projects[currentProject].title} />
                </div>
                <div className="project-info">
                  <h3>{projects[currentProject].title}</h3>
                  <p>{projects[currentProject].desc}</p>
                  <div className="project-stack">
                    {projects[currentProject].stack.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button onClick={nextProject} className="nav-btn right"><ChevronRight /></button>
        </div>
      </section>

      {/* --- SECTION 4: EXPÉRIENCE --- */}
      <section id="experience" className="section exp-section">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">Expérience Pro</motion.h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="exp-date">{exp.period}</span>
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <p>© 2024 Alexandre Dev. Tous droits réservés.</p>
        <p>Conçu avec React & Framer Motion.</p>
      </footer>
    </div>
  );
};

export default App;