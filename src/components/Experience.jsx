// import React from "react";
// import { motion } from "framer-motion";

// const Experience = () => {
//   return (
//     <section
//       id="experience"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
//     >
//       {/* Section Title */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }} className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
//         <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my project-based learning, academic experience, and
//           certifications that reflect my continuous learning and practical
//           skills as a fresher.
//         </p>
//       </motion.div>

//       {/* Experience Content */}
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{
//           hidden: {},
//           visible: {
//             transition: {
//               staggerChildren: 0.25,
//             },
//           },
//         }} className="max-w-4xl mx-auto space-y-10 text-gray-300">

//         {/* Project-Based Experience */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-4">
//             Project-Based Experience (MERN Stack)
//           </h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-400">
//             <li>
//               Developed full-stack web applications using React, Node.js,
//               Express, and MongoDB.
//             </li>
//             <li>
//               Implemented RESTful APIs, authentication, and CRUD operations.
//             </li>
//             <li>
//               Built responsive and user-friendly interfaces using Tailwind CSS.
//             </li>
//             <li>
//               Used Git and GitHub for version control and project management.
//             </li>
//             <li>
//               Deployed applications on platforms like Netlify and Render.
//             </li>
//           </ul>
//         </motion.div>

//         {/* Certifications */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-4">
//             Certifications & Academic Learning
//           </h3>
//           <ul className="list-disc list-inside space-y-2 text-gray-400">
//             <li>Java Programming – NPTEL (IIT)</li>
//             <li>Software Testing – NPTEL (IIT)</li>
//             <li>Java (Problem Solving) – HackerRank</li>
//             <li>Python Programming – HackerRank</li>
//           </ul>
//         </motion.div>

//         {/* Tools & Technologies */}
//         <motion.div
//           variants={{
//             hidden: { opacity: 0, y: 40 },
//             visible: { opacity: 1, y: 0 },
//           }}
//           transition={{ duration: 0.6 }}
//         >
//           <h3 className="text-2xl font-semibold text-white mb-4">
//             Tools & Technologies
//           </h3>
//           <p className="text-gray-400">
//             React, Node.js, Express, MongoDB, JavaScript, Java, Python, Tailwind
//             CSS, Git, GitHub, Postman
//           </p>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">
          HANDS-ON EXPERIENCE
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-3xl mx-auto">
          Practical development experience through real-world projects,
          continuous learning, and hands-on implementation of modern
          technologies.
        </p>
      </motion.div>

      {/* Cards Wrapper */}
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
        }}
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {/* Development Experience */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gray-900 border border-white/10
          shadow-[0_0_25px_rgba(130,69,236,0.2)]
          hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Full-Stack Development (MERN)
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-400">
            <li>
              Built and deployed full-stack applications using React, Node.js,
              Express, and MongoDB.
            </li>
            <li>
              Designed RESTful APIs with authentication (JWT) and secure CRUD
              operations.
            </li>
            <li>
              Developed responsive user interfaces using Tailwind CSS with a
              focus on performance and UX.
            </li>
            <li>
              Managed version control workflows using Git and GitHub.
            </li>
            <li>
              Deployed applications on Netlify and Render with production-ready
              configuration.
            </li>
          </ul>
        </motion.div>

        {/* Certifications & Learning */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gray-900 border border-white/10
          shadow-[0_0_25px_rgba(130,69,236,0.2)]
          hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Certifications & Continuous Learning
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-400">
            <li>Java Programming - NPTEL (IIT)</li>
            <li>Software Testing - NPTEL (IIT)</li>
            <li>Problem Solving (Java) - HackerRank</li>
            <li>Python Programming - HackerRank</li>
            <li className="text-gray-400 font-medium">
              Continuously strengthening problem-solving skills, data structures,
              algorithms, and backend architecture fundamentals.
            </li>
          </ul>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 p-8 rounded-2xl bg-gray-900 border border-white/10
          shadow-[0_0_25px_rgba(130,69,236,0.2)]
          hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Tools & Technologies
          </h3>
          <p className="text-gray-400 leading-relaxed">
            React • Node.js • Express • MongoDB • JavaScript • Java • Python •
            Tailwind CSS • Git • GitHub • Postman • REST APIs
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;