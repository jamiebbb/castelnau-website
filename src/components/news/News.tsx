'use client';

import React from 'react';

const News = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-8">
            Latest Updates
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Keep up to date with our latest news, market insights, and company updates.
          </p>
          {/* News items will be added here */}
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
                Market Update: Q1 2024
              </h3>
              <p className="text-gray-600 mb-4">
                March 15, 2024
              </p>
              <p className="text-gray-700">
                Our latest market insights and performance updates for the first quarter of 2024.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">
                Investment Strategy Review
              </h3>
              <p className="text-gray-600 mb-4">
                March 1, 2024
              </p>
              <p className="text-gray-700">
                An overview of our current investment strategy and market positioning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 