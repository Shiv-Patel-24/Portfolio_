import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./Hero.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Hero = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particleOptions = {
    background: {
      color: {
        value: "#121212",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#00bcd4", 
      },
      links: {
        color: "#00bcd4", 
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="hero" className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
      />

      <div className="hero-content">
        <h1>Shiv Patel</h1>
       
        <h2>
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "MERN Stack Developer", 
              2000,
              "Web Developer", 
              2000,
              "React Developer", 
              2000,
              "Backend Developer", 
              2000,
              "Full Stack Developer", 
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="hero-type-animation"
          />
        </h2>
        <p>Building digital experiences, one line of code at a time.</p>
        <div className="hero-socials">
          <a
            href="https://www.linkedin.com/in/shiv-patel24/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Shiv-Patel-24"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
        <div className="hero-buttons">
          <a href="#projects" className="cta-button">
            View My Work
          </a>
          <a href="/resume.pdf" className="cta-button-secondary" download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
