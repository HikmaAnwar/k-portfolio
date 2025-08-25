"use client";

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      icon: '🏆',
      title: 'UI/UX on the Mobile',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      caseStudy: '#'
    },
    {
      id: 2,
      icon: '🟠',
      title: 'UI/UX on the Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      caseStudy: '#'
    },
    {
      id: 3,
      icon: '🔷',
      title: 'UI/UX on the Desktop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      caseStudy: '#'
    },
    {
      id: 4,
      icon: '🟣',
      title: 'UI/UX on the Tablet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      caseStudy: '#'
    }
  ];

  return (
    <section id="experience" className="w-full py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <div 
              key={experience.id}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 h-full transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center text-3xl">
                    {experience.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {experience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Case Study Link */}
                  <div className="pt-4">
                    <a 
                      href={experience.caseStudy}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors duration-300 group/link"
                    >
                      View Case Study
                      <svg 
                        className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center pt-8">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Each project represents a unique challenge and opportunity to create meaningful user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
