"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  description?: string;
  showButtons?: boolean;
  waveColor?: string;
}

const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  showButtons = false,
  waveColor = "#FFFFFF",
}) => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green"></div>
      <div className="absolute inset-0 bg-[url('/brand/logos/castelnau-logo.png')] bg-repeat opacity-5"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-12 sm:py-16 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
            {title}
          </h1>
          {description && (
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              {description}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-castelnau-gold text-white hover:bg-castelnau-gold/90 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/explore-the-group">
                <Button
                  className="bg-castelnau-light-green text-white hover:bg-castelnau-light-green/90 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      
      {/* Wave pattern */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden -mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 150"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill={waveColor}
            fillOpacity="1"
            d="M0,96L80,90C160,84,320,72,480,78C640,84,800,108,960,114C1120,120,1280,96,1360,84L1440,72L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
