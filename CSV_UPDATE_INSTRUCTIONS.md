# Daily CSV Update System for Share Price Data

## Overview

This system automatically updates the `liveprice_nav.csv` file with the latest stock price data from Alpha Vantage API, keeping your historical data current while preserving all existing data.

## Features

- ✅ **Hybrid Data Source**: Uses CSV historical data + latest API data
- ✅ **Automatic Updates**: Fetches only new data since the last CSV entry
- ✅ **No Duplicates**: Prevents duplicate entries
- ✅ **NAV Placeholder**: Sets NAV to 0.000 for manual update later
- ✅ **Y-axis from 0**: Graph now starts from 0p for better visualization

## How It Works

1. **Graph Display**: 
   - Loads your historical CSV data (Oct 2021 - May 2025)
   - Automatically merges with any newer API data
   - Shows complete timeline with all time period filters working

2. **Daily Updates**:
   - Checks the last date in your CSV file
   - Fetches latest data from Alpha Vantage API
   - Adds only new trading days to the CSV
   - Preserves all existing data

## Usage

### Method 1: Run the Script Manually

```bash
node scripts/update_csv_daily.js
```

### Method 2: Double-click the Batch File (Windows)

```
scripts/update_csv_daily.bat
```

### Method 3: Set Up Automated Daily Updates

**Windows Task Scheduler:**
1. Open Task Scheduler
2. Create Basic Task
3. Set to run daily at 9:00 AM (after market open)
4. Action: Start a program
5. Program: `node`
6. Arguments: `scripts/update_csv_daily.js`
7. Start in: `C:\path\to\your\project`

**Linux/Mac Cron Job:**
```bash
# Edit crontab
crontab -e

# Add this line for daily updates at 9 AM on weekdays
0 9 * * 1-5 cd /path/to/project && node scripts/update_csv_daily.js
```

### ~~Method 4: API Endpoint~~ (Not available with static export)

**Note**: The API endpoint method is not available when using `output: 'export'` for static site generation (GitHub Pages). Use the script methods above instead.

## Output Examples

**When new data is found:**
```
🔄 Starting daily CSV update...
📅 Last CSV date: 30-May-25
🌐 Fetching latest data from Alpha Vantage...
✅ Successfully added 14 new data points to CSV
📈 Date range: 02-Jun-25 to 18-Jun-25
⚠️  Note: NAV values are set to 0.000 and need manual update
```

**When no new data:**
```
🔄 Starting daily CSV update...
📅 Last CSV date: 18-Jun-25
🌐 Fetching latest data from Alpha Vantage...
✅ No new data to add - CSV is up to date
```

## Important Notes

### NAV Values
- **API data sets NAV to 0.000** (placeholder)
- You'll need to manually update NAV values for new entries
- Existing historical NAV data is preserved

### Data Format
- **Dates**: DD-MMM-YY format (e.g., "18-Jun-25")
- **Prices**: In pounds (e.g., 0.8200 = 82p)
- **NAV**: In pounds with quotes (e.g., "1.001")

### API Limits
- **Alpha Vantage Free**: 5 calls per day, 500 per month
- Script respects rate limits and will skip updates if limit reached
- Consider upgrading API plan for higher frequency updates

## Files Created/Modified

- `public/liveprice_nav.csv` - Your main data file (gets updated)
- `scripts/update_csv_daily.js` - Node.js update script
- `scripts/update_csv_daily.bat` - Windows batch file
- ~~`src/app/api/update-csv/route.ts`~~ - Removed (incompatible with static export)
- `src/lib/stockData.ts` - Enhanced to merge CSV + API data

## Troubleshooting

### "No new data to add"
- Normal if markets are closed or no trading occurred
- Check if the last CSV date is current

### "API rate limit reached"
- Wait until next day for free tier reset
- Or upgrade Alpha Vantage plan

### "Invalid CSV format"
- Check that CSV file exists in `public/` directory
- Ensure CSV has proper header row and data format

### Graph not updating
- Refresh browser to clear cache
- Check browser console for errors
- Verify CSV file is in `public/` directory

## Maintenance

1. **Weekly**: Check that NAV values are updated for recent entries
2. **Monthly**: Verify API key is still active
3. **Quarterly**: Review data accuracy and check for any gaps

## Next Steps

1. Set up daily automation using your preferred method above
2. Update NAV values manually for recent entries (marked as "0.000")
3. Monitor the system for a few days to ensure it's working correctly

The system is now ready to keep your stock price graph automatically updated! 🚀 