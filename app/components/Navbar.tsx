'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/70 backdrop-blur-xl text-white py-4 fixed w-full z-10 shadow-2xl border-b border-white/5">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">
          <span className="text-cyan-400">Gani</span>Pedia
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-cyan-400 transition-all duration-300">Home</Link>
          <Link href="#about" className="hover:text-cyan-400 transition-all duration-300">About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-all duration-300">Project</Link>
          <Link href="#blog" className="hover:text-cyan-400 transition-all duration-300">Blog</Link>
          <Link href="#contact" className="border border-cyan-400/50 px-4 py-2 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
            Contact Me
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 backdrop-blur-2xl text-white flex flex-col items-center space-y-4 py-6 shadow-2xl border-b border-white/10">
          <Link href="#home" className="hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" className="hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Project</Link>
          <Link href="#blog" className="hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="#contact" className="border border-cyan-400/50 px-4 py-2 rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
