
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
      <div className={`text-white ${className}`}>
        <div className="space-y-2">
          <Skeleton className="h-5 w-24 bg-white/20" />
          <Skeleton className="h-6 w-16 bg-white/20" />
          <Skeleton className="h-3 w-32 bg-white/20" />
        </div>
      </div>
    );
  }

  if (!stockData) {
    return (
      <div className={`text-white ${className}`}>
        <p className="flex items-center text-lg font-serif">
          <span className="mr-2 text-castelnau-cream/90">Share price:</span> 
          <strong className="font-serif">0.92</strong>
        </p>
        <p className="text-xs italic text-white/80">Updated: 10/03/2025</p>
      </div>
    );
  }

  const change = formatStockChange(stockData.change, stockData.change_percent);

  return (
    <div className={`text-white ${className}`}>
      <p className="flex items-center text-lg font-serif">
        <span className="mr-2 text-castelnau-cream/90">Share price:</span> 
        <strong className="font-serif">{stockData.price}</strong>
      </p>
      <p className={`text-sm ${change.colorClass}`}>{change.value}</p>
      <p className="text-xs italic text-white/80">
        Updated: {formatStockDate(stockData.latest_trading_day)}
      </p>
    </div>
  );
};

export default StockPriceDisplay;
