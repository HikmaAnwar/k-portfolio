"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FadeInSection from './FadeInSection';

const Intro = ({ title = "Hello! I'm Kirubel Gizaw.", typingSpeed = 50 }) => {
  const fullTitle = title;
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset and start typing animation
    let idx = 0;
    setTypedTitle("");
    
    // Use setTimeout to ensure state is reset before starting animation
    let typeInterval;
    const startTyping = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (idx < fullTitle.length) {
          setTypedTitle(fullTitle.slice(0, idx + 1));
          idx += 1;
        } else {
          clearInterval(typeInterval);
        }
      }, typingSpeed);
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(startTyping);
      if (typeInterval) clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [fullTitle, typingSpeed]);
  return (
    <section 
      id="home" 
      className="w-full h-screen flex flex-col items-center justify-center gap-8 sm:gap-12 relative overflow-hidden px-4 sm:px-8"
      style={{
        backgroundImage: "url('/assets/hero-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        marginTop: 0
      }}
    >
      {/* Light Purplish Overlay */}
      <div className="absolute inset-0 bg-purple-900/15 z-0"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 sm:gap-12 w-full max-w-6xl mx-auto px-6 sm:px-12">
      {/* Top Section: Image and Designer Quote */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 w-full">
        {/* Profile Image */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20 flex-shrink-0">
          <Image src="/assets/kirubel.jpg" alt="Profile" fill className="object-cover" />
        </div>

        {/* Designer Quote */}
        <div className="space-y-2 text-left">
          <p className="text-xl sm:text-2xl text-white font-medium">
            "A Developer that design and maintain
          </p>
          <p className="text-xl sm:text-2xl text-white font-medium">
            <span className="text-purple-400 font-bold">Scalable Backend Systems</span>{" "}
            <span className="text-white">that power</span>
          </p>
          <p className="text-xl sm:text-2xl text-white font-medium">
            seamless user experiences."
          </p>
          
        </div>
      </div>

      {/* Bottom Section: Professional Title and Description */}
      <div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 w-full">
        {/* Professional Title */}
        <FadeInSection delay="0ms">
          <div className="space-y-3 sm:space-y-4 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              <span aria-label="typing-intro">{typedTitle}</span>
              <span className="ml-1" aria-hidden="true">{showCursor ? "|" : "\u00A0"}</span>
            </h1>
            
            <p className="text-base sm:text-lg text-white">
              Currently, A Lead Backend Developer at{" "}
              <span className="text-purple-400 font-semibold">Matrix Technology PLC.</span>
            </p>
          </div>
        </FadeInSection>

        {/* Description */}
        <FadeInSection delay="100ms">
          <div className="space-y-4 w-full">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
              A Backend-focused full-stack developer specializing in scalable backend systems, RESTful APIs, and database architectures that power seamless user experiences.
            </p>
          </div>
        </FadeInSection>
      </div>
      </div>
    </section>
  );
};

export default Intro;
