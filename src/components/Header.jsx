import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      px-[7vw] lg:px-[20vw]
      ${
        scrolled
          ? "bg-white/20 backdrop-blur-lg shadow-[0_4px_20px_rgba(130,69,236,0.15)]"
          : "bg-transparent"
      }`}
    >
      {/* Navbar Content */}
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">Pranav Yeole</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`hover:text-[#8245ec] transition-colors         ${
                    activeSection === item.id
                      ? "text-white"
                      : scrolled
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/PranavYeole03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/pranav-yeole-06332932a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {open ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5
        bg-white/80 backdrop-blur-lg rounded-lg shadow-lg md:hidden"
        >
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`hover:text-purple-400 transition-colors ${
                    activeSection === item.id
                      ? "text-purple-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/PranavYeole03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/pranav-yeole-06332932a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
