"use client";
import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import Link from "next/link";

const Credits = () => {
  const [expanded] = useState(true);

  return (
    <FadeInSection>
      <div id="credits" className="flex items-center pt-24">
        <div
          className="w-full  text-base text-center text-white"
          style={{ fontFamily: '"NTR", sans-serif' }}
        >
          <div>
            Built and designed by
            <Link
              href="https://github.com/kirubhel"
              className="ml-2 hover:text-colors-greenBright"
            >
              Kirubel Gizaw.
            </Link>
          </div>
          <div>All rights reserved. ©</div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Credits;
