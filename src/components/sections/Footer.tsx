import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#hero" className="text-xl font-bold">Portfolio</a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-gray-400 text-sm md:mr-4 mb-2 md:mb-0">
              © {currentYear} Reham Saeed. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;