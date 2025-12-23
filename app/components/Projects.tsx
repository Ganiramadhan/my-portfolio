'use client'

import { useState } from "react";
import Image from "next/image";
import { HiX, HiExternalLink, HiFolder, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { projects, Project } from '../utils/projects';

import { FaNodeJs, FaDatabase, FaCss3Alt, FaHtml5, FaLaravel, FaServer } from 'react-icons/fa';
import { DiJavascript1, DiRedis } from 'react-icons/di';
import { SiMongodb, SiTailwindcss, SiNextdotjs, SiBootstrap, SiPostgresql, SiSupabase, SiMysql, SiReactrouter, SiTypescript, SiShadcnui, SiReactquery, SiRabbitmq } from 'react-icons/si';

const TechStackIcons: Record<string, React.ReactNode> = {
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
  TypeScript: <SiTypescript />,
  Shadcn: <SiShadcnui />,
  Tanstack: <SiReactquery />,
  Redis: <DiRedis />,
  RabbitMQ: <SiRabbitmq />,
};

// Image Carousel Component
interface ImageCarouselProps {
  images: string[];
  title: string;
}

const ImageCarousel = ({ images, title }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group/carousel">
      {/* Images */}
      <div 
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image: string, idx: number) => (
          <div key={idx} className="relative w-full h-full flex-shrink-0">
            <Image
              src={image}
              alt={`${title} - ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      {/* Subtle overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/90 hover:bg-zinc-800 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm border border-zinc-700/50 shadow-lg"
            aria-label="Previous image"
            title="Previous image"
          >
            <HiChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-zinc-900/90 hover:bg-zinc-800 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 backdrop-blur-sm border border-zinc-700/50 shadow-lg"
            aria-label="Next image"
            title="Next image"
          >
            <HiChevronRight className="w-5 h-5 text-white" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-3 py-2 bg-zinc-900/90 backdrop-blur-md rounded-full border border-zinc-700/50">
            {images.map((_: string, idx: number) => (
              <button
                key={idx}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-blue-500' 
                    : 'w-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
                aria-label={`Go to image ${idx + 1}`}
                title={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image counter badge */}
      <div className="absolute top-4 right-4 px-3 py-1.5 bg-zinc-900/90 backdrop-blur-md rounded-lg text-xs text-white font-medium border border-zinc-700/50 shadow-lg">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  return (
    <section id="projects" className="py-24 px-4 bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-full mb-6">
            <HiFolder className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            A collection of my best work, crafted with cutting-edge technologies and meticulous attention to detail.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="group relative bg-zinc-900/50 border border-zinc-800/40 rounded-2xl overflow-hidden hover:border-zinc-700/60 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setSelectedProject(project);
                setModalImageIndex(0);
              }}
            >
              <div className="relative">
                {/* Image Carousel */}
                <ImageCarousel images={project.images} title={project.title} />

                {/* Content */}
                <div className="p-5">
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techStack.slice(0, 3).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-zinc-800/60 text-zinc-400 rounded-lg border border-zinc-700/40"
                      >
                        <span className="text-blue-400">{TechStackIcons[tech] || null}</span>
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-zinc-800/60 text-zinc-500 rounded-lg border border-zinc-700/40">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.longDescription}
                  </p>

                  {/* Action */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-800/40">
                    <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium group-hover:gap-3 transition-all">
                      View Details
                      <HiChevronRight className="w-4 h-4" />
                    </span>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Live
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-lg flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800/50 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
              {/* Image Gallery Section */}
              <div className="lg:w-3/5 relative bg-zinc-950 flex items-center justify-center">
                <div className="relative w-full h-72 lg:h-full min-h-[350px]">
                  <Image
                    src={selectedProject.images[modalImageIndex]}
                    alt={`${selectedProject.title} - ${modalImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  
                  {/* Navigation */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setModalImageIndex((prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 bg-zinc-900/80 hover:bg-zinc-800 rounded-full backdrop-blur-sm transition-all border border-zinc-700/40"
                        aria-label="Previous image"
                        title="Previous image"
                      >
                        <HiChevronLeft className="w-5 h-5 text-white" />
                      </button>
                      <button
                        onClick={() => setModalImageIndex((prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 bg-zinc-900/80 hover:bg-zinc-800 rounded-full backdrop-blur-sm transition-all border border-zinc-700/40"
                        aria-label="Next image"
                        title="Next image"
                      >
                        <HiChevronRight className="w-5 h-5 text-white" />
                      </button>
                    </>
                  )}

                  {/* Thumbnails */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-zinc-700/40">
                      {selectedProject.images.map((img: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setModalImageIndex(idx)}
                          className={`relative w-14 h-10 rounded-lg overflow-hidden transition-all ${
                            idx === modalImageIndex 
                              ? 'ring-2 ring-blue-500/70' 
                              : 'opacity-50 hover:opacity-100'
                          }`}
                          aria-label={`View image ${idx + 1}`}
                          title={`View image ${idx + 1}`}
                        >
                          <Image src={img} alt="" fill className="object-cover" sizes="56px" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-2/5 p-6 overflow-y-auto bg-zinc-900">
                {/* Close Button */}
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-zinc-800 rounded-lg transition-all"
                    aria-label="Close modal"
                    title="Close modal"
                  >
                    <HiX className="w-5 h-5 text-zinc-500 hover:text-white transition-colors" />
                  </button>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Live Project</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6 text-[15px]">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-800/60 text-zinc-300 rounded-lg text-sm border border-zinc-700/40"
                      >
                        <span className="text-blue-400">{TechStackIcons[tech] || null}</span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-xl transition-all duration-300"
                >
                  <HiExternalLink className="w-4 h-4" />
                  Visit Live Website
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
