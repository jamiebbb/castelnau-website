'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-castelnau-green to-castelnau-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
          Welcome to Castelnau
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          A leading investment management company focused on delivering exceptional results for our clients.
        </p>
        <Link
          href="/what-we-do"
          className="inline-block bg-white text-castelnau-green px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Hero; 