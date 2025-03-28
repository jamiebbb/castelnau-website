import React from 'react';
const Hero = () => {
  return <section className="page-hero">
      <div className="container mx-auto px-4">
        <h1 className="page-title">Who We Are</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-16">
          We are value investors focused on long-term growth through careful analysis and active engagement with exceptional businesses.
        </p>
        <div className="h-1 bg-gradient-to-r from-white/40 via-white to-white/40 w-36 bg-neutral-50"></div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150" className="w-full">
          <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,85.3C160,75,320,53,480,64C640,75,800,117,960,122.7C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;