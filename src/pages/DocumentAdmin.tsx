
import React, { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { Document, fetchDocuments, uploadDocument } from '@/utils/documentUtils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DocumentList from '@/components/investor/DocumentList';

const DocumentAdmin = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Document['category']>('report');
  const [file, setFile] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { data: documents = [], isLoading, refetch } = useQuery({
    queryKey: ['documents'],
    queryFn: fetchDocuments
  });

  const getDocumentsByCategory = (category: Document['category']) => {
    return documents.filter(doc => doc.category === category);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    if (!title.trim()) {
      toast.error('Please enter a document title');
      return;
    }

    try {
      setIsUploading(true);
      await uploadDocument({
        title,
        category,
        file
      });
      
      toast.success('Document uploaded successfully');
      setTitle('');
      setCategory('report');
      setFile(null);
      setIsOpen(false);
      
      // Reset the file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      // Refetch documents to update the list
      refetch();
    } catch (error) {
      console.error('Error uploading document:', error);
      toast.error('Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <MainLayout>
      <section className="page-content">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-serif font-bold text-castelnau-green">Document Administration</h1>
            
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button variant="primary">Upload New Document</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upload Document</DialogTitle>
                  <DialogDescription>
                    Upload a new document to the investor relations section.
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-1">
                      Document Title
                    </label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Annual Report 2025"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-1">
                      Category
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value as Document['category'])}
                      className="w-full rounded-md border border-input bg-background px-3 py-2"
                      required
                    >
                      <option value="report">Reports & Presentations</option>
                      <option value="factsheet">Factsheets</option>
                      <option value="regulatory">Regulatory Documents</option>
                      <option value="rns">Regulatory News Service (RNS)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="file-upload" className="block text-sm font-medium mb-1">
                      PDF Document
                    </label>
                    <Input
                      id="file-upload"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Only PDF files are supported (max 10MB)
                    </p>
                  </div>
                  
                  <div className="flex justify-end pt-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsOpen(false)}
                      className="mr-2"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isUploading}
                    >
                      {isUploading ? 'Uploading...' : 'Upload Document'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-medium mb-4">Manage Documents</h2>
            
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
        </div>
      </section>
    </MainLayout>
  );
};

export default DocumentAdmin;
