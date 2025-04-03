'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import Team from '@/components/who-we-are/Team';

const OurTeamPage = () => {
  return (
    <>
      <PageHero 
        title="Our Team"
        description="Meet the experienced professionals driving Castelnau Group's success"
      />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Team />
        </div>
      </section>
    </>
  );
};

export default OurTeamPage; 