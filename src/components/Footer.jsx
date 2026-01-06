import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <motion.footer
      className="bg-dark text-light py-5 w-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Brand Section */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <Link to="/" className="fw-bold fs-5 text-light text-decoration-none">
              BRIAN MUGATSIA
            </Link>
            <p className="mt-2 small">
              Full-Stack Developer crafting modern web solutions using React & Spring Boot.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled mb-0">
              {[
                { name: "Home", to: "/" },
                { name: "About", to: "/about" },
                { name: "Skills", to: "/skills" },
                { name: "Projects", to: "/projects" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.name} className="mb-2">
                  <Link
                    to={link.to}
                    className="footer-link footer-text text-light text-decoration-none"
                  >
                    <span className="footer-text">{link.name.toUpperCase()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Follow Me</h5>
            <ul className="list-unstyled mb-0">
              {[
                { name: "LinkedIn", icon: <Linkedin size={18} />, url: "https://linkedin.com/in/mugastiabrian" },
                { name: "GitHub", icon: <Github size={18} />, url: "https://github.com/mugastiabrian" },
                { name: "Twitter", icon: <Twitter size={18} />, url: "https://twitter.com/mugastiabrian" },
              ].map((item) => (
                <li key={item.name} className="mb-2">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link d-flex align-items-center justify-content-center justify-content-md-start gap-2"
                  >
                    {item.icon} <span className="footer-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        {/* Scroll to Top Button */}
        <div className="text-center mb-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-outline-primary rounded-pill px-3 py-1"
          >
            ↑ Back to Top
          </button>
        </div>

        <div className="text-center small opacity-75">
          &copy; {new Date().getFullYear()} <span className="fw-semibold">Brian Mugatsia</span>. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
