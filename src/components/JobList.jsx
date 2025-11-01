"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const [value, setValue] = useState(0);

  const experienceItems = {
    "DAFTech Social": {
      jobTitle: "FullStack Developer @",
      duration: "January 17, 2022 - Present",
      desc: [
        "Developed and maintained full-stack web applications using modern technologies.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Implemented scalable architectures and optimized application performance.",
      ],
    },
    "DAFTech Social (Frontend)": {
      jobTitle: "Junior Frontend Developer @",
      duration: "February 15, 2021 - September 10, 2021",
      desc: [
        "Built responsive user interfaces using modern frontend frameworks.",
        "Collaborated with designers to implement pixel-perfect UI components.",
        "Improved user experience through performance optimization and accessibility.",
      ],
    },
    "DAFTech Social (Backend)": {
      jobTitle: "Junior Backend Developer @",
      duration: "September 13, 2021 - January 14, 2022",
      desc: [
        "Designed and implemented RESTful APIs and backend services.",
        "Worked with database systems to ensure data integrity and performance.",
        "Participated in code reviews and maintained coding standards.",
      ],
    },
    
    "Matrix Technology PLC": {
      jobTitle: "Senior backend Developer @",
      duration: "January 15, 2025 - Present",
      desc: [
        "Designed and implemented RESTful APIs and backend services.",
        "Worked with database systems to ensure data integrity and performance.",
        "Participated in code reviews and maintained coding standards.",
      ],
    },
  };

  const handleChange = (index) => {
    setValue(index);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
      {/* Sidebar company list */}
      <div className="sm:col-span-1 relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-700/60"></div>
        <div className="space-y-1">
          {Object.keys(experienceItems).map((key, i) => (
            <button
              key={i}
              onClick={() => handleChange(i)}
              className={`w-full text-left px-3 py-2 border-l-2 transition-colors ${
                value === i
                  ? "border-purple-400 text-purple-300 font-semibold"
                  : "border-transparent text-colors-slate hover:text-gray-300"
              }`}
            >
              {key.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Content pane */}
      <div className="sm:col-span-3">
        {Object.keys(experienceItems).map((key, i) => (
          <div
            key={i}
            className={`${value === i ? "block" : "hidden"} transition-opacity`}
          >
            <h3 className="text-2xl font-semibold text-white">
              {experienceItems[key].jobTitle}
              <span className="text-purple-300"> {key}</span>
            </h3>
            <div className="mb-6 mt-2 text-sm text-gray-400">
              {experienceItems[key].duration}
            </div>
            <ul className="space-y-4">
              {experienceItems[key].desc.map((descItem, idx) => {
                // Highlight "scalable backend systems" with purple and bold
                const highlightText = "scalable backend systems";
                const parts = descItem.split(new RegExp(`(${highlightText})`, 'gi'));
                
                return (
                  <FadeInSection key={idx} delay={`${idx + 1}00ms`}>
                    <li className="flex gap-3 text-white">
                      <svg className="mt-1 w-3 h-3 text-purple-400 flex-none" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                        <polygon points="0,0 10,5 0,10" />
                      </svg>
                      <span>
                        {parts.map((part, partIdx) => 
                          part.toLowerCase() === highlightText.toLowerCase() ? (
                            <span key={partIdx} className="text-purple-400 font-bold">{part}</span>
                          ) : (
                            <span key={partIdx}>{part}</span>
                          )
                        )}
                      </span>
                    </li>
                  </FadeInSection>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;


