import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// This API route will only work in development mode
// For production with static export, files should be uploaded manually to the appropriate category folders

export async function POST(request: NextRequest) {
  try {
    // In static export mode, this API won't be available in production
    // For GitHub Pages deployment, files must be uploaded directly to the repository
    return NextResponse.json(
      { 
        success: false, 
        message: 'File uploads for static sites require manual GitHub repository updates. Please upload files directly to the appropriate folders in the public directory of your GitHub repository, then commit and push the changes.' 
      },
      { status: 501 }
    );

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const category = formData.get('category') as string;
    const description = formData.get('description') as string;
    const status = formData.get('status') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.includes('pdf')) {
      return NextResponse.json(
        { success: false, message: 'Only PDF files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, message: 'File size must be less than 10MB' },
        { status: 400 }
      );
    }

    // Map category to the new folder structure
    const categoryFolderMap: { [key: string]: string } = {
      'annual-reports': 'reports_factsheets',
      'interim-reports': 'reports_factsheets', 
      'quarterly-reports': 'reports_factsheets',
      'factsheets': 'reports_factsheets',
      'rns': 'rns_feed',
      'rns-announcements': 'rns_feed',
      'regulatory': 'regulatory_documents',
      'regulatory-documents': 'regulatory_documents',
      'presentations': 'documents', // Keep presentations in the general documents folder
      'other': 'documents'
    };

    const categoryFolder = categoryFolderMap[category] || 'documents';

    // Create a safe filename with date suffix
    const now = new Date();
    const timestamp = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    const safeTitle = title.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const filename = `${safeTitle}-${timestamp}.pdf`;

    // Create the category-specific directory structure
    const targetDir = path.join(process.cwd(), 'public', categoryFolder);
    
    try {
      await mkdir(targetDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Convert file to buffer and save to category folder
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(targetDir, filename);
    
    await writeFile(filePath, buffer);

    // Create document metadata
    const documentData = {
      id: Date.now().toString(),
      title,
      type: 'PDF',
      category,
      date: timestamp,
      size: formatFileSize(file.size),
      url: `/${categoryFolder}/${filename}`,
      status,
      description: description || undefined,
      filename,
      categoryFolder
    };

    // Save metadata to category-specific JSON file for better organization
    const metadataPath = path.join(targetDir, 'metadata.json');
    let existingMetadata = [];
    
    try {
      const fs = await import('fs');
      if (fs.existsSync(metadataPath)) {
        const metadataContent = await import('fs').then(fs => 
          fs.readFileSync(metadataPath, 'utf8')
        );
        existingMetadata = JSON.parse(metadataContent);
      }
    } catch (error) {
      // File doesn't exist yet or parsing error
      existingMetadata = [];
    }

    existingMetadata.push(documentData);
    
    try {
      await writeFile(
        metadataPath, 
        JSON.stringify(existingMetadata, null, 2)
      );
    } catch (error) {
      console.warn('Could not save metadata file:', error);
    }

    // Also maintain a master index for easier querying across all folders
    const masterIndexPath = path.join(process.cwd(), 'public', 'documents', 'master-index.json');
    let masterIndex = [];
    
    try {
      // Ensure documents directory exists for master index
      await mkdir(path.join(process.cwd(), 'public', 'documents'), { recursive: true });
      
      const fs = await import('fs');
      if (fs.existsSync(masterIndexPath)) {
        const indexContent = await import('fs').then(fs => 
          fs.readFileSync(masterIndexPath, 'utf8')
        );
        masterIndex = JSON.parse(indexContent);
      }
    } catch (error) {
      masterIndex = [];
    }

    masterIndex.push(documentData);
    
    try {
      await writeFile(
        masterIndexPath, 
        JSON.stringify(masterIndex, null, 2)
      );
    } catch (error) {
      console.warn('Could not save master index file:', error);
    }

    return NextResponse.json({
      success: true,
      message: `File uploaded successfully to ${categoryFolder} folder`,
      document: documentData,
      folderStructure: {
        category: categoryFolder,
        path: `/${categoryFolder}/${filename}`
      }
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Upload failed' },
      { status: 500 }
    );
  }
}

function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
} 