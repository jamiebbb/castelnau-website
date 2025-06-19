import { NextRequest, NextResponse } from 'next/server';
import { formatDataForCSV } from '@/lib/stockData';
import fs from 'fs/promises';
import path from 'path';

// Function to fetch latest data from Alpha Vantage
async function fetchLatestAPIData(): Promise<any[]> {
  try {
    const apiKey = 'W0W2UQ53HXPJO5CL';
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=CGL.L&apikey=${apiKey}&outputsize=compact`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data['Error Message']) {
      throw new Error(`API Error: ${data['Error Message']}`);
    }
    
    if (data['Note']) {
      throw new Error('API rate limit reached');
    }
    
    const timeSeries = data['Time Series (Daily)'];
    if (!timeSeries) {
      throw new Error('No time series data available');
    }

    // Convert API data to our format
    const apiEntries = Object.entries(timeSeries).map(([date, data]: [string, any]) => ({
      date: new Date(date),
      dateStr: new Date(date).toLocaleDateString('en-GB', { 
        day: '2-digit', 
        month: 'short', 
        year: '2-digit' 
      }).replace(/ /g, '-'),
      price: parseFloat(data['4. close']) * (parseFloat(data['4. close']) < 10 ? 100 : 1), // Fix scaling
      nav: 0, // Will need manual NAV update
      volume: parseInt(data['5. volume']) || 0
    }));

    return apiEntries.sort((a, b) => a.date.getTime() - b.date.getTime());
  } catch (error) {
    console.error('Error fetching API data:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    // Read current CSV file
    const csvPath = path.join(process.cwd(), 'public', 'liveprice_nav.csv');
    const csvContent = await fs.readFile(csvPath, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      return NextResponse.json({ error: 'Empty CSV file' }, { status: 400 });
    }

    // Get the last date from CSV
    const lastLine = lines[lines.length - 1];
    const lastDate = lastLine.split(',')[0];
    
    if (!lastDate) {
      return NextResponse.json({ error: 'Invalid CSV format' }, { status: 400 });
    }

    // Parse last CSV date
    const lastDateParts = lastDate.trim().split('-');
    const lastCSVDate = new Date(
      parseInt(lastDateParts[2]) + 2000,
      { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 }[lastDateParts[1]],
      parseInt(lastDateParts[0])
    );

    // Fetch latest data from API
    const apiData = await fetchLatestAPIData();
    
    // Filter to only new data after the last CSV date
    const newData = apiData.filter(item => item.date > lastCSVDate);
    
    if (newData.length === 0) {
      return NextResponse.json({ 
        message: 'No new data to add', 
        lastCSVDate: lastDate,
        dataChecked: apiData.length 
      });
    }

    // Format new data for CSV
    const newCSVLines = formatDataForCSV(newData);
    
    // Append to CSV file
    const updatedCSV = csvContent.trim() + '\n' + newCSVLines;
    await fs.writeFile(csvPath, updatedCSV, 'utf-8');

    return NextResponse.json({ 
      message: 'CSV updated successfully',
      newDataPoints: newData.length,
      lastCSVDate: lastDate,
      newDataRange: {
        from: newData[0]?.dateStr,
        to: newData[newData.length - 1]?.dateStr
      }
    });

  } catch (error) {
    console.error('Error updating CSV:', error);
    return NextResponse.json({ 
      error: 'Failed to update CSV', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Use POST to update CSV with latest stock data' 
  });
} 