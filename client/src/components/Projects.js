import React from 'react';
import './Projects.css';
import { Fade } from "react-awesome-reveal";
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';

const Projects = () => {
  const projectData = [
    {
      title: "FinTrack",
      image: project2Image,
      description: "FinTrack is a comprehensive, full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) designed to help business owners and individuals track their income and expenses effortlessly. It features a secure, modern user dashboard and a powerful admin panel for complete platform management. This project was built from the ground up, focusing on a clean architecture, robust security, and a polished, responsive user interface.",
      techStack: ["React", "Node.js", "Express", "MongoDB", ],
      liveLink: " https://fintrack-mern-app.vercel.app/ ",
      repoLink: "https://github.com/Shiv-Patel-24/Fintrack-MERN-App",
    },
    {
      title: "Auction_Ease",
      image: project3Image,
      description: "Auction Ease is an online auction platform built with Node.js, Express, EJS, and MongoDB. This project includes a fully functional Admin Panel to manage listings, users, and reviews with role-based authentication.",
      techStack: ["Node.js", "Socket.IO", "Express.js", "MongoDB", "CSS", "Bootstrap", "EJS", "JavaScript"],
      liveLink: "#",
      repoLink: "https://github.com/Shiv-Patel-24/Auction_Ease_Project",
    },
    {
      title: "Wanderlust",
      image: project1Image,
      description: "Wanderlust is a travel platform that allows users to explore and share their favourite destinations. The project is built using MongoDB, Express.js, EJS, Node.js and incorporates various technologies for features like image upload, user authentication, and interactive maps.",
      techStack: ["Node.js", "REST API",  "Express", "EJS", "JavaScript", "HTML", "CSS", "Bootstrap", "MongoDB", "JWT authentication"],
      liveLink: "#",
      repoLink: "https://github.com/Shiv-Patel-24/wanderlustProject",
    },
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="section-content">
        <h2 className="section-title">My Projects</h2>
        <Fade direction="up" triggerOnce>
            <div className="projects-grid">
              {projectData.map((project, index) => (
                <div className="project-card" key={index}>
                  <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech-stack">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">Live Demo</a>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-button">View Code</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="more-projects-container">
              <a 
                href="https://github.com/your-username" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="more-projects-button"
              >
                More Projects
              </a>
            </div>
        </Fade>
      </div>
    </section>
  );
};

export default Projects;