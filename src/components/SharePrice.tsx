'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { getStockData } from '@/lib/stockData';

const SharePrice = () => {
  const [data, setData] = useState<{ price: number; lastUpdated: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const stockData = await getStockData();
        setData({
          price: stockData.currentPrice,
          lastUpdated: stockData.lastUpdated
        });
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchPrice();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-castelnau-green">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  if (error || !data) {
    return null;
  }

  const formattedPrice = data.price.toFixed(2);
  const isPositive = data.price > 0;

  return (
    <div className="flex items-center gap-2 text-castelnau-green">
      <span className="font-bold">£{formattedPrice}</span>
      {isPositive ? (
        <ArrowUpRight className="w-4 h-4" />
      ) : (
        <ArrowDownRight className="w-4 h-4" />
      )}
    </div>
  );
};

export default SharePrice; 