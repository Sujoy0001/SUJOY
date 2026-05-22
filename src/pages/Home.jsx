import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import FaqSection from '../components/FaqSection';
import ContactSection from '../components/ContactSection';
import FeaturedWorks from '../components/ProjectShow';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      <FeaturedWorks />

      {/* 2. Services Section */}
      <ServicesSection />

      {/* 3. Skills Section */}
      <SkillsSection />

      {/* 4. Selected Projects Section */}
      <ProjectsSection />

      {/* 5. Frequently Asked Questions Accordion */}
      <FaqSection />

      {/* 6. Contact CTA Section */}
      <ContactSection />
    </div>
  );
}
