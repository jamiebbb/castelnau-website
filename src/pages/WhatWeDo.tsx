
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const WhatWeDo = () => {
  return (
    <MainLayout>
      <section className="bg-castelnau-green py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">What We Do</h1>
          <div className="h-1 bg-white w-24 mt-6"></div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8">Our Investment Approach</h2>
            <p className="text-lg text-gray-700 mb-8">
              Castelnau Group adopts a value-based investment philosophy, seeking out businesses with strong fundamentals 
              that are undervalued by the market. We look for companies with robust cash flow generation, sustainable 
              competitive advantages, and opportunities for long-term growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-castelnau-green mb-4">Investment Criteria</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Strong cash flow generation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Durable competitive advantages</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Attractive return on invested capital</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Undervalued relative to intrinsic worth</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Strong management teams</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-castelnau-green mb-4">Value Creation</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Strategic guidance and oversight</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Long-term capital allocation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Operational improvements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>M&A and growth opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-castelnau-green rounded-full mr-3"></div>
                    <span>Enhanced corporate governance</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-8">Our Process</h2>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-castelnau-green mb-3">Identify Opportunities</h3>
                  <p className="text-gray-700">
                    We conduct thorough market research to identify businesses that meet our investment criteria. 
                    Our team analyzes industry trends, competitive dynamics, and company-specific factors to find 
                    potential acquisition targets.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-castelnau-green mb-3">Due Diligence</h3>
                  <p className="text-gray-700">
                    Our rigorous due diligence process involves in-depth analysis of financial statements, business models, 
                    management teams, competitive positioning, and growth prospects. We take the time to understand each 
                    business thoroughly before making investment decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-castelnau-green mb-3">Acquisition</h3>
                  <p className="text-gray-700">
                    We structure transactions that align the interests of all stakeholders. Our goal is to create 
                    win-win scenarios for sellers, management teams, employees, and our investors.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex items-center justify-center">
                  <div className="bg-castelnau-green h-16 w-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-castelnau-green mb-3">Value Creation</h3>
                  <p className="text-gray-700">
                    We work closely with management teams to implement strategic initiatives, improve operations, 
                    optimize capital allocation, and pursue growth opportunities. Our long-term approach allows us 
                    to focus on sustainable value creation rather than short-term results.
                  </p>
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
