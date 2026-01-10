// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Target,
  Award,
  Heart,
  FileDown,
  Camera,
  Music,
  Bot,
  Dumbbell,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-light text-dark">
      {/* Header Section */}
      <section className="text-center py-5 bg-dark text-light">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container-fluid"
        >
          <h1 className="fw-bold display-5 d-flex justify-content-center align-items-center gap-2">
            <Target size={40} className="text-light " />
            About Me
          </h1>
          <p className="lead mt-3">
            Get to know who I am, what I do, and why I’m passionate about crafting modern web
            solutions.
          </p>
        </motion.div>
      </section>

      {/* Main About Section */}
      <section className="py-5">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Background */}
            <motion.div
              className="col-md-6 mb-4 mb-md-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Layers size={28} className="text-primary" />
                My Background
              </h2>
              <p>
                I'm a dedicated Full-Stack Developer with a strong passion for problem-solving,
                clean architecture, and modern web development. I enjoy creating software that not
                only works efficiently but also provides an intuitive and enjoyable user experience.
              </p>
              <p>
                With experience in both front-end and back-end technologies, I bring ideas to life
                using React, Bootstrap, Spring Boot, and MySQL. I focus on writing maintainable
                code, scalability, and seamless integration between systems.
              </p>

              {/* Download CV Button */}
              <a
                href="/assets/profile.jpg"
                download
                className="btn btn-primary fw-semibold mt-3 d-inline-flex align-items-center gap-2"
              >
                <FileDown size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* What I Do */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Code2 size={28} className="text-success" />
                What I Do
              </h2>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex align-items-center gap-2">
                  <Code2 size={18} className="text-primary" /> Front-end development using React &
                  Bootstrap
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <Code2 size={18} className="text-primary" /> Back-end development with Spring Boot
                  & REST APIs
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <Code2 size={18} className="text-primary" /> Database management with MySQL
                </li>
                <li className="mb-2 d-flex align-items-center gap-2">
                  <Code2 size={18} className="text-primary" /> Responsive UI design with modern CSS
                  frameworks
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-5 bg-body-secondary">
        <motion.div
          className="container-fluid text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-4 d-flex justify-content-center align-items-center gap-2">
            <Award size={32} className="text-primary" />
            Achievements
          </h2>
          <div className="row justify-content-center">
            <div className="col-md-3 col-6 mb-3">
              <h3 className="fw-bold text-dark">7+</h3>
              <p className="text-muted">Completed Projects</p>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <h3 className="fw-bold text-dark">1+</h3>
              <p className="text-muted">Years of Experience</p>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <h3 className="fw-bold text-dark">5+</h3>
              <p className="text-muted">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Hobbies & Interests Section */}
      <section className="py-5">
        <motion.div
          className="container-fluid text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-4 d-flex justify-content-center align-items-center gap-2">
            <Heart size={28} className="text-danger" />
            Hobbies & Interests
          </h2>

          <div className="row justify-content-center text-center">
            <div className="col-6 col-md-2 mb-4">
              <Dumbbell size={28} className="text-primary mb-2" />
              <p className="fw-semibold">Football</p>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <Code2 size={28} className="text-success mb-2" />
              <p className="fw-semibold">Coding</p>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <Camera size={28} className="text-warning mb-2" />
              <p className="fw-semibold">Photography</p>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <Music size={28} className="text-info mb-2" />
              <p className="fw-semibold">Music</p>
            </div>
            <div className="col-6 col-md-2 mb-4">
              <Bot size={28} className="text-secondary mb-2" />
              <p className="fw-semibold">AI & Tech</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
