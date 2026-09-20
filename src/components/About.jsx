import React from "react";
import { FiCode, FiLayers, FiBookOpen, FiCheckCircle } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode className="text-cyan-400 text-xl" />,
    title: "Full-Stack Engineering",
    description:
      "End-to-end expertise across modern React/Next.js frontends, modular Express.js backends, and scalable MongoDB schemas.",
  },
  {
    icon: <FiLayers className="text-indigo-400 text-xl" />,
    title: "Real-World Applications",
    description:
      "Hands-on experience delivering authentication (JWT & OTP), role-based dashboards, Razorpay payments, and API integrations.",
  },
  {
    icon: <FiBookOpen className="text-emerald-400 text-xl" />,
    title: "B.Tech in Computer Science",
    description:
      "Computer Science & Engineering graduate (2021–2025) with a strong foundation in Data Structures, Algorithms, DBMS, and System Design.",
  },
  {
    icon: <FiCheckCircle className="text-sky-400 text-xl" />,
    title: "Clean Code & Workflow",
    description:
      "Disciplined version control with Git PRs, comprehensive API testing with Postman, and performance-oriented frontend optimization.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#080b11]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Passionate about building modern, reliable web software.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Bio Story */}
          <div className="lg:col-span-5 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed text-left">
            <p>
              Hello! I'm <strong className="text-white font-semibold">Utkarsh Anand</strong>, a Full Stack Developer holding a <strong className="text-white font-semibold">B.Tech in Computer Science & Engineering</strong> (2021–2025).
            </p>
            <p>
              I specialize in building responsive, scalable, and user-centric web applications using <strong className="text-white font-medium">React.js, Next.js, Node.js, Express.js, and MongoDB</strong>.
            </p>
            <p>
              From engineering complex LMS platforms and real-time CRUD systems to integrating third-party APIs and streamlining user flows, I love solving difficult software problems with clean, maintainable, and efficient code.
            </p>
            <div className="pt-2">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Explore my industry experience &rarr;
              </a>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#0d121d] border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-black/20 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

