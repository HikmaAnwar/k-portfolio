"use client";

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "In web app for a leading organization from Dubai. Here, I was responsible for product discovery, user research, user flows, wireframes, prototypes, usability testing, and UI design. I also worked closely with the client, product, and development teams to ensure that the product met user needs and business goals.",
      mockup: "🛒",
      image: "/window.svg",
      liveLink: "https://example.com"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "In web app for a leading organization from Dubai. Here, I was responsible for product discovery, user research, user flows, wireframes, prototypes, usability testing, and UI design. I also worked closely with the client, product, and development teams to ensure that the product met user needs and business goals.",
      mockup: "🏥",
      image: "/next.svg",
      liveLink: "https://example.com"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "In web app for a leading organization from Dubai. Here, I was responsible for product discovery, user research, user flows, wireframes, prototypes, usability testing, and UI design. I also worked closely with the client, product, and development teams to ensure that the product met user needs and business goals.",
      mockup: "🏥",
      image: "/next.svg",
      liveLink: "https://example.com"
    }

  ];

  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-left">
            Projects
          </h2>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <div key={project.id} className="w-full">
            {index % 2 === 0 ? (
              // Text on left (overlapping) , Mockup on right
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Description Card (overlaps mockup) */}
                <div className="space-y-3 lg:pr-8">
                  <h3
                    className="text-3xl font-semibold pb-18 relative z-30 lg:-mt-10"
                    style={{ color: '#A855F7' }}
                  >
                    {project.title}
                  </h3>
                  <div
                    className="rounded-2xl p-5 lg:max-w-xl lg:w-[560px] border border-white/10 shadow-xl lg:translate-x-4 lg:-translate-y-1 relative z-20 overflow-hidden"
                    style={{ minHeight: '140px' }}
                  >
                    {/* background layer flipped so the light edge is on the right (overlap side) */}
                    <div
                      className="pointer-events-none absolute inset-0 -z-10"
                      style={{
                        backgroundImage: "url('/assets/Rectangle 1.png')",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        transform: 'scaleX(-1)'
                      }}
                    />
                    <p className="text-gray-200 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                  {/* Live Link Icon */}
                  {project.liveLink && (
                    <div className="mt-3 flex justify-start pl-4">
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Open live project"
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>

                {/* Project Mockup */}
                <div className="relative lg:-ml-4">
                  <div className="relative z-10 rounded-2xl shadow-2xl p-4 min-h-[360px] bg-[#1b0f2a] border border-white/5 lg:w-[110%] lg:-translate-x-2">
                    <div className="bg-white rounded-xl overflow-hidden aspect-[16/10] w-full flex items-center justify-center">
                      {project.image ? (
                        <img src={project.image} alt={`${project.title} mockup`} className="w-full h-full object-contain" />
                      ) : (
                        <div className="text-8xl">{project.mockup}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Mockup on left, Text on right
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Mockup */}
                <div className="relative order-2 lg:order-1 lg:-mr-14">
                  <div className="relative z-10 rounded-2xl shadow-2xl p-4 min-h-[360px] bg-[#1b0f2a] border border-white/5 lg:w-[105%]">
                    <div className="bg-white rounded-xl overflow-hidden aspect-[16/10] w-full flex items-center justify-center">
                      {project.image ? (
                        <img src={project.image} alt={`${project.title} mockup`} className="w-full h-full object-contain" />
                      ) : (
                        <div className="text-8xl">{project.mockup}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Description Card (overlaps mockup) */}
                <div className="space-y-3 order-1 lg:order-2 lg:pl-8">
                  <h3
                    className="text-3xl font-semibold pb-18 relative z-30 lg:-mt-10 text-right lg:pl-4"
                    style={{ color: '#A855F7' }}
                  >
                    {project.title}
                  </h3>
                  <div className="relative w-full lg:max-w-xl lg:w-[560px]">
                    <div
                      className="rounded-2xl p-5 w-full border border-white/10 shadow-xl lg:-translate-x-6 lg:-translate-y-1 relative z-20 overflow-hidden"
                      style={{ minHeight: '140px' }}
                    >
                      {/* background layer normal so the light edge stays on the left */}
                      <div
                        className="pointer-events-none absolute inset-0 -z-10"
                        style={{
                          backgroundImage: "url('/assets/Rectangle 1.png')",
                          backgroundSize: 'cover',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}
                      />
                      <p className="text-gray-200 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                    {/* Live Link Icon - positioned below card, aligned to right edge */}
                    {project.liveLink && (
                      <div className="mt-3 flex justify-end pr-16">
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="Open live project"
                          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Additional Info */}
        <div className="text-center pt-8">
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            These projects showcase my approach to solving complex design challenges and creating user-centered solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
