import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = ({ isVisible }) => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // for success/error messages
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_hari",        // Your Service ID
        "template_w4w91wm",    // Your Template ID
        formRef.current,
        "EG14A6bdfYuJ9vxrS"    // Your Public Key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className={`section ${isVisible.contact ? "visible" : ""}`}>
      <div className="content-section contact-section">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Drop me a message or connect via social media.</p>

        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status === "success" && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-message">Failed to send message. Try again later.</p>
        )}

        <div className="social-links">
          <a href="mailto:akhariakhari7@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/hariprasath-a-ba72a3299/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Hari-224" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
