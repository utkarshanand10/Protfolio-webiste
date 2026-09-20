import React, { useState, useEffect } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080b11]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
          >
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center font-mono text-cyan-400 font-bold text-sm tracking-wider shadow-sm group-hover:border-cyan-400/60 transition-colors">
              &lt;UA/&gt;
            </span>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                Utkarsh Anand
              </span>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-medium text-slate-400 tracking-wide uppercase">
                  Open to work
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.08] shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
            >
              Let's Connect
              <FiArrowUpRight className="text-base" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiXMark className="w-6 h-6 text-white" />
            ) : (
              <HiBars3 className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#080b11]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 flex flex-col justify-between overflow-y-auto animate-fadeIn">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 px-3 mb-2">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 font-semibold border border-cyan-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-500 font-mono">
                    {link.href}
                  </span>
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25"
            >
              Get in Touch
              <FiArrowUpRight className="text-lg" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

