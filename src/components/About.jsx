import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/WebsiteLogo.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 pt-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Pranav Yeole
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  "Full-Stack Developer (MERN)",
                  "React Developer",
                  "Web Developer",
                  "Project-Based Learner",
                  "Problem Solver",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-6 leading-relaxed">
            I am an aspiring Full-Stack Developer (MERN) focused on learning
            through hands-on project development. I enjoy solving problems,
            building interactive user interfaces, and developing reliable
            backend systems.
          </p>

          <a
            href="https://drive.google.com/file/d/1HjTXF6ICZS6tY1ye98VlU0lVcIzRtwa1/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold
                       transition-transform duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 40px rgba(130,69,236,0.6)",
            }}
          >
            RESUME
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72
                       border-4 border-gray-400 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Pranav Yeole"
              className="w-full h-full object-cover
                         drop-shadow-[0_10px_25px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
