import React, { useState } from 'react'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-end items-center p-5 md:pr-10 md:pt-5 relative">
            {/* Hamburger Button (Mobile Only) */}
            <button
                className="md:hidden block focus:outline-none z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    )}
                </svg>
            </button>

            {/* Menu Items */}
            <ul className={`
                ${isMenuOpen ? 'flex' : 'hidden'} 
                md:flex flex-col md:flex-row 
                absolute md:static top-10 right-5 
                bg-white md:bg-transparent 
                shadow-lg md:shadow-none 
                p-5 md:p-0 
                rounded-lg md:rounded-none 
                gap-5 
                z-50 
                w-48 md:w-auto
            `}>
                <li><a href="">Work</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header