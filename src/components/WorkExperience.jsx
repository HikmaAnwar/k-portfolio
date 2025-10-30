"use client";

import React, { useState } from "react";
import JobList from "./JobList";
import FadeInSection from "./FadeInSection";

const WorkExperience = () => {
  const [activeKey, setActiveKey] = useState("1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <section id="experience" className="w-full py-16">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <div className="section-header mb-4 text-left relative">
            <span className="section-title text-3xl lg:text-4xl font-semibold text-white">
              Experience
            </span>
          </div>
          <JobList activeKey={activeKey} onSelect={handleSelect} />
        </FadeInSection>
      </div>
    </section>
  );
};

export default WorkExperience;


