import Image from "next/image";
import myIcon from "../../public/images/myIcon.png";

const Hero = () => {
  return (
    <section id="home" className="h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center px-6 pt-20 md:pt-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Bagian Kiri - Teks */}
        <div className="md:w-1/2 text-center md:text-left animate-fadeIn">
          <h2 className="text-lg text-gray-400">Hello Friend 👋</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            I am <span className="text-purple-500">Gani Ramadhan</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-md">
            Fullstack Developer with 3 years of experience in building scalable and user-friendly web applications. Passionate about crafting intuitive UI/UX and efficient backend systems.
          </p>
          
          {/* Tombol CTA */}
          <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <button className="bg-purple-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-purple-600 transition-transform transform hover:scale-105 shadow-md">
              📄 Download CV
            </button>
            <button className="border border-gray-400 px-6 py-3 rounded-lg text-white hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-md">
              More
            </button>
          </div>
        </div>

        {/* Bagian Kanan - Foto */}
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0 animate-fadeIn">
          <div className="absolute bg-purple-600 w-40 h-40 md:w-56 md:h-56 rounded-full -z-10 blur-3xl opacity-60"></div>
          <Image
            src={myIcon}
            width={280}
            height={280}
            alt="Profile"
            className="rounded-full shadow-2xl border-4 border-gray-800"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
