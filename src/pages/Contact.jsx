import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // lightweight engine
import "./Contact.css";

export default function Contact() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="contact-page d-flex flex-column justify-content-center align-items-center py-3 position-relative">

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: ["red", "#198754"] }, // Blue & Green theme
            links: {
              color: "red",
              distance: 140,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            collisions: { enable: false },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              value: 60,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="particles-bg"
      />

      {/* Contact Content */}
      <div className="container-fluid px-4 position-relative z-10">

        {/* Header */}
        <motion.h2
          className="text-center fw-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center mb-5 fs-5 text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Have a question, project, or collaboration in mind?  
          I’d love to hear from you — let’s build something great together.
        </motion.p>

        {/* Contact Info Cards */}
        <div className="row g-4 mb-5 justify-content-center">
          {[
            { icon: <Mail size={32} className="text-primary mb-2" />, title: "Email", text: "mugatsiabrian@gmail.com" },
            { icon: <Phone size={32} className="text-success mb-2" />, title: "Phone", text: "+254 792117537" },
            { icon: <MapPin size={32} className="text-danger mb-2" />, title: "Location", text: "Nyanza , Kenya" },
          ].map((info, i) => (
            <motion.div
              key={i}
              className="col-12 col-md-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="card contact-card text-dark text-center p-4 h-100">
                {info.icon}
                <h5>{info.title}</h5>
                <p className="mb-0">{info.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="row justify-content-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="col-12 col-md-8 col-lg-6">
            <form className="card contact-form text-dark shadow-sm p-4 bg-white">
              <h4 className="mb-3 fw-bold text-center">Send Me a Message</h4>

              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <input type="text" className="form-control border-success" placeholder="Your full name" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control border-success" placeholder="Your email address" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Message</label>
                <textarea className="form-control border-success" rows="4" placeholder="Write your message here..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          className="mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.760721123969!2d34.769!3d0.283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17811f312b5f3f9d%3A0x8320cfa290c8e3ab!2sWestern%20Kenya!5e0!3m2!1sen!2ske!4v1700000000000"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a href="https://linkedin.com/in/mugastiabrian" target="_blank" rel="noopener noreferrer" className="social-link mx-3">
            <Linkedin size={28} />
          </a>
          <a href="https://github.com/mugastiabrian" target="_blank" rel="noopener noreferrer" className="social-link mx-3">
            <Github size={28} />
          </a>
          <a href="https://twitter.com/mugastiabrian" target="_blank" rel="noopener noreferrer" className="social-link mx-3">
            <Twitter size={28} />
          </a>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-5 cta-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="fw-bold">Let's Collaborate</h4>
          <p className="text-secondary mb-4">
            I’m open to freelance projects, internships, and collaborations. Let’s make something meaningful together.
          </p>
        </motion.div>

      </div>

      {/* Back to Top Button */}
      <button
        className="btn btn-outline-primary position-fixed bottom-0 end-0 m-4 back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}
