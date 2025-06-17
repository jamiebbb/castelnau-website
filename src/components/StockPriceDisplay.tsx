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
      setPrice('£' + (data.currentPrice / 100).toFixed(2));
      setMarketCap((data.marketCap / 10000000000).toFixed(2) + 'M');
      setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-1">
      <div className="flex items-start space-x-4 text-sm">
        <div className="flex flex-col">
          <div>
            <span className="text-white">Share Price: </span>
            <span className="text-white font-semibold">{price}</span>
          </div>
          <div className="text-white/70 text-xs italic">
            Updated: {lastUpdated}
          </div>
        </div>
        <div className="text-white/70">|</div>
        <div className="flex flex-col">
          <div>
            <span className="text-white">NAV: </span>
            <span className="text-white font-semibold">£1.01</span>
          </div>
          <div className="text-white/70 text-xs italic">
            NAV last updated: 28/02/25
          </div>
        </div>
        <div className="text-white/70">|</div>
        <div>
          <span className="text-white">Market Cap: </span>
          <span className="text-white font-semibold">£{marketCap}</span>
        </div>
      </div>
    </div>
  );
}
