import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Calendar, ExternalLink } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
  date: string;
  size: string;
  url: string;
  status?: 'published' | 'draft' | 'archived';
  description?: string;
}

interface DocumentListProps {
  className?: string;
}

const DocumentList: React.FC<DocumentListProps> = ({ className = '' }) => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, this would fetch from an API
    // For now, we'll use the same data structure as the admin panel
    const fetchDocuments = async () => {
      try {
        // This would be replaced with actual API call
        const mockDocuments: Document[] = [
          {
            id: '1',
            title: 'Annual Report 2023',
            type: 'PDF',
            category: 'annual-reports',
            date: '2024-03-15',
            size: '2.4 MB',
            url: '/documents/annual-report-2023.pdf',
            status: 'published',
            description: 'Comprehensive annual report for the year ended 31 December 2023'
          },
          {
            id: '2',
            title: 'Q4 2023 Interim Report',
            type: 'PDF',
            category: 'interim-reports',
            date: '2024-01-31',
            size: '1.8 MB',
            url: '/documents/q4-2023-report.pdf',
            status: 'published',
            description: 'Quarterly performance and portfolio overview for Q4 2023'
          },
          {
            id: '3',
            title: 'February 2024 Factsheet',
            type: 'PDF',
            category: 'factsheets',
            date: '2024-02-29',
            size: '1.1 MB',
            url: '/documents/feb-2024-factsheet.pdf',
            status: 'published',
            description: 'Monthly performance summary and key metrics'
          },
          {
            id: '4',
            title: 'Notice of AGM 2024',
            type: 'PDF',
            category: 'rns',
            date: '2024-02-28',
            size: '0.5 MB',
            url: '/documents/agm-notice-2024.pdf',
            status: 'published',
            description: 'Notice of Annual General Meeting to be held on 15 May 2024'
          },
          {
            id: '5',
            title: 'Trading Update - Q1 2024',
            type: 'PDF',
            category: 'rns',
            date: '2024-04-15',
            size: '0.3 MB',
            url: '/documents/trading-update-q1-2024.pdf',
            status: 'published',
            description: 'Quarterly trading update announcement'
          }
        ];

        // Filter only published documents from reports/factsheets and RNS categories
        const allowedCategories = ['annual-reports', 'interim-reports', 'factsheets', 'rns'];
        const publishedDocs = mockDocuments
          .filter(doc => doc.status === 'published' && allowedCategories.includes(doc.category))
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 4); // Show only the 4 most recent

        setDocuments(publishedDocs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching documents:', error);
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'annual-reports': 'Annual Report',
      'interim-reports': 'Interim Report',
      'factsheets': 'Factsheet',
      'rns': 'RNS',
      'presentations': 'Presentation',
      'other': 'Document'
    };
    return categoryMap[category] || 'Document';
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'annual-reports': 'bg-blue-100 text-blue-800',
      'interim-reports': 'bg-green-100 text-green-800',
      'factsheets': 'bg-purple-100 text-purple-800',
      'rns': 'bg-orange-100 text-orange-800',
      'presentations': 'bg-gray-100 text-gray-800',
      'other': 'bg-gray-100 text-gray-800'
    };
    return colorMap[category] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleDownload = (doc: Document) => {
    // Handle basePath for production
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/castelnau-website' : '';
    const fullUrl = `${basePath}${doc.url}`;
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = doc.title.replace(/[^a-zA-Z0-9]/g, '_') + '.pdf'; // Clean filename
    link.target = '_blank';
    
    // Temporarily add to DOM, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <Card className={`p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Documents</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="h-6 w-6 bg-gray-300 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    );
  }

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Documents</h3>
        <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
          <ExternalLink className="h-3 w-3 mr-1" />
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {documents.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>No documents available</p>
          </div>
        ) : (
          documents.map((doc) => (
            <div key={doc.id} className="group p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors flex-shrink-0">
                    <FileText className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900 truncate">{doc.title}</h4>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs flex-shrink-0 ${getCategoryColor(doc.category)}`}
                      >
                        {getCategoryLabel(doc.category)}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(doc.date)}
                      </span>
                      <span>{doc.size}</span>
                      <span className="uppercase">{doc.type}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 self-center">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDownload(doc)}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {documents.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Documents are updated as soon as they become available
          </p>
        </div>
      )}
    </Card>
  );
};

export default DocumentList;
