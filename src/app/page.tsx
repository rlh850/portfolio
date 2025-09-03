'use client';
import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import ChatWindow from './components/chat/ChatWindow';
import Hero from './components/Hero';
import { motion } from 'motion/react';

const page = () => {
   return (
      <div>
         <Navigation />
         <div className="flex justify-center p-4">
            <div className="">
               <Hero />
            </div>
            <div className="w-1/2">
               <ChatWindow />
            </div>
         </div>
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
