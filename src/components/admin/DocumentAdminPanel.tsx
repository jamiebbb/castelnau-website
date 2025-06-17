import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Trash2 } from 'lucide-react';

interface Document {
  id: string;
  title: string;
  type: string;
  date: string;
  size: string;
  url: string;
}

interface DocumentAdminPanelProps {
  className?: string;
}

const DocumentAdminPanel: React.FC<DocumentAdminPanelProps> = ({ className = '' }) => {
  // Static data for prototype
  const documents: Document[] = [
    {
      id: '1',
      title: 'Annual Report 2023',
      type: 'PDF',
      date: '2024-03-15',
      size: '2.4 MB',
      url: '#'
    },
    {
      id: '2',
      title: 'Interim Results 2023',
      type: 'PDF',
      date: '2023-09-20',
      size: '1.8 MB',
      url: '#'
    },
    {
      id: '3',
      title: 'Notice of AGM 2024',
      type: 'PDF',
      date: '2024-02-28',
      size: '0.5 MB',
      url: '#'
    }
  ];

  const handleDelete = (id: string) => {
    // In a real implementation, this would delete the document
    console.log('Delete document:', id);
  };

  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Document Management</h2>
        <Button>Upload New Document</Button>
      </div>
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <FileText className="h-6 w-6 text-gray-500" />
              <div>
                <h3 className="font-medium">{doc.title}</h3>
                <p className="text-sm text-gray-500">
                  {doc.type} • {new Date(doc.date).toLocaleDateString()} • {doc.size}
                </p>
              </div>
            </div>
            <Button 
              variant="destructive" 
              size="sm" 
              className="flex items-center space-x-2"
              onClick={() => handleDelete(doc.id)}
            >
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default DocumentAdminPanel;
