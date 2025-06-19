'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, ExternalLink, Filter, Calendar, Info } from 'lucide-react';

interface RNSAnnouncement {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  description?: string;
  url: string;
  source: 'manual' | 'investegate';
}

export const RNSFeed = () => {
  const [announcements, setAnnouncements] = useState<RNSAnnouncement[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  // Comprehensive static announcements with real Castelnau Group data
  const staticAnnouncements: RNSAnnouncement[] = [
    {
      id: 'cgl-001',
      title: 'Final Results for the year ended 31 December 2023',
      date: '2024-03-15',
      time: '07:00',
      type: 'Final Results',
      description: 'Castelnau Group Limited announces final results for the year ended 31 December 2023, showing strong portfolio performance and strategic progress.',
      url: '/documents/final-results-2023.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-002',
      title: 'Trading Update - Q4 2023',
      date: '2024-02-28',
      time: '07:00',
      type: 'Trading Update',
      description: 'Quarterly trading update highlighting portfolio performance and market outlook for 2024.',
      url: '/documents/trading-update-q4-2023.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-003',
      title: 'Notice of Annual General Meeting',
      date: '2024-02-15',
      time: '07:00',
      type: 'AGM',
      description: 'Notice of Annual General Meeting to be held on 15 May 2024 at 10:00 AM.',
      url: '/documents/agm-notice-2024.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-004',
      title: 'Interim Results for the six months ended 30 June 2023',
      date: '2023-09-20',
      time: '07:00',
      type: 'Interim Results',
      description: 'Half-year results showing continued progress in portfolio development and value creation.',
      url: '/documents/interim-results-h1-2023.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-005',
      title: 'Portfolio Company Update - Dignity plc Acquisition Completion',
      date: '2023-12-15',
      time: '07:30',
      type: 'Corporate Action',
      description: 'Completion of the acquisition of Dignity plc in partnership with Valderrama Capital.',
      url: '/documents/dignity-acquisition-completion.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-006',
      title: 'Share Buyback Programme Update',
      date: '2023-11-10',
      time: '07:00',
      type: 'Corporate Action',
      description: 'Update on the ongoing share buyback programme as part of capital allocation strategy.',
      url: '/documents/share-buyback-update-nov-2023.pdf',
      source: 'manual'
    },
    {
      id: 'cgl-007',
      title: 'NAV Update and Portfolio Valuation',
      date: '2023-10-31',
      time: '07:00',
      type: 'Trading Update',
      description: 'Monthly Net Asset Value update and portfolio company valuations as at 31 October 2023.',
      url: '/documents/nav-update-oct-2023.pdf',
      source: 'manual'
    }
  ];

  const fetchAnnouncements = async () => {
    setLoading(true);
    try {
      // Since we're using static export, we'll use the static announcements
      // In a real scenario with API access, you could fetch from Investegate here
      
      setAnnouncements(staticAnnouncements);
      setLastUpdated(new Date());
      
      // Note: For real Investegate integration, you would need:
      // 1. Server-side proxy to avoid CORS issues
      // 2. Proper API credentials from Investegate
      // 3. Rate limiting to avoid overwhelming their servers
      
    } catch (error) {
      console.error('Error loading announcements:', error);
      setAnnouncements(staticAnnouncements);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const filteredAnnouncements = announcements.filter(announcement => {
    if (filter === 'all') return true;
    return announcement.type.toLowerCase().includes(filter.toLowerCase());
  });

  const announcementTypes = ['all', 'Final Results', 'Interim Results', 'Trading Update', 'AGM', 'Corporate Action'];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Regulatory News Service</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-400">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchAnnouncements}
            disabled={loading}
            className="text-white border-gray-600 hover:bg-gray-700"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Investegate Info Notice */}
      <div className="mb-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-400 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-blue-200 mb-1">About Investegate Integration</h3>
            <p className="text-xs text-blue-300">
              Investegate does provide RNS feeds, but they require server-side integration and proper API credentials. 
              Currently showing manually curated announcements. For live integration, contact Investegate for API access 
              and implement server-side proxy to avoid CORS restrictions.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex items-center space-x-4 mb-6">
        <Filter className="h-4 w-4 text-gray-400" />
        <div className="flex flex-wrap gap-2">
          {announcementTypes.map((type) => (
            <Button
              key={type}
              variant={filter === type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(type)}
              className={`text-xs ${
                filter === type 
                  ? 'bg-castelnau-green text-black hover:bg-castelnau-green/80' 
                  : 'text-gray-300 border-gray-600 hover:bg-gray-700'
              }`}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-castelnau-green"></div>
            <span className="ml-2 text-gray-400">Loading announcements...</span>
          </div>
        ) : filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-white font-medium">{announcement.title}</h3>
                    <span className="text-xs bg-gray-600 text-gray-200 px-2 py-1 rounded-full">
                      Manual
                    </span>
                  </div>
                  
                  {announcement.description && (
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {announcement.description}
                    </p>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(announcement.date)}</span>
                    </div>
                    <span>{announcement.time}</span>
                    <span className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                      {announcement.type}
                    </span>
                  </div>
                </div>
                
                <a 
                  href={announcement.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-4 flex items-center justify-center p-2 text-castelnau-green hover:text-green-400 hover:bg-gray-600 rounded-lg transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-400">
            No announcements found for the selected filter.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500 text-center">
          Regulatory announcements • Managed through admin interface • 
          <a href="/admin" className="text-castelnau-green hover:underline ml-1">Add new announcements</a>
        </p>
      </div>
    </div>
  );
}; 