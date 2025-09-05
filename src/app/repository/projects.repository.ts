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
      githubUrl: 'https://github.com/rlh850/next-saas-ai-starter',
      liveUrl: '#',
      status: 'Live',
   },
   {
      title: 'AI Recipe Generator',
      description:
         'An AI-powered recipe and cooking assistant built with Next.js 15, featuring intelligent chat capabilities, real-time data synchronization, and OpenAI integration. Perfect for discovering recipes, getting cooking advice, and enhancing your culinary experience.',
      technologies: [
         { name: 'Next.js', icon: SiNextdotjs },
         { name: 'TypeScript', icon: SiTypescript },
         { name: 'Tailwind CSS', icon: SiTailwindcss },
      ],
      githubUrl: 'https://github.com/rlh850/RecipeCGI',
      liveUrl: 'https://recipe-cgi.vercel.app/',
      status: 'In Progress',
   },
   // More projects go here
];

export const projectsRepository = {
   getAllProjects(): Project[] {
      return projects;
   },
};
