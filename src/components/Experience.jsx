import React from "react";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiGitBranch } from "react-icons/fi";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Corepjack Technologies",
    location: "Delhi, India",
    period: "Nov 2025 – March 2026",
    type: "Internship",
    description:
      "Worked on production web systems using the MERN stack, delivering full-stack features, and engineering modular backend APIs.",
    responsibilities: [
      "Engineered responsive, accessible frontends using React.js, Tailwind CSS, and state management.",
      "Designed and implemented RESTful APIs in Node.js & Express for user authentication, data processing, and CRUD workflows.",
      "Optimized API endpoints and client-side rendering performance to reduce page load latency.",
      "Conducted API testing and payload validation with Postman, ensuring robust error handling.",
      "Collaborated using Git branch workflows, pull requests, and peer code reviews in an agile environment.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Postman", "Git"],
  },
  {
    role: "Full-Stack Project Developer",
    company: "Independent & Open Source Projects",
    location: "Remote",
    period: "2024 – Present",
    type: "Engineering",
    description:
      "Architecting end-to-end full-stack web applications with authentication, databases, and third-party API integrations.",
    responsibilities: [
      "Engineered Learn-Kode (LMS platform) supporting Student, Instructor, and Admin roles with Razorpay payments and Cloudinary media delivery.",
      "Built credential-based authentication systems using JWT and OTP verification with protected routing.",
      "Architected clean database schemas and relational references using MongoDB and Mongoose.",
      "Integrated external services and AI developer APIs into responsive single-page and server-rendered web applications.",
    ],
    technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "Redux Toolkit", "Tailwind CSS"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#080b11]/90"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl">
            Work Experience & Development History
          </h2>
          <p className="mt-4 text-slate-400 text-base max-w-2xl">
            Demonstrated track record of delivering full-stack features, integrating RESTful APIs, and collaborating through clean engineering workflows.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central guide line on md+ screens */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative md:pl-20 group"
              >
                {/* Timeline node icon */}
                <div className="hidden md:flex absolute left-4 -translate-x-1/2 top-7 w-9 h-9 rounded-full bg-[#0d121d] border-2 border-cyan-400 text-cyan-400 items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                  <FiBriefcase className="text-sm" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0d121d] border border-white/[0.08] hover:border-cyan-500/30 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono font-medium text-cyan-400 uppercase tracking-wider mb-2">
                        {item.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-base font-semibold text-slate-300 mt-0.5">
                        {item.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-mono">
                      <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                        <FiCalendar className="text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <FiMapPin className="text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    {item.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <FiCheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5 text-sm" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies footer */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1 mr-1">
                      <FiGitBranch className="text-cyan-400" /> Core Tech:
                    </span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
