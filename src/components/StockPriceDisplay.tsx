"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getStockData } from '@/lib/stockData';

export default function StockPriceDisplay() {
  const [price, setPrice] = useState<string | null>(null);
  const [marketCap, setMarketCap] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStockData();
      // Format price as £0.XX instead of XXp
      setPrice('£' + (data.currentPrice / 100).toFixed(2));
      setMarketCap('£' + (data.marketCap / 100000000).toFixed(2) + 'M');
      setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());
    };
    fetchData();
  }, []);

  const handleClick = () => {
    router.push('/investor-relations');
  };

  return (
    <div className="flex items-start space-x-6 py-1">
      <div className="flex flex-col group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">Share Price:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">{price}</span>
        </div>
        <div className="text-white/60 text-xs mt-1">
          Updated: {lastUpdated}
        </div>
      </div>
      
      <div className="h-8 w-px bg-white/30 mt-2"></div>
      
      <div className="flex flex-col group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">NAV:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">£1.01</span>
        </div>
        <div className="text-white/60 text-xs mt-1">
          Updated: 28/02/25
        </div>
      </div>
      
      <div className="h-8 w-px bg-white/30 mt-2"></div>
      
      <div className="flex items-center group cursor-pointer hover:bg-white/10 px-3 py-2 rounded-md transition-all duration-200" onClick={handleClick}>
        <div className="flex items-center space-x-1">
          <span className="text-white text-sm group-hover:text-white/90 transition-colors">Market Cap:</span>
          <span className="text-white font-bold text-base group-hover:scale-105 transition-transform">£{marketCap}</span>
        </div>
      </div>
    </div>
  );
}
