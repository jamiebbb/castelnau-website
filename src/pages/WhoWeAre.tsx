
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/who-we-are/Hero';
import Story from '@/components/who-we-are/Story';
import Values from '@/components/who-we-are/Values';
import Team from '@/components/who-we-are/Team';
import useScrollToSection from '@/hooks/useScrollToSection';
import { useLocation } from 'react-router-dom';

const WhoWeAre = () => {
  const location = useLocation();
  // Use our custom hook with a larger offset for better positioning
  useScrollToSection({ offset: 150, delay: 500 });

  // Add an additional manual scroll handler for direct access
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure everything is loaded
      const timer = setTimeout(() => {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - 150,
            behavior: 'smooth'
          });
        }
      }, 700);
      
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <MainLayout>
      <Hero />
      <section className="page-content">
        <div className="container mx-auto px-4">
          <Story />
          <Values />
          <Team />
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoWeAre;
