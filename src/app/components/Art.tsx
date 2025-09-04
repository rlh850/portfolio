import React from 'react';
import Image from 'next/image';

const Art = () => {
   return (
      <div className="max-w-4xl w-full text-center font-mono">
         <h1 className="text-6xl mb-8">Art</h1>
         <div>
            <Image
               src="/images/rlharris850_Wide_panoramic_view_of_a_futuristic_astronaut_in__dffe694b-c7d7-426e-88f9-a6e5b8236195_1.png"
               alt="Futuristic astronaut panoramic view"
               width={1920}
               height={1080}
               className="w-full h-auto object-cover rounded-4xl"
            ></Image>
         </div>
      </div>
   );
};

export default Art;
