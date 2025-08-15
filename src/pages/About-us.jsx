import React from 'react';
import './About-us.css';
import Navbar from './../components/navbar.jsx';
import Button from './../components/button.jsx';
import { Github, Linkedin, ExternalLink} from "lucide-react";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page">
    
           <div className="summary-section">
             <h1>About CareerCare</h1>
             <p>
             Welcome to CareerCare, your personalized guide to exploring the world of careers!<br />We created this platform to make career planning simpler, smarter, and more inspiring for students and learners.Whether you're unsure about your future path or curious about the skills needed for your dream job, Career Compass helps you discover various career options,essential skills, and relevant courses – all in one place.<br />Our website is built using HTML, CSS, JavaScript, and React JS, combining creativity and technology to deliver an interactive and informative experience.Careercare is designed to empower you to make confident and informed career decisions.<br />Let’s turn confusion into clarity – start exploring today!
            </p>
             <Button name="Explore Careers" />
           </div>
             <div className="team-section">
               <h2 className="team-heading">Our Team</h2>
                <div className="team-cards">
                   <div className="member-card">
                       <h3>Tanishka Shivarkar</h3>
                         <div className="social-links">
                           <a href="https://github.com/TanishkaShivarkar" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/tanishka-shivarkar-566351375/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/tanishka_3112" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>

                    <div className="member-card">
                       <h3>Shrawani Mirashe</h3>
                         <div className="social-links">
                           <a href=" https://github.com/Shrawani290" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/shrawani-mirashe-a1430228b" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/shrawani29" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>

                    <div className="member-card">
                       <h3>Satyam Katkade</h3>
                         <div className="social-links">
                           <a href="https://github.com/TanishkaShivarkar" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/tanishka-shivarkar-566351375/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/tanishka_3112" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>

                    <div className="member-card">
                       <h3>Anshuman Morey</h3>
                         <div className="social-links">
                           <a href="https://github.com/ANSHUMANMOREY7 " target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/anshuman-morey/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/anshumxnn_27" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>


                      <div className="member-card">
                       <h3>Varad Kalme</h3>
                         <div className="social-links">
                           <a href="https://github.com/kalmevarad" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/varad-kalme-094073375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/kalmevarad" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>

                   <div className="member-card">
                       <h3>Bhushan</h3>
                         <div className="social-links">
                           <a href="https://github.com/TanishkaShivarkar" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/tanishka-shivarkar-566351375/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/tanishka_3112" target="_blank">
                           <ExternalLink size={20} />
                            </a>
                         </div>
                   </div>


                  <div className="member-card">
                       <h3>Vinod Nangare</h3>
                         <div className="social-links">
                           <a href="https://github.com/TanishkaShivarkar" target="_blank">
                           <Github size={20} />
                           </a>
                            <a href="https://www.linkedin.com/in/tanishka-shivarkar-566351375/" target="_blank">
                           <Linkedin size={20} />
                           </a>
                            <a href="https://peerlist.io/tanishka_3112" target="_blank">
                           <ExternalLink size={20} />
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