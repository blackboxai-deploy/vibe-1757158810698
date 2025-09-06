// Data structures for VEXO Company
export interface Project {
  id: string;
  title: string;
  description: string;
  percentage: number;
  image: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planning';
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'Admin' | 'Founder' | 'Support';
  description: string;
  image: string;
  skills: string[];
  email?: string;
  linkedin?: string;
}

// Projects data
export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'VEXO Platform',
    description: 'Advanced enterprise platform with AI-powered analytics and real-time collaboration features for modern businesses.',
    percentage: 95,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2e472910-bf0e-4e4f-b103-f2726c32dfd0.png',
    technologies: ['Next.js', 'TypeScript', 'AI/ML', 'Real-time Analytics'],
    status: 'completed'
  },
  {
    id: 'project-2',
    title: 'Mobile App Suite',
    description: 'Cross-platform mobile applications with seamless user experience and advanced security features.',
    percentage: 78,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8242c2f2-6a7b-4ff8-b5a8-cf47f7fe19a4.png',
    technologies: ['React Native', 'Flutter', 'Node.js', 'Security'],
    status: 'in-progress'
  },
  {
    id: 'project-3',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure with automated deployment and monitoring systems for enterprise clients.',
    percentage: 88,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8505b30a-b112-4f4e-b0aa-c78bfbea62ec.png',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'DevOps'],
    status: 'completed'
  },
  {
    id: 'project-4',
    title: 'AI Analytics Engine',
    description: 'Machine learning powered analytics engine providing deep insights and predictive analytics for data-driven decisions.',
    percentage: 65,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c18f6427-c592-4459-98ae-5b25c1aa4cd1.png',
    technologies: ['Python', 'TensorFlow', 'Data Science', 'APIs'],
    status: 'in-progress'
  },
  {
    id: 'project-5',
    title: 'Security Framework',
    description: 'Comprehensive security framework with advanced threat detection and automated response systems.',
    percentage: 72,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a55b9e4-e7d7-4a82-9e01-a0f00e9af951.png',
    technologies: ['Cybersecurity', 'Threat Detection', 'Automation', 'Compliance'],
    status: 'in-progress'
  },
  {
    id: 'project-6',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with integrated payment processing and advanced inventory management.',
    percentage: 90,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b423be6c-2d21-44c7-8531-c76886fb1ee7.png',
    technologies: ['React', 'Node.js', 'Payment APIs', 'Inventory'],
    status: 'completed'
  }
];

// Team members data
export const teamMembers: TeamMember[] = [
  // Founders
  {
    id: 'founder-1',
    name: 'Alex Thompson',
    role: 'Founder',
    description: 'Visionary leader with 15+ years in technology innovation. Founded VEXO to revolutionize enterprise solutions through cutting-edge technology.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/73dfd1b7-90d3-47d9-a93a-e04f6594e7d4.png',
    skills: ['Strategic Leadership', 'Technology Vision', 'Business Development', 'Innovation'],
    email: 'alex@vexo.com',
    linkedin: 'linkedin.com/in/alexthompson'
  },
  {
    id: 'founder-2',
    name: 'Sarah Chen',
    role: 'Founder',
    description: 'Technical co-founder and CTO with expertise in scalable architecture and AI systems. Drives technical excellence across all VEXO products.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1f936a6-d769-4b90-bdef-97c0fd1c8cd4.png',
    skills: ['System Architecture', 'AI/ML', 'Team Leadership', 'Technical Strategy'],
    email: 'sarah@vexo.com',
    linkedin: 'linkedin.com/in/sarahchen'
  },
  {
    id: 'founder-3',
    name: 'Michael Rodriguez',
    role: 'Founder',
    description: 'Operations and strategy founder focused on scaling business operations and building world-class teams at VEXO.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/59e7f614-109a-4633-a427-d36978e28005.png',
    skills: ['Operations Management', 'Strategic Planning', 'Team Building', 'Process Optimization'],
    email: 'michael@vexo.com',
    linkedin: 'linkedin.com/in/michaelrodriguez'
  },

  // Admins
  {
    id: 'admin-1',
    name: 'Emily Johnson',
    role: 'Admin',
    description: 'Lead Administrator overseeing project management and ensuring seamless operations across all VEXO departments.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ef05265-42a8-43f7-93fc-40fdb0cf23d7.png',
    skills: ['Project Management', 'Team Coordination', 'Process Management', 'Quality Assurance'],
    email: 'emily@vexo.com'
  },
  {
    id: 'admin-2',
    name: 'David Park',
    role: 'Admin',
    description: 'Technical Administrator managing infrastructure, security protocols, and system maintenance for optimal performance.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5568758-bf97-4359-a50e-bef7ad12dea1.png',
    skills: ['System Administration', 'Infrastructure Management', 'Security', 'DevOps'],
    email: 'david@vexo.com'
  },
  {
    id: 'admin-3',
    name: 'Lisa Wang',
    role: 'Admin',
    description: 'Operations Administrator focused on workflow optimization and resource management to drive efficiency.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c8e752e3-98de-492b-9664-aaaa59c49bc9.png',
    skills: ['Operations Management', 'Resource Planning', 'Workflow Optimization', 'Analytics'],
    email: 'lisa@vexo.com'
  },

  // Support Team
  {
    id: 'support-1',
    name: 'James Wilson',
    role: 'Support',
    description: 'Senior Support Specialist providing technical assistance and ensuring exceptional customer experience.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9eb148e3-2f95-4241-a1a8-389586e7a736.png',
    skills: ['Technical Support', 'Customer Service', 'Troubleshooting', 'Documentation'],
    email: 'james@vexo.com'
  },
  {
    id: 'support-2',
    name: 'Maria Garcia',
    role: 'Support',
    description: 'Customer Success Manager dedicated to helping clients maximize value from VEXO solutions.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b5fb7b8b-5974-41e9-9e9a-5899dc682abf.png',
    skills: ['Customer Success', 'Account Management', 'Solution Consulting', 'Training'],
    email: 'maria@vexo.com'
  },
  {
    id: 'support-3',
    name: 'Robert Kim',
    role: 'Support',
    description: 'Technical Support Engineer specializing in system integration and advanced troubleshooting.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a9f3576c-e46a-4228-b728-bd4a0bce6548.png',
    skills: ['System Integration', 'Technical Troubleshooting', 'API Support', 'Training'],
    email: 'robert@vexo.com'
  },
  {
    id: 'support-4',
    name: 'Anna Kowalski',
    role: 'Support',
    description: 'Support Coordinator managing support workflows and ensuring timely resolution of customer inquiries.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b72a30a2-a653-4762-9ff9-7a76c68eeef3.png',
    skills: ['Support Coordination', 'Workflow Management', 'Quality Assurance', 'Process Improvement'],
    email: 'anna@vexo.com'
  }
];

// Company information
export const companyInfo = {
  name: 'VEXO',
  tagline: 'Innovating Tomorrow, Today',
  description: 'Leading technology company delivering cutting-edge enterprise solutions, AI-powered platforms, and innovative digital experiences that transform businesses and drive growth.',
  founded: '2019',
  headquarters: 'San Francisco, CA',
  employees: '50-100',
  contact: {
    email: 'contact@vexo.com',
    phone: '+1 (555) 123-4567',
    address: '123 Innovation Street, San Francisco, CA 94105'
  },
  social: {
    twitter: 'https://twitter.com/vexocompany',
    linkedin: 'https://linkedin.com/company/vexo',
    github: 'https://github.com/vexocompany'
  }
};

// Navigation links
export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' }
];