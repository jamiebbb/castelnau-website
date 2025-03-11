
import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    // Check if we're already on the Who We Are page
    if (location.pathname === '/who-we-are') {
      const element = document.getElementById(sectionId);
      if (element) {
        // Set the hash in the URL without causing a page jump
        window.history.pushState(null, '', `#${sectionId}`);
        
        // Smooth scroll to the element with proper offset
        const navHeight = 120; // Adjust based on navbar height
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" className="mr-10">
              <img 
                alt="Castelnau Group" 
                className="h-16" 
                src="/lovable-uploads/0943dd4e-c9fa-42ff-ac4a-fc4435caa10e.png"
                loading="eager"
                fetchPriority="high"
              />
            </NavLink>
            
            <div className="flex items-center space-x-8">
              <div className="text-white">
                <p className="flex items-center text-lg font-serif">
                  <span className="mr-2 text-castelnau-cream/90">Share price:</span> 
                  <strong className="font-serif">0.92</strong>
                </p>
                <p className="text-xs italic text-white/80">Updated: 10/03/2025</p>
              </div>
              
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
            <NavLink to="/news" className={({ isActive }) => 
              `transition-colors ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`
            }>
              <Button variant="transparent" className="font-medium">
                News
              </Button>
            </NavLink>
            <NavLink to="/castelnau-library" className={({ isActive }) => 
              `transition-colors ${isActive ? 'opacity-100' : 'opacity-90 hover:opacity-100'}`
            }>
              <Button variant="transparent" className="font-medium">
                Castelnau Library
              </Button>
            </NavLink>
            <Button variant="primary" size="lg" className="font-medium tracking-wide">
              Contact us
            </Button>
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
                <Link to="/who-we-are" onClick={() => window.scrollTo(0, 0)}>
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Overview
                  </DropdownMenuItem>
                </Link>
                <Link 
                  to="/who-we-are#our-values" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/who-we-are') {
                      scrollToSection('our-values');
                    } else {
                      window.location.href = '/who-we-are#our-values';
                    }
                  }}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Our Values
                  </DropdownMenuItem>
                </Link>
                <Link 
                  to="/who-we-are#our-team" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname === '/who-we-are') {
                      scrollToSection('our-team');
                    } else {
                      window.location.href = '/who-we-are#our-team';
                    }
                  }}
                >
                  <DropdownMenuItem className="cursor-pointer hover:bg-castelnau-green/10">
                    Our Team
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <NavLink to="/what-we-do">
              <Button variant="transparent" className="font-medium">
                What We Do
              </Button>
            </NavLink>
            <NavLink to="/explore-the-group">
              <Button variant="transparent" className="font-medium">
                Explore the Group
              </Button>
            </NavLink>
            <NavLink to="/investor-relations">
              <Button variant="transparent" className="font-medium">
                Investor Relations
              </Button>
            </NavLink>
            <NavLink to="/graduate-programme">
              <Button variant="transparent" className="font-medium">
                Graduate Programme
              </Button>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
