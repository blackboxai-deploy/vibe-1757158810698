'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Calendar } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PercentageScale from './PercentageScale';
import { Project } from '@/lib/data';
import { fadeInUp, cardHover } from '@/lib/animations';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
      default:
        return 'bg-slate-100 text-slate-800 hover:bg-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'in-progress':
        return '🚀';
      case 'planning':
        return '📋';
      default:
        return '⏳';
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="rest"
      whileHover="hover"
      custom={index}
      className="h-full"
    >
      <motion.div variants={cardHover} className="h-full">
        <Card className="h-full bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76a49d80-20e1-48fb-b3c8-b046e266e161.png}+Project+Image`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
              <Badge className={`${getStatusColor(project.status)} font-medium`}>
                <span className="mr-1">{getStatusIcon(project.status)}</span>
                {project.status.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </div>

          <CardHeader className="pb-3">
            <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 flex-1">
            <p className="text-slate-600 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* Progress Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Progress</span>
                <span className="text-sm font-semibold text-slate-900">{project.percentage}%</span>
              </div>
              <PercentageScale 
                percentage={project.percentage} 
                showNumber={false}
              />
            </div>

            {/* Technologies */}
            <div className="space-y-2">
              <span className="text-sm font-medium text-slate-700 flex items-center">
                <Code className="h-4 w-4 mr-1" />
                Technologies
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge 
                    key={techIndex} 
                    variant="secondary" 
                    className="text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center text-xs text-slate-500">
                <Calendar className="h-3 w-3 mr-1" />
                <span>Updated recently</span>
              </div>
              
              <Button 
                size="sm" 
                variant="ghost"
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-2"
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;