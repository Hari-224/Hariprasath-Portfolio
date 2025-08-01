import React from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // <-- new animations

const App = () => {
  // All section IDs for intersection observer
  const sectionIds = ["hero", "about", "skills", "projects", "contact"];
  const isVisible = useIntersectionObserver(sectionIds, { threshold: 0.3, once: true });

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section
        id="hero"
        className={`fade-in ${isVisible.hero?.visible ? "show" : ""}`}
      >
        <Hero isVisible={isVisible} scrollToSection={scrollToSection} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`fade-in-up ${isVisible.about?.visible ? "show" : ""}`}
      >
        <About isVisible={isVisible} />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`zoom-in ${isVisible.skills?.visible ? "show" : ""}`}
      >
        <Skills isVisible={isVisible} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`fade-in-up ${isVisible.projects?.visible ? "show" : ""}`}
      >
        <Projects isVisible={isVisible} />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`fade-in ${isVisible.contact?.visible ? "show" : ""}`}
      >
        <Contact isVisible={isVisible} />
      </section>

      <Footer />
    </>
  );
};

export default App;
