"use client";

import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <section id="home" className="w-full flex flex-col items-center justify-center gap-12 py-16">
      {/* Top Section: Profile Avatar and Designer Quote */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Profile Avatar with Laptop */}
        <div className="relative">
          <div className="relative w-80 h-80">
            {/* Avatar */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-8xl">👨‍💻</span>
              </div>
            </div>
            
            
            
            {/* Speech Bubble */}
            <div className="absolute -top-8 -right-8 bg-white rounded-2xl px-4 py-2 shadow-lg">
              <div className="relative">
                <div className="text-sm font-semibold text-gray-800">
                  Hello! I Am <span className="text-purple-600 font-bold">Ibrahim Memon</span>
                </div>
                {/* Speech bubble arrow */}
                <div className="absolute -bottom-2 left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
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
            I'm a Software Engineer.|
          </h1>
          
          <p className="text-lg text-white">
            Currently, I'm a Software Engineer at{" "}
            <span className="text-blue-500 font-semibold">Facebook</span>
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
