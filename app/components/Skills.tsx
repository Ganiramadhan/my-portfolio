'use client'

import { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { stacks } from '../utils/skills'; 
import { SiXcode } from "react-icons/si";
import { motion } from 'framer-motion';

const Shimmer = () => (
  <div className="animate-pulse flex items-center gap-3 p-4 rounded-lg border border-gray-600 bg-gray-800">
    <div className="p-3 rounded-full bg-gray-700 w-10 h-10"></div>
    <div>
      <div className="h-4 bg-gray-700 rounded w-24 mb-2"></div>
      <div className="h-3 bg-gray-700 rounded w-16"></div>
    </div>
  </div>
);

const MySkills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-black text-white"> 
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <SiXcode size={24} className="text-gray-400" />
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-100">My Skills</h2>
        </div>
        <p className="text-gray-400 mb-6 sm:mb-8">
          Passionate about continuous learning and mastering new technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => <Shimmer key={index} />)
            : stacks.map((stack, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center gap-3 p-4 rounded-lg border border-gray-600 bg-black transition-all duration-300 hover:bg-gray-800 group"
                >
                  {stack.featured && (
                    <div className="absolute top-2 left-2 text-yellow-400">
                      <FaStar />
                    </div>
                  )}
                  <div
                    className="absolute top-2 right-2 text-gray-400 opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:rotate-45 cursor-pointer"
                    onClick={() => window.open(stack.link, '_blank')}
                  >
                    <FiArrowUpRight />
                  </div>
                  <div className="p-3 rounded-lg border bg-gray-800 transition-all duration-300">
                    <div className={`text-2xl ${stack.color}`}>{stack.icon}</div>
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-100">{stack.name}</p>
                    <p className="text-gray-400 text-sm">{stack.category}</p>
                  </div>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
