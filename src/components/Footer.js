import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 Hariprasath A | All Rights Reserved</p>

        {/* Social Links */}
        <div className="footer-social">
          <a href="mailto:youremail@example.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
