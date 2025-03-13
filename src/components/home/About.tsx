'use client';

import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-castelnau-green mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Castelnau is a dynamic investment management company that combines traditional values with innovative approaches to deliver superior returns for our clients.
          </p>
          <Link
            href="/who-we-are"
            className="inline-block bg-castelnau-green text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About; 