'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  ArrowUp,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { companyInfo, navigationLinks } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: companyInfo.social.twitter, color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, url: companyInfo.social.linkedin, color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: Github, url: companyInfo.social.github, color: 'hover:text-slate-600' }
  ];

  const quickLinks = [
    ...navigationLinks,
    { name: 'About Us', href: '#home' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent"></div>
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
          className="py-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {companyInfo.name}
                </span>
              </div>

              {/* Tagline & Description */}
              <p className="text-xl font-semibold text-blue-100 mb-4">
                {companyInfo.tagline}
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                {companyInfo.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <a 
                    href={`mailto:${companyInfo.contact.email}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {companyInfo.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a 
                    href={`tel:${companyInfo.contact.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>{companyInfo.contact.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-slate-800 rounded-lg text-slate-300 ${social.color} transition-all duration-200 hover:scale-110`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-sm text-slate-300">
                  Stay updated with our latest projects and innovations
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
                  />
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={fadeInUp}
            className="border-t border-slate-800 mt-12 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
                <span>© {currentYear} {companyInfo.name}. All rights reserved.</span>
                <span className="flex items-center">
                  Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by the VEXO team
                </span>
              </div>

              {/* Scroll to Top */}
              <Button
                onClick={scrollToTop}
                variant="ghost"
                className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all duration-200"
              >
                <ArrowUp className="h-5 w-5 mr-2" />
                Back to Top
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;