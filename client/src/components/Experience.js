import React from 'react';
import './Experience.css';
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  const experiences = [
    {
      company: "Vardaam Web Solution", 
      role: "React.js + Laravel Developer",
      type: "Internship + Job",
      duration: "Nov 2025 - Present",
      description: "Developing full-stack applications using React.js for modern frontends and Laravel for robust backend systems. Implementing RESTful APIs and managing database architectures.",
      color: "#00bcd4"
    },
    {
      company: "Code Wing", 
      role: "Software Developer Intern",
      type: "Internship",
      duration: "Sep 2025 - Nov 2025",
      description: "Gained hands-on experience in MERN stack development. Contributed to building responsive UI components and integrating frontend with backend services.",
      color: "#61DAFB"
    }
  ];

  return (
    <section id="experience" className="experience-section section">
      <div className="section-content">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">My Journey</h2>
          <div className="experience-container">
            {experiences.map((exp, index) => (
              <Tilt 
                key={index}
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                gyroscope={true}
                className="tilt-card"
              >
                <div className="exp-card" style={{ borderTop: `4px solid ${exp.color}` }}>
                  <span className="exp-type">{exp.type}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <h4 className="exp-company">{exp.company}</h4>
                  <p className="exp-duration">{exp.duration}</p>
                  <p className="exp-desc">{exp.description}</p>
                  
                </div>
                <br />
              </Tilt>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;