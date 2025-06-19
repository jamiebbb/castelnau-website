# Excel to CSV Conversion Instructions

## Method 1: Using Microsoft Excel (Recommended)

1. **Open the Excel file:**
   - Double-click on `liveprice_nav.xlsx` to open it in Microsoft Excel

2. **Save as CSV:**
   - Click **File** → **Save As**
   - Choose the location (same folder as the Excel file)
   - In the **Save as type** dropdown, select **CSV (Comma delimited) (*.csv)**
   - Name the file `liveprice_nav.csv`
   - Click **Save**

3. **Confirm the conversion:**
   - Excel may show a warning about CSV format limitations
   - Click **Yes** to continue with CSV format

## Method 2: Using Google Sheets

1. **Upload to Google Sheets:**
   - Go to [Google Sheets](https://sheets.google.com)
   - Click **File** → **Import** → **Upload**
   - Select `liveprice_nav.xlsx`

2. **Download as CSV:**
   - Once opened, click **File** → **Download** → **Comma-separated values (.csv)**
   - Save as `liveprice_nav.csv`

## Method 3: Using Python (if available)

```python
import pandas as pd

# Read Excel file
df = pd.read_excel('liveprice_nav.xlsx')

# Save as CSV
df.to_csv('liveprice_nav.csv', index=False)

print("Conversion completed!")
```

## Method 4: Online Converters

- Visit online Excel to CSV converters like:
  - convertio.co
  - zamzar.com
  - cloudconvert.com

Upload `liveprice_nav.xlsx` and download the converted CSV file.

## Expected Result

After conversion, you should have a `liveprice_nav.csv` file that contains the same data as the Excel file but in comma-separated format, which can be easily read by programming languages and data analysis tools. 