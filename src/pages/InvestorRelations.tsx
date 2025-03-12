
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { downloadDocument, Document } from '@/utils/documentUtils';
import { FileDown } from 'lucide-react';

// Sample documents data - this would ideally come from a CMS or API
const documents: Document[] = [
  {
    id: '1',
    title: 'Annual Report 2024',
    category: 'report',
    filePath: '/documents/annual-report-2024.pdf',
    publishDate: '15 March 2024',
    fileSize: '2.5MB'
  },
  {
    id: '2',
    title: 'Interim Results H1 2024',
    category: 'report',
    filePath: '/documents/interim-results-h1-2024.pdf',
    publishDate: '25 September 2024',
    fileSize: '1.8MB'
  },
  {
    id: '3',
    title: 'Investor Presentation Q4 2024',
    category: 'report',
    filePath: '/documents/investor-presentation-q4-2024.pdf',
    publishDate: '10 December 2024',
    fileSize: '3.2MB'
  },
  {
    id: '4',
    title: 'Company Factsheet 2024',
    category: 'factsheet',
    filePath: '/documents/company-factsheet-2024.pdf',
    publishDate: '5 January 2024',
    fileSize: '0.8MB'
  },
  {
    id: '5',
    title: 'ESG Policy Statement',
    category: 'regulatory',
    filePath: '/documents/esg-policy-statement.pdf',
    publishDate: '20 February 2024',
    fileSize: '1.2MB'
  },
  {
    id: '6',
    title: 'Strategic Investment Announcement',
    category: 'rns',
    filePath: '/documents/strategic-investment-rns.pdf',
    publishDate: '5 December 2024',
    fileSize: '0.5MB'
  }
];

const InvestorRelations = () => {
  useEffect(() => {
    // Handle hash navigation when page loads
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleDownload = (document: Document) => {
    downloadDocument(document.filePath, document.title + '.pdf');
  };

  const getDocumentsByCategory = (category: Document['category']) => {
    return documents.filter(doc => doc.category === category);
  };

  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Investor Relations</h1>
          <div className="h-1 bg-white w-36"></div>
        </div>
        
        <div className="absolute bottom-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
            <path 
              fill="#FFFFFF" 
              fillOpacity="1" 
              d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      <section className="page-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8">Financial Information</h2>
              
              <div className="mb-12" id="share-price">
                <h3 className="text-2xl font-bold mb-6">Key Financial Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Share Price</p>
                    <p className="text-2xl font-bold text-castelnau-green">£0.92</p>
                    <p className="text-xs text-gray-500">Updated: 10/03/2025</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">NAV per Share</p>
                    <p className="text-2xl font-bold text-castelnau-green">£1.01</p>
                    <p className="text-xs text-gray-500">Updated: 28/02/2025</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Market Cap</p>
                    <p className="text-2xl font-bold text-castelnau-green">£186.2m</p>
                    <p className="text-xs text-gray-500">Updated: 10/03/2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12" id="regulatory-documents">
                <h3 className="text-2xl font-bold mb-6">Regulatory Documents</h3>
                <div className="space-y-4">
                  {getDocumentsByCategory('regulatory').map(doc => (
                    <div key={doc.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-gray-500">Published: {doc.publishDate} {doc.fileSize && `• ${doc.fileSize}`}</p>
                      </div>
                      <Button 
                        onClick={() => handleDownload(doc)}
                        className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm flex items-center"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12" id="factsheets">
                <h3 className="text-2xl font-bold mb-6">Factsheets</h3>
                <div className="space-y-4">
                  {getDocumentsByCategory('factsheet').map(doc => (
                    <div key={doc.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-gray-500">Published: {doc.publishDate} {doc.fileSize && `• ${doc.fileSize}`}</p>
                      </div>
                      <Button 
                        onClick={() => handleDownload(doc)}
                        className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm flex items-center"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-12" id="rns">
                <h3 className="text-2xl font-bold mb-6">Regulatory News Service (RNS)</h3>
                <div className="space-y-4">
                  {getDocumentsByCategory('rns').map(doc => (
                    <div key={doc.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-gray-500">Published: {doc.publishDate} {doc.fileSize && `• ${doc.fileSize}`}</p>
                      </div>
                      <Button 
                        onClick={() => handleDownload(doc)}
                        className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm flex items-center"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div id="reports">
                <h3 className="text-2xl font-bold mb-6">Reports & Presentations</h3>
                <div className="space-y-4">
                  {getDocumentsByCategory('report').map(doc => (
                    <div key={doc.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div>
                        <p className="font-medium">{doc.title}</p>
                        <p className="text-sm text-gray-500">Published: {doc.publishDate} {doc.fileSize && `• ${doc.fileSize}`}</p>
                      </div>
                      <Button 
                        onClick={() => handleDownload(doc)}
                        className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm flex items-center"
                      >
                        <FileDown className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InvestorRelations;
