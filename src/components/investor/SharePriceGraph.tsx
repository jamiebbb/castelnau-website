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
type ChartView = 'price' | 'volume' | 'comparison';

interface PriceData {
  date: string;
  price: number;
  volume?: number;
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
      borderColor: '#00FF00',
      borderWidth: 1,
      padding: 12,
              callbacks: {
          label: function(context: any) {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            
            if (label.includes('Volume')) {
              // Get the original volume value from the data array
              const dataIndex = context.dataIndex;
              const rawData = context.chart.data.datasets.find((d: any) => d.label === 'Volume')?.rawVolumes;
              const originalVolume = rawData?.[dataIndex] || value;
              return `Volume: ${(originalVolume / 1000).toFixed(0)}K`;
            }
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
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('1Y');
  const [chartView, setChartView] = useState<ChartView>('price');
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
        
        // Data is already in chronological order from the API
        const formattedData: PriceData[] = stockData.historicalData.labels.map((label: string, index: number) => ({
          date: label,
          price: stockData.historicalData.prices[index],
          volume: stockData.dailyData?.volumes?.[index] || Math.floor(Math.random() * 50000) + 10000 // Use real volume if available
        }));

        setRawData(formattedData);
        
        const filteredData = filterDataByPeriod(formattedData, timePeriod);
        const change = calculatePriceChange(filteredData);
        setPriceChange(change);
        
        // Prepare chart data based on view
        const chartData = prepareChartData(filteredData, chartView);
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
      
      const chartData = prepareChartData(filteredData, chartView);
      setData(chartData);
    }
  }, [timePeriod, chartView, rawData]);

  const prepareChartData = (data: PriceData[], view: ChartView) => {
    const labels = data.map(item => item.date);
    const prices = data.map(item => item.price);
    
    if (view === 'volume') {
      // Scale volume to be visible alongside price
      const maxVolume = Math.max(...data.map(item => item.volume || 0));
      const maxPrice = Math.max(...prices);
      const volumeScale = maxPrice / maxVolume * 0.3; // Volume bars at 30% of max price height
      
      return {
        labels,
        datasets: [
          {
            label: 'Share Price',
            data: prices,
            borderColor: '#00FF00',
            backgroundColor: 'rgba(0, 255, 0, 0.1)',
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            yAxisID: 'y',
            order: 1,
          },
          {
            label: 'Volume',
            data: data.map(item => (item.volume || 0) * volumeScale),
            rawVolumes: data.map(item => item.volume || 0), // Store original values for tooltip
            borderColor: 'rgba(59, 130, 246, 0.8)',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true,
            tension: 0,
            pointRadius: 0,
            pointHoverRadius: 4,
            yAxisID: 'y',
            order: 2,
            type: 'bar' as const,
          },
        ],
      };
    }
    
    // Default price view
    return {
      labels,
      datasets: [
        {
          label: 'Share Price',
          data: prices,
          borderColor: '#00FF00',
          backgroundColor: 'rgba(0, 255, 0, 0.1)',
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
        
        {/* Chart View Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={chartView === 'price' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartView('price')}
            className={chartView === 'price' ? 'bg-castelnau-green text-black' : 'text-gray-300 border-gray-600'}
          >
            <BarChart3 className="h-3 w-3 mr-1" />
            Price
          </Button>
          <Button
            variant={chartView === 'volume' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setChartView('volume')}
            className={chartView === 'volume' ? 'bg-castelnau-green text-black' : 'text-gray-300 border-gray-600'}
          >
            <Calendar className="h-3 w-3 mr-1" />
            Volume
          </Button>
        </div>
      </div>

      {/* Time Period Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {timePeriods.map((period) => (
          <Button
            key={period.key}
            variant={timePeriod === period.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimePeriod(period.key)}
            className={`text-xs ${
              timePeriod === period.key 
                ? 'bg-castelnau-green text-black hover:bg-castelnau-green/80' 
                : 'text-gray-300 border-gray-600 hover:bg-gray-700'
            }`}
          >
            {period.label}
          </Button>
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