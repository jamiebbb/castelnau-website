import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Castelnau Group</h3>
            <p className="text-sm text-gray-400">
              Investing in exceptional businesses for the long term.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Contact us:</p>
              <a href="mailto:info@castelnaugroup.com" className="text-sm text-gray-400 hover:text-white">
                info@castelnaugroup.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/explore-the-group" className="text-sm text-gray-400 hover:text-white">Explore The Group</Link>
              </li>
              <li>
                <Link href="/investors" className="text-sm text-gray-400 hover:text-white">Investors</Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">About</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-sm text-gray-400 hover:text-white">Terms of Use</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-sm text-gray-400 hover:text-white">Cookie Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for updates and insights.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Castelnau Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/castelnau-group-ltd/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 