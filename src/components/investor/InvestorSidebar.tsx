
import React from 'react';

const InvestorSidebar: React.FC = () => {
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
          <a href="#share-price" className="block text-castelnau-green hover:underline">Share Price</a>
          <a href="#regulatory-documents" className="block text-castelnau-green hover:underline">Regulatory Documents</a>
          <a href="#factsheets" className="block text-castelnau-green hover:underline">Factsheets</a>
          <a href="#rns" className="block text-castelnau-green hover:underline">RNS Announcements</a>
          <a href="#reports" className="block text-castelnau-green hover:underline">Reports & Presentations</a>
        </div>
      </div>
    </div>
  );
};

export default InvestorSidebar;
