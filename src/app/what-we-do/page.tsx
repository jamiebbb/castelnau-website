'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';
import WhatWeDo from '@/components/what-we-do/WhatWeDo';

const WhatWeDoPage = () => {
  return (
    <>
      <PageHero 
        title="What We Do"
        description="Learn about our investment philosophy and approach to value creation"
      />
      <WhatWeDo />
    </>
  );
};

export default WhatWeDoPage;
