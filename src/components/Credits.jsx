"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

const Credits = () => {
  const [expanded] = useState(true);

  const scrollToTop = (e) => {
    e.preventDefault();
    const introSection = document.getElementById('home');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <FadeInSection>
      <div id="credits" className="flex flex-col items-center pt-24">
        {/* Curved Upward Arrow */}
        <a
          href="#home"
          onClick={scrollToTop}
          className="mb-8 text-purple-400 hover:text-purple-300 transition-colors duration-300 cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12L12 5L19 12"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div
          className="w-full text-base text-center text-white"
          style={{ fontFamily: '"NTR", sans-serif' }}
        >
          <div>
            Built and designed by
            <Link
              href="https://github.com/HikmaAnwar"
              className="ml-2 hover:text-colors-greenBright"
            >
              Hikma A.Tsegaye.
            </Link>
          </div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
