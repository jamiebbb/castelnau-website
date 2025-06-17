'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import News from '@/components/news/News';

const NewsPage = () => {
  return (
    <>
      <PageHero 
        title="Latest News"
        description="Stay updated with the latest news and developments from Castelnau Group"
      />
      <News />
    </>
  );
};

export default NewsPage;
