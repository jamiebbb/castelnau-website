'use client';

import React from 'react';

interface PageHeroProps {
  title: string;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, description }) => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-castelnau-green to-castelnau-blue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero; 