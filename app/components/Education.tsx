'use client'

import { HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';

const education = [
  {
    degree: "D3 Manajemen Informatika",
    institution: "Politeknik LP3I Bandung",
    description: "Focused on information systems management, web development, database design, and software engineering."
  }
];

const certifications = [
    {
    title: "Artificial Intelligence",
    issuer: "Laskar AI",
    year: "2025"
  },
  {
    title: "Fullstack Developer",
    issuer: "Jagoo IT",
    year: "2024"
  },
    {
    title: "Project Management",
    issuer: "Dicoding Indonesia",
    year: "2024"
  },
    {
    title: "Machine Learning",
    issuer: "Dicoding Indonesia",
    year: "2024"
  },
  {
    title: "Fullstack Development",
    issuer: "Dicoding Indonesia",
    year: "2023"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-full mb-6">
            <HiAcademicCap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            My academic background and professional certifications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiAcademicCap className="w-4 h-4 text-blue-400" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-5 bg-zinc-900/50 border border-zinc-800/40 rounded-xl"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-zinc-500 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <HiBadgeCheck className="w-4 h-4 text-blue-400" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800/40 rounded-xl hover:border-zinc-700/60 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-zinc-800/60 border border-zinc-700/40 rounded-lg text-emerald-400">
                    <HiBadgeCheck className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-500">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
