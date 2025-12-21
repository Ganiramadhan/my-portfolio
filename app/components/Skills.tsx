'use client'

import { FiExternalLink } from 'react-icons/fi';
import { stacks } from '../utils/skills'; 
import { HiCode } from 'react-icons/hi';

const MySkills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0f0f0f] text-white"> 
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <HiCode className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">Skills & Technologies</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            Technologies and tools I use to bring ideas to life. Always learning and exploring new technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {stacks.map((stack, index) => (
            <div
              key={index}
              onClick={() => window.open(stack.link, '_blank')}
              className="group relative flex items-center gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 transition-colors cursor-pointer"
            >
              {/* Icon */}
              <div className="p-3 rounded-lg bg-zinc-800 group-hover:bg-zinc-700 transition-colors">
                <div className={`text-2xl ${stack.color}`}>{stack.icon}</div>
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-white truncate">{stack.name}</p>
                <p className="text-zinc-500 text-sm truncate">{stack.category}</p>
              </div>

              {/* External Link Icon */}
              <FiExternalLink className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Featured indicator */}
              {stack.featured && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
