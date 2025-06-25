import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-castelnau-dark-green via-castelnau-green to-castelnau-light-green text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="https://jamiebbb.github.io/castelnau-website/brand/logos/castelnau-logo.png"
                alt="Castelnau Group"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-green-100">
              Investing in exceptional businesses for the long term.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-green-100">Contact us:</p>
              <a href="mailto:info@castelnaugroup.com" className="text-sm text-green-100 hover:text-white transition-colors">
                info@castelnaugroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-green-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-sm text-green-100 hover:text-white transition-colors">What We Do</Link>
              </li>
              <li>
                <Link href="/explore-the-group" className="text-sm text-green-100 hover:text-white transition-colors">Explore The Group</Link>
              </li>
              <li>
                <Link href="/investor-relations" className="text-sm text-green-100 hover:text-white transition-colors">Investor Relations</Link>
              </li>
              <li>
                <Link href="/who-we-are" className="text-sm text-green-100 hover:text-white transition-colors">Who We Are</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-conditions" className="text-sm text-green-100 hover:text-white transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy-cookie-notice" className="text-sm text-green-100 hover:text-white transition-colors">Privacy & Cookie Notice</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-green-100">
                80-82 Glentham Road<br />
                London, SW13 9JJ
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/castelnau-group-ltd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-green-100 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-green-100">
              © {new Date().getFullYear()} Castelnau Group Limited. All rights reserved.
            </p>
            <p className="text-xs text-green-200">
              Registered in Guernsey | Company Registration Number: 65739
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 