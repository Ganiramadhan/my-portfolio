'use client'

import { stacks } from '../utils/skills'; 
import { HiSparkles } from 'react-icons/hi';

interface Stack {
  name: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  featured?: boolean;
}

// Skill Card Component
const SkillCard = ({ stack }: { stack: Stack }) => (
  <a
    href={stack.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 px-6 py-4 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl hover:border-zinc-600/50 hover:bg-zinc-800/60 transition-all duration-300 cursor-pointer min-w-fit"
  >
    {/* Icon */}
    <div className={`text-2xl ${stack.color} group-hover:scale-110 transition-transform duration-300`}>
      {stack.icon}
    </div>
    
    {/* Info */}
    <div>
      <p className="font-medium text-white group-hover:text-blue-400 transition-colors whitespace-nowrap">
        {stack.name}
      </p>
      <p className="text-zinc-500 text-xs whitespace-nowrap">{stack.category}</p>
    </div>

    {/* Featured indicator */}
    {stack.featured && (
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse ml-1" />
    )}
  </a>
);

const MySkills = () => {
  // Split stacks into three rows
  const rowSize = Math.ceil(stacks.length / 3);
  const firstRow = stacks.slice(0, rowSize);
  const secondRow = stacks.slice(rowSize, rowSize * 2);
  const thirdRow = stacks.slice(rowSize * 2);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700/30 rounded-full mb-6">
            <HiSparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">Tech Stack</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-base">
            Technologies I work with to build modern, scalable applications
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="space-y-5">
        {/* First Row - Left to Right */}
        <div className="marquee-row relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-left">
            {/* Double the items for seamless loop */}
            {[...firstRow, ...firstRow].map((stack: Stack, index: number) => (
              <SkillCard key={`row1-${index}`} stack={stack} />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className="marquee-row relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-right">
            {/* Double the items for seamless loop */}
            {[...secondRow, ...secondRow].map((stack: Stack, index: number) => (
              <SkillCard key={`row2-${index}`} stack={stack} />
            ))}
          </div>
        </div>

        {/* Third Row - Left to Right */}
        <div className="marquee-row relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          <div className="flex gap-4 animate-marquee-left">
            {/* Double the items for seamless loop */}
            {[...thirdRow, ...thirdRow].map((stack: Stack, index: number) => (
              <SkillCard key={`row3-${index}`} stack={stack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
