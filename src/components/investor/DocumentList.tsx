
import React from 'react';
import { Document, downloadDocument } from '@/utils/documentUtils';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

interface DocumentListProps {
  title: string;
  documents: Document[];
  id: string;
}

const DocumentList: React.FC<DocumentListProps> = ({ title, documents, id }) => {
  const handleDownload = (document: Document) => {
    downloadDocument(document.file_path, document.file_name);
  };

  return (
    <div className="mb-12" id={id}>
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="space-y-4">
        {documents.map(doc => (
          <div key={doc.id} className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div>
              <p className="font-medium">{doc.title}</p>
              <p className="text-sm text-gray-500">Published: {doc.publish_date} {doc.file_size && `• ${doc.file_size}`}</p>
            </div>
            <Button 
              onClick={() => handleDownload(doc)}
              className="px-4 py-2 bg-castelnau-green text-white rounded hover:bg-castelnau-darkgreen transition-colors text-sm flex items-center"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;
