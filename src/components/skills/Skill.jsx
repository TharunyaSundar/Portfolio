import { FaHtml5, FaJs, FaReact, FaDatabase } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML, CSS & Tailwind CSS", icon: <FaHtml5 size={24} />, level: "w-[80%]" },
    { name: "JavaScript & TypeScript", icon: <FaJs size={24} />, level: "w-[75%]" },
    { name: "React & NodeJS", icon: <FaReact size={24} />, level: "w-[75%]" },
    { name: "MongoDB, Next.js & Express.js", icon: <FaDatabase size={24} />, level: "w-[70%]" },
    { name: "OpenCV, Keras & TensorFlow", icon: <SiTensorflow size={24} />, level: "w-[75%]" },
  ];

  return (
    <div id="skills" className="text-white text-center mt-12 ml-28 mr-28">
      <h1 className="Education-title text-center font-bold text-6xl mb-10">Skills</h1>
      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center space-x-4">
            {skill.icon}
            <div className="w-full">
              <div className="text-left mb-1">{skill.name}</div>
              <div className="w-full h-3 bg-gray-700 rounded-full">
                <div
                  className={`h-3 ${skill.level} bg-gradient-to-r from-red-500 to-purple-500 rounded-full shadow-md transition-all duration-1000`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
