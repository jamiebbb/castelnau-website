
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const WhatWeDo = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">What We Do</h1>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Investment Approach</h2>
              <p className="text-lg text-gray-700 mb-8">
                Castelnau Group adopts a value-based investment philosophy, seeking out businesses with strong fundamentals 
                that are undervalued by the market. We look for companies with robust cash flow generation, sustainable 
                competitive advantages, and opportunities for long-term growth.
              </p>
              
              <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">Investment Criteria</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                  <span className="text-lg">Strong cash flow generation</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                  <span className="text-lg">Durable competitive advantages</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                  <span className="text-lg">Attractive return on invested capital</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                  <span className="text-lg">Undervalued relative to intrinsic worth</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                  <span className="text-lg">Strong management teams</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Process</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-castelnau-green h-10 w-10 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 mt-1">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-castelnau-green mb-3">Identify Opportunities</h3>
                    <p className="text-lg text-gray-700">
                      We conduct thorough market research to identify businesses that meet our investment criteria. 
                      Our team analyzes industry trends, competitive dynamics, and company-specific factors to find 
                      potential acquisition targets.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-castelnau-green h-10 w-10 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 mt-1">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-castelnau-green mb-3">Due Diligence</h3>
                    <p className="text-lg text-gray-700">
                      Our rigorous due diligence process involves in-depth analysis of financial statements, business models, 
                      management teams, competitive positioning, and growth prospects. We take the time to understand each 
                      business thoroughly before making investment decisions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-castelnau-green h-10 w-10 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 mt-1">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-castelnau-green mb-3">Acquisition</h3>
                    <p className="text-lg text-gray-700">
                      We structure transactions that align the interests of all stakeholders. Our goal is to create 
                      win-win scenarios for sellers, management teams, employees, and our investors.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-castelnau-green h-10 w-10 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4 mt-1">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-castelnau-green mb-3">Value Creation</h3>
                    <p className="text-lg text-gray-700">
                      We work closely with management teams to implement strategic initiatives, improve operations, 
                      optimize capital allocation, and pursue growth opportunities. Our long-term approach allows us 
                      to focus on sustainable value creation rather than short-term results.
                    </p>
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

export default WhatWeDo;
