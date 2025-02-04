'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white py-4 fixed w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">
          <span className="text-purple-500">Gani</span>Pedia
        </h1>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="hover:text-gray-400">Home</Link>
          <Link href="#about" className="hover:text-gray-400">About</Link>
          <Link href="#projects" className="hover:text-gray-400">Project</Link>
          <Link href="#blog" className="hover:text-gray-400">Blog</Link>
          <Link href="#contact" className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 transition">
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 shadow-lg">
          <Link href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#projects" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Project</Link>
          <Link href="#blog" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link href="#contact" className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 transition" onClick={() => setIsOpen(false)}>
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
