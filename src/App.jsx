import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
