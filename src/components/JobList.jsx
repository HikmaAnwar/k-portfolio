"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";

const JobList = () => {
  const [value, setValue] = useState(0);

  const experienceItems = {
    "Nova Labs": {
      jobTitle: "Frontend Engineer @",
      duration: "Mar 2024 - Jan 2025",
      desc: [
        "Shipped a component library in React+Tailwind used across 5 products.",
        "Led migration to Next.js App Router improving TTFB by 28%.",
        "Built internal analytics dashboards with server actions and ISR.",
      ],
    },
    "Orbit Studio": {
      jobTitle: "UI Developer @",
      duration: "Feb 2023 - Feb 2024",
      desc: [
        "Created accessible design system tokens and dark mode theming.",
        "Optimized LCP with image CDN policy and preloading critical assets.",
        "Collaborated with designers to prototype interactions in Figma.",
      ],
    },
    "Freelance": {
      jobTitle: "Full‑stack Developer",
      duration: "Aug 2021 - Present",
      desc: [
        "Delivered SaaS MVPs with Next.js, Prisma and PostgreSQL.",
        "Integrated Stripe billing and webhooks for subscription flows.",
        "Set up CI/CD on Vercel and GitHub Actions for clients.",
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
              {experienceItems[key].desc.map((descItem, idx) => (
                <FadeInSection key={idx} delay={`${idx + 1}00ms`}>
                  <li className="flex gap-3 text-colors-slate">
                    <svg className="mt-1 w-3 h-3 text-purple-400 flex-none" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                      <polygon points="0,0 10,5 0,10" />
                    </svg>
                    <span>{descItem}</span>
                  </li>
                </FadeInSection>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;


