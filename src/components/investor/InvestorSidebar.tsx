'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import useScrollToSection from '@/hooks/useScrollToSection';

const InvestorSidebar: React.FC = () => {
  const pathname = usePathname();
  const { scrollToElement, refreshScroll } = useScrollToSection({ offset: 120 });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Check if we're already on the investor-relations page
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
    <div>
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold text-castelnau-green mb-4">Investor Contacts</h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Investor Relations</p>
            <p className="text-gray-700">investors@castelnaugroup.com</p>
            <p className="text-gray-700">+44 (0)20 7123 4567</p>
          </div>
          <div>
            <p className="font-medium">Company Secretary</p>
            <p className="text-gray-700">secretary@castelnaugroup.com</p>
            <p className="text-gray-700">+44 (0)20 7123 4568</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-castelnau-green mb-4">Quick Links</h3>
        <div className="space-y-2">
          <a href="#reports-factsheets" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'reports-factsheets')}>
            Reports & Factsheets
          </a>
          <a href="#rns-feed" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'rns-feed')}>
            RNS Feed
          </a>
          <a href="#regulatory-documents" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'regulatory-documents')}>
            Regulatory Documents
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestorSidebar;
