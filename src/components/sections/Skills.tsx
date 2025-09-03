import React from 'react';
import ProgressBar from '../ui/ProgressBar';
import { skills } from '../../data/skills';
import { useInView } from '../hooks/useInView';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  
  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            I've worked with a variety of technologies and languages over the years. Here are some of my key skills and proficiency levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <ProgressBar
              key={skill.name}
              name={skill.name}
              percentage={skill.level}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;