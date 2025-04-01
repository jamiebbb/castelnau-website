"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  description?: string;
  showButtons?: boolean;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  description,
  showButtons = false 
}) => {
  return (
    <section className="relative page-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green"></div>
      <div className="absolute inset-0 bg-[url('/castelnau-logo.png')] bg-repeat opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-24 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
              {description}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button className="bg-castelnau-gold text-white hover:bg-castelnau-gold/90">
                  Contact Us
                </Button>
              </Link>
              <Link href="/explore-the-group">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>
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
            d="M0,96L80,90C160,84,320,72,480,78C640,84,800,108,960,114C1120,120,1280,96,1360,84L1440,72L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero; 