import React, { useState } from "react";
import { projects } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleOpenModal(project)}
            className="relative group 
              bg-gray-900/70 backdrop-blur-xl 
              rounded-xl 
              border border-white/10
              overflow-hidden cursor-pointer
              transition-all duration-500
              hover:border-purple-500/30
              hover:shadow-[0_20px_60px_rgba(130,69,236,0.18)]
              hover:-translate-y-2"
          >
            {/* Animated light sweep */}
            <div
              className="absolute inset-0 rounded-xl
              opacity-0 group-hover:opacity-100
              transition-all duration-700
              bg-linear-to-r from-transparent via-purple-500/10 to-transparent
              bg-size-[200%_100%] bg-left group-hover:bg-right
              pointer-events-none"
            />

            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>

              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full px-3 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-6 overflow-y-auto"
          >
            <div className="flex items-start justify-center min-h-full">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900/95 backdrop-blur-xl 
                  rounded-2xl border border-white/10
                  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
                  w-full max-w-4xl relative"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={handleCloseModal}
                    className="text-white text-3xl font-bold hover:text-purple-500 transition"
                  >
                    &times;
                  </button>
                </div>

                <div className="flex flex-col">
                  <div className="w-full flex justify-center px-4">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                    />
                  </div>

                  <div className="lg:p-8 p-6">
                    <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                      {selectedProject.title}
                    </h3>

                    <p className="text-gray-400 mb-6 lg:text-base text-sm">
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full px-3 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-300 
                          lg:px-6 lg:py-2 px-3 py-2 rounded-xl 
                          lg:text-lg text-sm font-semibold text-center transition"
                      >
                        View Code
                      </a>

                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white 
                          lg:px-6 lg:py-2 px-3 py-2 rounded-xl 
                          lg:text-lg text-sm font-semibold text-center transition"
                      >
                        View Live
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;