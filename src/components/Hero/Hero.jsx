import React from "react";
import { useState } from "react";
import profile_img from '../../assets/profile4.jpeg';
import resume from '../../assets/resume.pdf';
const Hero=()=>{
    const [showResume, setShowResume] = useState(false);

    const handleResumeClick = () => {
        setShowResume(!showResume);
    };

    return(
    <div id="home" className="flex-col items-center text-center min-h-screen mt-24 flex">
        <img src={profile_img} alt="" className="w-44 h-44 rounded-full transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"/>
        <div className="mt-14 ml-5">
            <h1 className="text-5xl font-bold mb-4">
            <span className="text-6xl font-bold bg-gradient-to-r  from-red-600 to-purple-500  bg-clip-text text-transparent">I’m Tharunya Sundar,</span> a Computer Science
            <br/>
            <span> Master’s student at SUNY Binghamton</span>
            </h1>
            <p className="font-mono text-2xl text-white text-balance mr-10 ml-10 mt-16">I truly enjoy working on projects that make a real difference. Whether it’s in AI/ML or web development, I’m always eager to learn new technologies.
            </p>
            <div className="flex justify-center gap-20 mt-24 font-mono">
            <a href="https://www.linkedin.com/in/tharunya-sundar-14b47623a/" target="_blank" rel="noopener noreferrer">
                <div className="bg-gradient-to-tr text-center text-white from-red-600 to-purple-500 px-5 py-4 transform transition-transform hover:scale-105 rounded-3xl w-48">
                    Connect with Me</div></a>
                <div onClick={handleResumeClick} className="cursor-pointer rounded-3xl border px-5 py-4 transform transition-transform hover:scale-105 w-48">My resume</div>
            </div>
            {/* Resume Section (conditionally rendered) */}
            {showResume && (
                    <div className="mt-6 w-full max-w-2xl mx-auto p-4 border rounded-xl bg-gray-800 text-white">
                        <iframe
                            src = {resume}
                            title="My Resume"
                            className="w-full h-96"
                        ></iframe>
                    </div>
                )}
        </div>
    </div>)
};

export default Hero;