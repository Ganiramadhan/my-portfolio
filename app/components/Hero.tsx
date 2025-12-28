'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiArrowRight, HiCode, HiServer, HiDatabase } from "react-icons/hi";
import ScrollToTop from "./ScrollTop";
import Navbar from "./Navbar";

const Hero = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Gani Ramadhan";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < fullName.length) {
          setDisplayText(fullName.slice(0, displayText.length + 1));
          timeout = setTimeout(handleTyping, 100);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        // Deleting backward
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(handleTyping, 50);
        } else {
          // Pause before typing again
          timeout = setTimeout(() => {
            setIsDeleting(false);
          }, 500);
        }
      }
    };

    timeout = setTimeout(handleTyping, 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);

  const handleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const workWithme = () => {
    const contactSection = document.getElementById("contacts");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start", 
      });
    }
  };

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "15+", label: "Projects Completed" },
    { value: "10+", label: "Happy Clients" },
  ];

  const techStack = [
    { icon: <HiCode className="w-5 h-5" />, label: "Frontend" },
    { icon: <HiServer className="w-5 h-5" />, label: "Backend" },
    { icon: <HiDatabase className="w-5 h-5" />, label: "Database" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/ganiramadhan35/", label: "LinkedIn" },
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/Ganiramadhan", label: "GitHub" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "https://www.instagram.com/ganiiraaa/?hl=en", label: "Instagram" },
  ];

  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] text-white relative overflow-hidden">
      <ScrollToTop />
      <Navbar />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-zinc-400 font-medium">Available for work</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-zinc-500">Hi, I&apos;m</span>
              <br />
              <span className="text-white inline-flex min-h-[1.2em]">
                {displayText}
                <span className="ml-1 w-[3px] h-[1em] bg-blue-500 inline-block animate-pulse" />
              </span>
            </h1>

            {/* Role */}
            <div className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              Full Stack Developer
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              {!isReadMore ? (
                "Building scalable web applications with modern technologies. Focused on clean code, performance, and exceptional user experiences."
              ) : (
                "With over 3 years of experience in software development, I specialize in TypeScript, React, Next.js, Nest.js, and Laravel. I build responsive, high-performance applications with expertise in PostgreSQL, Redis, Docker, and Kubernetes."
              )}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-800/40 border border-zinc-700/30 rounded-xl text-sm text-zinc-400"
                >
                  <span className="text-blue-400">{tech.icon}</span>
                  {tech.label}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button 
                onClick={workWithme}
                className="group flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
              >
                Let&apos;s Work Together
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleReadMore}
                className="flex items-center gap-2 bg-zinc-800/60 hover:bg-zinc-700/60 text-white px-6 py-3 rounded-xl font-medium border border-zinc-700/30 transition-all duration-300"
              >
                {isReadMore ? "Show Less" : "About Me"}
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Profile */}
          <div className="order-1 lg:order-2 flex flex-col items-center">
            {/* Profile Image */}
            <div className="relative group">
              {/* Subtle Glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
              
              {/* Image Container */}
              <div 
                id="profileContainer"
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border border-zinc-700/50 bg-zinc-900"
              >
                <Image
                  src="/images/new-profile.png"
                  fill
                  alt="Gani Ramadhan - Full Stack Developer"
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700/40 rounded-xl px-4 py-2.5">
                <div className="text-sm font-medium text-white">Full Stack</div>
                <div className="text-xs text-zinc-500">Developer</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-zinc-800/40 hover:bg-zinc-700/50 border border-zinc-700/30 rounded-xl text-zinc-500 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
