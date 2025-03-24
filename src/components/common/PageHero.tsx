'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="relative bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green py-20">
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
      
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 150" 
          className="w-full h-auto"
        >
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,150L1392,150C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero; 