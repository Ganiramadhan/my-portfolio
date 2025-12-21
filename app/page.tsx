import dynamic from 'next/dynamic';
import Hero from "./components/Hero";

// Lazy load components below the fold for better performance
const Projects = dynamic(() => import("./components/Projects"), {
  loading: () => <div className="min-h-screen bg-[#0f0f0f]" />
});
const MySkills = dynamic(() => import("./components/Skills"), {
  loading: () => <div className="min-h-[400px] bg-[#0f0f0f]" />
});
const Experience = dynamic(() => import("./components/Experience"), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />
});
const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <div className="min-h-[400px] bg-[#0a0a0a]" />
});
const Footer = dynamic(() => import("./components/Footer"));

export default function Home() {
  return (
    <main className="bg-[#0f0f0f] min-h-screen">
      <Hero />
      <Projects />
      <MySkills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
