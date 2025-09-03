import React from 'react'

const pages = ['Home', 'Projects', 'About', 'Contact']

const Navigation = () => {
    return (
        <nav className="flex gap-4 justify-center mt-4 font-mono">
            {pages.map((page, index) => (
                <li
                    key={index}
                    className="list-none text-white hover:text-gray-300 transition-colors cursor-pointer"
                >
                    {page}
                </li>
            ))}
        </nav>
    )
}

export default Navigation
