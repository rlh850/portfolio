import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageData {
   success: boolean;
   imagePaths: string[];
   count: number;
}

const Art = () => {
   const [imagePaths, setImagePaths] = useState<string[]>([]);
   const [loading, setLoading] = useState(true);

   // Fetch all image paths when component mounts
   useEffect(() => {
      const fetchImages = async () => {
         try {
            const response = await fetch('/api/images');
            const data: ImageData = await response.json();

            if (data.success) {
               setImagePaths(data.imagePaths);
            }
         } catch (error) {
            console.error('Error fetching images:', error);
         } finally {
            setLoading(false);
         }
      };

      fetchImages();
   }, []);

   // Create array using for loop (as requested)
   const createImageArray = () => {
      const imageArray = [];
      for (let i = 0; i < imagePaths.length; i++) {
         imageArray.push(imagePaths[i]);
      }
      return imageArray;
   };

   if (loading) {
      return (
         <div className="max-w-4xl w-full text-center font-mono">
            <h1 className="text-6xl mb-8">Art</h1>
            <p>Loading images...</p>
         </div>
      );
   }

   const imageArray = createImageArray();

   return (
      <div className="max-w-4xl w-full text-center font-mono">
         <h1 className="text-6xl mb-8">Art</h1>
         <div className="">
            {imageArray.map((imagePath, index) => (
               <div key={index}>
                  <Image
                     src={imagePath}
                     alt={`Art piece ${index + 1}`}
                     width={1920}
                     height={1080}
                     className="w-full h-auto object-cover rounded-4xl"
                  />
               </div>
            ))}
         </div>
      </div>
   );
};

export default Art;
