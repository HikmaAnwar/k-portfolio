"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center py-4 bg-[#1A0B2E] shadow-lg">
      <div className="max-w-screen-lg mx-auto w-full flex justify-between items-center px-6">
      {/* Logo */}
      <div className="text-white text-2xl font-bold">
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          K
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link 
          href="#home" 
          className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
        >
          Home
        </Link>
        <Link 
          href="#about" 
          className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
        >
          About
        </Link>
        <Link 
          href="#experience" 
          className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
        >
          Experience
        </Link>
        <Link 
          href="#projects" 
          className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
        >
          Projects
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="hidden md:flex items-center space-x-6">
        <a 
          href="mailto:hello@example.com"
          className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
          aria-label="Email"
        >
          📧
        </a>
        <a 
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
          aria-label="GitHub"
        >
          🐙
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
          aria-label="LinkedIn"
        >
          💼
        </a>
        <a 
          href="https://medium.com/@yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
          aria-label="Medium"
        >
          ✍️
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-white hover:text-purple-400 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
                 <div className="absolute top-full left-0 right-0 bg-[#1A0B2E] px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              className="text-white hover:text-purple-400 transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            
                         {/* Mobile Social Icons */}
             <div className="flex space-x-6 pt-2">
               <a 
                 href="mailto:hello@example.com"
                 className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
                 aria-label="Email"
               >
                 📧
               </a>
               <a 
                 href="https://github.com/yourusername"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
                 aria-label="GitHub"
               >
                 🐙
               </a>
               <a 
                 href="https://linkedin.com/in/yourprofile"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
                 aria-label="LinkedIn"
               >
                 💼
               </a>
               <a 
                 href="https://medium.com/@yourprofile"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-white hover:text-purple-400 transition-colors duration-300 text-xl"
                 aria-label="Medium"
               >
                 ✍️
               </a>
             </div>
          </div>
                 </div>
       )}
       </div>
     </nav>
  );
};

export default NavBar;
