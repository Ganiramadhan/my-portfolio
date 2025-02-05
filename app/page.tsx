import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MySkills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Projects/>
      <MySkills/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}
