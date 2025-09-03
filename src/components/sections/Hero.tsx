import React from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "../hooks/useInView";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 text-white"
    >
      {/* Glowing Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-pink-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl top-40 right-1/3 animate-pulse"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-12"
      >
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block">Hello, I'm</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Reham Saeed
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-6">
            Web Developer
          </h2>

          <p className="text-lg md:text-xl max-w-xl mb-10 text-gray-200">
            From vision to reality — turning ideas into inspiring websites
          </p>

          <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-white font-medium shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-pink-300 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div
            className="relative w-full h-full
               rounded-2xl p-1 
               bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 
               shadow-2xl"
          >
            <img
              src="https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg"
              alt="Sphere Design"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Down */}
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};

export default Hero;
