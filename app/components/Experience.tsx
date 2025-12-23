'use client';

import { experiences } from '../utils/experiences'; 
import { HiBriefcase, HiCalendar, HiOfficeBuilding } from 'react-icons/hi';
import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-full mb-6">
            <HiBriefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">Career</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            My professional journey in software development, working with diverse teams and technologies.
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-4 top-8 w-4 h-4 bg-zinc-800 rounded-full border-2 border-blue-500/60 z-10" />

                {/* Card */}
                <div className="group p-6 md:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/40 hover:border-zinc-700/60 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      {/* Company Logo */}
                      <div className="w-11 h-11 bg-white rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={44}
                          height={44}
                          className="object-cover w-full h-full"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                          <HiOfficeBuilding className="w-3.5 h-3.5" />
                          {exp.industry}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm bg-zinc-800/40 px-3 py-1.5 rounded-lg w-fit">
                      <HiCalendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </div>
                  </div>
                  
                  {/* Position */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium mb-4">
                    {exp.position}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 leading-relaxed text-[15px]">{exp.description}</p>
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
