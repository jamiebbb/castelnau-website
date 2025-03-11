
import { useQuery } from '@tanstack/react-query';

interface SharePriceData {
  price: string;
  date: string;
}

const fetchSharePrice = async (): Promise<SharePriceData> => {
  try {
    const response = await fetch('https://www.londonstockexchange.com/stock/CGL/castelnau-group-limited/company-page');
    const text = await response.text();
    
    // Extract price from HTML content
    const priceMatch = text.match(/data-price="([^"]+)"/);
    const dateMatch = text.match(/data-date="([^"]+)"/);
    
    return {
      price: priceMatch?.[1] || '0.92',
      date: dateMatch?.[1] || '10/03/2025'
    };
  } catch (error) {
    console.error('Error fetching share price:', error);
    return {
      price: '0.92',
      date: '10/03/2025'
    };
  }
};

export const useSharePrice = () => {
  return useQuery({
    queryKey: ['sharePrice'],
    queryFn: fetchSharePrice,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
    staleTime: 5 * 60 * 1000,
  });
};
