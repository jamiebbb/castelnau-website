"use client";

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface StockPriceDisplayProps {
  className?: string;
}

interface StockData {
  price: number;
  cached: boolean;
  last_updated?: string;
}

const StockPriceDisplay: React.FC<StockPriceDisplayProps> = ({ className = '' }) => {
  const [data, setData] = useState<StockData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch('/api/share-price');
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
    // Refresh once per day at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const timeout = setTimeout(() => {
      fetchPrice();
      // After the first midnight refresh, set up daily interval
      const dailyInterval = setInterval(fetchPrice, 24 * 60 * 60 * 1000);
      return () => clearInterval(dailyInterval);
    }, timeUntilMidnight);

    return () => clearTimeout(timeout);
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
  const change = data.price > 0 ? "+0.02" : "-0.02"; // This would come from the API in a real implementation
  const changePercent = "2.41"; // This would come from the API in a real implementation
  const volume = 150000; // This would come from the API in a real implementation

  const formattedChange = change.startsWith('+') 
    ? `+${change} (+${changePercent}%)`
    : `${change} (${changePercent}%)`;

  const changeColor = change.startsWith('+') 
    ? 'text-green-600' 
    : change.startsWith('-') 
      ? 'text-red-600' 
      : 'text-gray-500';

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">CNL</span>
          <span className="text-xl font-bold">{formattedPrice}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`font-medium ${changeColor}`}>{formattedChange}</span>
          <span className="text-sm text-gray-500">
            Volume: {volume.toLocaleString()}
          </span>
        </div>
        <div className="text-xs text-gray-500">
          Last updated: {data.last_updated ? new Date(data.last_updated).toLocaleString() : 'N/A'}
          {data.cached && ' (Cached)'}
        </div>
      </div>
    </Card>
  );
};

export default StockPriceDisplay;
