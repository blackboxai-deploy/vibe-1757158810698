'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield, HeadphonesIcon, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TeamMember from './TeamMember';
import SectionHeading from './SectionHeading';
import { teamMembers } from '@/lib/data';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const TeamSection = () => {
  const [filter, setFilter] = useState<'All' | 'Founder' | 'Admin' | 'Support'>('All');

  const filterButtons = [
    { key: 'All', label: 'All Team', icon: Filter, count: teamMembers.length },
    { key: 'Founder', label: 'Founders', icon: Crown, count: teamMembers.filter(m => m.role === 'Founder').length },
    { key: 'Admin', label: 'Admins', icon: Shield, count: teamMembers.filter(m => m.role === 'Admin').length },
    { key: 'Support', label: 'Support', icon: HeadphonesIcon, count: teamMembers.filter(m => m.role === 'Support').length }
  ] as const;

  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === filter);

  const getFilterButtonStyle = (buttonKey: string) => {
    return filter === buttonKey
      ? 'bg-blue-600 text-white shadow-lg'
      : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-600 border border-slate-200';
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <SectionHeading
            title="Meet Our Team"
            subtitle="The people behind VEXO's success"
            description="Our diverse team of founders, administrators, and support specialists work together to deliver exceptional results and drive innovation in everything we do."
          />

          {/* Filter Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {filterButtons.map((filterButton) => {
              const IconComponent = filterButton.icon;
              return (
                <Button
                  key={filterButton.key}
                  onClick={() => setFilter(filterButton.key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${getFilterButtonStyle(filterButton.key)}`}
                  variant="ghost"
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{filterButton.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    filter === filterButton.key
                      ? 'bg-white/20 text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {filterButton.count}
                  </span>
                </Button>
              );
            })}
          </motion.div>

          {/* Team Members Grid */}
          <motion.div
            key={filter} // Re-trigger animation when filter changes
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredMembers.map((member, index) => (
              <TeamMember
                key={`${filter}-${member.id}`}
                member={member}
                index={index}
              />
            ))}
          </motion.div>

          {/* Team Stats */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 bg-gradient-to-r from-slate-100 to-blue-50 rounded-3xl p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {teamMembers.filter(m => m.role === 'Founder').length}
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <Crown className="h-4 w-4 mr-1 text-purple-600" />
                  Visionary Founders
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {teamMembers.filter(m => m.role === 'Admin').length}
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <Shield className="h-4 w-4 mr-1 text-blue-600" />
                  Expert Administrators
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {teamMembers.filter(m => m.role === 'Support').length}
                </div>
                <div className="text-slate-600 font-medium flex items-center justify-center">
                  <HeadphonesIcon className="h-4 w-4 mr-1 text-green-600" />
                  Support Specialists
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-lg text-slate-700 font-medium">
                Together, we're building the future of technology
              </p>
              <p className="text-slate-600 mt-2">
                Join our growing team and make an impact on tomorrow's innovations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;