'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-[#0f0f0f]/95 backdrop-blur-md border-b border-zinc-800/50 py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <Link href="#home" className="text-xl font-bold text-white hover:opacity-80 transition-opacity">
          <span className="text-blue-500">Gani</span>Pedia
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-zinc-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#contacts" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Contact Me
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-zinc-800 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#0f0f0f]/98 backdrop-blur-md border-b border-zinc-800 transition-all duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <div className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-zinc-400 hover:text-white hover:bg-zinc-800/50 px-4 py-3 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="#contacts" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-medium mt-2 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
