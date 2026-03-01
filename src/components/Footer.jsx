import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="container mx-auto text-center">

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-blue-600"
        >
          Pranav Yeole
        </motion.h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Project", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="relative text-sm sm:text-base group"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mt-6"
        >
          <a
            href="https://www.linkedin.com/in/pranav-yeole-06332932a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className="text-sm text-zinc-400 mt-6 hover:text-white transition-colors">
          © {currentYear} Pranav Yeole. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;