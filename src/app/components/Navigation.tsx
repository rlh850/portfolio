import React from 'react';

const pages = ['Home', 'Projects', 'Art', 'Contact'];

interface NavigationProps {
   activeSection: string;
   setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
   return (
      <nav className="flex gap-2 md:gap-4 justify-center mt-4 font-mono flex-wrap">
         {pages.map((page, index) => (
            <li
               key={index}
               onClick={() => setActiveSection(page)}
               className={`list-none cursor-pointer border-b-2 border-transparent hover:border-white p-1 rounded transition-all duration-300 ease-in-out ${
                  activeSection === page
                     ? 'text-white border-white'
                     : 'text-gray-400 hover:text-gray-300'
               }`}
            >
               {page}
            </li>
         ))}
      </nav>
   );
};

export default Navigation;
