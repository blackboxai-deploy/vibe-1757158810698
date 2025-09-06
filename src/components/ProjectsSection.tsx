'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Users, Star } from 'lucide-react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';
import { projects } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const ProjectsSection = () => {
  const stats = [
    {
      icon: Rocket,
      value: '50+',
      label: 'Projects Delivered',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: 'Success Rate',
      color: 'text-green-600'
    },
    {
      icon: Users,
      value: '100+',
      label: 'Happy Clients',
      color: 'text-purple-600'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Client Rating',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <SectionHeading
            title="Our Projects"
            subtitle="Innovative solutions that drive business growth"
            description="Discover our portfolio of cutting-edge projects, each designed to solve complex challenges and deliver exceptional results for our clients."
          />

          {/* Stats Section */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-50 mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life. Our team of experts is ready to deliver innovative solutions tailored to your needs.
              </p>
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started Today
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;