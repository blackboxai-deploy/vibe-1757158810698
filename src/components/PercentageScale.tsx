'use client';

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { progressBarAnimation } from '@/lib/animations';

interface PercentageScaleProps {
  percentage: number;
  label?: string;
  className?: string;
  showNumber?: boolean;
}

const PercentageScale: React.FC<PercentageScaleProps> = ({ 
  percentage, 
  label, 
  className = "",
  showNumber = true 
}) => {
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayPercentage(prev => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 15);
        return () => clearInterval(interval);
      }, 200);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isInView, percentage]);

  const getColorClass = (percent: number) => {
    if (percent >= 90) return 'from-green-500 to-emerald-500';
    if (percent >= 75) return 'from-blue-500 to-cyan-500';
    if (percent >= 50) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getStatusText = (percent: number) => {
    if (percent >= 90) return 'Completed';
    if (percent >= 75) return 'Near Completion';
    if (percent >= 50) return 'In Progress';
    return 'Getting Started';
  };

  return (
    <div ref={ref} className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">{label}</span>
          {showNumber && (
            <span className="text-sm font-semibold text-slate-900">
              {displayPercentage}%
            </span>
          )}
        </div>
      )}
      
      <div className="relative">
        {/* Background Bar */}
        <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
          {/* Progress Bar */}
          <motion.div
            className={`h-full bg-gradient-to-r ${getColorClass(percentage)} relative rounded-full`}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={progressBarAnimation}
            custom={percentage}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
          </motion.div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-between items-center mt-2">
          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            percentage >= 90 
              ? 'bg-green-100 text-green-800' 
              : percentage >= 75 
              ? 'bg-blue-100 text-blue-800'
              : percentage >= 50 
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-1 ${
              percentage >= 90 
                ? 'bg-green-500' 
                : percentage >= 75 
                ? 'bg-blue-500'
                : percentage >= 50 
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}></div>
            {getStatusText(percentage)}
          </span>
          
          {!showNumber && (
            <span className="text-xs font-semibold text-slate-600">
              {displayPercentage}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PercentageScale;