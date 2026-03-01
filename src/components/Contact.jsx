import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { IoSendSharp } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const fireSideConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 10,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 10,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
      });
    }, 150);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_w2khj2h",
        "template_07bcku8",
        form.current,
        "SHe0_sB3X40uSwgE8"
      )
      .then(
        () => {
          form.current.reset();
          setLoading(false);
          fireSideConfetti();

          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "light",
          });
        },
        () => {
          setLoading(false);

          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <ToastContainer />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          As a passionate fresher, I’m excited to learn and contribute—let’s connect!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 h-full flex flex-col justify-between"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Let’s Build Something Great 🚀
            </h3>

            <p className="text-gray-400 mb-6">
              I am actively seeking entry-level opportunities where I can apply
              my MERN stack skills and contribute to impactful projects.
            </p>

            <div className="space-y-4 text-gray-300">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-white/10 pb-3">
                <span className="text-sm text-gray-400">Email</span>
                <span className="text-white font-medium break-all">
                  yeolepranav13@gmail.com
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="text-sm text-gray-400">Location</span>
                <span className="text-white font-medium">
                  Pune, India
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 pt-6 text-xl">
            <a
              href="https://www.linkedin.com/in/pranav-yeole-06332932a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/PranavYeole03"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-transform hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10 h-full flex flex-col"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-linear-to-r from-emerald-600 to-emerald-500 py-3 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <ClipLoader size={18} color="#fff" />
                  Sending...
                </>
              ) : (
                <>
                  <IoSendSharp size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;