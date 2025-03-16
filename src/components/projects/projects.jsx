import React from "react";
import weatherappimg from '../../assets/WeatherApp WebApp.png';
import faceappimg from '../../assets/FacemaskDetect.png';
import tdspimg from '../../assets/tdsp.png';
import pingtoolimg from '../../assets/pingtool.png'
import './projects.css'

const projectsData = [
    {
      title: "Weather Check WebApp",
      description:
        "Stay updated with real-time weather conditions using this intuitive React-based weather app powered by the OpenWeather API. Easily search for any city to get the current temperature, humidity, wind speed, and an hourly forecast",
      technologies: ["React", "Javascript", "OpenweatherAPI", "HTML", "CSS", "Vercel", "Firebase"],
      image: weatherappimg,
      link: "https://weatherapp-omega-lac.vercel.app/",
      video: "https://www.loom.com/share/09180b76ab034c21ace1dfeb96f5f016?sid=0b989303-8f97-4af8-82c0-8c6ee7662dcc",
    },
    {
      title: "Face Mask Detection",
      description:
        "Developed a real-time face mask detection system using deep learning, achieving 94% accuracy, and integrated a web interface for real-time detection via image uploads and live video streams to enhance accessibility.",
      technologies: ["Python", "Tensorflow", "StreamLit", "MobileNetV2", "Deep Learning", "AI/ML"],
      image: faceappimg,
      link: "https://facemaskdetection-using-image-capture-7ecyrkwxa8rjkpqxcpsb5n.streamlit.app/",
      video: "#",
    },
    {
      title: "NYC Crash Data Science Project",
      description:
        "Analyzed NYC crash data (2013–2024) using geospatial & time-series analysis, identified high-risk intersections, peak crash times, and seasonal trends, and proposed data-driven safety measures using Python, Pandas, Matplotlib and Geopandas.",
      technologies: ["Python", "EDA", "Pandas", "Numpy", "GeoSpatial Analysis", "Data Visualization"],
      image: tdspimg,
      link: "https://drive.google.com/file/d/1-7pU_--6YB9tkP6fkUwc5F2Sb7Ww0P5f/view?usp=sharing",
      video: "https://colab.research.google.com/drive/1bTP2Z2EcL78SAyFaMKQ7fomvdGUelI-a?usp=sharing",
    },
    {
        title: "Ping Tool",
        description:
          "Analyzed NYC crash data (2013–2024) using geospatial & time-series analysis, identified high-risk intersections, peak crash times, and seasonal trends, and proposed data-driven safety measures using Python, Pandas, Matplotlib and Geopandas.",
        technologies: ["Python", "EDA", "Pandas", "Numpy", "GeoSpatial Analysis", "Data Visualization"],
        image: pingtoolimg,
        link: "",
        video: "https://drive.google.com/file/d/1uNUe3RPkLw8cmX1YBKGP3fhtiXeLtMhz/view?usp=sharing",
      },
  ];
  const projects = () => {
    return (
      <div id = 'projects' className="my-projects-section mt-4 text-white py-12 px-8">
        <h2 className="text-center font-bold text-6xl mb-10">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#f4e1e6]">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#3a3a3a] text-white text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-start gap-4">
                  {project.video && (
                    <a
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3a3a3a] hover:bg-[#4a4a4a] p-2 rounded-full transition-colors"
                    >
                      ▶️
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#3a3a3a] hover:bg-[#4a4a4a] p-2 rounded-full transition-colors"
                    >
                      🌐
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default projects