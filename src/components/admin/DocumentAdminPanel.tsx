'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Trash2, Upload, Search, Filter, Calendar, ExternalLink, RefreshCw, FolderOpen } from 'lucide-react';
import DocumentUploadDialog from './DocumentUploadDialog';
import { forceRefreshStockData, clearStockDataCache } from '@/lib/stockData';

interface Document {
  id: string;
  title: string;
  type: string;
  category: string;
  date: string;
  size: string;
  url: string;
  status: 'published' | 'draft' | 'archived';
  description?: string;
}

interface DocumentAdminPanelProps {
  className?: string;
}

const DocumentAdminPanel: React.FC<DocumentAdminPanelProps> = ({ className = '' }) => {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      title: 'Annual Report 2023',
      type: 'PDF',
      category: 'annual-reports',
      date: '2024-03-15',
      size: '2.4 MB',
      url: '/reports_factsheets/annual-report-2023-2024-03-15.pdf',
      status: 'published',
      description: 'Comprehensive annual report for the year ended 31 December 2023'
    },
    {
      id: '2',
      title: 'Interim Results H1 2023',
      type: 'PDF',
      category: 'interim-reports',
      date: '2023-09-20',
      size: '1.8 MB',
      url: '/reports_factsheets/interim-results-h1-2023-2023-09-20.pdf',
      status: 'published',
      description: 'Half-year results for the six months ended 30 June 2023'
    },
    {
      id: '3',
      title: 'Notice of AGM 2024',
      type: 'PDF',
      category: 'rns',
      date: '2024-02-28',
      size: '0.5 MB',
      url: '/rns_feed/notice-of-agm-2024-2024-02-28.pdf',
      status: 'published',
      description: 'Notice of Annual General Meeting to be held on 15 May 2024'
    },
    {
      id: '4',
      title: 'Q4 2023 Factsheet',
      type: 'PDF',
      category: 'factsheets',
      date: '2024-01-31',
      size: '1.2 MB',
      url: '/reports_factsheets/q4-2023-factsheet-2024-01-31.pdf',
      status: 'draft',
      description: 'Quarterly performance and portfolio overview'
    },
    {
      id: '5',
      title: 'Investment Strategy Presentation',
      type: 'PDF',
      category: 'presentations',
      date: '2024-01-15',
      size: '3.1 MB',
      url: '/documents/investment-strategy-2024-2024-01-15.pdf',
      status: 'published',
      description: 'Detailed presentation on investment strategy and market outlook'
    },
    {
      id: '6',
      title: 'Prospectus 2023',
      type: 'PDF',
      category: 'regulatory',
      date: '2023-02-15',
      size: '5.2 MB',
      url: '/regulatory_documents/prospectus-2023-2023-02-15.pdf',
      status: 'published',
      description: 'Official prospectus document'
    },
    {
      id: '7',
      title: 'Q3 2024 Trading Update',
      type: 'PDF',
      category: 'rns',
      date: '2024-10-15',
      size: '0.8 MB',
      url: '/rns_feed/q3-2024-trading-update-2024-10-15.pdf',
      status: 'published',
      description: 'Third quarter trading update announcement'
    },
    {
      id: '8',
      title: 'October 2024 Factsheet',
      type: 'PDF',
      category: 'factsheets',
      date: '2024-11-01',
      size: '1.5 MB',
      url: '/reports_factsheets/october-2024-factsheet-2024-11-01.pdf',
      status: 'published',
      description: 'Monthly performance and portfolio overview for October 2024'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);

  const categories = [
    { value: 'all', label: 'All Categories', folder: 'all' },
    { value: 'annual-reports', label: 'Annual Reports', folder: 'reports_factsheets' },
    { value: 'interim-reports', label: 'Interim Reports', folder: 'reports_factsheets' },
    { value: 'quarterly-reports', label: 'Quarterly Reports', folder: 'reports_factsheets' },
    { value: 'factsheets', label: 'Monthly Factsheets', folder: 'reports_factsheets' },
    { value: 'rns', label: 'RNS Announcements', folder: 'rns_feed' },
    { value: 'regulatory', label: 'Regulatory Documents', folder: 'regulatory_documents' },
    { value: 'presentations', label: 'Presentations', folder: 'documents' },
    { value: 'other', label: 'Other Documents', folder: 'documents' }
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'published', label: 'Published' },
    { value: 'draft', label: 'Draft' },
    { value: 'archived', label: 'Archived' }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Handle both folder-based and category-based filtering
    let matchesCategory = false;
    if (filterCategory === 'all') {
      matchesCategory = true;
    } else if (filterCategory === 'reports_factsheets') {
      matchesCategory = ['annual-reports', 'interim-reports', 'quarterly-reports', 'factsheets'].includes(doc.category);
    } else if (filterCategory === 'rns_feed') {
      matchesCategory = doc.category === 'rns';
    } else if (filterCategory === 'regulatory_documents') {
      matchesCategory = doc.category === 'regulatory';
    } else if (filterCategory === 'documents') {
      matchesCategory = ['presentations', 'other'].includes(doc.category);
    } else {
      matchesCategory = doc.category === filterCategory;
    }
    
    const matchesStatus = filterStatus === 'all' || doc.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this document?')) {
      setDocuments(prev => prev.filter(doc => doc.id !== id));
    }
  };

  const handleStatusChange = (id: string, newStatus: Document['status']) => {
    setDocuments(prev => prev.map(doc => 
      doc.id === id ? { ...doc, status: newStatus } : doc
    ));
  };

  const handleUploadSuccess = (newDoc: Omit<Document, 'id'>) => {
    const doc: Document = {
      ...newDoc,
      id: Date.now().toString()
    };
    setDocuments(prev => [doc, ...prev]);
    setIsUploadDialogOpen(false);
  };

  const getStatusBadgeVariant = (status: Document['status']) => {
    switch (status) {
      case 'published': return 'default';
      case 'draft': return 'secondary';
      case 'archived': return 'outline';
      default: return 'secondary';
    }
  };

  const getCategoryLabel = (category: string) => {
    return categories.find(cat => cat.value === category)?.label || category;
  };

  const getFolderFromCategory = (category: string) => {
    const categoryFolderMap: { [key: string]: string } = {
      'annual-reports': 'reports_factsheets/',
      'interim-reports': 'reports_factsheets/',
      'quarterly-reports': 'reports_factsheets/',
      'factsheets': 'reports_factsheets/',
      'rns': 'rns_feed/',
      'regulatory': 'regulatory_documents/',
      'presentations': 'documents/',
      'other': 'documents/'
    };
    return categoryFolderMap[category] || 'documents/';
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
        <div>
          <h2 className="text-xl font-semibold">Document Management</h2>
          <p className="text-sm text-gray-600 mt-1">
            Manage regulatory documents, reports, and announcements
          </p>
          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center space-x-1">
              <FolderOpen className="h-3 w-3" />
              <span>reports_factsheets/</span>
            </span>
            <span className="flex items-center space-x-1">
              <FolderOpen className="h-3 w-3" />
              <span>rns_feed/</span>
            </span>
            <span className="flex items-center space-x-1">
              <FolderOpen className="h-3 w-3" />
              <span>regulatory_documents/</span>
            </span>
            <span className="flex items-center space-x-1">
              <FolderOpen className="h-3 w-3" />
              <span>documents/</span>
            </span>
          </div>
        </div>
        <Button 
          onClick={() => setIsUploadDialogOpen(true)}
          className="bg-castelnau-green text-black hover:bg-castelnau-green/80"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
        </Button>
      </div>

      {/* Folder Tabs */}
      <div className="mb-6">
        <Tabs value={filterCategory} onValueChange={setFilterCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 gap-1">
            <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
            <TabsTrigger value="reports_factsheets" className="text-xs">Reports & Factsheets</TabsTrigger>
            <TabsTrigger value="rns_feed" className="text-xs">RNS Feed</TabsTrigger>
            <TabsTrigger value="regulatory_documents" className="text-xs">Regulatory</TabsTrigger>
            <TabsTrigger value="documents" className="text-xs">Presentations</TabsTrigger>
            <TabsTrigger value="annual-reports" className="text-xs">Annual</TabsTrigger>
            <TabsTrigger value="interim-reports" className="text-xs">Interim</TabsTrigger>
            <TabsTrigger value="factsheets" className="text-xs">Factsheets</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search documents..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex gap-2">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map(status => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <h3 className="font-medium text-gray-900">{doc.title}</h3>
                    <Badge variant={getStatusBadgeVariant(doc.status)} className="text-xs">
                      {doc.status}
                    </Badge>
                  </div>
                  
                  {doc.description && (
                    <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                  )}
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(doc.date)}</span>
                    </span>
                    <span>{doc.type}</span>
                    <span>{doc.size}</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                      {getCategoryLabel(doc.category)}
                    </span>
                    <span className="flex items-center space-x-1 px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                      <FolderOpen className="h-3 w-3" />
                      <span>{getFolderFromCategory(doc.category)}</span>
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-castelnau-green hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  
                  <Select
                    value={doc.status}
                    onValueChange={(value: Document['status']) => handleStatusChange(doc.id, value)}
                  >
                    <SelectTrigger className="w-[100px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => handleDelete(doc.id)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p>No documents found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-castelnau-green">
              {documents.filter(d => d.status === 'published').length}
            </div>
            <div className="text-sm text-gray-600">Published</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-orange-600">
              {documents.filter(d => d.status === 'draft').length}
            </div>
            <div className="text-sm text-gray-600">Drafts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-500">
              {documents.filter(d => d.status === 'archived').length}
            </div>
            <div className="text-sm text-gray-600">Archived</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {documents.length}
            </div>
            <div className="text-sm text-gray-600">Total</div>
          </div>
        </div>
        
        {/* Admin Quick Actions */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 mb-3">Quick Actions:</p>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={async () => {
                try {
                  await forceRefreshStockData();
                  alert('Stock data refreshed successfully!');
                } catch (error) {
                  alert('Failed to refresh stock data.');
                }
              }}
              className="text-xs"
            >
              <RefreshCw className="h-3 w-3 mr-1" />
              Refresh Stock Data
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                clearStockDataCache();
                alert('Stock data cache cleared! Fresh data will be fetched on next page load.');
              }}
              className="text-xs text-orange-600 border-orange-300 hover:bg-orange-50"
            >
              <Trash2 className="h-3 w-3 mr-1" />
              Clear Cache
            </Button>
          </div>
        </div>
      </div>

      <DocumentUploadDialog
        open={isUploadDialogOpen}
        onOpenChange={setIsUploadDialogOpen}
        onUploadSuccess={handleUploadSuccess}
      />
    </Card>
  );
};

export default DocumentAdminPanel;
