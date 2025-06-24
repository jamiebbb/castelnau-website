import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar } from 'lucide-react';

interface Report {
  id: string;
  title: string;
  category: 'annual' | 'quarterly' | 'monthly';
  date: string;
  type: string;
  size: string;
  url: string;
  period?: string;
}

const reports: Report[] = [
  {
    id: '1',
    title: 'Annual Report 2023',
    category: 'annual',
    date: '2024-03-15',
    type: 'PDF',
    size: '2.4 MB',
    url: '/documents/annual-report-2023.pdf',
    period: '2023'
  },
  {
    id: '2',
    title: 'Annual Report 2022',
    category: 'annual',
    date: '2023-03-15',
    type: 'PDF',
    size: '2.1 MB',
    url: '/documents/annual-report-2022.pdf',
    period: '2022'
  },
  {
    id: '3',
    title: 'Q4 2023 Interim Report',
    category: 'quarterly',
    date: '2024-01-31',
    type: 'PDF',
    size: '1.8 MB',
    url: '/documents/q4-2023-report.pdf',
    period: 'Q4 2023'
  },
  {
    id: '4',
    title: 'Q3 2023 Interim Report',
    category: 'quarterly',
    date: '2023-10-31',
    type: 'PDF',
    size: '1.7 MB',
    url: '/documents/q3-2023-report.pdf',
    period: 'Q3 2023'
  },
  {
    id: '5',
    title: 'February 2024 Factsheet',
    category: 'monthly',
    date: '2024-02-29',
    type: 'PDF',
    size: '1.1 MB',
    url: '/documents/feb-2024-factsheet.pdf',
    period: 'Feb 2024'
  },
  {
    id: '6',
    title: 'January 2024 Factsheet',
    category: 'monthly',
    date: '2024-01-31',
    type: 'PDF',
    size: '1.0 MB',
    url: '/documents/jan-2024-factsheet.pdf',
    period: 'Jan 2024'
  },
  {
    id: '7',
    title: 'December 2023 Factsheet',
    category: 'monthly',
    date: '2023-12-31',
    type: 'PDF',
    size: '1.1 MB',
    url: '/documents/dec-2023-factsheet.pdf',
    period: 'Dec 2023'
  }
];

type FilterType = 'all' | 'annual' | 'quarterly' | 'monthly';

export const Factsheets = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters = [
    { key: 'all', label: 'All Reports', count: reports.length },
    { key: 'annual', label: 'Annual Reports', count: reports.filter(r => r.category === 'annual').length },
    { key: 'quarterly', label: 'Quarterly Reports', count: reports.filter(r => r.category === 'quarterly').length },
    { key: 'monthly', label: 'Monthly Factsheets', count: reports.filter(r => r.category === 'monthly').length }
  ];

  const filteredReports = activeFilter === 'all' 
    ? reports 
    : reports.filter(report => report.category === activeFilter);

  const getCategoryColor = (category: Report['category']) => {
    switch (category) {
      case 'annual': return 'bg-blue-100 text-blue-800';
      case 'quarterly': return 'bg-green-100 text-green-800';
      case 'monthly': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: Report['category']) => {
    switch (category) {
      case 'annual': return 'Annual';
      case 'quarterly': return 'Quarterly';
      case 'monthly': return 'Monthly';
      default: return 'Report';
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleDownload = (report: Report) => {
    if (report.url.startsWith('/documents/')) {
      window.open(report.url, '_blank');
    } else {
      console.log('Download:', report.title);
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Button
            key={filter.key}
            variant={activeFilter === filter.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFilter(filter.key as FilterType)}
            className={`text-sm ${
              activeFilter === filter.key 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {filter.label}
            <Badge 
              variant="secondary" 
              className={`ml-2 text-xs ${
                activeFilter === filter.key 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {filter.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-3">
        {filteredReports.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>No reports found for the selected category</p>
          </div>
        ) : (
          filteredReports.map((report) => (
            <div 
              key={report.id} 
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{report.title}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getCategoryColor(report.category)}`}
                      >
                        {getCategoryLabel(report.category)}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(report.date)}
                      </span>
                      {report.period && (
                        <span className="font-medium">{report.period}</span>
                      )}
                      <span>{report.size}</span>
                      <span className="uppercase">{report.type}</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => handleDownload(report)}
                  className="ml-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Summary */}
      {filteredReports.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Showing {filteredReports.length} {activeFilter === 'all' ? 'reports' : `${activeFilter} reports`}
            {activeFilter !== 'all' && ` • ${reports.length} total available`}
          </p>
        </div>
      )}
    </div>
  );
}; 