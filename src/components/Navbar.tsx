"use client";

import React from 'react';
import Link from 'next/link';
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
              <img 
                alt="Castelnau Group" 
                className="h-12 w-auto object-contain" 
                src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png?v=2"
                loading="eager"
                style={{ minHeight: '48px' }}
              />
            </Link>
            
            <StockPriceDisplay />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/news">
              <Button variant="transparent" className="text-white hover:text-white">
                News
              </Button>
            </Link>
            <Link href="/castelnau-library">
              <Button variant="transparent" className="text-white hover:text-white">
                Castelnau Library
              </Button>
            </Link>
            <Link href="/graduate-programme">
              <Button variant="transparent" className="text-white hover:text-white">
                Graduate Programme
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="gold" className="text-castelnau-dark-green">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4">
          <nav className="flex py-5 space-x-10">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="transparent" className="text-white hover:text-white">
                  Who We Are <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-1">
                <Link href="/who-we-are" onClick={() => window.scrollTo(0, 0)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Overview
                  </DropdownMenuItem>
                </Link>
                <Link 
                  href="/who-we-are#our-values" 
                  onClick={(e) => handleWhoWeAreSectionClick('our-values', e)}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Our Values
                  </DropdownMenuItem>
                </Link>
                <Link 
                  href="/who-we-are#our-team" 
                  onClick={(e) => handleWhoWeAreSectionClick('our-team', e)}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Our Team
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/what-we-do">
              <Button variant="transparent" className="text-white hover:text-white">
                What We Do
              </Button>
            </Link>
            <Link href="/explore-the-group">
              <Button variant="transparent" className="text-white hover:text-white">
                Explore the Group
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="transparent" className="text-white hover:text-white">
                  Investor Relations <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md mt-1">
                <Link href="/investor-relations#share-price" onClick={(e) => handleInvestorSectionClick('share-price', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Share Price
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#regulatory-documents" onClick={(e) => handleInvestorSectionClick('regulatory-documents', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Regulatory Documents
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#factsheets" onClick={(e) => handleInvestorSectionClick('factsheets', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Factsheets
                  </DropdownMenuItem>
                </Link>
                <Link href="/investor-relations#rns" onClick={(e) => handleInvestorSectionClick('rns', e)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
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
