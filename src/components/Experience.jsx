import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my project-based learning, academic experience, and
          certifications that reflect my continuous learning and practical
          skills as a fresher.
        </p>
      </motion.div>

      {/* Experience Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }} className="max-w-4xl mx-auto space-y-10 text-gray-300">

        {/* Project-Based Experience */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Project-Based Experience (MERN Stack)
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              Developed full-stack web applications using React, Node.js,
              Express, and MongoDB.
            </li>
            <li>
              Implemented RESTful APIs, authentication, and CRUD operations.
            </li>
            <li>
              Built responsive and user-friendly interfaces using Tailwind CSS.
            </li>
            <li>
              Used Git and GitHub for version control and project management.
            </li>
            <li>
              Deployed applications on platforms like Netlify and Render.
            </li>
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Certifications & Academic Learning
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Java Programming – NPTEL (IIT)</li>
            <li>Software Testing – NPTEL (IIT)</li>
            <li>Java (Problem Solving) – HackerRank</li>
            <li>Python Programming – HackerRank</li>
          </ul>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Tools & Technologies
          </h3>
          <p className="text-gray-400">
            React, Node.js, Express, MongoDB, JavaScript, Java, Python, Tailwind
            CSS, Git, GitHub, Postman
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
