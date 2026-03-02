import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A set of technical skills acquired through academic work and personal
          project development.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.25 },
          },
        }}
        className="flex flex-wrap gap-6 py-10 justify-center"
      >
        {SkillsInfo.map((category) => (
          <motion.div
            key={category.title}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="relative group
              bg-white/5 backdrop-blur-xl
              px-6 sm:px-10 py-8 sm:py-6
              w-full sm:w-[48%] lg:w-[45%]
              rounded-2xl
              border border-white/10
              transition-all duration-500
              hover:border-purple-500/30
              hover:shadow-[0_15px_50px_rgba(130,69,236,0.18)]"
          >
            {/* Subtle animated light sweep */}
            <div
              className="absolute inset-0 rounded-2xl
              opacity-0 group-hover:opacity-100
              transition-all duration-700
              bg-linear-to-r from-transparent via-purple-500/10 to-transparent
              bg-size-[200%_100%] bg-left group-hover:bg-right
              pointer-events-none"
            />

            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6 text-center tracking-wide">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              perspective={1000}
              scale={1.02}
              transitionSpeed={800}
              gyroscope={false}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2
                      bg-white/5 border border-white/10
                      hover:border-purple-400
                      hover:bg-purple-500/10
                      hover:shadow-[0_0_12px_rgba(130,69,236,0.3)]
                      rounded-full
                      py-2 px-3
                      transition-all duration-300"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      loading="lazy"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;