'use client'

import { useState } from "react";
import Image from "next/image";
import { FaRocket, FaInfoCircle, FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from '../utils/projects';
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  website: string;
}

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <FaRocket size={28} className="text-gray-200" />
          <h2 className="text-3xl font-semibold text-gray-100">My Projects</h2>
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl">
          My Project that I have made.
        </p>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Render projects */}
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                index === 0 || index === 5 ? "md:col-span-2" : ""
              } bg-gradient from-gray-900 to-black border border-gray-700 p-4 rounded-lg shadow-lg group relative cursor-pointer`}
              onClick={() => setSelectedProject(project)} 
            >
              <div className="w-full h-44 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="rounded-md object-cover"
                  priority
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold group-hover:translate-x-3 transition-transform duration-300">{project.title}</h3>
              <p className="text-gray-400 group-hover:translate-x-3 transition-transform duration-300">{project.description}</p>
              {/* Hover Icon */}
              <FaInfoCircle className="absolute bottom-4 right-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal untuk menampilkan detail project */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm"> 
          <motion.div
            className="bg-gray-900 p-6 rounded-lg w-2/3 h-auto max-w-2xl relative" 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}  
            animate={{
              opacity: 1,
              scale: 1,
              y: [50, -20, 10, 0],  // Efek naik, turun, lalu stabil
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 50,  // Efek animasi keluar modal
            }}
            transition={{
              duration: 0.7,  // Durasi lebih lama untuk efek bounce
              type: "spring",  // Efek seperti spring (memantul)
              stiffness: 300,  // Kekakuan untuk kontrol seberapa kencang pantulannya
              damping: 20,     // Pengurangan kecepatan untuk efek yang halus
            }}
          >
            {/* Icon Close */}
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={closeModal}
              aria-label="Tutup Modal"
            >
              <FaTimes />
            </button>

            {/* Modal Content */}
            <div className="flex flex-col md:flex-row items-center mb-4">
              {/* Kiri: Gambar kecil */}
              <div className="w-1/2 h-48 relative mb-4 md:mb-0">  
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  layout="fill"
                  className="rounded-md object-cover"
                />
              </div>

              {/* Kanan: Title dan Button */}
              <div className="md:ml-6 text-center md:text-left mt-4 md:mt-0">
                <h3 className="text-2xl font-semibold text-white">{selectedProject.title}</h3>
                <a
                  href={selectedProject.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center px-6 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Website
                </a>
              </div>
            </div>

            {/* Garis Pemisah */}
            <hr className="my-4 border-gray-700" />

            {/* Deskripsi panjang */}
            <p className="text-gray-400">{selectedProject.longDescription}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
