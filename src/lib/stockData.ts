interface StockData {
  currentPrice: number;
  marketCap: number;
  lastUpdated: string;
  historicalData: {
    labels: string[];
    prices: number[];
  };
}

const CACHE_KEY = 'stock_data_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function isCacheValid(cachedData: StockData): boolean {
  const lastUpdated = new Date(cachedData.lastUpdated);
  const now = new Date();
  return now.getTime() - lastUpdated.getTime() < CACHE_DURATION;
}

export async function getStockData(): Promise<StockData> {
  try {
    // Check localStorage cache first
    if (typeof window !== 'undefined') {
      const cachedDataStr = localStorage.getItem(CACHE_KEY);
      if (cachedDataStr) {
        const cachedData: StockData = JSON.parse(cachedDataStr);
        if (isCacheValid(cachedData)) {
          return cachedData;
        }
      }
    }

    // If no valid cache, fetch from API
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=CGL.L&apikey=W0W2UQ53HXPJO5CL`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch stock data');
    }

    const data = await response.json();
    
    // Check for API rate limit
    if (data['Note']) {
      console.warn('API Rate limit reached:', data['Note']);
      // If we have any cached data, return it even if expired
      if (typeof window !== 'undefined') {
        const cachedDataStr = localStorage.getItem(CACHE_KEY);
        if (cachedDataStr) {
          return JSON.parse(cachedDataStr);
        }
      }
      throw new Error('API rate limit reached');
    }

    const timeSeriesData = data['Time Series (Daily)'];
    const dates = Object.keys(timeSeriesData); // Get all available dates
    const prices = dates.map(date => 
      parseFloat(timeSeriesData[date]['4. close'])
    );

    // Fetch company overview data for market cap
    const overviewResponse = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=CGL.L&apikey=W0W2UQ53HXPJO5CL`
    );
    
    if (!overviewResponse.ok) {
      throw new Error('Failed to fetch company overview data');
    }

    const overviewData = await overviewResponse.json();
    const marketCap = parseFloat(overviewData['MarketCapitalization'] || '0');

    const transformedData: StockData = {
      currentPrice: prices[0],
      marketCap: marketCap,
      lastUpdated: new Date().toISOString(),
      historicalData: {
        labels: dates.map(date => new Date(date).toLocaleDateString()),
        prices: prices
      }
    };

    // Cache the new data
    if (typeof window !== 'undefined') {
      localStorage.setItem(CACHE_KEY, JSON.stringify(transformedData));
    }
    
    return transformedData;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    // If we have any cached data, return it even if expired
    if (typeof window !== 'undefined') {
      const cachedDataStr = localStorage.getItem(CACHE_KEY);
      if (cachedDataStr) {
        return JSON.parse(cachedDataStr);
      }
    }
    throw error;
  }
} 