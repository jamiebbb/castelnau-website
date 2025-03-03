
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/components/Hero';
import WavyDivider from '@/components/WavyDivider';
import ValueProposition from '@/components/ValueProposition';
import GroupSection from '@/components/GroupSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="animate-fade-in min-h-screen flex flex-col">
        <Hero />
        <WavyDivider />
        <ValueProposition />
        <GroupSection />
      </div>
    </MainLayout>
  );
};

export default Index;
