'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface DocumentData {
  title: string;
  type: string;
  category: string;
  date: string;
  size: string;
  url: string;
  status: 'published' | 'draft' | 'archived';
  description?: string;
}

interface DocumentUploadDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (newDoc: Omit<DocumentData, 'id'>) => void;
  categories: { value: string; label: string }[];
}

const DocumentUploadDialog: React.FC<DocumentUploadDialogProps> = ({ 
  isOpen, 
  onClose, 
  onUploadSuccess,
  categories 
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    status: 'draft' as DocumentData['status']
  });
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // Validate file type
      if (!selectedFile.type.includes('pdf')) {
        toast.error('Please select a PDF file');
        return;
      }
      
      // Validate file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        toast.error('File size must be less than 10MB');
        return;
      }
      
      setFile(selectedFile);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error('Please select a file to upload');
      return;
    }

    if (!formData.title.trim()) {
      toast.error('Please enter a document title');
      return;
    }

    if (!formData.category) {
      toast.error('Please select a category');
      return;
    }

    try {
      setIsUploading(true);
      
      // Create FormData for file upload
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('title', formData.title);
      uploadFormData.append('category', formData.category);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('status', formData.status);
      
      // Try to upload via API first (development mode)
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Successfully uploaded via API
          onUploadSuccess(result.document);
          toast.success('Document uploaded successfully');
          
          // Reset form
          setFormData({
            title: '',
            category: '',
            description: '',
            status: 'draft'
          });
          setFile(null);
          
          // Reset the file input
          const fileInput = document.getElementById('file-upload') as HTMLInputElement;
          if (fileInput) fileInput.value = '';
          
          return;
        } else {
          console.log('API upload failed:', result.message);
        }
      } catch (apiError) {
        console.log('API upload error:', apiError);
      }
      
      // Fallback for production or API failure
      // In production with static export, show instructions for manual upload
      if (process.env.NODE_ENV === 'production') {
        toast.error('File upload not available in production. Please upload files manually to the public/documents folder.');
        return;
      }
      
      // For development fallback, create a mock document
      const mockUrl = `/documents/${file.name.toLowerCase().replace(/\s+/g, '-')}`;
      
      const newDocument: Omit<DocumentData, 'id'> = {
        title: formData.title,
        type: 'PDF',
        category: formData.category,
        date: new Date().toISOString().split('T')[0],
        size: formatFileSize(file.size),
        url: mockUrl,
        status: formData.status,
        description: formData.description || undefined
      };
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({
        title: '',
        category: '',
        description: '',
        status: 'draft'
      });
      setFile(null);
      
      // Reset the file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      // Notify parent component
      onUploadSuccess(newDocument);
      
      toast.success('Document metadata saved (file upload simulated)');
      
    } catch (error) {
      console.error('Error uploading document:', error);
      toast.error('Failed to upload document');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
          <DialogDescription>
            Upload a new document to the investor relations section.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">
              Document Title *
            </label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              placeholder="e.g. Annual Report 2024"
              required
            />
          </div>
          
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1">
              Category *
            </label>
            <Select 
              value={formData.category} 
              onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Brief description of the document"
            />
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <Select 
              value={formData.status} 
              onValueChange={(value: DocumentData['status']) => setFormData(prev => ({ ...prev, status: value }))}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label htmlFor="file-upload" className="block text-sm font-medium mb-1">
              PDF Document *
            </label>
            <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept=".pdf"
              required
            />
            {file && (
              <p className="text-sm text-green-600 mt-1">
                Selected: {file.name} ({formatFileSize(file.size)})
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Only PDF files are supported (max 10MB)
            </p>
          </div>
          
          <div className="flex justify-end pt-4 space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={isUploading}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isUploading}
              className="bg-castelnau-green text-black hover:bg-castelnau-green/80"
            >
              {isUploading ? 'Uploading...' : 'Upload Document'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DocumentUploadDialog;
