import React from "react";

const Projects = () => {
  const projectData = [
    {
      title: "Netflix Clone",
      image: "/netflix-thumbnail.jpg",
      github: "https://github.com/utkarshanand10/Netflix-clone",
    },
    {
      title: "AI Image Generator",
      image: "/css.png",
      github: "https://github.com/utkarshanand10/Ai-imageGenrator",
    },
    {
      title: "CRUD Based App",
      image: "/html.png",
      github: "https://github.com/utkarshanand10/-CRUD-based-MERN-app",
    },
    {
      title: "Password Generator",
      image: "/html.png",
      github: "https://github.com/utkarshanand10/Password_genrator",
    },
    {
      title: "Currency Converter",
      image: "/html.png",
      github: "https://github.com/utkarshanand10/Currency-Converter",
    },
    {
      title: "NovaAI",
      image: "/novaai.png",
      github: "https://github.com/utkarshanand10/NovaAI",
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
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white uppercase text-xs font-bold bg-gray-800 px-4 py-2 rounded-md flex justify-between items-center hover:bg-gray-700 transition"
              >
                Click here to visit GitHub
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
