"use client";

import React from 'react';

const About = () => {
  const skills = [
    { name: 'Figma', icon: '🎨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'Vue', icon: '💚' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' },
    { name: 'Git', icon: '📝' }
  ];

  return (
    <section id="about" className="w-full py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Main Content */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
            About Me
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm currently looking to join a product-focused team.
          </p>
          
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            With over 2 years of experience in UI/UX design and development, I specialize in creating 
            user-centered digital experiences that bridge the gap between user needs and business objectives. 
            My approach combines creative design thinking with technical implementation to deliver 
            meaningful and delightful products.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-white text-center">
            Technologies & Tools
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <span className="text-sm text-gray-300 font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
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
