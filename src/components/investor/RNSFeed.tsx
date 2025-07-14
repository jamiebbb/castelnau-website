'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, ExternalLink, Filter, Calendar, Info, FileText } from 'lucide-react';

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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Regulatory News Service</h2>
          <p className="text-sm text-gray-600 mt-1">Latest announcements and company updates</p>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={fetchAnnouncements}
            disabled={loading}
            className="text-castelnau-green border-castelnau-green/30 hover:bg-castelnau-green/10"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>

      {/* Investegate Info Notice */}
      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex items-start space-x-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-blue-800 mb-1">About Investegate Integration</h3>
            <p className="text-xs text-blue-700">
              Investegate does provide RNS feeds, but they require server-side integration and proper API credentials. 
              Currently showing manually curated announcements. For live integration, contact Investegate for API access 
              and implement server-side proxy to avoid CORS restrictions.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2">
        {announcementTypes.map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(type)}
            className={`text-sm ${
              filter === type 
                ? 'bg-castelnau-green text-white hover:bg-castelnau-green/80' 
                : 'text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {type}
          </Button>
        ))}
      </div>

      {/* Announcements List */}
      <div className="space-y-3">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-castelnau-green"></div>
            <span className="ml-2 text-gray-500">Loading announcements...</span>
          </div>
        ) : filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} className="group p-4 border border-gray-200 rounded-lg hover:border-castelnau-green hover:shadow-sm transition-all duration-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 bg-castelnau-green/10 rounded-lg group-hover:bg-castelnau-green/20 transition-colors flex-shrink-0">
                    <Calendar className="h-4 w-4 text-castelnau-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{announcement.title}</h3>
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-castelnau-green/20 text-castelnau-dark-green"
                      >
                        {announcement.type}
                      </Badge>
                    </div>
                    {announcement.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {announcement.description}
                      </p>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(announcement.date)}
                      </span>
                      <span>{announcement.time}</span>
                      <span className="font-medium">Manual</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild
                    className="text-castelnau-green hover:text-castelnau-dark-green hover:bg-castelnau-green/10"
                  >
                    <a 
                      href={announcement.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>No announcements found for the selected filter.</p>
          </div>
        )}
      </div>

      {/* Summary */}
      {filteredAnnouncements.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Showing {filteredAnnouncements.length} {filter === 'all' ? 'announcements' : `${filter.toLowerCase()} announcements`}
            {filter !== 'all' && ` • ${announcements.length} total available`}
          </p>
        </div>
      )}
    </div>
  );
}; 