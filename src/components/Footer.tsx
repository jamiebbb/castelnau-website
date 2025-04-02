import React from 'react';
import Link from 'next/link';
import { getPath } from '@/utils/getPath';

const Footer: React.FC = () => {
  return (
    <footer className="bg-castelnau-dark-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sm text-white/80">
              Castelnau Group is a London-listed investment company focused on identifying and investing in high-quality businesses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={getPath('/who-we-are')} className="text-sm text-white/80 hover:text-white">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href={getPath('/what-we-do')} className="text-sm text-white/80 hover:text-white">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href={getPath('/investor-relations')} className="text-sm text-white/80 hover:text-white">
                  Investor Relations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href={getPath('/castelnau-library')} className="text-sm text-white/80 hover:text-white">
                  Castelnau Library
                </Link>
              </li>
              <li>
                <Link href={getPath('/news')} className="text-sm text-white/80 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href={getPath('/graduate-programme')} className="text-sm text-white/80 hover:text-white">
                  Graduate Programme
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-white/80">
                Email: info@castelnaugroup.com
              </li>
              <li className="text-sm text-white/80">
                Phone: +44 (0)20 7129 1234
              </li>
              <li className="text-sm text-white/80">
                Address: 123 London Street, London, UK
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Castelnau Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 