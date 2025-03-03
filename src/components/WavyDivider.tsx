
import React from 'react';

const WavyDivider = () => {
  return (
    <div className="relative h-16 md:h-24 -mt-16 md:-mt-24 z-10">
      <svg 
        className="absolute bottom-0 w-full h-full" 
        viewBox="0 0 1440 100" 
        preserveAspectRatio="none"
      >
        <path 
          d="M0,100 C240,30 480,70 720,40 C960,10 1200,40 1440,20 L1440,100 L0,100 Z" 
          fill="white"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
