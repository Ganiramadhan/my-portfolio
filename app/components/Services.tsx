'use client'

import { HiCode, HiServer, HiDeviceMobile, HiDatabase, HiCloud, HiCog } from 'react-icons/hi';

const services = [
  {
    icon: <HiCode className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    icon: <HiServer className="w-6 h-6" />,
    title: "Backend Development",
    description: "Creating robust server-side applications and APIs with Node.js, NestJS, Go, and Laravel.",
    technologies: ["Node.js", "NestJS", "Go", "Laravel", "Express"]
  },
  {
    icon: <HiDatabase className="w-6 h-6" />,
    title: "Database Design",
    description: "Designing efficient database schemas and optimizing queries for high-performance applications.",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Oracle", "Cassandra", "Redis"]
  },
  {
    icon: <HiDeviceMobile className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Ensuring seamless experiences across all devices with mobile-first approach.",
    technologies: ["Mobile-First", "PWA", "Cross-Browser"]
  },
  {
    icon: <HiCloud className="w-6 h-6" />,
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
    technologies: ["Docker", "Kubernetes", "AWS"]
  },
  {
    icon: <HiCog className="w-6 h-6" />,
    title: "API Development",
    description: "Building and integrating APIs with modern protocols for seamless communication.",
    technologies: ["REST", "gRPC", "GraphQL", "WebSocket", "OAuth"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-full mb-6">
            <HiCog className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-zinc-400 font-medium">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I Do
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-lg">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-zinc-900/50 border border-zinc-800/40 rounded-2xl hover:border-zinc-700/60 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-800/60 border border-zinc-700/40 rounded-xl text-blue-400 mb-4 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-zinc-800/50 text-zinc-500 text-xs rounded-lg border border-zinc-700/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
