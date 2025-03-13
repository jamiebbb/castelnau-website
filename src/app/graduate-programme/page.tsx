'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import GraduateProgramme from '@/components/graduate-programme/GraduateProgramme';

const GraduateProgrammePage = () => {
  return (
    <>
      <PageHero 
        title="Graduate Programme"
        description="Join our team and start your career in investment management"
      />
      <GraduateProgramme />
    </>
  );
};

export default GraduateProgrammePage;
