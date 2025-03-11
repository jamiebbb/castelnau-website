
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Castelnau Group Limited is a closed-ended investment company that focuses on acquiring and helping
                to develop cash generative companies. The Company is managed with a value-based investment philosophy,
                rooted in Buffettian principles.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                The Group was founded on the conviction that long-term value investors create significant value over time.
                Our long-term perspective provides us with the opportunity to seek out attractive investments in companies
                that have been overlooked because of short-term considerations.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Values</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-castelnau-green h-8 w-8 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Long-term Perspective</h4>
                    <p className="text-gray-700">We take a multi-year view on all of our investment decisions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-castelnau-green h-8 w-8 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Value Creation</h4>
                    <p className="text-gray-700">We focus on sustainable value creation over short-term gains.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-castelnau-green h-8 w-8 rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Partnership</h4>
                    <p className="text-gray-700">We work collaboratively with the management teams of our portfolio companies.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoWeAre;
