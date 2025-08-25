"use client";

import Intro from "../components/Intro.jsx";
import NavBar from "../components/NavBar.jsx";
import About from "../components/About.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
import Credits from "../components/Credits.jsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen  p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-colors-dark">
      <NavBar />

      <div className="flex flex-col items-center w-full max-w-screen-lg space-y-4 ">
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Credits />
      </div>
    </div>
  );
}
