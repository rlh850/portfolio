import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsRepository } from '../repository/projects.repository';

const Projects = () => {
   const projects = projectsRepository.getAllProjects();

   return (
      <div className="flex flex-col flex-1 p-4 font-mono">
         <motion.h1
            className="text-6xl mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
         >
            Projects
         </motion.h1>

         <motion.p
            className="text-xl text-gray-200 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
         >
            Here are some of the projects I've been working on
         </motion.p>

         <div className="grid gap-8">
            {projects.map((project, index) => (
               <motion.div
                  key={index}
                  className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
               >
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                           {project.title}
                        </h3>
                        <span
                           className={`inline-block px-3 py-1 rounded-full text-sm ${
                              project.status === 'Live'
                                 ? 'bg-green-500/20 text-green-400'
                                 : project.status === 'In Progress'
                                   ? 'bg-yellow-500/20 text-yellow-400'
                                   : 'bg-blue-500/20 text-blue-400'
                           }`}
                        >
                           {project.status}
                        </span>
                     </div>

                     <div className="flex gap-3 mt-4 md:mt-0">
                        <a
                           href={project.githubUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                        >
                           <FaGithub className="text-xl" />
                        </a>
                        <a
                           href={project.liveUrl}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                        >
                           <FaExternalLinkAlt className="text-lg" />
                        </a>
                     </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                     {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                     {project.technologies.map((tech, techIndex) => (
                        <div
                           key={techIndex}
                           className="flex items-center gap-2 px-3 py-2 bg-gray-700/50 rounded-lg border border-gray-600"
                        >
                           <tech.icon className="text-lg" />
                           <span className="text-sm">{tech.name}</span>
                        </div>
                     ))}
                  </div>
               </motion.div>
            ))}
         </div>
      </div>
   );
};

export default Projects;
