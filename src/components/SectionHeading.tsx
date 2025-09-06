'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeIn } from '@/lib/animations';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  centered = true,
  className = ""
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {/* Subtitle */}
      <motion.div
        variants={fadeIn}
        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6"
      >
        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
        {subtitle}
      </motion.div>

      {/* Main Title */}
      <motion.h2
        variants={fadeInUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          variants={fadeInUp}
          className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;