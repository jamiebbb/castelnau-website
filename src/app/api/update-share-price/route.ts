import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function POST() {
  try {
    // Get the absolute path to the script
    const scriptPath = path.join(process.cwd(), 'scripts', 'update_share_price.py');
    
    // Run the Python script
    const { stdout, stderr } = await execAsync(`python ${scriptPath}`);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Share price updated successfully',
      output: stdout,
      error: stderr
    });
  } catch (error) {
    console.error('Error updating share price:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to update share price' 
    }, { status: 500 });
  }
} 