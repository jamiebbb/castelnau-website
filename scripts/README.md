# Stock Data Update System

This directory contains scripts to update the Castelnau Group stock data automatically, avoiding API rate limits and ensuring accurate pricing.

## Overview

The system uses a local JSON file (`public/stock-data-history.json`) to store historical stock data, which is prioritized over API calls. This prevents the price scaling issues (0.82p vs 82p) and reduces API usage.

## Files

- `update_stock_data.py` - Main Python script to fetch and update stock data
- `update_stock_data.bat` - Windows batch file for easy execution
- `requirements.txt` - Python dependencies

## Setup

1. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Ensure the Alpha Vantage API key is configured in `update_stock_data.py`

## Usage

### Manual Update

**Windows:**
```bash
# Double-click update_stock_data.bat or run:
scripts/update_stock_data.bat
```

**Linux/Mac:**
```bash
python scripts/update_stock_data.py
```

### Automated Daily Updates

**Windows Task Scheduler:**
1. Open Task Scheduler
2. Create Basic Task
3. Set trigger to "Daily"
4. Set action to start the batch file: `scripts/update_stock_data.bat`

**Linux/Mac Cron:**
```bash
# Edit crontab
crontab -e

# Add line for daily update at 6 PM
0 18 * * * /usr/bin/python3 /path/to/scripts/update_stock_data.py
```

## Features

- **Price Scaling Fix**: Automatically corrects Alpha Vantage's price scaling (converts 0.82 to 82p)
- **Rate Limiting**: Respects API limits and maintains historical data
- **Data Management**: Keeps last 365 days of data for performance
- **Error Handling**: Graceful fallback if API is unavailable
- **Local Priority**: Website loads local data first, avoiding API calls during normal operation

## Data Structure

The `stock-data-history.json` file contains:

```json
{
  "lastUpdated": "2024-12-19T10:00:00.000Z",
  "currentPrice": 82,
  "marketCap": 272600000000,
  "dailyData": {
    "2024-12-19": { "close": 82, "volume": 20000 },
    ...
  }
}
```

## Troubleshooting

**Issue: API Rate Limit Exceeded**
- Solution: The system automatically falls back to cached/local data

**Issue: Incorrect Price Scaling**
- Solution: The `fix_price_scaling()` function automatically corrects this

**Issue: Missing Dependencies**
- Solution: Run `pip install -r requirements.txt`

**Issue: Permission Errors**
- Solution: Ensure the script has write permissions to the `public/` directory

## Integration

The website automatically:
1. Loads data from `stock-data-history.json` first
2. Falls back to cached API data if local file unavailable
3. Uses API as last resort if all else fails
4. Displays prices correctly as 82p instead of 0.82p

This ensures reliable, accurate stock data display without API overloading. 