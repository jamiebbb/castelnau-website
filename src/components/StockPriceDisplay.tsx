"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStockData } from '@/lib/stockData';

interface StockPriceDisplayProps {
  onNavigate?: () => void;
}

export default function StockPriceDisplay({ onNavigate }: StockPriceDisplayProps = {}) {
  const [price, setPrice] = useState<string | null>(null);
  const [marketCap, setMarketCap] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStockData();
      // Format price as £0.XX instead of XXp
      setPrice('£' + (data.currentPrice / 100).toFixed(2));
      setMarketCap((data.marketCap / 1000000).toFixed(1) + 'M');
      setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());
    };
    fetchData();
  }, []);

  const handleClick = () => {
    router.push('/investor-relations');
    // Call the onNavigate callback if provided (for mobile menu closing)
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-start md:space-x-6 space-y-3 md:space-y-0 py-1">
      <div className="flex flex-col group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">Share Price:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">{price}</span>
        </div>
        <div className="text-white/60 text-xs mt-1">
          Updated: {lastUpdated}
        </div>
      </div>
      
      <div className="hidden md:block h-8 w-px bg-white/30 mt-2"></div>
      
      <div className="flex flex-col group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">NAV:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">£1.00</span>
        </div>
        <div className="text-white/60 text-xs mt-1">
          Updated: 31/05/25
        </div>
      </div>
      
      <div className="hidden md:block h-8 w-px bg-white/30 mt-2"></div>
      
      <div className="flex flex-col group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">Market Cap:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">£{marketCap}</span>
        </div>
        <div className="text-white/60 text-xs mt-1">
          Updated: {lastUpdated}
        </div>
      </div>
    </div>
  );
}
