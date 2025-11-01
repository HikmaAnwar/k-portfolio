"use client";

import React from 'react';
import FadeInSection from './FadeInSection';

const About = () => {
  // Tech stack icons - update these paths to change the icons
  // Top row: 7 icons
  const topRowIcons = [
    "/assets/Rectangle 2 (2).svg",
    "/assets/Rectangle 9.svg",
    "/assets/Rectangle 4.svg",
    "/assets/Rectangle 6.svg",
    "/assets/Go-Logo_LightBlue.svg",
    "/assets/postgreesql.png",
    "/assets/tech-icon-7.svg",
  ];
  
  // Bottom row: 6 icons
  const bottomRowIcons = [
    "/assets/tech-icon-8.svg",
    "/assets/tech-icon-9.svg",
    "/assets/tech-icon-10.svg",
    "/assets/tech-icon-11.svg",
    "/assets/tech-icon-12.svg",
    "/assets/tech-icon-13.svg",
  ];

  return (
    <section id="about" className="w-full py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Main Content */}
        <FadeInSection delay="0ms">
          <div className="text-left space-y-6">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-8">
              About Me
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Starting my journey as a full stack developer and evolving into a Lead Backend Developer with 5+ years of hands-on experience in building robust, scalable systems.
            </p>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              I specialize in designing scalable backend architectures, RESTful APIs, and efficient database systems. 
              My expertise includes building high-performance applications, optimizing system performance, and leading technical initiatives. 
              Currently leading backend development at Matrix Technology PLC, I focus on architecting systems that handle complex business logic 
              while maintaining code quality and performance standards.
            </p>
          </div>
        </FadeInSection>

        {/* Contact Information Section */}
        <FadeInSection delay="100ms">
          <div className="space-y-6">
          <div className="space-y-4">
            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
              <svg 
                className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <div className="flex flex-row space-x-4">
                <span className="text-white">+251 987526900</span>
                <span className="text-white">+251 919870929</span>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex items-start space-x-4">
              <svg 
                className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              <span className="text-white">kirub.hel@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a 
              href="https://wa.me/251919870929"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-purple-400 text-purple-400 bg-transparent rounded-lg font-medium hover:bg-purple-400/10 transition-colors duration-200 text-center flex items-center justify-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contact Me
            </a>
            <a 
              href="/assets/kirubel-Gizaw-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 transition-colors duration-200 text-center"
            >
              Download CV
            </a>
          </div>
        </div>
        </FadeInSection>

        {/* Tech Stack Image */}
        <FadeInSection delay="200ms">
          <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white text-left mt-12 pt-8">
            Technologies & Tools
          </h3>
          
          {/* Dynamic Tech Stack Icon Circles - 7 on top, 6 below */}
          <div className="flex flex-col items-center gap-6 -mb-8 relative z-10">
            {/* Top Row - 7 circles */}
            <div className="flex justify-center gap-2 sm:gap-3 flex-nowrap">
              {topRowIcons.map((icon, index) => (
                <div 
                  key={`top-${index}`}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-2 border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden hover:border-purple-400/60 transition-colors flex-shrink-0"
                >
                  <img 
                    src={icon} 
                    alt={`Tech Stack Icon ${index + 1}`} 
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain p-1"
                  />
                </div>
              ))}
            </div>
            
            {/* Bottom Row - 6 circles */}
            <div className="flex justify-center gap-2 sm:gap-3 flex-nowrap">
              {bottomRowIcons.map((icon, index) => (
                <div 
                  key={`bottom-${index}`}
                  className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-2 border-purple-400/30 flex items-center justify-center shadow-lg shadow-purple-500/20 overflow-hidden hover:border-purple-400/60 transition-colors flex-shrink-0"
                >
                  <img 
                    src={icon} 
                    alt={`Tech Stack Icon ${index + 8}`} 
                    className="w-9 h-9 sm:w-10 sm:h-10 object-contain p-1"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center -mt-8">
            <div className="relative">
              <img 
                src="/assets/Group 1939 (1).svg" 
                alt="Technology Stack" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
           
               
            </div>
          </div>
        </div>
        </FadeInSection>

        {/* Additional Info */}
        <FadeInSection delay="300ms">
          <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            I thrive on solving complex technical challenges and turning business requirements into performant, maintainable code solutions.
          </p>
          
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">4+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">20+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
