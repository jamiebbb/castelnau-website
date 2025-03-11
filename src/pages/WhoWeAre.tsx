
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const WhoWeAre = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Who We Are</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to transform value investing for the modern era, Castelnau Group Limited 
                represents a new chapter in investment management. Our approach combines time-tested value investing 
                principles with contemporary market insights and technologies.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that successful investing requires both patience and precision. Our investment philosophy 
                is rooted in detailed analysis, careful consideration, and a long-term perspective that allows us 
                to see opportunities where others might not.
              </p>
              <p className="text-lg text-gray-700">
                Through our unique position in the market and our deep understanding of value creation, we work to 
                generate sustainable returns for our investors while contributing to the growth and development of 
                the companies in our portfolio.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Investment Philosophy</h3>
              <p className="text-lg text-gray-700 mb-6">
                At Castelnau, we follow a disciplined investment approach that emphasizes fundamental analysis and 
                value creation. We focus on identifying companies with strong underlying business models, capable 
                management teams, and significant potential for long-term growth.
              </p>
              <p className="text-lg text-gray-700">
                Our investment strategy is characterized by:
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 mt-4 space-y-3">
                <li>Deep fundamental analysis</li>
                <li>Long-term investment horizon</li>
                <li>Focus on intrinsic value</li>
                <li>Active engagement with portfolio companies</li>
              </ul>
            </div>
          </div>

          <div id="our-values" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Our Values</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <div className="bg-castelnau-green h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Long-term Perspective</h4>
                <p className="text-gray-700 text-center">
                  We take a multi-year view on all of our investment decisions, focusing on sustainable value 
                  creation rather than short-term market movements.
                </p>
              </li>
              <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <div className="bg-castelnau-green h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Value Creation</h4>
                <p className="text-gray-700 text-center">
                  Our focus is on building lasting value through careful analysis, strategic thinking, and 
                  active engagement with our portfolio companies.
                </p>
              </li>
              <li className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                <div className="bg-castelnau-green h-12 w-12 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-bold text-xl mb-3">Partnership</h4>
                <p className="text-gray-700 text-center">
                  We believe in building strong, collaborative relationships with our portfolio companies, 
                  working together to achieve mutual success.
                </p>
              </li>
            </ul>
          </div>

          <div id="our-team" className="scroll-mt-24">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-10 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-xl mb-2">Gary Channon</h4>
                <p className="text-gray-600 mb-2">Chief Investment Officer</p>
                <p className="text-gray-700">
                  With over 25 years of investment experience, Gary leads our investment strategy and portfolio 
                  management team, bringing deep expertise in value investing and business analysis.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-xl mb-2">Investment Team</h4>
                <p className="text-gray-600 mb-2">Portfolio Management</p>
                <p className="text-gray-700">
                  Our experienced investment team combines diverse expertise in financial analysis, industry 
                  research, and portfolio management to identify and execute investment opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="font-bold text-xl mb-2">Operations Team</h4>
                <p className="text-gray-600 mb-2">Business Operations</p>
                <p className="text-gray-700">
                  Our operations team ensures smooth functioning of all business processes, supporting our 
                  investment activities with efficient administrative and operational support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoWeAre;
