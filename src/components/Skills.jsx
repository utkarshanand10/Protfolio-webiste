import React from "react";
import {
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
} from "react-icons/si";
import { TbBrandReactNative, TbApi } from "react-icons/tb";
import { FiCpu, FiLayout, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: <FiLayout className="text-cyan-400 text-lg" />,
    description: "Building responsive, component-driven, and high-performance user interfaces.",
    skills: [
      { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-amber-300" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-sky-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
  },
  {
    category: "Backend Development",
    icon: <FiServer className="text-emerald-400 text-lg" />,
    description: "Architecting modular servers, business logic, and secure endpoints.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-emerald-400" /> },
      { name: "Express.js", icon: <SiExpress className="text-slate-200" /> },
      { name: "REST APIs", icon: <TbApi className="text-cyan-300 text-lg" /> },
      { name: "PHP", icon: <SiPhp className="text-indigo-400 text-lg" /> },
    ],
  },
  {
    category: "Database & Cloud",
    icon: <FiDatabase className="text-blue-400 text-lg" />,
    description: "Designing schema structures, indexing, and persistent data storage.",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-emerald-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },
    ],
  },
  {
    category: "Tools & Environment",
    icon: <FiTool className="text-purple-400 text-lg" />,
    description: "Version control, API testing, debugging, and Unix system operations.",
    skills: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
    ],
  },
  {
    category: "Mobile & AI Integration",
    icon: <FiCpu className="text-rose-400 text-lg" />,
    description: "Cross-platform development and modern AI workflow integration.",
    skills: [
      { name: "React Native", icon: <TbBrandReactNative className="text-cyan-400 text-lg" /> },
      { name: "AI Developer Tools", icon: <FiCpu className="text-rose-400 text-lg" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-radial-gradient"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Technologies I use to build production-grade web systems.
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl">
            Curated tools and frameworks I work with regularly to build full-stack web applications, optimize APIs, and craft intuitive interfaces.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((group, idx) => (
            <div
              key={group.category}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0d121d] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 shadow-lg shadow-black/25 flex flex-col justify-between group ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {group.category}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-200 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all duration-200 cursor-default text-xs sm:text-sm font-medium shadow-sm hover:scale-[1.02]"
                  >
                    <span className="text-base sm:text-lg flex-shrink-0">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

