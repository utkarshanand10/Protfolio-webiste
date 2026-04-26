import React from "react";

import netflixCloneImage from "../assets/image/Netflix-clone.png";
import aiImageGeneratorImage from "../assets/image/NovaAI.png";
import TaskManagerImage from "../assets/image/TaskManager.png";
import CrudImage from "../assets/image/CrudImage.png";
import passwordGeneratorImage from "../assets/image/Password-genrator.png";
import currencyConverterImage from "../assets/image/Calender-view.png";
import novaAiImage from "../assets/image/spiral.png";
import portfolioWebsiteImage from "../assets/image/Earth-threejs.png";
import learnKodeImage from "../assets/image/LearnKode.png";

const Projects = () => {
  const projectData = [
    {
      title: "Learn Kode",
      image: learnKodeImage,
      liveLink: "https://learn-kode-frontend.vercel.app/",
    },
    {
      title: "CRUD Based App",
      image: CrudImage,
      liveLink: "https://crud-based-mern-app.onrender.com/",
    },
    {
      title: "Netflix Clone",
      image: netflixCloneImage,
      liveLink: "https://netflix-clone-sigma-steel.vercel.app/",
    },
    {
      title: "Task Manager",
      image: TaskManagerImage,
      liveLink: "https://taskmanager-mauve-nine.vercel.app/",
    },
    {
      title: "AI Image Generator",
      image: aiImageGeneratorImage,
      github: "https://github.com/utkarshanand10/Ai-imageGenrator",
    },
    {
      title: "Password Generator",
      image: passwordGeneratorImage,
      github: "https://github.com/utkarshanand10/Password_genrator",
    },
    {
      title: "Currency Converter",
      image: currencyConverterImage,
      github: "https://github.com/utkarshanand10/Currency-Converter",
    },
    {
      title: "NovaAI",
      image: novaAiImage,
      github: "https://github.com/utkarshanand10/NovaAI",
    },
    {
      title: "Portfolio Website",
      image: portfolioWebsiteImage,
      github: "https://github.com/utkarshanand10/Portfolio-Website",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[rgb(21,21,19)] py-32 px-6" // Increased top & bottom padding
    >
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-12">
        PROJECTS
      </h2>

      <div className="flex flex-wrap justify-center gap-10">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e1e1d] rounded-xl overflow-hidden w-[350px] shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="bg-gray-900 px-4 py-3">
              <h3 className="text-white text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <a
                href={project.github || project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white uppercase text-xs font-bold bg-gray-800 px-4 py-2 rounded-md flex justify-between items-center hover:bg-gray-700 transition"
              >
                {project.github
                  ? "Click here to visit GitHub"
                  : "Click here to visit Live Demo"}
                <span className="ml-2 text-xl">➔</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
