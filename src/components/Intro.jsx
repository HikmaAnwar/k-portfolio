"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Intro = ({ title = "I'm a Software Engineer.", typingSpeed = 50 }) => {
  const fullTitle = title;
  const [typedTitle, setTypedTitle] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let idx = 0;
    setTypedTitle("");
    const typeInterval = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, idx + 1));
      idx += 1;
      if (idx === fullTitle.length) {
        clearInterval(typeInterval);
      }
    }, typingSpeed);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typeInterval);
      clearInterval(cursorInterval);
    };
  }, [fullTitle, typingSpeed]);
  return (
    <section id="home" className="w-full flex flex-col items-center justify-center gap-12 py-16">
      {/* Top Section: Image and Designer Quote */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Profile Image */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <Image src="/assets/kirubel.jpg" alt="Profile" fill className="object-cover" />
        </div>

                 {/* Designer Quote */}
         <div className="space-y-2 text-left">
          <p className="text-2xl text-white font-medium">
            "A Designer who
          </p>
          <p className="text-2xl text-white font-medium">
            Judges a book
          </p>
          <p className="text-2xl text-white font-medium">
            by its{" "}
            <span className="relative">
              <span className="text-purple-400 font-bold">cover</span>
              <div className="absolute -inset-1 border border-white rounded-full opacity-50"></div>
            </span>
            ..."
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Because if the cover does not impress you what else can?
          </p>
        </div>
      </div>

             {/* Bottom Section: Professional Title and Description */}
       <div className="flex flex-col items-start text-left space-y-6 max-w-4xl">
        {/* Professional Title */}
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            <span aria-label="typing-intro">{typedTitle}</span>
            <span className="ml-1" aria-hidden="true">{showCursor ? "|" : "\u00A0"}</span>
          </h1>
          
          <p className="text-lg text-white">
            Currently, I'm a Full Stack Developer at{" "}
            <span className="text-purple-400 font-semibold">Matrix Technology PLC.</span>
          </p>
        </div>

                 {/* Description */}
         <div className="space-y-4">
                       <p className="text-lg text-gray-300 leading-relaxed text-justify">
              A self-taught UI/UX designer, functioning in the industry for 3+ years now. 
              I make meaningful and delightful digital products that create an equilibrium 
              between user needs and business goals.
            </p>
         </div>
      </div>
    </section>
  );
};

export default Intro;
