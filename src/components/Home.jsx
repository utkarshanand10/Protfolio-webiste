import React from "react";
import profile from "../assets/image/profile.jpeg";
import cvFile from "../assets/cv.pdf";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "utkarsh_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center 
                 bg-[rgb(21,21,19)] text-white px-4 py-10"
    >
      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="w-44 h-44 sm:w-52 sm:h-52 rounded-full object-cover mb-6 
                   border-4 border-white shadow-lg shadow-orange-500/20"
      />

      {/* Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">
        I do code and <br />
        make content{" "}
        <span
          className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 
                         bg-clip-text text-transparent"
        >
          about it!
        </span>
      </h1>

      {/* Subtext */}
      <p className="max-w-xl text-gray-400 mb-8 text-sm sm:text-base">
        I’m a frontend developer passionate about building modern, interactive,
        and dynamic web applications using the latest technologies.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="bg-white text-black px-6 py-2 rounded-full font-medium 
                           hover:bg-gray-200 transition-all duration-300 shadow-md"
        >
          Get In Touch
        </button>
        <button
          onClick={handleDownloadCV}
          className="border border-white px-6 py-2 rounded-full font-medium 
                     hover:bg-white hover:text-black transition-all duration-300 shadow-md"
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default Home;
