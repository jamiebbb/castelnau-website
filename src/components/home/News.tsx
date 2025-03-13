'use client';

import React from 'react';
import Link from 'next/link';

const News = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-6">
            Latest News
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Stay updated with our latest news, insights, and market updates.
          </p>
          <Link
            href="/news"
            className="inline-block bg-castelnau-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News; 