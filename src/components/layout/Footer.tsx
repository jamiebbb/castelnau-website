'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Castelnau</h3>
            <p className="text-gray-400">
              A dynamic investment management company focused on long-term value creation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/who-we-are" className="text-gray-400 hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-gray-400 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Investor Relations */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Investor Relations</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/investor-relations" className="text-gray-400 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/investor-relations#financials" className="text-gray-400 hover:text-white transition-colors">
                  Financials
                </Link>
              </li>
              <li>
                <Link href="/investor-relations#documents" className="text-gray-400 hover:text-white transition-colors">
                  Documents
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="mailto:info@castelnau.com" className="hover:text-white transition-colors">
                  info@castelnau.com
                </a>
              </li>
              <li className="text-gray-400">
                <a href="tel:+44123456789" className="hover:text-white transition-colors">
                  +44 123 456 789
                </a>
              </li>
              <li className="text-gray-400">
                London, United Kingdom
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Castelnau. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 