import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;

