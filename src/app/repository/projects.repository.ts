import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

export interface Project {
   title: string;
   description: string;
   technologies: {
      name: string;
      icon: React.ComponentType<{ className?: string }>;
   }[];
   githubUrl: string;
   liveUrl: string;
   status: 'Live' | 'In Progress' | 'Completed';
}

export const projects: Project[] = [
   {
      title: 'Portfolio Website',
      description:
         'This very website! A modern portfolio with AI chat integration built with Next.js and OpenAI.',
      technologies: [
         { name: 'Next.js', icon: SiNextdotjs },
         { name: 'TypeScript', icon: SiTypescript },
         { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      githubUrl: 'https://github.com/rlh850/portfolio',
      liveUrl: '#',
      status: 'Live',
   },
   {
      title: 'Personal Saas Template',
      description:
         'This is my personal Tech Stack that I use for building projects by hand and for vibe coding.',
      technologies: [
         { name: 'Next.js', icon: SiNextdotjs },
         { name: 'TypeScript', icon: SiTypescript },
         { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      githubUrl: 'https://github.com/rlh850/portfolio',
      liveUrl: '#',
      status: 'Live',
   },
   // More projects go here
];

export const projectsRepository = {
   getAllProjects(): Project[] {
      return projects;
   },
};
