import React from "react";
import ContactForm from "../ui/ContactForm";
import { MapPin, Phone, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="contact" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`text-center mb-16 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-700`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? Feel free
            to contact me. I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            } transition-all duration-1000`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <MapPin className="text-indigo-600" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">
                    Location
                  </h4>
                  <p className="text-gray-600 mt-1">Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <Mail className="text-indigo-600" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Email</h4>
                  <a
                    href="mailto:reham.elfayoumi@gmail.com"
                    className="text-indigo-600 hover:text-indigo-800 mt-1 inline-block"
                  >
                    reham.elfayoumi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                  <Phone className="text-indigo-600" size={20} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                  <a
                    href="tel:+14155555555"
                    className="text-indigo-600 hover:text-indigo-800 mt-1 inline-block"
                  >
                    01000183566
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium text-gray-800 mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Reham-Saeed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/reham-saeed-6b8102329/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 p-3 rounded-full transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            } transition-all duration-1000 delay-300`}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Me a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
