import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["HOME", "ABOUT", "CONTACT", "SKILLS", "PROJECTS"];

  return (
    <motion.nav
      className={`navbar navbar-expand-md sticky-top navbar-dark bg-success ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <NavLink
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <motion.img
            src={profile}
            alt="Brian Mugatsia"
            className="me-2"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid white",
            }}
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          MUGATSIA’S PORTFOLIO
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsable"
          aria-controls="collapsable"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="collapsable">
          <ul className="navbar-nav ms-auto text-center">
            {navItems.map((item, index) => (
              <motion.li
                className="nav-item"
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link fw-bold px-3 text-uppercase ${
                      isActive ? "active-link" : ""
                    }`
                  }
                >
                  {item}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
