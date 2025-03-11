
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/who-we-are/Hero';
import Story from '@/components/who-we-are/Story';
import Values from '@/components/who-we-are/Values';
import Team from '@/components/who-we-are/Team';

const WhoWeAre = () => {
  const location = useLocation();
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (location.hash) {
        const targetId = location.hash.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          setTimeout(() => {
            const navHeight = 120; // Height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 300);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(scrollToSection, 100);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
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
