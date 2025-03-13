"use client";

import React, { useEffect, useState } from 'react';
import { fetchLatestStockPrice, formatStockChange, formatStockDate, StockPrice } from '@/utils/stockPriceUtils';
import { Skeleton } from '@/components/ui/skeleton';

interface StockPriceDisplayProps {
  className?: string;
}

const StockPriceDisplay: React.FC<StockPriceDisplayProps> = ({ className }) => {
  const [stockData, setStockData] = useState<StockPrice | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStockPrice = async () => {
      setLoading(true);
      try {
        const data = await fetchLatestStockPrice();
        setStockData(data);
      } catch (error) {
        console.error("Failed to fetch stock price:", error);
      } finally {
        setLoading(false);
      }
    };

    getStockPrice();
  }, []);

  if (loading) {
    return (
      <div className={`flex items-center space-x-8 ${className}`}>
        <div className="stock-price">
          <div className="space-y-2">
            <Skeleton className="h-5 w-24 bg-white/20" />
            <Skeleton className="h-6 w-16 bg-white/20" />
            <Skeleton className="h-3 w-32 bg-white/20" />
          </div>
        </div>
        <div className="stock-price">
          <div className="space-y-2">
            <Skeleton className="h-5 w-24 bg-white/20" />
            <Skeleton className="h-6 w-16 bg-white/20" />
            <Skeleton className="h-3 w-32 bg-white/20" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-8 ${className}`}>
      <div className="stock-price">
        <div className="flex flex-col">
          <p className="flex items-center">
            <span className="stock-price-label mr-2">Share price:</span> 
            <span className="stock-price-value">{stockData?.price || '0.92'}</span>
          </p>
          {stockData && (
            <p className={`text-sm ${formatStockChange(stockData.change, stockData.change_percent).colorClass}`}>
              {formatStockChange(stockData.change, stockData.change_percent).value}
            </p>
          )}
          <p className="stock-price-update">
            Updated: {stockData ? formatStockDate(stockData.latest_trading_day) : '10/03/2025'}
          </p>
        </div>
      </div>
      
      <div className="stock-price">
        <div className="flex flex-col">
          <p className="flex items-center">
            <span className="stock-price-label mr-2">NAV price:</span> 
            <span className="stock-price-value">1.01</span>
          </p>
          <p className="stock-price-update">Updated: 28/02/2025</p>
        </div>
      </div>
    </div>
  );
};

export default StockPriceDisplay;
