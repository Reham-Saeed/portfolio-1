import React, { useEffect } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import EducationExperience from './components/sections/EducationExperience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

import './index.css';

function App() {
  // Update document title 
  useEffect(() => {
    document.title = "Reham Saeed | Frontend Developer";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <EducationExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;