
import React from 'react';
import { Document } from '@/utils/documentUtils';
import DocumentList from '@/components/investor/DocumentList';
import DocumentUploadDialog from './DocumentUploadDialog';

interface DocumentAdminPanelProps {
  documents: Document[];
  refetchDocuments: () => void;
}

const DocumentAdminPanel: React.FC<DocumentAdminPanelProps> = ({ documents, refetchDocuments }) => {
  const getDocumentsByCategory = (category: Document['category']) => {
    return documents.filter(doc => doc.category === category);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Manage Documents</h2>
        <DocumentUploadDialog onUploadSuccess={refetchDocuments} />
      </div>
      
      <div className="space-y-8">
        <DocumentList 
          title="Reports & Presentations" 
          documents={getDocumentsByCategory('report')} 
          id="reports" 
        />
        
        <DocumentList 
          title="Factsheets" 
          documents={getDocumentsByCategory('factsheet')} 
          id="factsheets" 
        />
        
        <DocumentList 
          title="Regulatory Documents" 
          documents={getDocumentsByCategory('regulatory')} 
          id="regulatory-documents" 
        />
        
        <DocumentList 
          title="Regulatory News Service (RNS)" 
          documents={getDocumentsByCategory('rns')} 
          id="rns" 
        />
      </div>
    </div>
  );
};

export default DocumentAdminPanel;
