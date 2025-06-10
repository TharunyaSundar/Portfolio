import React from "react";

import profile_img from '../../assets/profilenew.jpg'
const About=()=>{
    return(
        <div id="about" className="flex flex-col justify-center font-mono items-center">
            <div className="about-title text-center font-bold text-6xl mb-10">
                <h1>About Me</h1>
            </div>
            <div className="about-section flex mx-auto max-w-6xl mb-8">
                <div className="about-left flex flex-shrink-0 mr-8">
                    <img className="object-cover rounded-lg w-80 h-96" src={profile_img} alt="" />
                </div> 
                <div className="about-right flex-grow text-lg mt-10">
                    <p className="mb-10 font-inter">💡 I’m a lifelong learner, always exploring new technologies and pushing my boundaries. I believe that the best innovations happen at the intersection of curiosity and collaboration. Engaging with the tech community, sharing knowledge, and brainstorming the next big thing excites me.</p>
                    <p>🚀 Currently, I’m working on projects in machine learning, data analytics, and full-stack development, and I’m always on the lookout for exciting opportunities to grow and contribute.</p>
                    <p className="font-inter mt-6">🤝 Let’s connect, innovate, and build something amazing together! </p>
                </div>
            </div>
        </div>
    )
}

export default About;