'use client';

import React from 'react';
import PageHero from '@/components/common/PageHero';

const WhatWeDo = () => {
  return (
    <>
      <PageHero 
        title="What We Do"
        description="Our investment approach and services"
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
              Our Investment Approach
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Castelnau, we employ a disciplined and research-driven investment approach that focuses on identifying high-quality investment opportunities across global markets.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our investment philosophy is built on three core principles:
            </p>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-4">
              <li>Rigorous fundamental analysis</li>
              <li>Long-term value creation</li>
              <li>Risk management and capital preservation</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo; 