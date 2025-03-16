import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import About from "./components/About/About";
import Projects from "./components/projects/projects"
import Education from "./components/education/education";
import Contact from "./components/Contact/Contact";
import Interests from "./components/Interests/Interests";
import Skills from "./components/skills/Skill";
const app=()=>{
  return <div className="text-white">
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Education/>
    <Projects/>
    <Interests/>
    <Contact/>
  </div>
};
export default app;