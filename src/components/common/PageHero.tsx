'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="relative bg-castelnau-green py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
          {title}
        </h1>
        <div className="h-1 bg-white w-48 md:w-72 mb-8"></div>
        {description && (
          <p className="text-white text-lg max-w-2xl">
            {description}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero; 