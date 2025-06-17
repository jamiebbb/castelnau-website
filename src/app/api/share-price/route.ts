import { NextResponse } from 'next/server';

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

const ALPHA_VANTAGE_API_KEY = 'LKRB0RE577TSMDK0';
const SYMBOL = 'CTN.L';

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
    // For static export, return a static response
    return NextResponse.json({
      price: 0.85, // Default static price
      cached: true,
      last_updated: new Date().toISOString()
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 