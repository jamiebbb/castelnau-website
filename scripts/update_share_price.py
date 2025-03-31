import json
import os
import requests
import time
from datetime import datetime, timedelta
import pytz
from typing import Optional, Dict, Any

ALPHA_VANTAGE_API_KEY = 'LKRB0RE577TSMDK0'
SYMBOL = 'CTN.L'
OUTPUT_FILE = 'public/share-price.json'
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
        os.makedirs(os.path.dirname(RATE_LIMIT_FILE), exist_ok=True)
        with open(RATE_LIMIT_FILE, 'w') as f:
            f.write(str(datetime.now(pytz.UTC).timestamp()))
    except Exception as e:
        print(f"Warning: Could not update rate limit file: {e}")

def can_make_api_call() -> bool:
    """Check if we can make an API call based on rate limits."""
    last_call = get_last_api_call()
    if last_call is None:
        return True
    
    now = datetime.now(pytz.UTC)
    minutes_since_last_call = (now - last_call).total_seconds() / 60
    
    # Alpha Vantage free tier: 5 calls per minute, 500 calls per day
    return minutes_since_last_call >= 1  # Wait at least 1 minute between calls

def fetch_stock_data() -> Optional[Dict[str, Any]]:
    """Fetch the stock data from Alpha Vantage."""
    if not can_make_api_call():
        print("Rate limit reached. Please wait before making another API call.")
        return None

    try:
        url = f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={SYMBOL}&apikey={ALPHA_VANTAGE_API_KEY}'
        response = requests.get(url)
        data = response.json()
        
        # Update rate limit tracking
        update_last_api_call()
        
        if "Global Quote" not in data:
            if "Note" in data:
                print(f"API Limit Warning: {data['Note']}")
            else:
                print("Unexpected API response format")
            return None
            
        quote = data['Global Quote']
        return {
            'symbol': SYMBOL,
            'price': float(quote['05. price']),
            'change': float(quote['09. change']),
            'change_percent': float(quote['10. change percent'].rstrip('%')),
            'volume': int(quote['06. volume']),
            'latest_trading_day': quote['07. latest trading day'],
            'last_updated': datetime.now(pytz.UTC).isoformat(),
            'cached': False
        }
    except requests.RequestException as e:
        print(f"Network error: {e}")
    except (KeyError, ValueError) as e:
        print(f"Error parsing price data: {e}")
    except Exception as e:
        print(f"Unexpected error: {e}")
    return None

def get_cached_data() -> Optional[Dict[str, Any]]:
    """Get the currently cached price data."""
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
        print(f"Price: £{data['price']:.2f}")
        print(f"Change: {data['change']:+.2f} ({data['change_percent']:+.2f}%)")
        print(f"Volume: {data['volume']:,}")
        print(f"Last Trading Day: {data['latest_trading_day']}")
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
            print(f"Cached price: £{cached_data['price']:.2f}")
            print(f"Last updated: {cached_data['last_updated']}")
        else:
            print("No cache available and couldn't fetch new data") 