
import React from 'react';

const FinancialMetrics: React.FC = () => {
  return (
    <div className="mb-12" id="share-price">
      <h3 className="text-2xl font-bold mb-6">Key Financial Metrics</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Share Price</p>
          <p className="text-2xl font-bold text-castelnau-green">£0.92</p>
          <p className="text-xs text-gray-500">Updated: 10/03/2025</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">NAV per Share</p>
          <p className="text-2xl font-bold text-castelnau-green">£1.01</p>
          <p className="text-xs text-gray-500">Updated: 28/02/2025</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-sm text-gray-500 mb-1">Market Cap</p>
          <p className="text-2xl font-bold text-castelnau-green">£186.2m</p>
          <p className="text-xs text-gray-500">Updated: 10/03/2025</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialMetrics;
