
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

/**
 * Document type definition
 */
export interface Document {
  id: string;
  title: string;
  category: 'report' | 'factsheet' | 'regulatory' | 'rns';
  file_path: string;
  file_name: string;
  publish_date: string;
  file_size?: string;
}

/**
 * Document upload parameters
 */
export interface DocumentUploadParams {
  title: string;
  category: Document['category'];
  file: File;
}

/**
 * Formats file size for display
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

/**
 * Fetches documents from Supabase
 */
export const fetchDocuments = async (): Promise<Document[]> => {
  try {
    const { data, error } = await supabase
      .from('documents')
      .select('*')
      .order('publish_date', { ascending: false });

    if (error) {
      console.error('Error fetching documents:', error);
      toast.error("Failed to fetch documents");
      return [];
    }

    // Ensure the category field matches our expected types
    const typedData = data?.map(item => ({
      ...item,
      category: item.category as 'report' | 'factsheet' | 'regulatory' | 'rns'
    })) || [];
    
    return typedData;
  } catch (error) {
    console.error('Error fetching documents:', error);
    toast.error("Failed to fetch documents");
    return [];
  }
};

/**
 * Uploads a document to Supabase storage and adds record to the documents table
 */
export const uploadDocument = async ({ title, category, file }: DocumentUploadParams): Promise<void> => {
  try {
    // Create a unique file path
    const timestamp = new Date().getTime();
    const fileExt = file.name.split('.').pop();
    const fileName = `${timestamp}-${file.name.replace(/\s+/g, '-')}`;
    const filePath = `${category}/${fileName}`;
    
    // Upload file to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('documents')
      .upload(filePath, file);
      
    if (uploadError) {
      console.error('Error uploading file:', uploadError);
      throw new Error('Failed to upload file');
    }
    
    // Add entry to documents table
    const { error: insertError } = await supabase
      .from('documents')
      .insert({
        title,
        category,
        file_path: filePath,
        file_name: file.name,
        file_size: formatFileSize(file.size),
        publish_date: new Date().toISOString().split('T')[0]
      });
      
    if (insertError) {
      console.error('Error inserting document record:', insertError);
      // If record insertion fails, try to delete the uploaded file
      await supabase.storage.from('documents').remove([filePath]);
      throw new Error('Failed to save document information');
    }
  } catch (error) {
    console.error('Document upload failed:', error);
    throw error;
  }
};

/**
 * Initiates download of a document from Supabase storage
 * @param filePath Path to the document within the storage bucket
 * @param fileName Name to use for the downloaded file
 */
export const downloadDocument = async (filePath: string, fileName: string) => {
  try {
    const { data, error } = await supabase.storage
      .from('documents')
      .download(filePath);

    if (error) {
      throw error;
    }

    // Create URL for the downloaded file
    const url = URL.createObjectURL(data);
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', fileName);
    
    // Append to body, click, and clean up
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL
    URL.revokeObjectURL(url);
    
    toast.success("Document download started");
  } catch (error) {
    console.error('Error downloading document:', error);
    toast.error("Failed to download document");
  }
};
