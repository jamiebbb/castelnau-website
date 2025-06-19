@echo off
echo Updating Castelnau Group stock data...
echo.

cd /d "%~dp0"
python update_stock_data.py

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Stock data update completed successfully!
    echo.
    echo To use this data, refresh your browser or clear the website cache.
) else (
    echo.
    echo ❌ Stock data update failed. Please check the error messages above.
)

echo.
pause 