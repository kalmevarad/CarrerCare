import React from 'react';
import Navbar from './../components/navbar.jsx';
import Button from './../components/button.jsx';
import { Github, Linkedin, ExternalLink } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        
        {/* ---------- ABOUT SUMMARY ---------- */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-cyan-400 tracking-wide mb-6">
            About CareerCare
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg space-y-3">
            Welcome to CareerCare, your personalized guide to exploring the world of careers! 
            We created this platform to make career planning simpler, smarter, and more inspiring 
            for students and learners.
            <br /><br />
            Whether you're unsure about your future path or curious about the 
            skills needed for your dream job, CareerCare helps you discover various career options, 
            essential skills, and relevant courses – all in one place.
            <br /><br />
            Our website is built using HTML, CSS, JavaScript, and React JS, combining creativity 
            and technology to deliver an interactive and informative experience. CareerCare is designed 
            to empower you to make confident and informed career decisions.
            <br /><br />
            Let’s turn confusion into clarity – start exploring today!
          </p>

          <div className="mt-6">
            <button type="submit" className=" hover:bg-cyan-600 cursor-pointer inline-block bg-gray-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm self-end">Explore Careers</button>
          </div>
        </div>

        {/* ---------- TEAM SECTION ---------- */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-cyan-300 tracking-wide ">
            Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center align-items-center">
            
            {/* TEAM CARD */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-xs flex flex-col items-center text-center hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold text-white">Varad Kalme</h3>

              <div className="flex space-x-4 mt-4 text-cyan-400">
                <a href="https://github.com/kalmevarad" target="_blank" className="hover:text-white">
                  <Github size={22} />
                </a>
                <a href="https://www.linkedin.com/in/varad-kalme-094073375" target="_blank" className="hover:text-white">
                  <Linkedin size={22} />
                </a>
                <a href="https://peerlist.io/kalmevarad" target="_blank" className="hover:text-white">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
