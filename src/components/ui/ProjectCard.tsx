import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import { useInView } from '../hooks/useInView';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} 
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            <ExternalLink size={16} className="mr-1" /> Live Demo
          </a>
          
          {project.codeLink && (
            <a 
              href={project.codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-300"
            >
              <Github size={16} className="mr-1" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;