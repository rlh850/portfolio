import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
   try {
      // Get the path to the public/images directory
      const imagesDirectory = path.join(process.cwd(), 'public', 'images');

      // Read the directory contents
      const files = fs.readdirSync(imagesDirectory);

      // Filter for image files only
      const imageExtensions = [
         '.jpg',
         '.jpeg',
         '.png',
         '.gif',
         '.webp',
         '.svg',
      ];
      const imageFiles = files.filter((file) => {
         const ext = path.extname(file).toLowerCase();
         return imageExtensions.includes(ext);
      });

      // Create array of image paths using a for loop (as requested)
      const imagePaths = [];
      for (let i = 0; i < imageFiles.length; i++) {
         imagePaths.push(`/images/${imageFiles[i]}`);
      }


      return NextResponse.json({
         success: true,
         imagePaths,
         count: imageFiles.length,
      });
   } catch (error) {
      console.error('Error reading images directory:', error);
      return NextResponse.json(
         { success: false, error: 'Failed to read images directory' },
         { status: 500 }
      );
   }
}
