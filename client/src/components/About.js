import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section section">
      <div className="section-content">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">About Me</h2>
          <div className="about-text-container">
            <h3>Who am I?</h3>
            <p>
              I'm a passionate MERN Stack Developer based in Vadodara, Gujarat, with a strong foundation in building and optimizing interactive, user-friendly web applications.
            </p>
            <p>
              My journey into web development is driven by a love for solving complex problems and a curiosity for how technology can create seamless digital experiences. I thrive in collaborative environments and I'm always eager to learn.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;