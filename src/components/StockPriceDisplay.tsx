"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface StockPriceDisplayProps {
  className?: string;
}

interface StockData {
  symbol: string;
  price: number;
  change: number;
  change_percent: number;
  volume: number;
  latest_trading_day: string;
  last_updated: string;
  cached: boolean;
}

const StockPriceDisplay: React.FC<StockPriceDisplayProps> = ({ className = '' }) => {
  const [data, setData] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/share-price.json');
        if (!response.ok) {
          throw new Error('Failed to fetch share price');
        }
        const priceData = await response.json();
        setData(priceData);
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
      <Card className={`p-4 ${className}`}>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="flex justify-between items-center">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-4 w-32" />
        </div>
      </Card>
    );
  }

  if (error || !data) {
    return (
      <Card className={`p-4 ${className}`}>
        <div className="text-red-500">Failed to load share price</div>
      </Card>
    );
  }

  const formattedPrice = `£${data.price.toFixed(2)}`;
  const formattedChange = data.change >= 0
    ? `+${data.change.toFixed(2)} (+${data.change_percent.toFixed(2)}%)`
    : `${data.change.toFixed(2)} (${data.change_percent.toFixed(2)}%)`;

  const changeColor = data.change >= 0 ? 'text-green-600' : 'text-red-600';

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{data.symbol}</span>
          <span className="text-xl font-bold">{formattedPrice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${changeColor}`}>{formattedChange}</span>
          <span className="text-sm text-gray-500">
            Volume: {data.volume.toLocaleString()}
          </span>
        </div>
        <div className="text-xs text-gray-500">
          Last updated: {new Date(data.last_updated).toLocaleString()}
          {data.cached && ' (Cached)'}
        </div>
      </div>
    </Card>
  );
};

export default StockPriceDisplay;
