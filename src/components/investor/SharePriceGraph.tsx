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
import { getStockData } from '@/lib/stockData';

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
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      borderColor: '#00FF00',
      borderWidth: 1,
      padding: 10,
      callbacks: {
        label: function(context: any) {
          return `Share Price: ${context.parsed.y.toFixed(2)}p`;
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
        drawBorder: false,
      },
      ticks: {
        color: '#ffffff',
        font: {
          size: 12,
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
          size: 12,
        },
        maxRotation: 45,
        minRotation: 45,
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stockData = await getStockData();
        
        const reversedLabels = [...stockData.historicalData.labels].reverse();
        const reversedPrices = [...stockData.historicalData.prices].reverse();

        setData({
          labels: reversedLabels,
          datasets: [
            {
              label: 'Share Price',
              data: reversedPrices,
              borderColor: '#00FF00',
              backgroundColor: 'rgba(0, 255, 0, 0.1)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 4,
            },
          ],
        });
        setLoading(false);
      } catch (err) {
        setError('Failed to load share price data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 h-[400px] flex items-center justify-center">
        <div className="text-white">Loading share price data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 rounded-lg p-6 h-[400px] flex items-center justify-center">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-white mb-4">Share Price History</h2>
      <div className="h-[400px]">
        {data && <Line options={options} data={data} />}
      </div>
    </div>
  );
}; 