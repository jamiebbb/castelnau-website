
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

    return data || [];
  } catch (error) {
    console.error('Error fetching documents:', error);
    toast.error("Failed to fetch documents");
    return [];
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

