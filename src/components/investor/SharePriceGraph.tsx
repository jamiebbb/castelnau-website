'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getEnhancedStockData } from '@/lib/stockData';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, Calendar, BarChart3 } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type TimePeriod = '1M' | '3M' | '6M' | '1Y' | '2Y' | 'ALL';

interface PriceData {
  date: string;
  price: number;
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      mode: 'index' as const,
      intersect: false,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: '#3B82F6',
      borderWidth: 1,
      padding: 12,
              callbacks: {
          label: function(context: any) {
            const value = context.parsed.y;
            return `Share Price: ${value.toFixed(2)}p`;
          },
        title: function(context: any) {
          return new Date(context[0].label).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          });
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      position: 'left' as const,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        drawBorder: false,
      },
      ticks: {
        color: '#ffffff',
        font: {
          size: 11,
        },
        callback: function(value: any) {
          return value.toFixed(2) + 'p';
        }
      },
    },

    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#ffffff',
        font: {
          size: 10,
        },
        maxRotation: 0,
        maxTicksLimit: 8,
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'index' as const,
  },
};

export const SharePriceGraph = () => {
  const [data, setData] = useState<any>(null);
  const [rawData, setRawData] = useState<PriceData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('ALL');
  const [priceChange, setPriceChange] = useState<{ value: number; percentage: number } | null>(null);

  const timePeriods: { key: TimePeriod; label: string; days?: number }[] = [
    { key: '1M', label: '1M', days: 30 },
    { key: '3M', label: '3M', days: 90 },
    { key: '6M', label: '6M', days: 180 },
    { key: '1Y', label: '1Y', days: 365 },
    { key: '2Y', label: '2Y', days: 730 },
    { key: 'ALL', label: 'ALL' },
  ];

  const filterDataByPeriod = (data: PriceData[], period: TimePeriod) => {
    if (period === 'ALL') return data;
    
    const periodConfig = timePeriods.find(p => p.key === period);
    if (!periodConfig?.days) return data;

    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - periodConfig.days);
    
    return data.filter(item => new Date(item.date) >= cutoffDate);
  };

  const calculatePriceChange = (data: PriceData[]) => {
    if (data.length < 2) return null;
    
    const firstPrice = data[0].price;
    const lastPrice = data[data.length - 1].price;
    const change = lastPrice - firstPrice;
    const percentage = (change / firstPrice) * 100;
    
    return { value: change, percentage };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stockData = await getEnhancedStockData();
        
        console.log('SharePriceGraph received stock data:', {
          totalLabels: stockData.historicalData.labels.length,
          firstLabel: stockData.historicalData.labels[0],
          lastLabel: stockData.historicalData.labels[stockData.historicalData.labels.length - 1],
          lastFiveLabels: stockData.historicalData.labels.slice(-5)
        });
        
        // Data is already in chronological order from the API
        const formattedData: PriceData[] = stockData.historicalData.labels.map((label: string, index: number) => ({
          date: label,
          price: stockData.historicalData.prices[index],
        }));

        console.log('Formatted data:', {
          totalPoints: formattedData.length,
          firstDate: formattedData[0]?.date,
          lastDate: formattedData[formattedData.length - 1]?.date,
          lastFiveDates: formattedData.slice(-5).map(d => d.date)
        });

        setRawData(formattedData);
        
        const filteredData = filterDataByPeriod(formattedData, timePeriod);
        console.log(`Filtered data for ${timePeriod}:`, {
          totalPoints: filteredData.length,
          firstDate: filteredData[0]?.date,
          lastDate: filteredData[filteredData.length - 1]?.date
        });
        
        const change = calculatePriceChange(filteredData);
        setPriceChange(change);
        
        // Prepare chart data based on view
        const chartData = prepareChartData(filteredData);
        setData(chartData);
        
        setLoading(false);
      } catch (err) {
        console.error('Share price graph error:', err);
        setError('Failed to load share price data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (rawData.length > 0) {
      const filteredData = filterDataByPeriod(rawData, timePeriod);
      const change = calculatePriceChange(filteredData);
      setPriceChange(change);
      
      const chartData = prepareChartData(filteredData);
      setData(chartData);
    }
  }, [timePeriod, rawData]);

  const prepareChartData = (data: PriceData[]) => {
    const labels = data.map(item => item.date);
    const prices = data.map(item => item.price);
    
    return {
      labels,
      datasets: [
        {
          label: 'Share Price',
          data: prices,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 4,
        },
      ],
    };
  };

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 h-[500px] flex items-center justify-center">
        <div className="text-white">Loading share price data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 h-[500px] flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Share Price History</h2>
          {priceChange && (
            <div className="flex items-center space-x-4">
              <div className={`flex items-center space-x-1 ${
                priceChange.percentage >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {priceChange.percentage >= 0 ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {priceChange.value >= 0 ? '+' : ''}{priceChange.value.toFixed(2)}p 
                  ({priceChange.percentage >= 0 ? '+' : ''}{priceChange.percentage.toFixed(2)}%)
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                {timePeriod === 'ALL' ? 'Since inception' : `Past ${timePeriod}`}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {timePeriods.map((period) => (
          <button
            key={period.key}
            onClick={() => setTimePeriod(period.key)}
            className={`px-3 py-1.5 text-xs rounded-lg transition-all duration-200 ${
              timePeriod === period.key 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="h-[400px]">
        {data && <Line options={options} data={data} />}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between text-xs text-gray-500">
          <span>Historical price and NAV data • Real market data</span>
          <span>Prices in pence</span>
        </div>
      </div>
    </div>
  );
}; 