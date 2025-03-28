'use client';

import React from 'react';
import { PageHero } from '@/components/ui/page-hero';
import CastelnauLibrary from '@/components/castelnau-library/CastelnauLibrary';

const CastelnauLibraryPage = () => {
  return (
    <>
      <PageHero 
        title="Castelnau Library"
        description="Explore our curated collection of books and resources that have shaped our investment philosophy"
      />
      <CastelnauLibrary />
    </>
  );
};

export default CastelnauLibraryPage;
