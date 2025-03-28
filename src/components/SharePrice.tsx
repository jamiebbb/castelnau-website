'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface SharePriceData {
  price: number;
  last_updated: string;
  cached: boolean;
}

const SharePrice = () => {
  const [data, setData] = useState<SharePriceData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // First try to get the cached price
        const response = await fetch('/share-price.json');
        if (!response.ok) {
          throw new Error('Failed to fetch share price');
        }
        const priceData = await response.json();
        setData(priceData);

        // Check if we need to update the price
        const lastUpdate = new Date(priceData.last_updated);
        const now = new Date();
        const hoursSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60);

        if (hoursSinceUpdate >= 24) {
          // Trigger a price update
          await fetch('/api/update-share-price', { method: 'POST' });
          // Fetch the updated price
          const updatedResponse = await fetch('/share-price.json');
          const updatedData = await updatedResponse.json();
          setData(updatedData);
        }
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
      {data.cached && (
        <span className="text-xs text-gray-500">(Cached)</span>
      )}
    </div>
  );
};

export default SharePrice; 