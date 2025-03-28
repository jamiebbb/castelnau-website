import { NextResponse } from 'next/server';

const ALPHA_VANTAGE_API_KEY = 'LKRB0RE577TSMDK0';
const SYMBOL = 'CTN.L';
const CACHE_KEY = 'share_price_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CacheData {
  price: number;
  timestamp: number;
}

async function getCachedPrice(): Promise<CacheData | null> {
  try {
    const cached = await fetch('https://api.vercel.com/v1/edge-config', {
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
      },
    });
    const data = await cached.json();
    return data[CACHE_KEY] || null;
  } catch (error) {
    console.error('Error fetching cache:', error);
    return null;
  }
}

async function updateCache(price: number): Promise<void> {
  try {
    await fetch('https://api.vercel.com/v1/edge-config', {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        [CACHE_KEY]: {
          price,
          timestamp: Date.now(),
        },
      }),
    });
  } catch (error) {
    console.error('Error updating cache:', error);
  }
}

async function fetchLatestPrice(): Promise<number | null> {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${SYMBOL}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    const data = await response.json();
    const price = parseFloat(data['Global Quote']['05. price']);
    return isNaN(price) ? null : price;
  } catch (error) {
    console.error('Error fetching price:', error);
    return null;
  }
}

export async function GET() {
  try {
    // Try to get cached price
    const cached = await getCachedPrice();
    
    if (cached) {
      const age = Date.now() - cached.timestamp;
      if (age < CACHE_DURATION) {
        return NextResponse.json({ price: cached.price, cached: true });
      }
    }

    // If no cache or cache expired, fetch new price
    const price = await fetchLatestPrice();
    if (price !== null) {
      await updateCache(price);
      return NextResponse.json({ price, cached: false });
    }

    // If we have a cached price but it's expired, return it as fallback
    if (cached) {
      return NextResponse.json({ price: cached.price, cached: true });
    }

    return NextResponse.json({ error: 'Unable to fetch share price' }, { status: 500 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 