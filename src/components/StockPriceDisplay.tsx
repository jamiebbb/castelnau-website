"use client";

import React, { useEffect, useState } from 'react';
import { getStockData } from '@/lib/stockData';

export default function StockPriceDisplay() {
  const [price, setPrice] = useState<string | null>(null);
  const [marketCap, setMarketCap] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStockData();
      setPrice('£0.' + data.currentPrice.toFixed(0));
      
      // Convert market cap to millions and format as £292.55M
      const marketCapInMillions = data.marketCap / 1000000;
      setMarketCap(marketCapInMillions.toFixed(2) + 'M');
      
      setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-center space-x-4 text-sm">
        <div>
          <span className="text-white">Share Price: </span>
          <span className="text-white font-semibold">{price}</span>
        </div>
        <div className="text-white/70">|</div>
        <div>
          <span className="text-white">NAV: </span>
          <span className="text-white font-semibold">101p</span>
        </div>
        <div className="text-white/70">|</div>
        <div>
          <span className="text-white">Market Cap: </span>
          <span className="text-white font-semibold">£{marketCap}</span>
        </div>
      </div>
      <div className="text-white/70 text-xs italic">
        Updated: {lastUpdated} | NAV last updated: 28/02/25
      </div>
    </div>
  );
}
