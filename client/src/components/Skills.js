// client/src/components/Skills.js
import React from 'react';
import './Skills.css';
import { Fade } from "react-awesome-reveal";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaNpm, FaLaptopCode, FaCloud, FaPython, FaJava, FaLaravel, FaPhp } from 'react-icons/fa';
import { TbHexagonLetterC } from "react-icons/tb";
import { SiJavascript, SiExpress, SiMongodb, SiGithub, SiRedux, SiTailwindcss, SiPostman, SiRender, SiNextdotjs, SiMysql, SiGreensock } from 'react-icons/si'; 
import { VscCode } from "react-icons/vsc";
import { AiOutlineCode } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { IoLogoVercel } from "react-icons/io5";
import { SiOpenai } from 'react-icons/si'

const Skills = () => {
  const programmingLanguages = [
    { name: 'JavaScript', icon: <SiJavascript size={50} color="#F7DF1E" /> },
    { name: 'Python', icon: <FaPython size={50} color="#3776AB" /> },
    { name: 'Java', icon: <FaJava size={50} color="#007396" /> },
    { name: 'PHP', icon: <FaPhp size={50} color="#777BB4" /> },
  ];

  const technologies = [
    { name: 'HTML5', icon: <FaHtml5 size={50} color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
    { name: 'Redux', icon: <SiRedux size={50} color="#764ABC" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={50} color="#000000" /> },
    { name: 'GSAP', icon: <SiGreensock size={50} color="#88CE02" /> }, 
    { name: 'Node.js', icon: <FaNodeJs size={50} color="#339933" /> },
    { name: 'Laravel', icon: <FaLaravel size={50} color="#FF2D20" /> },
    { name: 'AI Integration', icon: <SiOpenai size={50} color="#412991" /> },
    { name: 'Express.js', icon: <SiExpress size={50} color="#000000" /> },
    { name: 'RESTful API', icon: <CgWebsite size={50} color="#007ACC" /> },
    { name: 'MongoDB', icon: <SiMongodb size={50} color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql size={50} color="#4479A1" /> },
    { name: 'Bootstrap', icon: <FaBootstrap size={50} color="#7952B3" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} color="#06B6D4" /> },
    { name: 'EJS', icon: <AiOutlineCode size={50} color="#A91E50" /> },
  ];

  const tools = [
    { name: 'Git', icon: <FaGitAlt size={50} color="#F05032" /> },
    { name: 'GitHub', icon: <SiGithub size={50} color="#181717" /> },
    { name: 'VS Code', icon: <VscCode size={50} color="#007ACC" /> },
    { name: 'Windsurf', icon: <FaLaptopCode size={50} color="#4D4D4D" /> },
    { name: 'Cursor', icon: <TbHexagonLetterC size={50} color="#2F3A4B" /> },
    { name: 'Postman', icon: <SiPostman size={50} color="#FF6C37" /> },
    { name: 'npm', icon: <FaNpm size={50} color="#CB3837" /> },
    { name: 'Vercel', icon: <IoLogoVercel size={50} color="#005080" /> },
    { name: 'Render', icon: <SiRender size={50} color="#000000" /> },
    { name: 'Cloud Hosting', icon: <FaCloud size={50} color="#0084C6" /> },
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="section-content">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title">My Tech Stack & Tools</h2>

          <h3 className="subsection-title">Programming Languages</h3>
          <div className="skills-grid">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>

          <h3 className="subsection-title">Technologies</h3>
          <div className="skills-grid">
            {technologies.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon}
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          
          <h3 className="subsection-title">Developer Tools</h3>
          <div className="skills-grid">
            {tools.map((tool, index) => (
              <div key={index} className="skill-item">
                {tool.icon}
                <p>{tool.name}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;