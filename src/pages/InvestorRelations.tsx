
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const InvestorRelations = () => {
  return (
    <MainLayout>
      <section className="bg-castelnau-green py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Investor Relations</h1>
          <div className="h-1 bg-white w-24 mt-6"></div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8">Financial Information</h2>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Key Financial Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Share Price</p>
                    <p className="text-2xl font-bold text-castelnau-green">£0.93</p>
                    <p className="text-xs text-gray-500">Updated: 25/02/2025</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">NAV per Share</p>
                    <p className="text-2xl font-bold text-castelnau-green">£1.02</p>
                    <p className="text-xs text-gray-500">Updated: 31/01/2025</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Market Cap</p>
                    <p className="text-2xl font-bold text-castelnau-green">£186.2m</p>
                    <p className="text-xs text-gray-500">Updated: 25/02/2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Reports & Presentations</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="font-medium">Annual Report 2024</p>
                      <p className="text-sm text-gray-500">Published: 15 March 2024</p>
                    </div>
                    <button className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm">
                      Download PDF
                    </button>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="font-medium">Interim Results H1 2024</p>
                      <p className="text-sm text-gray-500">Published: 25 September 2024</p>
                    </div>
                    <button className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm">
                      Download PDF
                    </button>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                    <div>
                      <p className="font-medium">Investor Presentation Q4 2024</p>
                      <p className="text-sm text-gray-500">Published: 10 December 2024</p>
                    </div>
                    <button className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Financial Calendar</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1 mr-3">
                        Q1
                      </div>
                      <div>
                        <p className="font-medium">Q1 Trading Update</p>
                        <p className="text-sm text-gray-500">15 April 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1 mr-3">
                        Q2
                      </div>
                      <div>
                        <p className="font-medium">Annual General Meeting</p>
                        <p className="text-sm text-gray-500">20 June 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1 mr-3">
                        Q3
                      </div>
                      <div>
                        <p className="font-medium">Half Year Results</p>
                        <p className="text-sm text-gray-500">25 September 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-1 mr-3">
                        Q4
                      </div>
                      <div>
                        <p className="font-medium">Q3 Trading Update</p>
                        <p className="text-sm text-gray-500">15 November 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
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
                <h3 className="text-xl font-bold text-castelnau-green mb-4">Regulatory News</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <p className="font-medium">Q4 Trading Update</p>
                    <p className="text-sm text-gray-500 mb-2">15 February 2025</p>
                    <a href="#" className="text-castelnau-green hover:underline text-sm">Read more</a>
                  </div>
                  <div className="border-b border-gray-200 pb-4">
                    <p className="font-medium">Board Changes</p>
                    <p className="text-sm text-gray-500 mb-2">10 January 2025</p>
                    <a href="#" className="text-castelnau-green hover:underline text-sm">Read more</a>
                  </div>
                  <div>
                    <p className="font-medium">New Strategic Investment</p>
                    <p className="text-sm text-gray-500 mb-2">5 December 2024</p>
                    <a href="#" className="text-castelnau-green hover:underline text-sm">Read more</a>
                  </div>
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
