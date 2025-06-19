#!/usr/bin/env node

/**
 * Daily CSV Update Script
 * 
 * This script fetches the latest stock data from Alpha Vantage API
 * and appends new data to the liveprice_nav.csv file.
 * 
 * Usage:
 * node scripts/update_csv_daily.js
 * 
 * Or set up as a daily cron job:
 * 0 9 * * 1-5 /usr/bin/node /path/to/project/scripts/update_csv_daily.js
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');

const API_KEY = 'W0W2UQ53HXPJO5CL';
const SYMBOL = 'CGL.L';
const CSV_PATH = path.join(__dirname, '..', 'public', 'liveprice_nav.csv');

function fetchAPIData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(new Error('Invalid JSON response'));
        }
      });
    }).on('error', reject);
  });
}

function formatDateToCSV(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear().toString().slice(-2);
  return `${day}-${month}-${year}`;
}

function fixPriceScaling(price) {
  // Alpha Vantage returns UK stock prices in GBP, but sometimes they're scaled incorrectly
  if (price < 10) {
    return price * 100; // Convert from pounds to pence
  }
  return price;
}

async function updateCSV() {
  try {
    console.log('🔄 Starting daily CSV update...');
    
    // Read current CSV file
    const csvContent = await fs.readFile(CSV_PATH, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      throw new Error('Empty CSV file');
    }

    // Get the last date from CSV
    const lastLine = lines[lines.length - 1];
    const lastDateStr = lastLine.split(',')[0];
    
    // Parse last CSV date
    const lastDateParts = lastDateStr.trim().split('-');
    const lastCSVDate = new Date(
      parseInt(lastDateParts[2]) + 2000,
      { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 }[lastDateParts[1]],
      parseInt(lastDateParts[0])
    );

    console.log(`📅 Last CSV date: ${lastDateStr}`);

    // Fetch latest data from Alpha Vantage
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${SYMBOL}&apikey=${API_KEY}&outputsize=compact`;
    
    console.log('🌐 Fetching latest data from Alpha Vantage...');
    const data = await fetchAPIData(url);
    
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

    // Convert API data and filter for new entries
    const newEntries = [];
    const existingDates = new Set();
    
    // Track existing dates to prevent duplicates
    const existingLines = csvContent.split('\n').slice(1).filter(line => line.trim());
    for (const line of existingLines) {
      const dateStr = line.split(',')[0];
      existingDates.add(dateStr);
    }
    
    for (const [dateStr, dayData] of Object.entries(timeSeries)) {
      const date = new Date(dateStr);
      const formattedDate = formatDateToCSV(date);
      
      // Only add dates after the last CSV date AND not already in the file
      if (date > lastCSVDate && !existingDates.has(formattedDate)) {
        const price = fixPriceScaling(parseFloat(dayData['4. close']));
        const priceInPounds = (price / 100).toFixed(4);
        const navPlaceholder = '"0.000"'; // NAV needs manual update
        
        newEntries.push(`${formattedDate},${priceInPounds},${navPlaceholder}`);
      }
    }

    if (newEntries.length === 0) {
      console.log('✅ No new data to add - CSV is up to date');
      return;
    }

    // Sort new entries by date chronologically
    newEntries.sort((a, b) => {
      const dateStrA = a.split(',')[0];
      const dateStrB = b.split(',')[0];
      
      // Parse dates properly for sorting
      const parseCSVDate = (dateStr) => {
        const parts = dateStr.split('-');
        const day = parseInt(parts[0]);
        const monthMap = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                          'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
        const month = monthMap[parts[1]];
        const year = parseInt(parts[2]) + 2000;
        return new Date(year, month, day);
      };
      
      return parseCSVDate(dateStrA).getTime() - parseCSVDate(dateStrB).getTime();
    });

    // Append new data to CSV
    const updatedCSV = csvContent.trim() + '\n' + newEntries.join('\n');
    await fs.writeFile(CSV_PATH, updatedCSV, 'utf-8');

    console.log(`✅ Successfully added ${newEntries.length} new data points to CSV`);
    console.log(`📈 Date range: ${newEntries[0].split(',')[0]} to ${newEntries[newEntries.length - 1].split(',')[0]}`);
    console.log('⚠️  Note: NAV values are set to 0.000 and need manual update');

  } catch (error) {
    console.error('❌ Error updating CSV:', error.message);
    process.exit(1);
  }
}

// Run the update
updateCSV(); 