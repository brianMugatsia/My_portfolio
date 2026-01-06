import { Github, Globe, FolderOpen } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import studentImg from "../assets/student-management.jpg";
import weatherImg from "../assets/weather-app.jpg";
import portfolioImg from "../assets/portfolio-site.jpg";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <div className="bg-light text-dark">
      {/* Header */}
      <motion.section
        className="text-center py-5 bg-dark text-light"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.h1
            className="fw-bold display-5 d-flex justify-content-center align-items-center gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <FolderOpen size={40} className="text-warning" />
            </motion.span>
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="lead mt-3"
          >
            A selection of projects showcasing my skills in full-stack web development.
          </motion.p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Project 1 */}
            <motion.div
              className="col-md-4"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div className="card h-100 text-dark shadow-sm border-0 overflow-hidden">
                <motion.img
                  src={studentImg}
                  className="card-img-top"
                  alt="Student Management System"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Student Management System</h5>
                  <p className="card-text">
                    Full-stack app using Spring Boot, React, and MySQL to manage student data with CRUD and responsive UI.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-secondary">React</span>
                    <span className="badge bg-secondary">Spring Boot</span>
                    <span className="badge bg-secondary">MySQL</span>
                  </div>
                </div>
                <motion.div
                  className="card-footer bg-transparent border-0 d-flex justify-content-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/mugastiabrian/student-management"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="col-md-4"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div className="card text-dark h-100 shadow-sm border-0 overflow-hidden">
                <motion.img
                  src={weatherImg}
                  className="card-img-top"
                  alt="Weather App"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Weather App</h5>
                  <p className="card-text">
                    A React app using the OpenWeather API to fetch real-time updates with a sleek Bootstrap UI.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-secondary">React</span>
                    <span className="badge bg-secondary">API</span>
                    <span className="badge bg-secondary">Bootstrap</span>
                  </div>
                </div>
                <motion.div
                  className="card-footer bg-transparent border-0 d-flex justify-content-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/mugastiabrian/weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="col-md-4"
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <motion.div className="card h-100 text-dark shadow-sm border-0 overflow-hidden">
                <motion.img
                  src={portfolioImg}
                  className="card-img-top"
                  alt="Portfolio Website"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Personal Portfolio</h5>
                  <p className="card-text">
                    A responsive React + Bootstrap portfolio site showcasing my skills, projects, and contact information.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    <span className="badge bg-secondary">React</span>
                    <span className="badge bg-secondary">Bootstrap</span>
                    <span className="badge bg-secondary">Lucide Icons</span>
                  </div>
                </div>
                <motion.div
                  className="card-footer bg-transparent border-0 d-flex justify-content-between"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <a
                    href="https://github.com/mugastiabrian/portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                  >
                    <Globe size={18} /> Live Demo
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
