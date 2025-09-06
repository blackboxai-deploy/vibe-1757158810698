'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Crown, Shield, HeadphonesIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TeamMember as TeamMemberType } from '@/lib/data';
import { fadeInUp, cardHover } from '@/lib/animations';
import Image from 'next/image';

interface TeamMemberProps {
  member: TeamMemberType;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ member, index }) => {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'Founder':
        return Crown;
      case 'Admin':
        return Shield;
      case 'Support':
        return HeadphonesIcon;
      default:
        return Crown;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Founder':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200';
      case 'Admin':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
      case 'Support':
        return 'bg-green-100 text-green-800 hover:bg-green-200';
      default:
        return 'bg-slate-100 text-slate-800 hover:bg-slate-200';
    }
  };

  const RoleIcon = getRoleIcon(member.role);

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
          <CardHeader className="text-center pb-4">
            {/* Member Photo */}
            <div className="relative mx-auto mb-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5cdf9175-bd3f-42f7-b7cd-f6cd712a5eae.png' ').map(n => n[0]).join(''))}`;
                  }}
                />
              </div>
              
              {/* Role Badge */}
              <div className="absolute -bottom-1 -right-1">
                <div className={`inline-flex items-center p-1.5 rounded-full ${getRoleColor(member.role)} border-2 border-white shadow-sm`}>
                  <RoleIcon className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Member Name */}
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {member.name}
            </h3>

            {/* Role Badge */}
            <Badge className={`${getRoleColor(member.role)} font-medium mt-2`}>
              <RoleIcon className="h-3 w-3 mr-1" />
              {member.role}
            </Badge>
          </CardHeader>

          <CardContent className="space-y-4 flex-1">
            {/* Description */}
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
              {member.description}
            </p>

            {/* Skills */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-slate-700 uppercase tracking-wide">
                Expertise
              </span>
              <div className="flex flex-wrap gap-1">
                {member.skills.slice(0, 4).map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
                {member.skills.length > 4 && (
                  <Badge 
                    variant="secondary" 
                    className="text-xs bg-slate-100 text-slate-500"
                  >
                    +{member.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Contact Actions */}
            <div className="flex items-center justify-center space-x-2 pt-4 border-t border-slate-100">
              {member.email && (
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-2"
                  onClick={() => window.open(`mailto:${member.email}`, '_blank')}
                >
                  <Mail className="h-4 w-4" />
                </Button>
              )}
              
              {member.linkedin && (
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="text-slate-600 hover:text-blue-600 hover:bg-blue-50 p-2"
                  onClick={() => window.open(member.linkedin, '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default TeamMember;