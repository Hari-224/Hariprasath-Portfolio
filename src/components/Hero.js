import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero = ({ isVisible, scrollToSection }) => (
  <section id="hero" className={`section ${isVisible.hero ? "visible" : ""} hero-section`}>
    <div className="hero-overlay"></div>
    <div className="section-content hero">
      <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="hero-title">
        Hariprasath A
      </motion.h1>
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="hero-subtitle">
        <ReactTyped strings={["Full Stack Developer", "Mobile App Developer"]} typeSpeed={50} backSpeed={40} loop />
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="hero-description">
        Passionate Computer Science student at SKCT, graduating in 2027. Experienced in building modern web and mobile applications.
      </motion.p>

      {/* 🔻 Buttons Section Updated */}
      <motion.div className="hero-buttons" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }}>
        <button className="cta-button primary" onClick={() => scrollToSection("contact")}>Get In Touch</button>
        <a href="#projects" className="cta-button secondary">View Portfolio</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button secondary">Download Resume</a>
      </motion.div>

      {/* Social Links */}
      <motion.div className="hero-social" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }}>
        <a href="https://github.com/Hari-224" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/hariprasath-a-ba72a3299/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </motion.div>

      <motion.div className="scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
        {/* <span></span> */}
      </motion.div>
    </div>
  </section>
);

export default Hero;
