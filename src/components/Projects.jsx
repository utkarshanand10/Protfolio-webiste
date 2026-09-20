import React, { useState } from "react";
import { FiExternalLink, FiGithub, FiCheck } from "react-icons/fi";

import netflixCloneImage from "../assets/image/Netflix-clone.png";
import aiImageGeneratorImage from "../assets/image/NovaAI.png";
import TaskManagerImage from "../assets/image/TaskManager.png";
import CrudImage from "../assets/image/CrudImage.png";
import passwordGeneratorImage from "../assets/image/Password-genrator.png";
import currencyConverterImage from "../assets/image/Calender-view.png";
import novaAiImage from "../assets/image/spiral.png";
import portfolioWebsiteImage from "../assets/image/Earth-threejs.png";
import learnKodeImage from "../assets/image/LearnKode.png";

const projects = [
  {
    id: "learn-kode",
    title: "Learn Kode — EdTech LMS Platform",
    category: "Full Stack",
    featured: true,
    image: learnKodeImage,
    description:
      "Comprehensive Udemy-style learning management system supporting Student, Instructor, and Admin roles.",
    features: [
      "Role-based dashboards & course creation",
      "Secure JWT & OTP authentication",
      "Razorpay payment gateway integration",
      "Cloudinary media & video uploads",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Razorpay"],
    liveLink: "https://learn-kode-frontend.vercel.app/",
    github: "https://github.com/utkarshanand10",
  },
  {
    id: "crud-app",
    title: "MERN Stack CRUD Application",
    category: "Full Stack",
    featured: true,
    image: CrudImage,
    description:
      "Full-stack web application supporting real-time data persistence with modular REST API architecture.",
    features: [
      "Modular Express controllers & routes",
      "MongoDB aggregation and querying",
      "Robust error handling & status responses",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    liveLink: "https://crud-based-mern-app.onrender.com/",
    github: "https://github.com/utkarshanand10",
  },
  {
    id: "netflix-clone",
    title: "Netflix Clone Streaming Platform",
    category: "Frontend",
    featured: true,
    image: netflixCloneImage,
    description:
      "Feature-rich entertainment interface with dynamic categorized media feeds and video trailer playback.",
    features: [
      "TMDB API integration for real-time media feeds",
      "Embedded video trailer modal playback",
      "Fully responsive high-density grid layout",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Vite"],
    liveLink: "https://netflix-clone-sigma-steel.vercel.app/",
    github: "https://github.com/utkarshanand10",
  },
  {
    id: "task-manager",
    title: "Task Manager Web App",
    category: "Full Stack",
    featured: false,
    image: TaskManagerImage,
    description:
      "Productivity application for task organization, workflow statuses, and real-time state management.",
    features: [
      "Task creation, priority tagging, & filtering",
      "Instant status progression and updating",
      "Fast, accessible user interface",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "State Management"],
    liveLink: "https://taskmanager-mauve-nine.vercel.app/",
    github: "https://github.com/utkarshanand10",
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    category: "Tools & AI",
    featured: false,
    image: aiImageGeneratorImage,
    description:
      "Generative AI tool creating high-fidelity images from natural language prompt specifications.",
    features: [
      "Prompt parsing & AI model generation API",
      "One-click high-res asset downloads",
      "Gallery preview and prompt history",
    ],
    technologies: ["React.js", "AI APIs", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/utkarshanand10/Ai-imageGenrator",
  },
  {
    id: "nova-ai",
    title: "NovaAI Assistant",
    category: "Tools & AI",
    featured: false,
    image: novaAiImage,
    description:
      "Conversational web application powered by large language models with syntax highlighted code support.",
    features: [
      "Interactive multi-turn conversation flow",
      "Code block markdown rendering",
      "Responsive mobile and desktop chat view",
    ],
    technologies: ["React.js", "REST APIs", "JavaScript", "CSS3"],
    github: "https://github.com/utkarshanand10/NovaAI",
  },
  {
    id: "earth-threejs",
    title: "3D Earth WebGL Visualization",
    category: "Frontend",
    featured: false,
    image: portfolioWebsiteImage,
    description:
      "Interactive 3D graphical web experience built with Three.js shaders, lighting, and orbit physics.",
    features: [
      "Realistic spherical textures & atmospheric glow",
      "Interactive OrbitControls with momentum",
      "Smooth 60FPS WebGL canvas rendering",
    ],
    technologies: ["React.js", "Three.js", "WebGL", "Tailwind CSS"],
    github: "https://github.com/utkarshanand10/Portfolio-Website",
  },
  {
    id: "password-generator",
    title: "Cryptographic Password Generator",
    category: "Tools & AI",
    featured: false,
    image: passwordGeneratorImage,
    description:
      "Security tool generating entropy-tested randomized passwords with customizable complexity parameters.",
    features: [
      "Customizable symbols, numbers, and length",
      "Instant copy-to-clipboard functionality",
      "Visual password strength evaluation",
    ],
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/utkarshanand10/Password_genrator",
  },
  {
    id: "currency-converter",
    title: "Live Currency Converter",
    category: "Tools & AI",
    featured: false,
    image: currencyConverterImage,
    description:
      "Financial calculation utility fetching live forex foreign exchange rates for instant currency conversions.",
    features: [
      "Live exchange rate API integration",
      "Instant multi-currency recalculation",
      "One-tap currency switch mechanism",
    ],
    technologies: ["React.js", "Exchange Rate API", "Tailwind CSS"],
    github: "https://github.com/utkarshanand10/Currency-Converter",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Tools & AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#080b11]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Selected Works & Real-World Projects
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl">
            Production-oriented full-stack platforms, APIs, and responsive frontends engineered with modern industry practices.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                  : "bg-[#0d121d] text-slate-400 hover:text-white border border-white/[0.08] hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0d121d] rounded-2xl border border-white/[0.08] hover:border-cyan-500/40 shadow-xl shadow-black/30 hover:shadow-cyan-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Container with Zoom */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/[0.06]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-transparent opacity-60"></div>

                  {/* Badge: Category */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium uppercase tracking-wider bg-slate-900/90 text-cyan-300 border border-white/10 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-400"
                      >
                        <FiCheck className="text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200 active:scale-95"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="text-sm" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/30 transition-all duration-200 ${
                      project.liveLink ? "" : "flex-1"
                    }`}
                  >
                    <FiGithub className="text-base" />
                    <span>{project.liveLink ? "Code" : "View on GitHub"}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

