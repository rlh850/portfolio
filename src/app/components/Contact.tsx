import React from 'react';

const Contact = () => {
   return (
      <div className="flex justify-center items-center p-4">
         <div className="max-w-4xl w-full text-center font-mono bg-black p-8 rounded-2xl">
            <h1 className="text-6xl mb-8">Contact</h1>
            <div className="space-y-4 text-xl text-gray-200">
               <div>
                  <p className="mb-2">Email:</p>
                  <a
                     href="mailto:rlharris850@gmail.com"
                     className="text-white transition-colors duration-200"
                  >
                     rlharris850@gmail.com
                  </a>
               </div>
               <div>
                  <p className="mb-2">Phone:</p>
                  <a
                     href="tel:850-748-6986"
                     className="text-white transition-colors duration-200"
                  >
                     850-748-6986
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
