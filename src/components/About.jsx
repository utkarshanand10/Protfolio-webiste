import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[rgb(21,21,19)] text-white min-h-screen flex flex-col justify-center px-6 py-32"
    >
      <h2 className="text-center text-3xl font-bold text-blue-500 mb-12">
        ABOUT ME
      </h2>

      <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-300">
        <p className="text-lg">
          Hello! I’m{" "}
          <span className="text-white font-semibold">Utkarsh Anand</span>, a
          passionate full-stack developer who loves blending technology with
          creativity.
        </p>

        <p className="text-lg">
          I specialize in building responsive, fast, and scalable web
          applications using the{" "}
          <span className="text-white font-medium">MERN stack</span>, and I
          enjoy turning complex problems into elegant, user-friendly
          experiences.
        </p>

        <p className="text-lg">
          My journey in tech started with a curiosity to understand how things
          work — and that curiosity still fuels my learning every day. I'm
          constantly exploring new tools, frameworks, and ideas.
        </p>

        <p className="text-lg">
          My hobbies include exploring new technologies, photography, and
          gaming.
        </p>
      </div>
    </section>
  );
};

export default About;
