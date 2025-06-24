import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    // Read the CSV file from the public directory
    const csvPath = join(process.cwd(), 'public', 'liveprice_nav.csv');
    const csvContent = readFileSync(csvPath, 'utf8');
    
    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return NextResponse.json({ error: 'CSV file not found' }, { status: 404 });
  }
} 