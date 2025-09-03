import React from 'react';
import { motion } from 'motion/react';

const skills = ['Progrmaming', 'Design', 'AI', 'Sound Design'];

const Hero = () => {
   return (
      <div className="flex flex-col flex-1 p-4">
         <motion.h1
            className="text-8xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
         >
            Robert Harris
         </motion.h1>

         <motion.p
            className="text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
         >
            Self taught Software Engineer
         </motion.p>

         <motion.p
            className="italic text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
         >
            There is always room to improve
         </motion.p>
         <motion.div className="flex gap-4">
            {skills.map((skill, index) => (
               <motion.div
                  key={index}
                  className="bg-gray-400 p-1 rounded mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 5 }}
               >
                  {skill}
               </motion.div>
            ))}
         </motion.div>
      </div>
   );
};

export default Hero;
