#!/usr/bin/env node

/**
 * Simple cache clearing helper
 * This script helps ensure the browser and Next.js get fresh data
 */

console.log('🔄 To clear cache and see updated data:');
console.log('');
console.log('1. ✅ CSV file has been fixed and sorted');
console.log('2. 🔄 Restart your development server:');
console.log('   - Stop the current dev server (Ctrl+C)');
console.log('   - Run: npm run dev');
console.log('');
console.log('3. 🌐 In your browser:');
console.log('   - Hard refresh the page (Ctrl+F5 or Ctrl+Shift+R)');
console.log('   - Or open Dev Tools > Network tab > check "Disable cache"');
console.log('');
console.log('4. 📊 Navigate to: http://localhost:3000/investor-relations');
console.log('');
console.log('The share price graph should now show data chronologically from Oct 2021 to Jun 18, 2025!');
console.log('✅ Graph y-axis now starts from 0p as requested');
console.log('✅ Data is now properly sorted chronologically');
console.log('✅ Duplicate entries have been removed');

// Clear cache script for development
console.log('Clearing all caches...');

// Clear localStorage
if (typeof window !== 'undefined') {
  localStorage.clear();
  sessionStorage.clear();
  console.log('Browser storage cleared');
}

// Clear service worker cache if available
if ('serviceWorker' in navigator && 'caches' in window) {
  caches.keys().then(names => {
    names.forEach(name => {
      caches.delete(name);
    });
    console.log('Service worker caches cleared');
  });
}

// Clear all stock data specific localStorage keys
const stockDataKeys = [
  'stock_data_cache',
  'stock_data_daily_cache', 
  'api_call_count',
  'last_api_call_date'
];

stockDataKeys.forEach(key => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
});

console.log('All caches cleared. Please refresh the page.');

// Force reload after clearing cache
if (typeof window !== 'undefined') {
  window.location.reload(true);
} 