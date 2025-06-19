import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// This API route will only work in development mode
// For production with static export, files should be uploaded manually to the public/documents folder

export async function POST(request: NextRequest) {
  try {
    // In static export mode, this API won't be available in production
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { 
          success: false, 
          message: 'File upload API not available in static export mode. Please upload files manually to the public/documents folder.' 
        },
        { status: 501 }
      );
    }

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

    // Create a safe filename
    const timestamp = new Date().toISOString().split('T')[0];
    const safeTitle = title.toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
    const filename = `${timestamp}-${safeTitle}.pdf`;

    // Ensure the documents directory exists
    const documentsDir = path.join(process.cwd(), 'public', 'documents');
    try {
      await mkdir(documentsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist
    }

    // Convert file to buffer and save
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(documentsDir, filename);
    
    await writeFile(filePath, buffer);

    // Create document metadata
    const documentData = {
      id: Date.now().toString(),
      title,
      type: 'PDF',
      category,
      date: new Date().toISOString().split('T')[0],
      size: formatFileSize(file.size),
      url: `/documents/${filename}`,
      status,
      description: description || undefined,
      filename
    };

    // In development, we can also save metadata to a JSON file for persistence
    const metadataPath = path.join(documentsDir, 'metadata.json');
    let existingMetadata = [];
    
    try {
      const metadataFile = await import(metadataPath).catch(() => null);
      if (metadataFile) {
        existingMetadata = metadataFile.default || [];
      }
    } catch (error) {
      // File doesn't exist yet
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

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      document: documentData
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