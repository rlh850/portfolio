'use client';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import ChatWindow from './components/chat/ChatWindow';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Art from './components/Art';
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
         case 'Art':
            return (
               <div className="flex justify-center items-center p-4">
                  <Art />
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
         <div className="overflow-hidden whitespace-nowrap"></div>
      </div>
   );
};

export default page;
