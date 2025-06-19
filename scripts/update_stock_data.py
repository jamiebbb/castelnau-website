#!/usr/bin/env python3
"""
Daily Stock Data Updater for Castelnau Group Limited (CGL.L)

This script fetches the latest stock data from Alpha Vantage API and updates
the local stock-data-history.json file. It ensures proper price scaling
(82p instead of 0.82p) and maintains historical data.

Usage: python update_stock_data.py
"""

import requests
import json
import os
import datetime
from pathlib import Path

# Configuration
API_KEY = 'W0W2UQ53HXPJO5CL'  # Alpha Vantage API key
SYMBOL = 'CGL.L'  # Castelnau Group Limited on London Stock Exchange
SHARES_OUTSTANDING = 332.45  # Million shares
DATA_FILE = '../public/stock-data-history.json'

def fix_price_scaling(price):
    """Fix price scaling - CGL should be around 80-90p, not 0.80-0.90p"""
    if price < 10:
        return price * 100  # Convert from pounds to pence
    return price

def fetch_stock_data():
    """Fetch latest stock data from Alpha Vantage API"""
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={SYMBOL}&apikey={API_KEY}&outputsize=full'
    
    try:
        response = requests.get(url, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        if 'Error Message' in data:
            raise Exception(f"API Error: {data['Error Message']}")
        
        if 'Note' in data:
            raise Exception(f"API Rate limit: {data['Note']}")
        
        time_series = data.get('Time Series (Daily)')
        if not time_series:
            raise Exception("No time series data received")
        
        return time_series
    
    except requests.exceptions.RequestException as e:
        raise Exception(f"Network error: {e}")

def load_existing_data():
    """Load existing stock data from JSON file"""
    data_file_path = Path(__file__).parent / DATA_FILE
    
    if data_file_path.exists():
        try:
            with open(data_file_path, 'r') as f:
                return json.load(f)
        except json.JSONDecodeError:
            print("Warning: Existing data file is corrupted, starting fresh")
    
    # Return default structure if file doesn't exist or is corrupted
    return {
        "lastUpdated": "",
        "currentPrice": 82,
        "marketCap": 272600000000,
        "dailyData": {}
    }

def update_stock_data():
    """Main function to update stock data"""
    print(f"Fetching stock data for {SYMBOL}...")
    
    try:
        # Fetch new data from API
        api_data = fetch_stock_data()
        
        # Load existing data
        existing_data = load_existing_data()
        
        # Get the most recent trading day
        latest_date = max(api_data.keys())
        latest_data = api_data[latest_date]
        
        # Fix price scaling
        current_price = fix_price_scaling(float(latest_data['4. close']))
        
        # Calculate market cap (in pounds, then scale up for storage)
        market_cap_pounds = (SHARES_OUTSTANDING * current_price) / 100  # Convert pence to pounds
        market_cap = market_cap_pounds * 1000000  # Convert to actual value (millions to base)
        
        # Update current values
        existing_data['currentPrice'] = current_price
        existing_data['marketCap'] = market_cap * 1000  # Store as full number for division by 1B later
        existing_data['lastUpdated'] = datetime.datetime.now().isoformat() + 'Z'
        
        # Process ALL historical data (no date limit - get full history)
        print(f"Processing historical data from {min(api_data.keys())} to {max(api_data.keys())}...")
        
        # Add all daily data (no cutoff date)
        for date_str, day_data in api_data.items():
            price = fix_price_scaling(float(day_data['4. close']))
            volume = int(day_data['5. volume'])
            
            existing_data['dailyData'][date_str] = {
                'close': price,
                'volume': volume
            }
        
        # Remove any invalid date entries but keep all valid historical data
        dates_to_remove = []
        for date_str in existing_data['dailyData'].keys():
            try:
                datetime.datetime.strptime(date_str, '%Y-%m-%d')
            except ValueError:
                # Invalid date format, remove it
                dates_to_remove.append(date_str)
        
        for date_str in dates_to_remove:
            del existing_data['dailyData'][date_str]
        
        # Save updated data
        data_file_path = Path(__file__).parent / DATA_FILE
        data_file_path.parent.mkdir(parents=True, exist_ok=True)
        
        with open(data_file_path, 'w') as f:
            json.dump(existing_data, f, indent=2)
        
        # Get date range for reporting
        all_dates = sorted(existing_data['dailyData'].keys())
        earliest_date = all_dates[0] if all_dates else "No data"
        latest_date = all_dates[-1] if all_dates else "No data"
        
        print(f"✅ Stock data updated successfully!")
        print(f"   Current Price: {current_price}p")
        print(f"   Market Cap: £{market_cap_pounds:.1f}M")
        print(f"   Data points: {len(existing_data['dailyData'])}")
        print(f"   Date range: {earliest_date} to {latest_date}")
        print(f"   Years of data: {len(set(date[:4] for date in all_dates))} years")
        
    except Exception as e:
        print(f"❌ Error updating stock data: {e}")
        return False
    
    return True

if __name__ == '__main__':
    success = update_stock_data()
    exit(0 if success else 1) 