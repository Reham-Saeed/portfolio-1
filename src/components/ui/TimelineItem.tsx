import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TimelineItem as TimelineItemType } from '../../types';
import { useInView } from '../hooks/useInView';

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const isEven = index % 2 === 0;
  
  return (
    <div 
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      } ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className={`order-1 w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
        <p className="text-sm font-medium text-indigo-600 mb-1">{item.period}</p>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.title}</h3>
        <h4 className="text-base font-medium text-gray-600 mb-2">{item.organization}</h4>
        <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
      </div>
      
      <div className="z-20 flex items-center order-1 shadow-xl w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
        {item.type === 'education' ? (
          <GraduationCap className="mx-auto text-white" size={18} />
        ) : (
          <Briefcase className="mx-auto text-white" size={18} />
        )}
      </div>
      
      <div className="order-1 w-5/12"></div>
    </div>
  );
};

export default TimelineItem;