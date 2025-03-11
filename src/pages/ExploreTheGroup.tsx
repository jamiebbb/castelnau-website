
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const ExploreTheGroup = () => {
  return (
    <MainLayout>
      <section className="bg-castelnau-green py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Explore The Group</h1>
          <div className="h-1 bg-white w-24 mt-6"></div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Our Portfolio Companies</h2>
            <p className="text-lg text-gray-700">
              Castelnau Group is proud to be partnered with a select group of quality businesses. 
              Each company in our portfolio benefits from our long-term investment approach, strategic guidance, 
              and commitment to sustainable value creation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Stanley Gibbons</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Stamp Collecting & Philately</p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Stanley Gibbons is the world's longest established rare stamp merchant, founded in 1856. The company 
                is a globally recognized brand in philately and collectibles, offering authentication services, 
                retail sales, auctions, and investment products.
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Ownership Stake</p>
                  <p className="font-bold text-castelnau-green">58.1%</p>
                </div>
                <div>
                  <button className="px-5 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-2">Hornby</h3>
                <p className="text-sm text-gray-500 uppercase font-medium">Model Railways & Collectibles</p>
              </div>
              
              <p className="text-gray-700 mb-6">
                Hornby is a leading international hobby products group, specializing in model railways, model cars, and 
                other collectible toys. The company owns several iconic brands including Scalextric, Airfix, and Corgi.
              </p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Ownership Stake</p>
                  <p className="font-bold text-castelnau-green">42.9%</p>
                </div>
                <div>
                  <button className="px-5 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors">
                    Visit Website
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-10 rounded-lg text-center">
            <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-4">Future Acquisitions</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We are continually evaluating new investment opportunities that align with our investment philosophy 
              and meet our strict criteria for value creation potential.
            </p>
            <button className="px-6 py-3 bg-castelnau-green text-white rounded-lg hover:bg-castelnau-darkgreen transition-colors font-medium">
              Contact Our Investment Team
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ExploreTheGroup;
