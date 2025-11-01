import React, { useEffect, useState } from "react";
import {
  FaJsSquare,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
  { name: "Node.js", icon: <FaNodeJs />, level: 80 },
  { name: "HTML5", icon: <FaHtml5 />, level: 90 },
  { name: "CSS3", icon: <FaCss3Alt />, level: 70 },
  { name: "React.js", icon: <FaReact />, level: 80 },
  { name: "Express.js", icon: <SiExpress />, level: 75 },
  { name: "MongoDB", icon: <SiMongodb />, level: 70 },
];

const Skills = () => {
  const [filledLevels, setFilledLevels] = useState(skills.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilledLevels(skills.map((skill) => skill.level));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="skills"
      className="w-full bg-[rgb(21,21,19)] text-white py-20 px-6 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="w-full pt-10  max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="bg-[#101828] rounded-xl p-8 shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
          >
            <div className="text-5xl mb-3 text-white">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.name}
            </h3>
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${filledLevels[index]}%`,
                  backgroundColor: "#ffffff",
                }}
              ></div>
            </div>
            <span className="text-sm text-gray-300 mt-2">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
