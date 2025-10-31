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
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-colors-slate hover:text-colors-greenBright"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.5-5.37 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.22.66.8.56A11.5 11.5 0 0 0 12 .5Z" />
          </svg>
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-colors-slate hover:text-colors-greenBright"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6V24h-4v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24h-4V8z" />
          </svg>
        </a>
        <a 
          href="mailto:hello@example.com"
          aria-label="Email"
          className="text-colors-slate hover:text-colors-greenBright"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 4h16v16H4z" />
            <path d="m22 6-10 7L2 6" />
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
                className="text-colors-slate hover:text-colors-greenBright"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.5-5.37 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.22.66.8.56A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-colors-slate hover:text-colors-greenBright"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6V24h-4v-6.8c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58V24h-4V8z" />
                </svg>
              </a>
              <a 
                href="mailto:hello@example.com"
                aria-label="Email"
                className="text-colors-slate hover:text-colors-greenBright"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16v16H4z" />
                  <path d="m22 6-10 7L2 6" />
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
