import React from "react";
import { Code, Smartphone, Brain } from "lucide-react";

const interests = [
  {
    title: "Web Development",
    icon: <Code className="w-12 h-12 text-blue-400" />,
    level: "Advanced",
    description: "Building responsive and interactive websites using modern frameworks like React, JavaScript, and more.",
  },
  {
    title: "App Development",
    icon: <Smartphone className="w-12 h-12 text-green-400" />,
    level: "Beginner",
    description: "Developing scalable mobile and web apps with seamless user experience and modern UI.",
  },
  {
    title: "AI/ML",
    icon: <Brain className="w-12 h-12 text-purple-400" />,
    level: "Intermediate",
    description: "Building intelligent systems and models using TensorFlow, PyTorch, and deep learning frameworks.",
  },
];

const Interests = () => {
  return (
    <div className="mt-12 text-center">
      <h2 className="Education-title text-center font-bold text-6xl mb-10">Areas of Interest</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">{interest.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{interest.title}</h3>
            <p className="text-white">{interest.level}</p>
            <p className="text-gray-400">{interest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
