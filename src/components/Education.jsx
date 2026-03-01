import React from "react";
import { education } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey and qualifications
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-5 rounded-xl bg-gray-900 border border-white/10
shadow-[0_0_18px_rgba(130,69,236,0.25)]
hover:scale-[1.015] transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-5">
              <div className="w-20 h-14 bg-white rounded-md overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-300">
                  {edu.school}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {edu.date}
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-400 font-bold">
              Grade: {edu.grade}
            </p>

            <p className="mt-2 text-gray-400">
              {edu.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;