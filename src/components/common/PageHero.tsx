'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="relative page-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3503b171-9516-43a5-b44c-9af899c25e41.png')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="page-title text-white">
          {title}
        </h1>
        <div className="h-1 bg-white w-48 md:w-72 mb-8"></div>
        {description && (
          <p className="text-white text-lg max-w-2xl mb-16">
            {description}
          </p>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 150" 
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero; 