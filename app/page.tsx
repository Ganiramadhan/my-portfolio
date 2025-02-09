import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MySkills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Script from "next/script";

export default function Home() {
  const chatbaseId = process.env.NEXT_PUBLIC_CHATBASE_ID;

  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Projects />
      <MySkills />
      <Experience />
      <Contact />
      <Footer />

      {chatbaseId && (
        <Script
          id="chatbase-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                  window.chatbase = (...args) => {
                    if (!window.chatbase.q) window.chatbase.q = [];
                    window.chatbase.q.push(args);
                  };
                  window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                      if (prop === "q") return target.q;
                      return (...args) => target(prop, ...args);
                    }
                  });
                }
                const onLoad = function() {
                  const script = document.createElement("script");
                  script.src = "https://www.chatbase.co/embed.min.js";
                  script.id = "${chatbaseId}";
                  script.domain = "www.chatbase.co";
                  document.body.appendChild(script);
                };
                if (document.readyState === "complete") {
                  onLoad();
                } else {
                  window.addEventListener("load", onLoad);
                }
              })();
            `,
          }}
        />
      )}
    </div>
  );
}
