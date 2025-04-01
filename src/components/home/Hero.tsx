'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/utils/getImagePath';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/bbc6d732-dfdf-4ade-b448-d507309fcdce.png')] bg-cover bg-center opacity-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/brand/logos/castelnau-logo.png"
              alt="Castelnau Group"
              width={200}
              height={80}
              className="mx-auto"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 animate-fade-in">
            Creating Value with Permanence and Vision
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-slide-up text-white/90">
            A leading investment management company focused on delivering exceptional results through disciplined investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link
              href="/what-we-do"
              className="inline-block bg-white text-castelnau-green px-8 py-3 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 