'use client';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatWindow from './components/chat/ChatWindow';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { motion } from 'motion/react';

const page = () => {
   const [activeSection, setActiveSection] = useState('Home');

   const renderContent = () => {
      switch (activeSection) {
         case 'Home':
            return (
               <div className="flex justify-center items-center p-4">
                  <div className="flex max-w-7xl w-full">
                     <div className="flex-1">
                        <Hero />
                     </div>
                     <div className="flex-1">
                        <ChatWindow />
                     </div>
                  </div>
               </div>
            );
         case 'Projects':
            return (
               <div className="flex justify-center p-4">
                  <div className="max-w-4xl w-full">
                     <Projects />
                  </div>
               </div>
            );
         case 'About':
            return (
               <div className="flex justify-center items-center p-4">
                  <div className="max-w-4xl w-full text-center font-mono">
                     <h1 className="text-6xl mb-8">About</h1>
                     <p className="text-xl text-gray-200">Coming soon...</p>
                  </div>
               </div>
            );
         case 'Contact':
            return (
               <div className="flex justify-center items-center p-4">
                  <div className="max-w-4xl w-full text-center font-mono">
                     <h1 className="text-6xl mb-8">Contact</h1>
                     <p className="text-xl text-gray-200">Coming soon...</p>
                  </div>
               </div>
            );
         default:
            return null;
      }
   };

   return (
      <div>
         <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
         />
         {renderContent()}
         <div className="overflow-hidden whitespace-nowrap">
            <motion.div
               animate={{
                  x: ['-100%', '100vw'],
               }}
               transition={{
                  duration: 50,
                  repeat: Infinity,
                  ease: 'easeOut',
               }}
               className="inline-block"
            >
               Still working on this..bare with me
            </motion.div>
         </div>
      </div>
   );
};

export default page;
