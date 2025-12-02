'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaRocket, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from '../utils/projects';
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";

import { FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaLaravel, FaServer } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiBootstrap, SiPostgresql, SiSupabase, SiMysql, SiReactrouter } from 'react-icons/si';

const TechStackIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  Node: <FaNodeJs />,
  SQLite: <FaDatabase />,
  MongoDB: <SiMongodb />,
  TailwindCSS: <SiTailwindcss />,
  NextJS: <SiNextdotjs />,
  Bootstrap: <SiBootstrap />,
  PostgreSQL: <SiPostgresql />,
  Supabase: <SiSupabase />,
  Laravel: <FaLaravel />,
  JavaScript: <DiJavascript1 />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  MySQL: <SiMysql />,
  Inertia: <SiReactrouter />,
  RestAPI: <FaServer />,
};

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  website: string;
  techStack: string[]; 
}

const Shimmer = () => (
  <div className="animate-pulse bg-gray-800/30 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-2xl">
    <div className="w-full h-44 bg-gray-700/50 rounded-xl mb-4"></div>
    <div className="h-4 bg-gray-700/50 rounded-full w-3/4 mb-2"></div>
    <div className="h-3 bg-gray-700/50 rounded-full w-1/2"></div>
  </div>
);

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeModal = () => setSelectedProject(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center space-x-3 mb-6">
          <FaRocket size={28} className="text-cyan-400" />
          <h2 className="text-3xl font-semibold text-white">My Projects</h2>
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl">Showcase of My Projects.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            Array(6)
              .fill(0)
              .map((_, index) => <Shimmer key={index} />)
          ) : (
            projects.map((project, index) => (
              <motion.div
                key={index}
                className={`${
                  index === 0 || index === 5 ? "md:col-span-2" : ""
                } bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 p-4 rounded-2xl shadow-2xl group relative cursor-pointer hover:shadow-cyan-500/20 hover:border-cyan-500/30 transition-all duration-300`}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, y: 50 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                viewport={{ once: true }} 
              >
                <div className="w-full h-44 relative overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold group-hover:translate-x-3 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 group-hover:translate-x-3 transition-transform duration-300">
                  {project.description}
                </p>
                <GiClick
                  className="absolute bottom-2 right-2 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={24}
                />
              </motion.div>
            ))
          )}
        </div>

        
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-xl p-4">
          <motion.div
            className="bg-gray-900/50 backdrop-blur-2xl p-6 rounded-3xl w-full max-w-2xl relative border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-xl transform transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-12 bg-gray-800/50 backdrop-blur-sm p-2 rounded-full hover:bg-red-500/50"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <div className="w-full md:w-1/2 h-48 md:h-52 relative mb-4 md:mb-0">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="md:ml-6 flex-1">
                <h3 className="text-2xl font-semibold text-white mb-4">{selectedProject.title}</h3>
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 text-sm font-semibold text-white bg-cyan-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:bg-cyan-600 hover:scale-105 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Website
                </a>
              </div>
            </div>
            <hr className="my-4 border-white/10" />
            <p className="text-gray-300">{selectedProject.longDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {selectedProject.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-2 text-xs font-semibold text-gray-100 bg-gray-700/50 backdrop-blur-sm rounded-full border border-white/10 hover:scale-105 transition-all duration-300"
                >
                  {TechStackIcons[tech] || null}
                  <span className="ml-2">{tech}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
