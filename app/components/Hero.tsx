'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import myIcon from "../../public/images/profile.png";
import bgImage from "../../public/images/newBg.png";
import { FaLinkedin, FaGithub, FaInstagram, FaNodeJs, FaRocket } from "react-icons/fa";
import { SiLaravel, SiReact, SiJquery, SiTailwindcss, SiBootstrap, SiNextdotjs, SiNestjs, SiPhp } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { IoLogoWechat, IoHome } from "react-icons/io5";

const Hero = () => {
  const [isReadMore, setIsReadMore] = useState(false);

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
  
  

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Sidebar */}
      
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/4 w-full backdrop-blur-md bg-gradient-to-b from-gray-900 to-black border-r border-gray-700 flex flex-col items-center py-8 md:py-12 shadow-lg rounded-tr-3xl rounded-br-3xl"
      >
        
        <div 
          className="w-36 h-36 md:w-40 md:h-40 flex justify-center items-center overflow-hidden rounded-full"
          style={{
            backgroundImage: `url(${bgImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.8)",
          }}
        >
          <Image
            src={myIcon}
            width={150}
            height={150}
            alt="Profile"
            className="object-cover mt-1"
          />
        </div>
        <nav className="mt-8 space-y-5 w-full text-center text-xl">
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition"
          >
            <IoHome /> Home
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <FaRocket /> Projects
          </a>
          <a
            href="#contacts"
            className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <IoLogoWechat /> Contact
          </a>
        </nav>

        {/* Social Media */}
        <div className="flex flex-col items-center mt-8 md:mt-auto order-3 md:order-auto">
          <div className="flex gap-6 text-gray-400 text-3xl">
            <a
              href="https://www.linkedin.com/in/ganiramadhan35/"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Ganiramadhan"
              aria-label="GitHub"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/ganiiraaa/?hl=en"
              aria-label="Instagram"
              className="hover:text-blue-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center relative px-4 md:px-8 py-8">
        {/* Floating Icons (disesuaikan posisinya untuk layar kecil & besar) */}
        <motion.div className="absolute top-12 left-6 sm:top-24 sm:left-28 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiLaravel />
        </motion.div>
        <motion.div className="absolute top-20 right-6 sm:top-48 sm:right-32 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiReact />
        </motion.div>
        <motion.div className="absolute bottom-12 left-6 sm:bottom-24 sm:left-52 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiJquery />
        </motion.div>
        <motion.div className="absolute bottom-20 right-6 sm:bottom-40 sm:right-56 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiTailwindcss />
        </motion.div>
        <motion.div className="absolute top-20 left-2 sm:top-1/3 sm:left-20 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiBootstrap />
        </motion.div>
        <motion.div className="absolute top-10 left-1/2 transform -translate-x-1/2 sm:top-20 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiNextdotjs />
        </motion.div>
        <motion.div className="absolute bottom-6 right-1/2 transform translate-x-1/2 sm:bottom-16 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiNestjs />
        </motion.div>
        <motion.div className="absolute bottom-12 left-2 sm:bottom-32 sm:left-20 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <SiPhp />
        </motion.div>
        <motion.div className="absolute top-4 right-2 sm:top-12 sm:right-1/3 text-gray-600 opacity-40 text-3xl sm:text-5xl">
          <FaNodeJs />
        </motion.div>

        {/* Code-Like Text Box */}
        {!isReadMore ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 relative backdrop-blur-md"
          >
            <pre className="text-base md:text-xl font-mono text-gray-200">
              <TypeAnimation
                sequence={[
                  "01 <Hi, I'm Gani Ramadhan 👋🏻/>\n02 <Full Stack Developer/>\n03 <Crafting Tomorrow's Web, Today. 🔥>",
                  2000,
                  "", // Clear text before repeating
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "block", whiteSpace: "pre-line" }}
                repeat={Infinity}
              />
            </pre>
          </motion.div>
        ) : (
          <motion.div
              key="readMoreCard"
              initial={{ rotateY: 180, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 180, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-gray-900 to-black p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 relative backdrop-blur-md overflow-hidden"
            >
              <pre className="text-sm md:text-lg font-mono text-gray-200 break-words whitespace-pre-wrap">
                01 {"<"}Hi, I'm <span className="text-blue-400">Gani Ramadhan,</span> a Full Stack Developer,
                <span>with over <span className="text-blue-400">3 years of experience</span> in software development
                </span>
                {"/>"} <br />
                02 {"<"}Skilled in{" "}
                <span className="text-blue-400">
                  JavaScript, TypeScript, React, Next.js, Nest.js,
                </span>{" "}
                and <span className="text-blue-400">Laravel</span>
                {"/>"} <br />
                03 {"<"}Building responsive, high-performance, and scalable applications{"/>"} <br />
                04 {"<"}I have experience with{" "}
                <span className="text-blue-400">
                  MySQL, PostgreSQL, Memcached,
                </span>{" "}
                and <span className="text-blue-400">Redis</span>
                {"/>"} <br />
                05 {"<"}I’m familiar with{" "}
                <span className="text-blue-400">Kubernetes</span> and{" "}
                <span className="text-blue-400">Load Balancers</span>
                {"/>"} <br />
                06 {"<"}Committed to continuous learning and tech updates{"/>"} <br />
                08 {"<"}Looking forward to building innovative and impactful solutions{"/>"} <br />
                09 {"<"}Let's create something amazing together. 🔥{"/>"} <br />
              </pre>
            </motion.div>

        )}

        {!isReadMore && (
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-2 text-sm md:text-lg text-gray-500 text-center"
          >
            Full Stack Developer with over 3 years of experience...
          </motion.p>
        )}

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex gap-4 flex-wrap justify-center"
        >
          <button className="bg-blue-500 text-white px-5 py-2 md:px-7 md:py-3 rounded-lg font-bold shadow-lg hover:bg-blue-600 transition"
            onClick={workWithme}
          >
            Work with me →
          </button>
          <button
            onClick={handleReadMore}
            className="bg-gray-700 px-5 py-2 md:px-7 md:py-3 rounded-lg font-bold text-gray-300 shadow-lg hover:bg-gray-600 transition"
          >
            {isReadMore ? "Read less ↑" : "Read more ↓"}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
