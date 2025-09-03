import React from "react";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const About: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div
            className={`md:w-5/12 mb-10 md:mb-0 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            } transition-all duration-1000`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-500 rounded-lg"></div>
              <img
                src="https://img.freepik.com/premium-photo/person-coding-project-laptop_1079150-36836.jpg"
                alt="reham-saeed"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>
          </div>

          <div
            className={`md:w-7/12 md:pl-12 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } transition-all duration-1000 delay-300`}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="h-1 w-20 bg-indigo-600 mb-6"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              Hi, I’m Reham — a passionate Web Developer who believes every idea
              deserves to come to life in the most creative and interactive way.
              I understand how frustrating it is to have a website that feels
              outdated, loads slowly, or fails to turn visitors into customers.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              That’s why I build modern, responsive, and user-friendly websites
              that not only look great but also perform flawlessly. By taking
              the time to truly understand each business and its goals, I make
              sure every website I create delivers real value and impact.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              For me, web development isn’t just about writing code — it’s about
              solving problems, supporting business growth, and transforming
              ideas into inspiring digital experiences.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://github.com/Reham-Saeed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                <Github size={20} className="mr-2" />
                Github
              </a>
              <a
                href="https://www.linkedin.com/in/reham-saeed1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors duration-300"
              >
                <Mail size={20} className="mr-2" />
                Contact Me
              </a>
            </div>

            <a
              href="https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
