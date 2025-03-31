import React from 'react';
import { Card } from '@/components/ui/card';

interface FinancialMetricsProps {
  className?: string;
}

const FinancialMetrics: React.FC<FinancialMetricsProps> = ({ className = '' }) => {
  // Static data for prototype
  const metrics = {
    nav: "£1.01",
    nav_change: "+0.03",
    nav_change_percent: "3.07",
    market_cap: "£85.2M",
    shares_issued: "100.2M",
    last_updated: new Date().toISOString()
  };

  const formattedNavChange = metrics.nav_change.startsWith('+') 
    ? `+${metrics.nav_change} (+${metrics.nav_change_percent}%)`
    : `${metrics.nav_change} (${metrics.nav_change_percent}%)`;

  const navChangeColor = metrics.nav_change.startsWith('+') 
    ? 'text-green-600' 
    : metrics.nav_change.startsWith('-') 
      ? 'text-red-600' 
      : 'text-gray-500';

  return (
    <Card className={`p-6 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Financial Metrics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">NAV per Share</span>
            <span className="font-semibold">{metrics.nav}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">NAV Change</span>
            <span className={`font-medium ${navChangeColor}`}>{formattedNavChange}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Market Cap</span>
            <span className="font-semibold">{metrics.market_cap}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Shares Issued</span>
            <span className="font-semibold">{metrics.shares_issued}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xs text-gray-500">
        Last updated: {new Date(metrics.last_updated).toLocaleString()}
      </div>
    </Card>
  );
};

export default FinancialMetrics;
