"use client";

import { useEffect } from "react";
import Intro from "../components/Intro.jsx";
import NavBar from "../components/NavBar.jsx";
import About from "../components/About.jsx";
import FeaturedProjects from "../components/FeaturedProjects.jsx";
import WorkExperience from "../components/WorkExperience.jsx";
import Projects from "../components/Projects.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import Credits from "../components/Credits.jsx";

export default function Home() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.location.hash || window.location.hash === "#") {
      const el = document.getElementById("home");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", "#home");
      }
    }
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-colors-dark">
      <NavBar />

      <div className="flex flex-col items-center w-full">
        <Intro title="I'm a Software Engineer." typingSpeed={50} />
        <div className="flex flex-col items-center w-full max-w-screen-lg space-y-4 px-8 sm:px-20">
          <About />
          <WorkExperience />
          <FeaturedProjects />
          <Projects />
          <Credits />
        </div>
      </div>
    </div>
  );
}
