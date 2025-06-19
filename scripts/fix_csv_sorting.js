#!/usr/bin/env node

/**
 * CSV Sorting Fix Script
 * 
 * This script reads the CSV file, removes duplicates, and sorts all entries chronologically
 */

const fs = require('fs').promises;
const path = require('path');

const CSV_PATH = path.join(__dirname, '..', 'public', 'liveprice_nav.csv');

function parseCSVDate(dateStr) {
  const parts = dateStr.trim().split('-');
  const day = parseInt(parts[0]);
  const monthMap = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };
  const month = monthMap[parts[1]];
  const year = parseInt(parts[2]) + 2000;
  return new Date(year, month, day);
}

async function fixCSVSorting() {
  try {
    console.log('🔧 Fixing CSV sorting and removing duplicates...');
    
    // Read the CSV file
    const csvContent = await fs.readFile(CSV_PATH, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim());
    
    if (lines.length === 0) {
      throw new Error('Empty CSV file');
    }

    // Extract header and data
    const header = lines[0];
    const dataLines = lines.slice(1);
    
    console.log(`📊 Processing ${dataLines.length} data entries...`);

    // Parse, deduplicate and sort data
    const parsedData = dataLines.map(line => {
      const [dateStr, priceStr, navStr] = line.split(',');
      const date = parseCSVDate(dateStr);
      return {
        date,
        dateStr: dateStr.trim(),
        price: priceStr.trim(),
        nav: navStr.trim(),
        originalLine: line.trim()
      };
    });

    // Remove duplicates (keep the first occurrence)
    const uniqueData = [];
    const seenDates = new Set();
    
    for (const item of parsedData) {
      const dateKey = item.date.toISOString().split('T')[0];
      if (!seenDates.has(dateKey)) {
        seenDates.add(dateKey);
        uniqueData.push(item);
      } else {
        console.log(`🗑️  Removing duplicate entry for ${item.dateStr}`);
      }
    }

    // Sort by date chronologically
    uniqueData.sort((a, b) => a.date.getTime() - b.date.getTime());

    console.log(`✅ Cleaned data: ${uniqueData.length} unique entries (removed ${dataLines.length - uniqueData.length} duplicates)`);

    // Reconstruct CSV content
    const sortedCSV = [header, ...uniqueData.map(item => item.originalLine)].join('\n');

    // Write back to file
    await fs.writeFile(CSV_PATH, sortedCSV, 'utf-8');

    console.log('✅ CSV file has been sorted and cleaned successfully!');
    console.log(`📅 Date range: ${uniqueData[0].dateStr} to ${uniqueData[uniqueData.length - 1].dateStr}`);
    
  } catch (error) {
    console.error('❌ Error fixing CSV:', error.message);
    process.exit(1);
  }
}

// Run the fix
fixCSVSorting(); 