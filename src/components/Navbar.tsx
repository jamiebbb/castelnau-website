
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
      // Check if we're clicking the same hash that's already in the URL
      if (window.location.hash === `#${sectionId}`) {
        // We need to force a re-scroll
        refreshScroll();
      } else {
        // Different section, just scroll to it
        scrollToElement(sectionId);
      }
    } else {
      // Navigate to the page with the hash
      window.location.href = `/who-we-are#${sectionId}`;
    }
  };
  
  const handleInvestorSectionClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/investor-relations') {
      // Check if we're clicking the same hash that's already in the URL
      if (window.location.hash === `#${sectionId}`) {
        // We need to force a re-scroll
        refreshScroll();
      } else {
        // Different section, just scroll to it
        scrollToElement(sectionId);
      }
    } else {
      // Navigate to the page with the hash
      window.location.href = `/investor-relations#${sectionId}`;
    }
  };

  return (
    <header className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="mr-10">
              <img 
                alt="Castelnau Group" 
                className="h-16" 
                src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
                loading="eager"
              />
            </Link>
            
            <div className="flex items-center space-x-8">
              <StockPriceDisplay />
              
              <div className="text-white">
                <p className="flex items-center text-lg font-serif">
                  <span className="mr-2 text-castelnau-cream/90">NAV price:</span> 
                  <strong className="font-serif">1.01</strong>
                </p>
                <p className="text-xs italic text-white/80">Updated: 28/02/2025</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link href="/news" className={`transition-colors ${pathname === '/news' ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>
              <Button variant="transparent" className="font-medium">
                News
              </Button>
            </Link>
            <Link href="/castelnau-library" className={`transition-colors ${pathname === '/castelnau-library' ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`}>
              <Button variant="transparent" className="font-medium">
                Castelnau Library
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="font-medium tracking-wide">
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
                <Button variant="transparent" className="font-medium">
                  Who We Are <ChevronDown className="h-4 w-4" />
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
              <Button variant="transparent" className="font-medium">
                What We Do
              </Button>
            </Link>
            <Link href="/explore-the-group">
              <Button variant="transparent" className="font-medium">
                Explore the Group
              </Button>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="transparent" className="font-medium">
                  Investor Relations <ChevronDown className="h-4 w-4" />
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
            
            <Link href="/graduate-programme">
              <Button variant="transparent" className="font-medium">
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
