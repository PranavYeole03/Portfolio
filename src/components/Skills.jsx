import React from "react";
import { SkillsInfo } from "../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A set of technical skills acquired through academic work and personal
          project development.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-4 lg:gap-6 py-10 justify-center">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6
                       w-full sm:w-[48%] lg:w-[45%]
                       rounded-2xl border border-white
                       shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={false}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center gap-2 sm:gap-2 md:gap-2  lg:gap-1
                               border-2 border-gray-600 rounded-3xl
                               py-1 px-1 text-center"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
