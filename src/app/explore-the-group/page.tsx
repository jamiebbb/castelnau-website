'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import ExploreTheGroup from '@/components/explore-the-group/ExploreTheGroup';

const ExploreTheGroupPage = () => {
  return (
    <>
      <PageHero 
        title="Explore the Group"
        description="Discover our portfolio companies and their contributions to our investment strategy"
      />
      <ExploreTheGroup />
    </>
  );
};

export default ExploreTheGroupPage;
