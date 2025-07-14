import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Calendar, ExternalLink } from 'lucide-react';

interface RegulatoryDocument {
  id: string;
  title: string;
  type: string;
  date: string;
  filename: string;
  url: string;
  description?: string;
  size?: string;
}

const documents: RegulatoryDocument[] = [
  {
    id: '1',
    title: 'Castelnau Group Prospectus',
    type: 'Prospectus',
    date: 'September 2021',
    filename: 'Prospectus_09.2021.pdf',
    url: '/regulatory_documents/Prospectus_09.2021.pdf',
    description: 'Full prospectus document for investment consideration',
    size: '2.1 MB'
  },
  {
    id: '2',
    title: 'Castelnau Group Prospectus',
    type: 'Prospectus',
    date: 'February 2023',
    filename: 'Prospectus_02.2023.pdf',
    url: '/regulatory_documents/Prospectus_02.2023.pdf',
    description: 'Updated prospectus document',
    size: '2.4 MB'
  },
  {
    id: '3',
    title: 'Prospectus Summary',
    type: 'Summary',
    date: 'September 2021',
    filename: 'Prospectus_Summary_09.2021.pdf',
    url: '/regulatory_documents/Prospectus_Summary_09.2021.pdf',
    description: 'Executive summary of the prospectus',
    size: '0.8 MB'
  },
  {
    id: '4',
    title: 'Prospectus Summary',
    type: 'Summary',
    date: 'February 2023',
    filename: 'Prospectus_Summary_02.2023.pdf',
    url: '/regulatory_documents/Prospectus_Summary_02.2023.pdf',
    description: 'Updated executive summary',
    size: '0.9 MB'
  },
  {
    id: '5',
    title: 'Key Information Document',
    type: 'KID',
    date: 'June 2024',
    filename: 'Key_Information_Document_06.2024.pdf',
    url: '/regulatory_documents/Key_Information_Document_06.2024.pdf',
    description: 'Key investor information document',
    size: '0.5 MB'
  },
  {
    id: '6',
    title: 'Supplementary Prospectus',
    type: 'Supplement',
    date: 'April 2023',
    filename: 'Supplementary_Prospectus_04.2023.pdf',
    url: '/regulatory_documents/Supplementary_Prospectus_04.2023.pdf',
    description: 'Supplementary information to the prospectus',
    size: '1.2 MB'
  },
  {
    id: '7',
    title: 'Supplementary Prospectus',
    type: 'Supplement',
    date: 'August 2022',
    filename: 'Supplementary_Prospectus_08.2022.pdf',
    url: '/regulatory_documents/Supplementary_Prospectus_08.2022.pdf',
    description: 'Additional prospectus information',
    size: '1.1 MB'
  },
  {
    id: '8',
    title: 'Article 23 Fund Disclosure',
    type: 'Disclosure',
    date: 'July 2024',
    filename: 'Article_23_Fund_Disclosure_07.2024.pdf',
    url: '/regulatory_documents/Article_23_Fund_Disclosure_07.2024.pdf',
    description: 'Regulatory fund disclosure document',
    size: '0.7 MB'
  },
  {
    id: '9',
    title: 'Offer for Subscription Application Form',
    type: 'Application',
    date: 'September 2021',
    filename: 'Offer_for_Subscription__Application_Form_09.2021.pdf',
    url: '/regulatory_documents/Offer_for_Subscription__Application_Form_09.2021.pdf',
    description: 'Application form for share subscription',
    size: '0.6 MB'
  }
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Prospectus': return 'bg-green-100 text-green-800';
    case 'Summary': return 'bg-blue-100 text-blue-800';
    case 'KID': return 'bg-purple-100 text-purple-800';
    case 'Supplement': return 'bg-orange-100 text-orange-800';
    case 'Disclosure': return 'bg-red-100 text-red-800';
    case 'Application': return 'bg-gray-100 text-gray-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const RegulatoryDocuments = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const documentTypes = [
    { key: 'all', label: 'All Documents', count: documents.length },
    { key: 'Prospectus', label: 'Prospectus', count: documents.filter(d => d.type === 'Prospectus').length },
    { key: 'Summary', label: 'Summaries', count: documents.filter(d => d.type === 'Summary').length },
    { key: 'KID', label: 'Key Info', count: documents.filter(d => d.type === 'KID').length },
    { key: 'Supplement', label: 'Supplements', count: documents.filter(d => d.type === 'Supplement').length },
    { key: 'Other', label: 'Other', count: documents.filter(d => !['Prospectus', 'Summary', 'KID', 'Supplement'].includes(d.type)).length }
  ];

  const filteredDocuments = selectedType === 'all' 
    ? documents 
    : selectedType === 'Other'
    ? documents.filter(doc => !['Prospectus', 'Summary', 'KID', 'Supplement'].includes(doc.type))
    : documents.filter(doc => doc.type === selectedType);

  const handleDownload = (doc: RegulatoryDocument) => {
    // Handle basePath for production
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/castelnau-website' : '';
    const fullUrl = `${basePath}${doc.url}`;
    
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = doc.filename; // This triggers download instead of opening
    link.target = '_blank';
    
    // Temporarily add to DOM, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {documentTypes.map((type) => (
          <Button
            key={type.key}
            variant={selectedType === type.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedType(type.key)}
            className={`text-sm ${
              selectedType === type.key 
                ? 'bg-castelnau-green text-white hover:bg-castelnau-green/80' 
                : 'text-gray-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {type.label}
            <Badge 
              variant="secondary" 
              className={`ml-2 text-xs ${
                selectedType === type.key 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {type.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Documents List */}
      <div className="space-y-3">
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>No documents found for the selected category</p>
          </div>
        ) : (
          filteredDocuments.map((doc) => (
            <div 
              key={doc.id} 
              className="group p-4 border border-gray-200 rounded-lg hover:border-castelnau-green hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="p-2 bg-castelnau-green/10 rounded-lg group-hover:bg-castelnau-green/20 transition-colors flex-shrink-0">
                    <FileText className="h-4 w-4 text-castelnau-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{doc.title}</h3>
                      <Badge 
                        variant="secondary" 
                        className={`text-xs ${getTypeColor(doc.type)}`}
                      >
                        {doc.type}
                      </Badge>
                    </div>
                    {doc.description && (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {doc.description}
                      </p>
                    )}
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {doc.date}
                      </span>
                      {doc.size && (
                        <span>{doc.size}</span>
                      )}
                      <span className="uppercase">{doc.filename.split('.').pop()}</span>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleDownload(doc)}
                    className="text-castelnau-green hover:text-castelnau-dark-green hover:bg-castelnau-green/10"
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Info */}
      {filteredDocuments.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <p>
              Showing {filteredDocuments.length} {selectedType === 'all' ? 'documents' : `${selectedType.toLowerCase()} documents`}
              {selectedType !== 'all' && ` • ${documents.length} total available`}
            </p>
            <div className="flex items-center space-x-1">
              <ExternalLink className="h-3 w-3" />
              <span>All documents open in new tab</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 