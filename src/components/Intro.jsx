"use client";

import React from 'react';
import Image from 'next/image';

const Intro = () => {
  return (
    <section id="home" className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
            <span className="text-white text-6xl font-bold">👨‍💻</span>
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-2xl space-y-6">
        {/* Main Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white">
          I'm a Software Engineer!
        </h1>

        {/* Quote */}
        <p className="text-xl text-gray-300">
          "Judges a book by its{" "}
          <span className="text-purple-400 font-semibold">cover</span>
          ..."
        </p>

        {/* Description */}
        <p className="text-lg text-gray-400 leading-relaxed">
          I'm a self-taught UI/UX designer. I've been in the industry for 2+ years now. 
          I make meaningful and delightful digital products that create an equilibrium 
          between user needs and business goals.
        </p>

        {/* Call to Action */}
        <div className="pt-4">
          <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
