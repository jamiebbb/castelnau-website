'use client';

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Label } from '@/components/ui/label';
import { Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';

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

interface DocumentUploadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUploadSuccess: (document: Omit<Document, 'id'>) => void;
}

const DocumentUploadDialog: React.FC<DocumentUploadDialogProps> = ({
  open,
  onOpenChange,
  onUploadSuccess,
}) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    status: 'draft' as Document['status']
  });
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const categories = [
    { value: 'annual-reports', label: 'Annual Reports', description: 'Yearly comprehensive reports → reports_factsheets/', folder: 'reports_factsheets' },
    { value: 'interim-reports', label: 'Interim Reports', description: 'Half-yearly and quarterly reports → reports_factsheets/', folder: 'reports_factsheets' },
    { value: 'quarterly-reports', label: 'Quarterly Reports', description: 'Quarterly performance reports → reports_factsheets/', folder: 'reports_factsheets' },
    { value: 'factsheets', label: 'Monthly Factsheets', description: 'Monthly and quarterly factsheets → reports_factsheets/', folder: 'reports_factsheets' },
    { value: 'rns', label: 'RNS Announcements', description: 'Regulatory news service announcements → rns_feed/', folder: 'rns_feed' },
    { value: 'regulatory', label: 'Regulatory Documents', description: 'Prospectus, KIDs, supplements → regulatory_documents/', folder: 'regulatory_documents' },
    { value: 'presentations', label: 'Presentations', description: 'Investor presentations and materials → documents/', folder: 'documents' },
    { value: 'other', label: 'Other Documents', description: 'Miscellaneous documents → documents/', folder: 'documents' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Validate file type
      if (!selectedFile.type.includes('pdf')) {
        setError('Please select a PDF file');
        return;
      }
      
      // Validate file size (10MB limit)
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError('File size must be less than 10MB');
        return;
      }
      
      setFile(selectedFile);
      setError(null);
      
      // Auto-populate title if empty
      if (!formData.title) {
        const fileName = selectedFile.name.replace('.pdf', '').replace(/[-_]/g, ' ');
        setFormData(prev => ({ ...prev, title: fileName }));
      }
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    
    if (!formData.title.trim()) {
      setError('Please enter a document title');
      return;
    }
    
    if (!formData.category) {
      setError('Please select a document category');
      return;
    }

    setUploading(true);
    setError(null);

    try {
      const uploadFormData = new FormData();
      uploadFormData.append('file', file);
      uploadFormData.append('title', formData.title);
      uploadFormData.append('category', formData.category);
      uploadFormData.append('description', formData.description);
      uploadFormData.append('status', formData.status);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: uploadFormData,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        onUploadSuccess(result.document);
        
        // Reset form after successful upload
        setTimeout(() => {
          handleClose();
        }, 2000);
      } else {
        setError(result.message || 'Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleClose = () => {
    setFormData({
      title: '',
      category: '',
      description: '',
      status: 'draft'
    });
    setFile(null);
    setError(null);
    setSuccess(false);
    onOpenChange(false);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const selectedCategory = categories.find(cat => cat.value === formData.category);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-blue-600" />
            <span>Upload Document</span>
          </DialogTitle>
          <DialogDescription>
            Upload regulatory documents, reports, and announcements to the investor relations section.
          </DialogDescription>
        </DialogHeader>

        {success ? (
          <div className="py-8 text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-900 mb-2">Upload Successful!</h3>
            <p className="text-gray-600">Your document has been uploaded and is now available.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="file" className="text-sm font-medium">
                Document File <span className="text-red-500">*</span>
              </Label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input
                    id="file"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    disabled={uploading}
                    className="cursor-pointer"
                  />
                </div>
              </div>
              {file && (
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{file.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                  </div>
                </div>
              )}
              <p className="text-xs text-gray-500">
                Only PDF files are accepted. Maximum file size: 10MB
              </p>
            </div>

            {/* Document Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">
                Document Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., Annual Report 2024"
                disabled={uploading}
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium">
                Document Category <span className="text-red-500">*</span>
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select document category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div>
                        <div className="font-medium">{category.label}</div>
                        <div className="text-xs text-gray-500">{category.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedCategory && (
                <p className="text-xs text-gray-600">{selectedCategory.description}</p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Description (Optional)
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Brief description of the document content..."
                rows={3}
                disabled={uploading}
              />
            </div>

            {/* Status */}
            <div className="space-y-2">
              <Label htmlFor="status" className="text-sm font-medium">
                Publication Status
              </Label>
              <Select value={formData.status} onValueChange={(value) => handleInputChange('status', value as Document['status'])}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft - Not visible to investors</SelectItem>
                  <SelectItem value="published">Published - Visible to investors</SelectItem>
                  <SelectItem value="archived">Archived - Hidden from main view</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        )}

        {!success && (
          <DialogFooter>
            <Button type="button" variant="outline" onClick={handleClose} disabled={uploading}>
              Cancel
            </Button>
            <Button 
              type="submit" 
              onClick={handleSubmit}
              disabled={uploading || !file}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {uploading ? 'Uploading...' : 'Upload Document'}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DocumentUploadDialog;
