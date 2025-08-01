import { motion } from "framer-motion";
import { FaReact, FaJava, FaHtml5 } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import "./About.css";
import profilePic from "../assets/profile.png";

const About = ({ isVisible }) => {
  return (
    <section
      id="about"
      className={`section ${isVisible.about ? "visible" : ""} px-6 py-16`}
    >
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="image-wrapper group"
        >
          <img
            src={profilePic}
            alt="Profile"
            className="profile-img"
          />
          <div className="overlay" />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="about-content"
        >
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            I'm currently pursuing <strong>B.E. Computer Science</strong> at
            <strong> Sri Krishna College of Technology (SKCT)</strong>, graduating in 2027.
            I have hands-on experience in building <strong>web and mobile applications</strong>,
            specializing in React, Springboot, and Java.
          </p>

          {/* Tech Stack Icons */}
          <div className="tech-icons">
            <FaReact title="React" />
            <SiSpringboot title="Spring Boot" />
            <FaJava title="Java" />
            <FaHtml5 title="HTML5" />
          </div>

          {/* Buttons */}
          <div className="button-group">
            <a
              href="/resume.pdf"
              download
              className="btn download-btn"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="btn contact-btn"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
