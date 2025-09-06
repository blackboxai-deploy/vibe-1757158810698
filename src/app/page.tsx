'use client';

import Navbar from '@/components/Navbar';
import LandingPage from '@/components/LandingPage';
import ProjectsSection from '@/components/ProjectsSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Navbar />
      <LandingPage />
      <ProjectsSection />
      <TeamSection />
      <Footer />
    </main>
  );
}