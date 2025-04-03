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
      setPrice('£0.' + data.currentPrice.toFixed(2));
      setMarketCap((data.marketCap / 1000000).toFixed(2) + 'M'); // Convert to millions with 2 decimal places
      setLastUpdated(new Date(data.lastUpdated).toLocaleDateString());
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center space-x-4 text-sm">
      <div>
        <span className="text-white">Share Price: </span>
        <span className="text-white font-semibold">{price}</span>
      </div>
      <div className="text-white/70">|</div>
      <div>
        <span className="text-white">NAV: </span>
        <span className="text-white font-semibold">101.00p</span>
      </div>
      <div className="text-white/70">|</div>
      <div>
        <span className="text-white">Market Cap: </span>
        <span className="text-white font-semibold">£{marketCap}</span>
      </div>
      <div className="text-white/70">|</div>
      <div className="text-white/70">
        Updated: {lastUpdated}
      </div>
    </div>
  );
}
