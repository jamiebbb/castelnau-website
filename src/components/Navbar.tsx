"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import useScrollToSection from "@/hooks/useScrollToSection";
import StockPriceDisplay from "./StockPriceDisplay";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

const Navbar = () => {
  const pathname = usePathname();
  const { scrollToElement, refreshScroll } = useScrollToSection({
    offset: 150,
  });
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [investorOpen, setInvestorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Refs for managing dropdown timeouts
  const whoWeAreTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const investorTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Helper functions for dropdown hover behavior
  const handleWhoWeAreMouseEnter = () => {
    if (whoWeAreTimeoutRef.current) {
      clearTimeout(whoWeAreTimeoutRef.current);
      whoWeAreTimeoutRef.current = null;
    }
    setWhoWeAreOpen(true);
  };

  const handleWhoWeAreMouseLeave = () => {
    whoWeAreTimeoutRef.current = setTimeout(() => {
      setWhoWeAreOpen(false);
    }, 150); // 150ms delay before closing
  };

  const handleInvestorMouseEnter = () => {
    if (investorTimeoutRef.current) {
      clearTimeout(investorTimeoutRef.current);
      investorTimeoutRef.current = null;
    }
    setInvestorOpen(true);
  };

  const handleInvestorMouseLeave = () => {
    investorTimeoutRef.current = setTimeout(() => {
      setInvestorOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (whoWeAreTimeoutRef.current) {
        clearTimeout(whoWeAreTimeoutRef.current);
      }
      if (investorTimeoutRef.current) {
        clearTimeout(investorTimeoutRef.current);
      }
    };
  }, []);

  const handleWhoWeAreSectionClick = (
    sectionId: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    if (pathname === "/who-we-are") {
      if (window.location.hash === `#${sectionId}`) {
        refreshScroll();
      } else {
        scrollToElement(sectionId);
      }
    } else {
      window.location.href = `${
        process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
      }/who-we-are#${sectionId}`;
    }
  };

  const handleInvestorSectionClick = (
    sectionId: string,
    e: React.MouseEvent
  ) => {
    e.preventDefault();

    if (pathname === "/investor-relations") {
      if (window.location.hash === `#${sectionId}`) {
        refreshScroll();
      } else {
        scrollToElement(sectionId);
      }
    } else {
      window.location.href = `${
        process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
      }/investor-relations#${sectionId}`;
    }
  };

  return (
    <header className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center min-h-[80px]">
          {/* Logo - Top Left */}
          <div className="hidden md:flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                alt="Castelnau Group"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                src={`${
                  process.env.NODE_ENV === "production"
                    ? "/castelnau-website"
                    : ""
                }/brand/logos/castelnau-logo.png`}
                width={200}
                height={96}
                priority
                quality={100}
                style={{ minHeight: "64px" }}
              />
            </Link>
          </div>

          {/* Stock Price Display - Top Right */}
          <div className="hidden md:block">
            <StockPriceDisplay />
          </div>

          {/* Mobile Logo */}
          <div className="md:hidden flex items-center">
            <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <Image
                alt="Castelnau Group"
                className="h-12 w-auto object-contain"
                src={`${
                  process.env.NODE_ENV === "production"
                    ? "/castelnau-website"
                    : ""
                }/brand/logos/castelnau-logo.png`}
                width={150}
                height={48}
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-castelnau-dark-green text-white overflow-y-auto"
              >
                <SheetHeader>
                  <SheetTitle>
                    <VisuallyHidden>Mobile Menu</VisuallyHidden>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8 px-4">
                  <div className="mb-6">
                    <StockPriceDisplay onNavigate={() => setIsMobileMenuOpen(false)} />
                  </div>
                  <Link href="/castelnau-library" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:text-white text-left justify-start"
                    >
                      Castelnau Library
                    </Button>
                  </Link>
                  <Link href="/sell-your-business" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:text-white text-left justify-start"
                    >
                      Looking to Sell your Business
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:text-white text-left justify-start"
                    >
                      Contact us
                    </Button>
                  </Link>
                  <div className="pt-4 border-t border-white/20">
                    <Link href="/who-we-are" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-white hover:text-white text-left justify-start"
                      >
                        Who We Are
                      </Button>
                    </Link>
                    <Link href="/what-we-do" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-white hover:text-white text-left justify-start"
                      >
                        What We Do
                      </Button>
                    </Link>
                    <Link href="/explore-the-group" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-white hover:text-white text-left justify-start"
                      >
                        Explore the Group
                      </Button>
                    </Link>
                    <Link href="/investor-relations" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-white hover:text-white text-left justify-start"
                      >
                        Investor Relations
                      </Button>
                    </Link>
                    <Link href="/media-library" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button
                        variant="ghost"
                        className="w-full text-white hover:text-white text-left justify-start"
                      >
                        Media Library
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Bar */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-center py-4 space-x-6">
            <div className="relative">
              <Link href="/who-we-are">
                <Button
                  variant="transparent"
                  className="text-white hover:text-white text-base px-4 py-2"
                  onMouseEnter={handleWhoWeAreMouseEnter}
                  onMouseLeave={handleWhoWeAreMouseLeave}
                  onClick={() => setWhoWeAreOpen(false)}
                >
                  Who We Are <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </Link>
              {whoWeAreOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 min-w-[200px] z-50"
                  onMouseEnter={handleWhoWeAreMouseEnter}
                  onMouseLeave={handleWhoWeAreMouseLeave}
                >
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
                    }/who-we-are#our-values`}
                    onClick={(e) => handleWhoWeAreSectionClick("our-values", e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Our Values
                    </div>
                  </Link>
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production" ? "/castelnau-website" : ""
                    }/who-we-are#our-team`}
                    onClick={(e) => handleWhoWeAreSectionClick("our-team", e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Our Team
                    </div>
                  </Link>
                  <Link href="/what-we-do">
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      What We Do
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/explore-the-group">
              <Button
                variant="transparent"
                className="text-white hover:text-white text-base px-4 py-2"
              >
                Explore the Group
              </Button>
            </Link>

            <div className="relative">
              <Link href="/investor-relations">
                <Button
                  variant="transparent"
                  className="text-white hover:text-white text-base px-4 py-2"
                  onMouseEnter={handleInvestorMouseEnter}
                  onMouseLeave={handleInvestorMouseLeave}
                  onClick={() => setInvestorOpen(false)}
                >
                  Investor Relations
                  <ChevronDown className="h-4 w-4 ml-1 inline-block" />
                </Button>
              </Link>
              {investorOpen && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 min-w-[200px] z-50"
                  onMouseEnter={handleInvestorMouseEnter}
                  onMouseLeave={handleInvestorMouseLeave}
                >
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production"
                        ? "/castelnau-website"
                        : ""
                    }/investor-relations#share-price`}
                    onClick={(e) =>
                      handleInvestorSectionClick("share-price", e)
                    }
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Share Price
                    </div>
                  </Link>
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production"
                        ? "/castelnau-website"
                        : ""
                    }/investor-relations#regulatory-documents`}
                    onClick={(e) =>
                      handleInvestorSectionClick("regulatory-documents", e)
                    }
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Regulatory Documents
                    </div>
                  </Link>
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production"
                        ? "/castelnau-website"
                        : ""
                    }/investor-relations#factsheets`}
                    onClick={(e) => handleInvestorSectionClick("factsheets", e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Factsheets
                    </div>
                  </Link>
                  <Link
                    href={`${
                      process.env.NODE_ENV === "production"
                        ? "/castelnau-website"
                        : ""
                    }/investor-relations#rns`}
                    onClick={(e) => handleInvestorSectionClick("rns", e)}
                  >
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      RNS
                    </div>
                  </Link>
                  <Link href="/media-library">
                    <div className="px-4 py-2 hover:bg-castelnau-green/10 cursor-pointer text-base">
                      Media Library
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/castelnau-library">
              <Button
                variant="transparent"
                className="text-white hover:text-white text-base px-4 py-2"
              >
                Castelnau Library
              </Button>
            </Link>

            <Link href="/sell-your-business">
              <Button
                variant="transparent"
                className="text-white hover:text-white text-base px-4 py-2"
              >
                Looking to Sell your Business
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="transparent"
                className="text-white hover:text-white text-base px-4 py-2 font-medium border border-white/30 hover:bg-white/10 transition-colors"
              >
                Contact us
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
