import json
import os
import requests
import time
from datetime import datetime, timedelta
import pytz
from typing import Optional, Dict, Any

ALPHA_VANTAGE_API_KEY = 'LKRB0RE577TSMDK0'
SYMBOL = 'CTN.L'
CACHE_FILE = 'public/share-price.json'
CACHE_DURATION = timedelta(hours=24)
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

def fetch_latest_price() -> Optional[float]:
    """Fetch the latest share price from Alpha Vantage."""
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
            
        price = float(data['Global Quote']['05. price'])
        return price
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
        if os.path.exists(CACHE_FILE):
            with open(CACHE_FILE, 'r') as f:
                return json.load(f)
    except Exception as e:
        print(f"Error reading cache: {e}")
    return None

def should_update_cache() -> bool:
    """Check if we need to update the cache based on its age."""
    cached_data = get_cached_data()
    if cached_data is None:
        return True
    
    try:
        last_update = datetime.fromisoformat(cached_data['last_updated'])
        now = datetime.now(pytz.UTC)
        return (now - last_update) > CACHE_DURATION
    except (KeyError, ValueError):
        return True

def update_cache() -> bool:
    """Update the share price cache."""
    # First check if we actually need to update
    if not should_update_cache():
        print("Cache is still fresh, no update needed")
        return True

    # Then check rate limits
    if not can_make_api_call():
        print("Rate limit reached. Using existing cache if available.")
        return False

    price = fetch_latest_price()
    if price is None:
        print("Failed to fetch new price")
        return False
    
    cache_data = {
        'price': price,
        'last_updated': datetime.now(pytz.UTC).isoformat(),
        'cached': True
    }
    
    try:
        os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
        with open(CACHE_FILE, 'w') as f:
            json.dump(cache_data, f, indent=2)
        print(f"Successfully updated share price to £{price:.2f}")
        return True
    except Exception as e:
        print(f"Error updating cache: {e}")
        return False

if __name__ == "__main__":
    # If cache exists but is old and we can't update due to rate limits,
    # keep using the old cache rather than failing
    if not update_cache():
        cached_data = get_cached_data()
        if cached_data:
            print("Using existing cache due to rate limits")
            print(f"Cached price: £{cached_data['price']:.2f}")
            print(f"Last updated: {cached_data['last_updated']}")
        else:
            print("No cache available and couldn't fetch new data") 