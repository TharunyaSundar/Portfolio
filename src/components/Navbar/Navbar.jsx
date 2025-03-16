import React from "react";

const Navbar=()=>{
    return<div className="font-mono items-center px-10 py-4 flex justify-between"> 
        <ul className="font-mono text-white flex space-x-28 text-lg pl-60">
        <li> <a href="#home" className="hover:text-gray-400 transition-colors">Home</a></li>
        <li> <a href="#about" className="hover:text-gray-400 transition-colors">About Me</a></li>
        <li> <a href="#education" className="hover:text-gray-400 transition-colors">Education</a></li>
        <li>  <a href="#projects" className="hover:text-gray-400 transition-colors">Projects</a></li>
        <li> <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a></li>
        </ul>
        <a href="https://www.linkedin.com/in/tharunya-sundar-14b47623a/" target="_blank" rel="noopener noreferrer">
        <div className="bg-gradient-to-tr text-center text-white from-red-600 to-purple-500 px-5 py-4 ml-auto transform transition-transform hover:scale-105 rounded-3xl">Connect with me</div></a>
    </div>
};
export default Navbar;