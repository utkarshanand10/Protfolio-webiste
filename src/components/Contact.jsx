import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="bg-[rgb(30,30,29)] text-gray-300 py-12 px-6"
    >
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        {/* Heading */}
        <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>

        {/* Description */}
        <p className="mb-4 text-sm sm:text-base max-w-xl">
          👨‍💻 I’m Utkarsh, a MERN Stack Developer passionate about building
          clean, fast, and user-friendly web applications. Always learning,
          always coding.
        </p>

        {/* Email */}
        <div className="flex items-center justify-center sm:justify-start gap-2 mb-6">
          <FaEnvelope className="text-white" />
          <span className="text-white font-semibold">
            utkarshananad133@gmail.com
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-start gap-6 text-white text-xl">
          <a
            href="https://www.linkedin.com/in/utkarsh-anand-16b418187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
          <a
            href="https://github.com/utkarshanand10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/utkarsh_a_n_a_n_d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
