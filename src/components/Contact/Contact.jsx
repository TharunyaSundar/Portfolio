import React from "react";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div id = "contact" className="contact-section mt-12 text-center bg-black text-white py-16">
      <h2 className="text-center font-bold text-6xl mb-10">Contact Me</h2>
      <div className="flex flex-col items-center gap-4">
        <a
          href="mailto:tsundar@binghamton.edu"
          className="flex items-center gap-3 text-lg hover:text-gray-400 transition"
        >
          <Mail className="w-6 h-6" />
          tsundar@binghamton.edu
        </a>
        <a
          href="https://www.linkedin.com/in/tharunya-sundar-14b47623a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-lg hover:text-gray-400 transition"
        >
          <Linkedin className="w-6 h-6" />
          linkedin.com/in/tharunyasundar
        </a>
      </div>
    </div>
  );
};

export default Contact;
