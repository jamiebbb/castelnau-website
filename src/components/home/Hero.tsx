'use client';

import React from 'react';
import Link from 'next/link';
import Wave from '@/components/ui/wave';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green text-white">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/bbc6d732-dfdf-4ade-b448-d507309fcdce.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
          Welcome to Castelnau
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-slide-up">
          A leading investment management company focused on delivering exceptional results for our clients.
        </p>
        <Link
          href="/what-we-do"
          className="inline-block bg-white text-castelnau-green px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors animate-fade-in"
        >
          Learn More
        </Link>
      </div>
      <Wave 
        fillColor="#FFFFFF" 
        path="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        className="animate-wave"
      />
    </section>
  );
};

export default Hero; 