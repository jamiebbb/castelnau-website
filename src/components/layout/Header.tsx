'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-serif font-bold text-castelnau-green">
            Castelnau
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/who-we-are" className="text-gray-700 hover:text-castelnau-green transition-colors">
              Who We Are
            </Link>
            <Link href="/what-we-do" className="text-gray-700 hover:text-castelnau-green transition-colors">
              What We Do
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-castelnau-green transition-colors">
              News
            </Link>
            <Link href="/investor-relations" className="text-gray-700 hover:text-castelnau-green transition-colors">
              Investor Relations
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-castelnau-green transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-castelnau-green transition-colors"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/who-we-are" className="text-gray-700 hover:text-castelnau-green transition-colors">
                Who We Are
              </Link>
              <Link href="/what-we-do" className="text-gray-700 hover:text-castelnau-green transition-colors">
                What We Do
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-castelnau-green transition-colors">
                News
              </Link>
              <Link href="/investor-relations" className="text-gray-700 hover:text-castelnau-green transition-colors">
                Investor Relations
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-castelnau-green transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header; 