
import React, { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';
import WavyDivider from '@/components/WavyDivider';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="animate-fade-in">
        <section className="bg-gradient-to-r from-castelnau-darkgreen via-castelnau-green to-castelnau-lightgreen text-white pt-24 pb-48 relative">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold max-w-4xl leading-tight mb-10">
              We compound shareholders' capital at high rates of return.
            </h1>
            <div className="h-1 bg-gradient-to-r from-castelnau-gold/70 to-castelnau-gold w-36"></div>
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
        
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-castelnau-green mb-6">
                  Creating value with permanence and vision
                </h2>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  We aim to do this by acquiring businesses with a competitive advantage at attractive prices. 
                  Our structure helps us to clear away short-term pressures that inhibit value creation and 
                  nurture rational long-term capital allocation frameworks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Index;
