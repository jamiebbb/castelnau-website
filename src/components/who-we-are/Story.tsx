
import React from 'react';

const Story = () => {
  return (
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
  );
};

export default Story;
