
/**
 * Utility functions for document handling
 */

import { toast } from "sonner";

/**
 * Initiates download of a document from the public folder
 * @param documentPath Path to the document within the public folder
 * @param documentName Name to use for the downloaded file (optional)
 */
export const downloadDocument = (documentPath: string, documentName?: string) => {
  try {
    // Create an anchor element
    const link = document.createElement('a');
    
    // Set the href to the document path
    link.href = documentPath;
    
    // Set download attribute to force download
    link.setAttribute('download', documentName || '');
    
    // Append to the body temporarily
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    
    // Show success toast
    toast.success("Document download started");
  } catch (error) {
    console.error('Error downloading document:', error);
    toast.error("Failed to download document");
  }
};

/**
 * Document type definition
 */
export interface Document {
  id: string;
  title: string;
  category: 'report' | 'factsheet' | 'regulatory' | 'rns';
  filePath: string;
  publishDate: string;
  fileSize?: string;
}

/**
 * Instructions for adding PDF files to the project:
 * 
 * 1. For Lovable web editor:
 *    - PDF files need to be added to the project by placing them in the public/documents/ directory
 *    - This requires direct file system access, which is typically done when setting up the project
 *    - Once deployed, you can manually add files to the deployed version
 * 
 * 2. For local development:
 *    - Place PDF files in the public/documents/ directory of your project
 *    - They will be automatically available at the /documents/filename.pdf path
 * 
 * 3. Update the documents array in InvestorRelations.tsx to include your actual PDF file paths
 */

