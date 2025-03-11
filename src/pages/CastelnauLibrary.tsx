
import React from 'react';
import MainLayout from '@/layouts/MainLayout';

const CastelnauLibrary = () => {
  return (
    <MainLayout>
      <section className="page-hero">
        <div className="container mx-auto px-4">
          <h1 className="page-title">Castelnau Library</h1>
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
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">Investment Knowledge Hub</h2>
            <p className="text-lg text-gray-700">
              Welcome to the Castelnau Library, our curated collection of investment wisdom, business insights, 
              and thought leadership. Explore our resources to deepen your understanding of value investing principles 
              and long-term business building.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-serif font-bold text-castelnau-green mb-6">Featured Articles</h3>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-sm font-medium rounded-full">
                      Value Investing
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-castelnau-green mb-3">The Enduring Principles of Value Investing</h4>
                  <p className="text-gray-700 mb-4">
                    An exploration of the timeless principles that guide successful value investors through changing market conditions and economic cycles.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>15 March 2025</span>
                      <span className="mx-2">•</span>
                      <span>10 min read</span>
                    </div>
                    <a href="#" className="text-castelnau-green hover:underline font-medium">Read more</a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-castelnau-green/10 text-castelnau-green text-sm font-medium rounded-full">
                      Business Strategy
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-castelnau-green mb-3">Building Moats: Sustainable Competitive Advantages</h4>
                  <p className="text-gray-700 mb-4">
                    How exceptional businesses create and maintain competitive advantages that protect their long-term profitability and market position.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      <span>28 February 2025</span>
                      <span className="mx-2">•</span>
                      <span>12 min read</span>
                    </div>
                    <a href="#" className="text-castelnau-green hover:underline font-medium">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-castelnau-green p-6 rounded-lg text-white mb-8">
                <h4 className="text-xl font-bold mb-4">Subscribe to Updates</h4>
                <p className="mb-4">
                  Stay informed with our latest insights and articles delivered directly to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="w-full bg-white text-castelnau-green font-medium py-2 rounded hover:bg-white/90 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-castelnau-green mb-4">Resource Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors">
                      <span className="font-medium">Value Investing</span>
                      <span className="text-sm text-gray-500">12 articles</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors">
                      <span className="font-medium">Business Analysis</span>
                      <span className="text-sm text-gray-500">8 articles</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors">
                      <span className="font-medium">Capital Allocation</span>
                      <span className="text-sm text-gray-500">6 articles</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center justify-between p-3 hover:bg-white rounded-lg transition-colors">
                      <span className="font-medium">Market Perspectives</span>
                      <span className="text-sm text-gray-500">9 articles</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CastelnauLibrary;
