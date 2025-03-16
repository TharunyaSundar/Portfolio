import React from 'react'
import './Education.css'
import sastralogo from '../../assets/sastralogo.png'
import binglogo from '../../assets/Binglogo.png'

const Education = () => {
  return (
    <div id = 'education' className='Education mt-9'>
        <div className="text-center font-bold text-6xl mb-10">
            <h1>Education</h1>
        </div>
        <div className="Education-container mt-10">
            {/* SUNY Binghamton */}
            <div className="education-card">
                <img src={binglogo} alt="Binghamton University" className="edu-logo" />
                <div className="education-details">
                    <h2>SUNY Binghamton University - New York</h2>
                    <h3>USA</h3>
                    <h2>MS Computer Science</h2>
                    <p>Pursuing a Master's degree in Computer Science with a focus on AI/ML and web development.</p>
                </div>
                <div className="grade-badge">3.4/4.0</div>
            </div>

            {/* SASTRA University */}
            <div className="education-card">
                <img src={sastralogo} alt="Sastra University" className="edu-logo" />
                <div className="education-details">
                    <h2>SASTRA University - Tamil Nadu</h2>
                    <h3>India</h3>
                    <h2>BS Information and Communication Technology</h2>
                    <p>Completed a Bachelor's degree with a focus on AI/ML, software engineering, and data science.</p>
                </div>
                <div className="grade-badge">7.8/10</div>
            </div>
        </div>
    </div>
  )
}

export default Education
