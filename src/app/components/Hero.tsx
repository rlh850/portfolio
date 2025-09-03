import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

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

         <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
         >
            <a
               href="https://github.com/rlh850/portfolio"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200 border border-gray-600 hover:border-gray-500"
            >
               <FaGithub className="text-xl" />
               <span>View on GitHub</span>
               <FaExternalLinkAlt className="text-sm" />
            </a>
         </motion.div>
      </div>
   );
};

export default Hero;
