import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";


const Navbar = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section (optional: use IntersectionObserver for more accuracy)
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 150;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setActiveLink(link);
    scrollToSection(link);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
    >
      <div className="nav-content">
        <div className="logo" onClick={() => scrollToSection("hero")}>
          Hariprasath A
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["hero", "about", "skills", "projects", "contact"].map((link) => (
            <li key={link}>
  <a
    href={`#${link}`}
    className={activeLink === link ? "active" : ""}
    onClick={(e) => {
      e.preventDefault();
      handleNavClick(link);
    }}
  >
    {link.charAt(0).toUpperCase() + link.slice(1)}
  </a>
</li>

          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
