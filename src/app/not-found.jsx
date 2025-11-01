"use client";

import Link from "next/link";
import NavBar from "../components/NavBar";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-colors-dark">
      <NavBar />
      
      <div className="flex flex-col items-center justify-center flex-1 w-full px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/#home"
          className="inline-flex items-center px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

