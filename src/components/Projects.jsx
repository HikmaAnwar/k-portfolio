"use client";

import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "In web app for a leading organization from Dubai. Here, I was responsible for product discovery, user research, user flows, wireframes, prototypes, usability testing, and UI design. I also worked closely with the client, product, and development teams to ensure that the product met user needs and business goals.",
      mockup: "🛒",
      layout: "text-left"
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "In web app for a leading organization from Dubai. Here, I was responsible for product discovery, user research, user flows, wireframes, prototypes, usability testing, and UI design. I also worked closely with the client, product, and development teams to ensure that the product met user needs and business goals.",
      mockup: "🏥",
      layout: "text-right"
    }
  ];

  return (
    <section id="projects" className="w-full py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
            Example Projects
          </h2>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <div key={project.id} className="w-full">
            {project.layout === "text-left" ? (
              // Text on left, Mockup on right
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Description */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Navigation Dots */}
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-400/50 rounded-full"></div>
                  </div>
                </div>

                {/* Project Mockup */}
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-2xl p-8 min-h-[400px] flex items-center justify-center">
                    <div className="text-8xl">
                      {project.mockup}
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-xl"></div>
                </div>
              </div>
            ) : (
              // Mockup on left, Text on right
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Project Mockup */}
                <div className="relative order-2 lg:order-1">
                  <div className="bg-white rounded-lg shadow-2xl p-8 min-h-[400px] flex items-center justify-center">
                    <div className="text-8xl">
                      {project.mockup}
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-purple-500/10 rounded-lg blur-xl"></div>
                </div>

                {/* Project Description */}
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="bg-gray-800/50 border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  {/* Navigation Dots */}
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-400/50 rounded-full"></div>
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
