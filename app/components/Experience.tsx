'use client';

import { useState, useEffect } from 'react';
import { experiences } from '../utils/experiences'; 
import { BsPersonWorkspace } from "react-icons/bs";
import Image from 'next/image';

const Shimmer = () => (
  <div className="animate-pulse flex items-center gap-3 p-4 rounded-lg border border-gray-600 bg-gray-800">
    <div className="p-3 rounded-full bg-gray-700 w-10 h-10"></div>
    <div>
      <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
      <div className="h-3 bg-gray-700 rounded w-16"></div>
    </div>
  </div>
);

const Experience = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <BsPersonWorkspace size={24} className="text-gray-200" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">My Experience</h2>
        </div>
        <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl">
          Navigating diverse environments with adaptability and expertise for holistic solutions.
        </p>
        
        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {loading
            ? Array.from({ length: 2 }).map((_, index) => <Shimmer key={index} />) 
            : experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-black/30 border border-gray-700/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Company Logo Image */}
                      <div className="w-12 h-12  bg-white rounded-lg overflow-hidden">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-200">{exp.company}</h3>
                        <p className="text-sm text-gray-400">{exp.industry}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 sm:mt-0">{exp.duration}</span>
                  </div>
                  
                  {/* Job Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white">{exp.position}</h4>
                  <p className="text-gray-400 mt-2 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

