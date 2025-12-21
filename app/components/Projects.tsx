'use client'

import { useState } from "react";
import Image from "next/image";
import { HiX, HiExternalLink, HiFolder } from "react-icons/hi";
import { projects } from '../utils/projects';

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

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <HiFolder className="w-6 h-6 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-zinc-400 max-w-2xl">
            A selection of my recent work. Each project is crafted with attention to detail and best practices.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-colors cursor-pointer ${
                index === 0 ? "md:col-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="w-full h-56 relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
              </div>
              <button
                className="absolute top-4 right-4 p-2 bg-zinc-800/80 hover:bg-zinc-700 rounded-lg transition-colors"
                onClick={() => setSelectedProject(null)}
                aria-label="Close Modal"
              >
                <HiX className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
              
              <a
                href={selectedProject.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors mb-6"
              >
                <HiExternalLink className="w-4 h-4" />
                Visit Website
              </a>

              <div className="border-t border-zinc-800 pt-6">
                <p className="text-zinc-400 leading-relaxed mb-6">{selectedProject.longDescription}</p>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm"
                      >
                        <span className="text-blue-400">{TechStackIcons[tech] || null}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
