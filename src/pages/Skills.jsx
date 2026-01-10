import { Code2, Layout, Wrench, ServerCog } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div
      className="bg-light text-dark d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      {/* Header Section */}
      <section className="text-center py-5 bg-dark text-light container-fluid">
        <motion.h1
          className="fw-bold display-5 d-flex justify-content-center align-items-center gap-2 flex-wrap"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Wrench size={40} className="text-light" />
          Skills & Expertise
        </motion.h1>
        <motion.p
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A blend of front-end and back-end technologies to craft complete, modern web applications.
        </motion.p>
      </section>

      <div className="container-fluid px-4">
        {/* Core Skills */}
        <section className="py-5">
          <div className="row g-4">
            {/* Frontend */}
            <motion.div
              className="col-12 col-md-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <Layout size={28} className="text-primary" />
                Front-End Development
              </h3>
              <ul className="list-unstyled">
                {[
                  { name: "HTML", width: "95%", color: "bg-primary" },
                  { name: "CSS", width: "90%", color: "bg-primary" },
                  { name: "Bootstrap", width: "85%", color: "bg-primary" },
                  { name: "React.js", width: "88%", color: "bg-primary" },
                ].map((skill) => (
                  <li key={skill.name} className="mb-3 d-flex justify-content-between align-items-center">
                    <span>{skill.name}</span>
                    <div className="progress flex-grow-1 ms-3" style={{ height: "12px" }}>
                      <motion.div
                        className={`progress-bar ${skill.color}`}
                        style={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ duration: 1.2 }}
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="col-12 col-md-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="fw-bold mb-3 d-flex align-items-center gap-2">
                <ServerCog size={28} className="text-success" />
                Back-End Development
              </h3>
              <ul className="list-unstyled">
                {[
                  { name: "Java", width: "85%", color: "bg-success" },
                  { name: "Spring Boot", width: "50%", color: "bg-success" },
                  { name: "MySQL", width: "80%", color: "bg-success" },
                  { name: "REST APIs", width: "60%", color: "bg-success" },
                ].map((skill) => (
                  <li key={skill.name} className="mb-3 d-flex justify-content-between align-items-center">
                    <span>{skill.name}</span>
                    <div className="progress flex-grow-1 ms-3" style={{ height: "12px" }}>
                      <motion.div
                        className={`progress-bar ${skill.color}`}
                        style={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ duration: 1.2 }}
                      ></motion.div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Tools & Other Skills */}
        <motion.section
          className="py-5 bg-body-secondary rounded-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="fw-bold mb-4 text-center d-flex justify-content-center align-items-center gap-2 flex-wrap">
            <Code2 size={28} className="text-primary" />
            Tools & Other Skills
          </h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {["Git & GitHub", "VS Code", "Postman", "Figma", "API Design", "Problem Solving"].map(
              (tool) => (
                <motion.div
                  key={tool}
                  className="badge bg-light text-dark p-2 px-3 shadow-sm"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tool}
                </motion.div>
              )
            )}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
