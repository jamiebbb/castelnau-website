@echo off
echo Starting daily CSV update for Castelnau stock data...
echo.

cd /d "%~dp0.."
node scripts/update_csv_daily.js

echo.
echo Press any key to continue...
pause > nul 