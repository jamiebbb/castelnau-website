'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import Team from '@/components/who-we-are/Team';
import Values from '@/components/who-we-are/Values';
import Story from '@/components/who-we-are/Story';

const WhoWeArePage = () => {
  return (
    <>
      <PageHero 
        title="Who We Are"
        description="Meet our team and discover the values that drive our investment approach"
      />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Story />
          <Values />
          <Team />
        </div>
      </section>
    </>
  );
};

export default WhoWeArePage;
