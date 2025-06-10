import React from "react";
import weatherappimg from '../../assets/WeatherApp WebApp.png';
import faceappimg from '../../assets/FacemaskDetect.png';
import tdspimg from '../../assets/tdsp.png';
import pingtoolimg from '../../assets/pingtool.png'
import guessgame from '../../assets/guessgame.png'
import productapp from '../../assets/productapp.png'
import healthcare from '../../assets/healthcare.png'
import chatapp from '../../assets/chatapp.png'
import daylight from '../../assets/daylight.png'
import estbookimg from "../../assets/estbookimg.png";


import './projects.css'

const projectsData = [
  {
    title: "Patient CRM Dashboard",
    description:
      "Built a web dashboard that helps front-desk staff easily upload, review, and edit patient data from CSV files. It includes real-time validation, a smooth editing experience, and a secure CRM integration flow—deployed seamlessly on Cloudflare Workers",
    technologies: ["React", "Javascript", "CloudFlare Workers", "Material UI", "Next.js", "REST API"],
    image: daylight,
    link: "https://daylight-health.tsundar.workers.dev/",
    video: "#",
  },
  {
    title: "ESTBOOK – NeurIPS 2025 Publication",
    description:
      "Contributed to the GMAT subset of ESTBOOK, a multimodal benchmark evaluating LLM reasoning on English standardized tests. Developed a JSON dataset of 1,856 GMAT questions and designed Tree-of-Thought prompting pipelines, leading to 33% accuracy gains. Published in NeurIPS 2025.",
    technologies: ["LLM", "Tree-of-Thought", "Benchmarking", "JSON", "Prompt Engineering", "Python"],
    image: estbookimg,
    link: "https://openreview.net/forum?id=y82R93iRR9",
    video: "#"
  },
  {
    title: "Chat App",
    description:
      "Real-time chat application enabling instant messaging, user authentication, and online status tracking, built with scalable backend services and WebSocket technology",
    technologies: ["React", "Javascript", "Express.js", "Render", "MongoDB", "Daisy-UI", "Socket.io", "JWT", "Node.js","Redis"],
    image: chatapp,
    link: "https://chitchat-etaa.onrender.com/",
    video: "#",
  },
  {
    title: "Product App",
    description:
      "Admin dashboard Website that enables administrators to efficiently manage product inventory by adding, updating, and deleting products. Provides a seamless and intuitive interface for product management",
    technologies: ["React", "Javascript", "Express.js", "Render", "MongoDB", "chakra-UI"],
    image: productapp,
    link: "https://product-app-13vt.onrender.com/",
    video: "#",
  },
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
    title: "Tech.Care Health Dashboard",
    description:
      "Tech.Care is a responsive React dashboard with a searchable patient sidebar, Chart.js blood-pressure trends, vital sign cards and detailed profiles—fetching live data via Fetch API with Basic Auth",
    technologies: ["React", "Javascript", "Chart.js", "HTML", "CSS", "Vercel", "FetchbAPI"],
    image: healthcare,
    link: "https://health-care-dashboard-2by5s2082-tharunya-sundars-projects.vercel.app/",
    video: "#",
  },
  {
    title: "Face Mask Detection",
    description:
      "Developed a real-time face mask detection system using deep learning, achieving 94% accuracy, and integrated a web interface for real-time detection via image uploads and live video streams to enhance accessibility",
    technologies: ["Python", "Tensorflow", "StreamLit", "MobileNetV2", "Deep Learning", "AI/ML"],
    image: faceappimg,
    link: "https://facemaskdetection-using-image-capture-7ecyrkwxa8rjkpqxcpsb5n.streamlit.app/",
    video: "#",
  },
  {
    title: "Guess the Number",
    description:
      "Guessing a randomly generated number. The game provides feedback on each guess, indicating whether the guessed number is too high, too low, or correct. This simple yet engaging project demonstrates core web development concepts like event handling, DOM manipulation, and dynamic updates",
    technologies: ["Javascript", "HTML", "CSS"],
    image: guessgame,
    link: "https://guessgame-gamma.vercel.app/",
    video: "#",
  },
  {
    title: "NYC Crash Data Science Project",
    description:
      "Analyzed NYC crash data (2013–2024) using geospatial & time-series analysis, identified high-risk intersections, peak crash times, and seasonal trends, and proposed data-driven safety measures using Python, Pandas, Matplotlib and Geopandas",
    technologies: ["Python", "EDA", "Pandas", "Numpy", "GeoSpatial Analysis", "Data Visualization"],
    image: tdspimg,
    link: "https://drive.google.com/file/d/1-7pU_--6YB9tkP6fkUwc5F2Sb7Ww0P5f/view?usp=sharing",
    video: "https://colab.research.google.com/drive/1bTP2Z2EcL78SAyFaMKQ7fomvdGUelI-a?usp=sharing",
  },
  {
      title: "Ping Tool",
      description:
        "Android app that allows users to enter a domain name and test network connectivity by sending ICMP echo requests, measuring response times, and displaying real-time results.",
      technologies: ["Kotlin","XML","Android SDK", "Gradles"],
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