import React, { useState } from 'react';
import TimelineItem from '../ui/TimelineItem';
import { timelineItems } from '../../data/timeline';
import { useInView } from '../hooks/useInView';

const EducationExperience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const filteredItems = timelineItems.filter(item => 
    activeTab === 'all' || item.type === activeTab
  );
  
  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className={`text-center mb-16 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-700`}>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Education & Experience</h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            My professional journey and educational background that have shaped my career.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium rounded-l-lg ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-200 focus:z-10 focus:outline-none transition-colors duration-300`}
              onClick={() => setActiveTab('all')}
            >
              All
            </button>
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium ${
                activeTab === 'experience'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-200 focus:z-10 focus:outline-none transition-colors duration-300`}
              onClick={() => setActiveTab('experience')}
            >
              Experience
            </button>
            <button
              type="button"
              className={`py-2 px-4 text-sm font-medium rounded-r-lg ${
                activeTab === 'education'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-200 focus:z-10 focus:outline-none transition-colors duration-300`}
              onClick={() => setActiveTab('education')}
            >
              Education
            </button>
          </div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 z-10"></div>
          
          {/* Timeline items */}
          <div className="relative z-20">
            {filteredItems.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;