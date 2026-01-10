import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import { User, Rocket, Code2, Wrench, Database } from "lucide-react";

export default function Home() {
  return (
    <motion.div
      className="bg-light text-dark"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: "100%" }} 
    >
      {/* HERO SECTION */}
      <section className="text-center py-5 bg-dark text-light">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="fw-bold display-5 d-flex justify-content-center align-items-center gap-2"
          >
            
            Hi, I'm Brian Mugatsia
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <TypeAnimation
              sequence={[
                "Full-Stack Developer ",
                2000,
                "React & Spring Boot Engineer ",
                2000,
                "Crafting Scalable Web Apps ",
                2000,
              ]}
              speed={50}
              className="text-primary fw-semibold fs-4 mt-3 d-block"
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="lead mt-3 text-secondary"
          >
            Turning ideas into interactive, performant, and user-friendly digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-4"
          >
            <Link to="/projects" className="btn btn-primary me-3">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline-light">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} 
      >
        <div className="container">
          <div className="row align-items-center">
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={profile}
                alt="Brian Mugatsia"
                className="img-fluid rounded-4 shadow"
              />
            </motion.div>
            <motion.div
              className="col-md-6 mt-4 mt-md-0"
              initial={{ opacity: 0.4, x: 20}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <User size={28} className="text-primary" />
                About Me
              </h2>
              <p>
                I’m a passionate software developer who enjoys turning ideas into interactive,
                functional, and elegant digital products. My focus is on clean code, UI/UX
                friendliness, and performance optimization.
              </p>
              <Link to="/about" className="btn btn-dark mt-3">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* SKILLS PREVIEW */}
      <motion.section
        className="py-5 bg-body-secondary"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <h2 className="fw-bold mb-4 d-flex justify-content-center align-items-center gap-2">
            <Wrench size={30} className="text-primary" />
            Core Technologies
          </h2>
          <div className="row justify-content-center text-center">
            {[
              { icon: <Code2 size={18} />, name: "HTML" },
              { icon: <Code2 size={18} />, name: "CSS" },
              { icon: <Code2 size={18} />, name: "Bootstrap" },
              { icon: <Code2 size={18} />, name: "React" },
              { icon: <Code2 size={18} />, name: "Spring Boot" },
              { icon: <Database size={18} />, name: "MySQL" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                className="col-6 col-md-2 mb-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {tech.icon} {tech.name}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
