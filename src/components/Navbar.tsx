"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollToSection from '@/hooks/useScrollToSection';
import StockPriceDisplay from './StockPriceDisplay';

const Navbar = () => {
  const pathname = usePathname();
  const { scrollToElement, refreshScroll } = useScrollToSection({ offset: 150 });
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  
  const handleWhoWeAreSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/who-we-are') {
      if (window.location.hash === `#${sectionId}`) {
        refreshScroll();
      } else {
        scrollToElement(sectionId);
      }
    } else {
      window.location.href = `/who-we-are#${sectionId}`;
    }
  };
  
  const handleInvestorSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/investor-relations') {
      if (window.location.hash === `#${sectionId}`) {
        refreshScroll();
      } else {
        scrollToElement(sectionId);
      }
    } else {
      window.location.href = `${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations#${sectionId}`;
    }
  };

  return (
    <header className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="mr-10">
              <Image 
                alt="Castelnau Group" 
                className="h-12 w-auto object-contain" 
                src={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/castelnau-logo.png`}
                width={120}
                height={48}
                priority
                quality={100}
                style={{ minHeight: '48px' }}
              />
            </Link>
            
            <StockPriceDisplay />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/castelnau-library">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Castelnau Library
              </Button>
            </Link>
            <Link href="/sell-your-business">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Looking to Sell your Business
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="transparent" className="text-white hover:text-white text-base px-6 py-2 font-medium border border-white/30 hover:bg-white/10 transition-colors">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div>
        <div className="container mx-auto px-4">
          <nav className="flex py-4 space-x-6">
            <div className="relative">
              <Button 
                variant="transparent" 
                className="text-white hover:text-white text-base px-4 py-2"
                onMouseEnter={() => setWhoWeAreOpen(true)}
                onMouseLeave={() => setWhoWeAreOpen(false)}
              >
                Who We Are <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
              {whoWeAreOpen && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 min-w-[200px] z-50"
                  onMouseEnter={() => setWhoWeAreOpen(true)}
                  onMouseLeave={() => setWhoWeAreOpen(false)}
                >
                  <Link href="/who-we-are" onClick={() => window.scrollTo(0, 0)}>
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Overview
                    </div>
                  </Link>
                  <Link 
                    href="/who-we-are#our-values" 
                    onClick={(e) => handleWhoWeAreSectionClick('our-values', e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Our Values
                    </div>
                  </Link>
                  <Link 
                    href="/who-we-are#our-team" 
                    onClick={(e) => handleWhoWeAreSectionClick('our-team', e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Our Team
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/what-we-do">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                What We Do
              </Button>
            </Link>
            <Link href="/explore-the-group">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Explore the Group
              </Button>
            </Link>
            
            <div className="relative">
              <Button 
                variant="transparent" 
                className="text-white hover:text-white text-base px-4 py-2"
                onMouseEnter={() => setInvestorOpen(true)}
                onMouseLeave={() => setInvestorOpen(false)}
              >
                <Link href={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations`}>
                  Investor Relations <ChevronDown className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              {investorOpen && (
                <div 
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 min-w-[200px] z-50"
                  onMouseEnter={() => setInvestorOpen(true)}
                  onMouseLeave={() => setInvestorOpen(false)}
                >
                  <Link href={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations#share-price`} onClick={(e) => handleInvestorSectionClick('share-price', e)}>
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Share Price
                    </div>
                  </Link>
                  <Link href={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations#regulatory-documents`} onClick={(e) => handleInvestorSectionClick('regulatory-documents', e)}>
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Regulatory Documents
                    </div>
                  </Link>
                  <Link href={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations#factsheets`} onClick={(e) => handleInvestorSectionClick('factsheets', e)}>
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Factsheets
                    </div>
                  </Link>
                  <Link href={`${process.env.NODE_ENV === 'production' ? '/castelnau-website' : ''}/investor-relations#rns`} onClick={(e) => handleInvestorSectionClick('rns', e)}>
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      RNS
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/graduate-programme">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Graduate Programme
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
