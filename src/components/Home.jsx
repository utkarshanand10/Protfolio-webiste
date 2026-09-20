import React from "react";
import profile from "../assets/image/profile.jpeg";
import cvFile from "../assets/cv.pdf";
import { FiDownload, FiGithub, FiArrowDown, FiMail } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss } from "react-icons/si";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Utkarsh_Anand_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left / Main Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Top availability pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-300 tracking-wide">
                Available for Full-Time Roles & Web Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Hi, I’m <span className="text-white">Utkarsh Anand</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
              Specialized in engineering robust, production-ready web applications using the{" "}
              <strong className="text-white font-semibold">MERN Stack</strong>,{" "}
              <strong className="text-white font-semibold">Next.js</strong>, and clean{" "}
              <strong className="text-white font-semibold">REST API architecture</strong>. Passionate about turning complex real-world requirements into smooth, intuitive user experiences.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 active:scale-95"
              >
                View Projects
                <FiArrowDown className="text-base" />
              </a>

              <button
                onClick={handleDownloadCV}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 hover:text-white transition-all duration-200 active:scale-95 shadow-md"
              >
                <FiDownload className="text-base text-cyan-400" />
                Download Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-200"
              >
                <FiMail className="text-base" />
                Contact Me
              </a>

              <a
                href="https://github.com/utkarshanand10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center justify-center p-3 rounded-xl text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-600 transition-all duration-200 hover:scale-105"
              >
                <FiGithub className="text-lg" />
              </a>
            </div>

            {/* Core Tech Stack Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-6 border-t border-slate-800/80 w-full">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-400 mr-2">
                Tech Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300">
                  <SiReact className="text-cyan-400 text-sm" /> React.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300">
                  <SiNextdotjs className="text-white text-sm" /> Next.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300">
                  <SiNodedotjs className="text-emerald-400 text-sm" /> Node.js
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300">
                  <SiMongodb className="text-emerald-500 text-sm" /> MongoDB
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-300">
                  <SiTailwindcss className="text-sky-400 text-sm" /> Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Right / Visual Card Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative group">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-65 transition duration-700 group-hover:duration-300 animate-subtle-pulse"></div>

              {/* Profile Card Container */}
              <div className="relative rounded-3xl p-3 bg-[#0d121d] border border-white/10 shadow-2xl backdrop-blur-xl">
                <div className="relative overflow-hidden rounded-2xl w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
                  <img
                    src={profile}
                    alt="Utkarsh Anand - Full Stack Developer"
                    fetchpriority="high"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle inner gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080b11] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Info Tag 1 */}
                <div className="absolute -bottom-4 -left-4 bg-[#0d121d]/95 border border-white/10 shadow-xl rounded-xl px-4 py-2.5 flex items-center gap-3 backdrop-blur-md">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-mono font-bold text-xs">
                    &lt;/&gt;
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">
                      Specialization
                    </p>
                    <p className="text-xs font-bold text-white">Full Stack Engineering</p>
                  </div>
                </div>

                {/* Floating Info Tag 2 */}
                <div className="absolute -top-3 -right-3 bg-[#0d121d]/95 border border-white/10 shadow-xl rounded-xl px-3.5 py-2 flex items-center gap-2 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-semibold text-slate-200">
                    B.Tech CSE Graduate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

