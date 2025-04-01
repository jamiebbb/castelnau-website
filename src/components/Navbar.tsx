"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollToSection from '@/hooks/useScrollToSection';
import StockPriceDisplay from './StockPriceDisplay';
import { getImagePath } from '@/utils/getImagePath';

const Navbar = () => {
  const pathname = usePathname();
  const { scrollToElement, refreshScroll } = useScrollToSection({ offset: 150 });
  
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
      window.location.href = `/investor-relations#${sectionId}`;
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
                src="/brand/logos/castelnau-logo.png"
                width={48}
                height={48}
                priority
                style={{ minHeight: '48px' }}
              />
            </Link>
            
            <StockPriceDisplay />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/news">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                News
              </Button>
            </Link>
            <Link href="/castelnau-library">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Castelnau Library
              </Button>
            </Link>
            <Link href="/graduate-programme">
              <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                Graduate Programme
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="gold" className="text-castelnau-dark-green text-base px-6 py-2 font-medium hover:bg-castelnau-gold/90">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div>
        <div className="container mx-auto px-4">
          <nav className="flex py-4 space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                  Who We Are <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-1">
                <Link href="/who-we-are" onClick={() => window.scrollTo(0, 0)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Overview
                  </DropdownMenuItem>
                </Link>
                <Link 
                  href="/who-we-are#our-values" 
                  onClick={(e) => handleWhoWeAreSectionClick('our-values', e)}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Our Values
                  </DropdownMenuItem>
                </Link>
                <Link 
                  href="/who-we-are#our-team" 
                  onClick={(e) => handleWhoWeAreSectionClick('our-team', e)}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Our Team
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
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
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="transparent" className="text-white hover:text-white text-base px-4 py-2">
                  Investor Relations <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-1">
                <Link href="/investor-relations#share-price" onClick={(e) => handleInvestorSectionClick('share-price', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Share Price
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#regulatory-documents" onClick={(e) => handleInvestorSectionClick('regulatory-documents', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Regulatory Documents
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#factsheets" onClick={(e) => handleInvestorSectionClick('factsheets', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    Factsheets
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#rns" onClick={(e) => handleInvestorSectionClick('rns', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10 text-base py-2">
                    RNS
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
