
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
  // Use our custom hook with a slightly larger offset for better positioning
  useScrollToSection({ offset: 150 });

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
