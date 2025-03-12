
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useScrollToSection from '@/hooks/useScrollToSection';

const InvestorSidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollToElement } = useScrollToSection({ offset: 120 });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Check if we're already on the investor-relations page
    if (location.pathname === '/investor-relations') {
      // Already on the page, just scroll to the section
      scrollToElement(sectionId);
    } else {
      // Navigate to the page with the hash
      navigate(`/investor-relations#${sectionId}`);
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
          <a href="#share-price" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'share-price')}>
            Share Price
          </a>
          <a href="#regulatory-documents" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'regulatory-documents')}>
            Regulatory Documents
          </a>
          <a href="#factsheets" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'factsheets')}>
            Factsheets
          </a>
          <a href="#rns" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'rns')}>
            RNS Announcements
          </a>
          <a href="#reports" 
             className="block text-castelnau-green hover:underline"
             onClick={(e) => handleLinkClick(e, 'reports')}>
            Reports & Presentations
          </a>
        </div>
      </div>
    </div>
  );
};

export default InvestorSidebar;
