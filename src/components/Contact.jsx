import React, { useState } from "react";
import { FiMail, FiMapPin, FiCopy, FiCheck, FiSend, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const emailAddress = "utkarshananad133@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitting(true);
    // Simulate brief send delay
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#06080d] text-slate-300 pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Have a project in mind? <br />
                <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                  Let’s build something together.
                </span>
              </h2>
              <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
                Whether you’re looking to hire a full-stack engineer, have questions about my work, or want to discuss a software project, I’d love to hear from you.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 rounded-2xl bg-[#0d121d] border border-white/[0.08] mb-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                      <FiMail className="text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400 font-medium">Direct Email</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-white hover:text-cyan-400 font-semibold text-sm sm:text-base truncate block transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy email to clipboard"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition border border-white/10 flex-shrink-0 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <FiCheck className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-8 font-mono">
                <FiMapPin className="text-cyan-400" />
                <span>Delhi, India &bull; Available Worldwide (Remote)</span>
              </div>
            </div>

            {/* Social Network Links */}
            <div>
              <p className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-3">
                Connect Online
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/utkarsh-anand-16b418187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-xl bg-[#0d121d] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all shadow-md"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
                <a
                  href="https://github.com/utkarshanand10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-xl bg-[#0d121d] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all shadow-md"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="https://www.instagram.com/utkarsh_a_n_a_n_d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 rounded-xl bg-[#0d121d] border border-white/10 flex items-center justify-center text-slate-300 hover:text-rose-400 hover:border-rose-400/40 hover:-translate-y-0.5 transition-all shadow-md"
                >
                  <FaInstagram className="text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0d121d] border border-white/[0.08] shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center mb-3">
                    <FiCheck className="text-2xl" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Message Received!</h4>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out. I’ll review your note and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Utkarsh"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Your Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formState.subject}
                      onChange={handleInputChange}
                      placeholder="Project discussion / Career opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <FiSend className="text-base" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Utkarsh Anand. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React 19 &bull; Vite &bull; Tailwind CSS</span>
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

