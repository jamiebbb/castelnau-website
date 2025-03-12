
/**
 * Utility functions for document handling
 */

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
  } catch (error) {
    console.error('Error downloading document:', error);
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
