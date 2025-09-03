import React, { useEffect, useState } from 'react';
import { useInView } from '../hooks/useInView';

interface ProgressBarProps {
  name: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setWidth(percentage);
    }
  }, [inView, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <span className="text-sm font-semibold text-indigo-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;