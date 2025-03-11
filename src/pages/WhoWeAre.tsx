
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const WhoWeAre = () => {
  return (
    <MainLayout>
      <section className="bg-castelnau-green py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Who We Are</h1>
          <div className="h-1 bg-white w-24 mt-6"></div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Castelnau Group Limited is a closed-ended investment company that focuses on acquiring and helping
                to develop cash generative companies. The Company is managed with a value-based investment philosophy,
                rooted in Buffettian principles. The Group was founded on the conviction that long-term value investors
                create significant value over time.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our long-term perspective provides us with the opportunity to seek out attractive investments in companies
                that have been overlooked because of short-term considerations.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">Our Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Long-term Perspective</h4>
                      <p className="text-gray-700">We take a multi-year view on all of our investment decisions.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Value Creation</h4>
                      <p className="text-gray-700">We focus on sustainable value creation over short-term gains.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-castelnau-green h-6 w-6 rounded-full flex items-center justify-center mt-1 mr-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Partnership</h4>
                      <p className="text-gray-700">We work collaboratively with the management teams of our portfolio companies.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-1">Jane Smith</h3>
              <p className="text-castelnau-green font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm">
                Jane brings over 20 years of experience in investment management and corporate finance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-1">John Richards</h3>
              <p className="text-castelnau-green font-medium mb-3">Chief Financial Officer</p>
              <p className="text-gray-600 text-sm">
                John is a seasoned financial expert with a background in private equity and corporate restructuring.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="font-bold text-xl mb-1">Sarah Johnson</h3>
              <p className="text-castelnau-green font-medium mb-3">Head of Investments</p>
              <p className="text-gray-600 text-sm">
                Sarah leads our investment strategy with her deep expertise in value investing and business analysis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WhoWeAre;
