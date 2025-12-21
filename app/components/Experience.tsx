'use client';

import { experiences } from '../utils/experiences'; 
import { HiBriefcase, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <HiBriefcase className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            My professional journey in software development, working with diverse teams and technologies.
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-6 top-6 w-5 h-5 bg-blue-600 rounded-full border-4 border-[#0a0a0a] z-10" />

                {/* Card */}
                <div className="p-6 md:p-8 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* Company Logo */}
                      <div className="w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <HiOfficeBuilding className="w-4 h-4" />
                          {exp.industry}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 text-sm bg-zinc-800/50 px-3 py-1.5 rounded-lg w-fit">
                      <HiCalendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  {/* Position */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium mb-4">
                    {exp.position}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
                      
