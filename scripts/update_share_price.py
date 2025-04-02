import json
import os
import requests
import time
from datetime import datetime, timedelta
import pytz
from typing import Optional, Dict, Any

ALPHA_VANTAGE_API_KEY = 'W0W2UQ53HXPJO5CL'  # Replace with new API key
SYMBOL = 'CGL.L'
OUTPUT_FILE = 'public/stock-data.json'
RATE_LIMIT_FILE = 'scripts/.rate_limit'

def get_last_api_call() -> Optional[datetime]:
    """Get the timestamp of the last API call."""
    try:
        if os.path.exists(RATE_LIMIT_FILE):
            with open(RATE_LIMIT_FILE, 'r') as f:
                timestamp = float(f.read().strip())
                return datetime.fromtimestamp(timestamp, pytz.UTC)
    except Exception:
        pass
    return None

def update_last_api_call():
    """Update the timestamp of the last API call."""
    try:
        with open(RATE_LIMIT_FILE, 'w') as f:
            f.write(str(datetime.now(pytz.UTC).timestamp()))
    except Exception as e:
        print(f"Error updating rate limit file: {e}")

def can_make_api_call() -> bool:
    """Check if we can make an API call based on rate limits."""
    last_call = get_last_api_call()
    if not last_call:
        return True
    
    # Alpha Vantage free tier: 5 calls per minute, 500 calls per day
    time_since_last_call = datetime.now(pytz.UTC) - last_call
    return time_since_last_call.total_seconds() >= 12  # Minimum 12 seconds between calls

def fetch_stock_data() -> Optional[Dict[str, Any]]:
    """Fetch the stock data from Alpha Vantage."""
    if not can_make_api_call():
        print("Rate limit reached. Please wait before making another API call.")
        return None

    try:
        # Fetch weekly time series data
        weekly_url = f'https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol={SYMBOL}&apikey={ALPHA_VANTAGE_API_KEY}'
        print(f"Fetching weekly data from: {weekly_url}")
        weekly_response = requests.get(weekly_url)
        weekly_data = weekly_response.json()
        
        # Update rate limit tracking
        update_last_api_call()
        
        if "Weekly Time Series" not in weekly_data:
            if "Note" in weekly_data:
                print(f"API Limit Warning: {weekly_data['Note']}")
            else:
                print("Unexpected API response format for weekly data")
            return None

        # Wait 12 seconds before next API call
        time.sleep(12)

        # Fetch company overview data
        overview_url = f'https://www.alphavantage.co/query?function=OVERVIEW&symbol={SYMBOL}&apikey={ALPHA_VANTAGE_API_KEY}'
        print(f"Fetching overview data from: {overview_url}")
        overview_response = requests.get(overview_url)
        overview_data = overview_response.json()
        
        # Update rate limit tracking again
        update_last_api_call()

        if not overview_data:
            print("Unexpected API response format for overview data")
            return None

        # Process weekly data
        time_series_data = weekly_data['Weekly Time Series']
        dates = list(time_series_data.keys())  # Get all available dates
        prices = [float(time_series_data[date]['4. close']) for date in dates]

        # Get market cap from overview data
        market_cap = float(overview_data.get('MarketCapitalization', 0))
        
        # Transform data into our format
        transformed_data = {
            'currentPrice': prices[0],
            'marketCap': market_cap,
            'lastUpdated': datetime.now(pytz.UTC).isoformat(),
            'historicalData': {
                'labels': [datetime.strptime(date, '%Y-%m-%d').strftime('%d/%m/%Y') for date in dates],
                'prices': prices
            }
        }

        return transformed_data

    except requests.RequestException as e:
        print(f"Network error: {e}")
    except (KeyError, ValueError) as e:
        print(f"Error parsing data: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
    return None

def get_cached_data() -> Optional[Dict[str, Any]]:
    """Get the currently cached data."""
    try:
        if os.path.exists(OUTPUT_FILE):
            with open(OUTPUT_FILE, 'r') as f:
                return json.load(f)
    except Exception as e:
        print(f"Error reading cache: {e}")
    return None

def update_stock_data() -> bool:
    """Update the stock data file."""
    data = fetch_stock_data()
    if data is None:
        print("Failed to fetch new stock data")
        return False
    
    try:
        os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
        with open(OUTPUT_FILE, 'w') as f:
            json.dump(data, f, indent=2)
        print(f"Successfully updated stock data:")
        print(f"Price: £{data['currentPrice']:.2f}")
        print(f"Market Cap: £{data['marketCap']:,.2f}")
        print(f"Last Updated: {data['lastUpdated']}")
        return True
    except Exception as e:
        print(f"Error updating file: {e}")
        return False

if __name__ == "__main__":
    # If we can't update the data, keep the existing cache
    if not update_stock_data():
        cached_data = get_cached_data()
        if cached_data:
            print("Using existing cache due to update failure")
            print(f"Cached price: £{cached_data['currentPrice']:.2f}")
            print(f"Last updated: {cached_data['lastUpdated']}")
        else:
            print("No cache available and couldn't fetch new data") 