"use client";

import React from 'react';

const About = () => {

  return (
    <section id="about" className="w-full py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Content */}
        <div className="text-left space-y-6">
          <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-8">
            About Me
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm currently looking to join a product-focused team.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed">
            With over 2 years of experience in UI/UX design and development, I specialize in creating 
            user-centered digital experiences that bridge the gap between user needs and business objectives. 
            My approach combines creative design thinking with technical implementation to deliver 
            meaningful and delightful products.
          </p>
        </div>

        {/* Tech Stack Image */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white text-center">
            Technologies & Tools
          </h3>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/assets/tech_stack.svg" 
                alt="Technology Stack" 
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
              {/* Optional glow effect */}
              <div className="absolute inset-0 bg-purple-500/5 rounded-lg blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-300">
            I'm passionate about creating intuitive user interfaces and seamless user experiences.
          </p>
          
          <div className="flex justify-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">20+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">15+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
