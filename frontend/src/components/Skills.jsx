import React from "react";
import html from "../assets/LogoHTML.png";
import css from "../assets/LogoCSS3.png";
import javascript from "../assets/LogoJavascript.png";
import canva from "../assets/LogoCanva.png";
import expressnode from "../assets/LogoExpressNode.png";
import figma from "../assets/LogoFigma.png";
import git from "../assets/LogoGit.webp";
import github from "../assets/LogoGithub.png";
import marvel from "../assets/LogoMarvel.png";
import react from "../assets/LogoReact.png";
import tailwind from "../assets/LogoTailwind.png";
import "./skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-title">Mes compétences</h1>
      <div className="skill-card">
        <div className="card">
          <img src={html} alt="Logo HTML" className="skill-img" />
          <h1 className="skill-card-title">HTML5</h1>
        </div>
        <div className="card">
          <img src={css} alt="Logo CSS" className="skill-img" />
          <h1 className="skill-card-title">CSS3</h1>
        </div>
        <div className="card">
          <img src={tailwind} alt="Logo tailwind" className="skill-img" />
          <h1 className="skill-card-title">Tailwindcss</h1>
        </div>
        <div className="card">
          <img src={javascript} alt="Logo Javascript" className="skill-img" />
          <h1 className="skill-card-title">Javascript</h1>
        </div>
        <div className="card">
          <img src={react} alt="Logo React" className="skill-img" />
          <h1 className="skill-card-title">React.js</h1>
        </div>
        <div className="card">
          <img
            src={expressnode}
            alt="Logo Express et Node"
            className="skill-img"
          />
          <h1 className="skill-card-title">Express.js et Node.js</h1>
        </div>
        <div className="card">
          <img src={git} alt="Logo git" className="skill-img" />
          <h1 className="skill-card-title">Git</h1>
        </div>
        <div className="card">
          <img src={github} alt="Logo Github" className="skill-img" />
          <h1 className="skill-card-title">Github</h1>
        </div>
        <div className="card">
          <img src={canva} alt="Logo Canva" className="skill-img" />
          <h1 className="skill-card-title">Canva</h1>
        </div>
        <div className="card">
          <img src={figma} alt="Logo Figma" className="skill-img" />
          <h1 className="skill-card-title">Figma</h1>
        </div>
        <div className="card">
          <img src={marvel} alt="Logo Marvel" className="skill-img" />
          <h1 className="skill-card-title">Marvel app</h1>
        </div>
      </div>
    </div>
  );
}
export default Skills;
