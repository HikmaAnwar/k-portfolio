"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "experience", "featured-projects", "projects"]; 
    const sections = sectionIds
      .map((id) => typeof document !== "undefined" ? document.getElementById(id) : null)
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px", // focus middle of viewport
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkBase = "no-underline transition-colors duration-200";
  const linkIdle = "text-colors-slate hover:text-colors-greenBright";
  const linkActive = "text-colors-greenBright";

  return (
    <nav className="fixed top-0 z-50 w-full h-14 text-sm font-bold text-colors-slate bg-colors-dark backdrop-blur-sm bg-opacity-100">
      <div className="max-w-screen-lg mx-auto w-full flex items-center justify-between px-2 py-4">
      {/* Branding: Stylized K + Name (leftmost) */}
      <Link href="#home" className="flex items-center space-x-3 no-underline">
        <div className="text-2xl sm:text-3xl font-extrabold leading-none">
          <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent drop-shadow">
            Kirubel
          </span>
        </div>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex space-x-8">
        <Link 
          href="#home" 
          className={`${linkBase} ${activeSection === "home" ? linkActive : linkIdle}`}
        >
          Home
        </Link>
        <Link 
          href="#about" 
          className={`${linkBase} ${activeSection === "about" ? linkActive : linkIdle}`}
        >
          About
        </Link>
        <Link 
          href="#experience" 
          className={`${linkBase} ${activeSection === "experience" ? linkActive : linkIdle}`}
        >
          Experience
        </Link>
        <Link 
          href="#featured-projects" 
          className={`${linkBase} ${activeSection === "featured-projects" ? linkActive : linkIdle}`}
        >
          Featured
        </Link>
        <Link 
          href="#projects" 
          className={`${linkBase} ${activeSection === "projects" ? linkActive : linkIdle}`}
        >
          Projects
        </Link>
      </div>

      {/* Right Icons: GitHub, LinkedIn, Email (SVG) */}
      <div className="hidden md:flex items-center space-x-7">
        <a 
          href="https://github.com/kirubhel"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.5-5.37 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.22.66.8.56A11.5 11.5 0 0 0 12 .5Z" />
          </svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/kirubel-gizaw-b8bab1244/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a 
          href="https://t.me/kirube_l"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
        >
          <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={toggleMenu}
          className="text-colors-lightestSlate hover:text-colors-greenBright"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
                 <div className="absolute top-full left-0 right-0 bg-colors-dark backdrop-blur-sm bg-opacity-100 px-6 py-4 shadow-lg md:hidden text-colors-slate">
          <div className="flex flex-col space-y-4">
            <Link 
              href="#home" 
              className={`no-underline ${activeSection === "home" ? "text-colors-greenBright" : "text-colors-slate hover:text-colors-greenBright"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="#about" 
              className={`no-underline ${activeSection === "about" ? "text-colors-greenBright" : "text-colors-slate hover:text-colors-greenBright"}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className={`no-underline ${activeSection === "experience" ? "text-colors-greenBright" : "text-colors-slate hover:text-colors-greenBright"}`}
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link 
              href="#featured-projects" 
              className={`no-underline ${activeSection === "featured-projects" ? "text-colors-greenBright" : "text-colors-slate hover:text-colors-greenBright"}`}
              onClick={toggleMenu}
            >
              Featured
            </Link>
            <Link 
              href="#projects" 
              className={`no-underline ${activeSection === "projects" ? "text-colors-greenBright" : "text-colors-slate hover:text-colors-greenBright"}`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            {/* Mobile right icons */}
            <div className="flex space-x-6 pt-2">
              <a 
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.5-5.37 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.22.66.8.56A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:hello@example.com"
                aria-label="Email"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
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
