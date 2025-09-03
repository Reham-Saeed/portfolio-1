import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';
import { useInView } from '../hooks/useInView';

const Projects: React.FC = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length));
  };
  
  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Projects</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development, focused on solving specific problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;