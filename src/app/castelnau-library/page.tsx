'use client';

import React from 'react';
import { PageHero } from '@/components/ui/page-hero';
import CastelnauLibrary from '@/components/castelnau-library/CastelnauLibrary';

const CastelnauLibraryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green">
      <PageHero 
        title="Castelnau Library"
        description="Explore our curated collection of books and resources that have shaped our investment philosophy"
        transparentBackground={true}
      />
      <CastelnauLibrary />
    </div>
  );
};

export default CastelnauLibraryPage;
