"use client";

import React from 'react';
import FadeInSection from './FadeInSection';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      icon: '🏆',
      title: 'UI/UX on the Mobile',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deployed: '#',
      github: '#'
    },
    {
      id: 2,
      icon: '🟠',
      title: 'UI/UX on the Web',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deployed: '#',
      github: '#'
    },
    {
      id: 3,
      icon: '🔷',
      title: 'UI/UX on the Desktop',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deployed: '#',
      github: '#'
    },
    {
      id: 4,
      icon: '🟣',
      title: 'UI/UX on the Tablet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      deployed: '#',
      github: '#'
    }
  ];

  const cardBackgrounds = [
    '/assets/Rectangle 984.svg',
    '/assets/Rectangle 983.svg',
    '/assets/Rectangle 985.svg',
    '/assets/Rectangle 986.svg',
  ];

  return (
    <section id="featured-projects" className="w-full py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <FadeInSection delay="0ms">
          <div className="text-left">
            <h2 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              Other Projects
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay="100ms">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
              <div className="w-[520px] h-[520px] bg-[url('/assets/Gradient.svg')] bg-no-repeat bg-contain bg-center opacity-70"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
              <div 
                key={project.id}
                className="relative group"
              >
              <div
                className="relative rounded-[10px] p-4 transition-transform duration-300 hover:scale-[1.01]"
                style={{
                  backgroundImage: `url(${cardBackgrounds[index]})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  boxShadow: '4px 7px 26px rgba(0, 0, 0, 0.12)',
                  borderTop: '3px solid #C084FC',
                  borderLeft: '1px solid rgba(192, 132, 252, 0.25)',
                  borderRight: '1px solid rgba(192, 132, 252, 0.25)',
                  borderBottom: '1px solid rgba(192, 132, 252, 0.25)'
                }}
              >
                <div className="relative z-10">
                  <div className="w-full">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300/90 leading-snug mt-1 pb-2">
                      {project.description}
                    </p>
                    <div className="pt-3 flex items-center gap-3">
                    <a
                      href={project.deployed}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-300/40 text-purple-100 text-sm hover:border-purple-300 hover:bg-purple-500/10 transition-colors duration-300"
                    >
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M10 13a5 5 0 0 1 7.07 0l1.17 1.17a5 5 0 0 1-7.07 7.07l-1.17-1.17" />
                        <path d="M14 11a5 5 0 0 1-7.07 0L5.76 9.83a5 5 0 1 1 7.07-7.07L14 3.93" />
                      </svg>
                      <span className="tracking-wide font-medium">VIEW LIVE</span>
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        aria-label="GitHub repository"
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-purple-300/40 text-purple-200 hover:border-purple-300 hover:bg-purple-500/10 transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.25.8-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.6-.3-5.34-1.3-5.34-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.87 1.2 3.15 0 4.5-2.75 5.5-5.37 5.79.42.36.79 1.07.79 2.16v3.2c0 .31.22.66.8.56A11.5 11.5 0 0 0 12 .5Z" />
                        </svg>
                      </a>
                    )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
        </FadeInSection>

        <FadeInSection delay="200ms">
          <div className="text-center pt-8">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Each project represents a unique challenge and opportunity to create meaningful user experiences.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default FeaturedProjects;
