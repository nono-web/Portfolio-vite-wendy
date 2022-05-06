import React from "react";
import "./intro.css";
import photocv from "../assets/photocv.png";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-hello">Bienvenue !</h2>
          <h1 className="intro-name">
            Je suis <span>Wendy Baqué</span>
          </h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">
                Développeuse web full stack
              </div>
              <div className="intro-title-item">Javascript</div>
              <div className="intro-title-item">React.js</div>
              <div className="intro-title-item">Express.js | Node.js </div>
              <div className="intro-title-item">Auteure de romans</div>
            </div>
          </div>
          <div className="intro-description">
            <p>
              Après un bilan de compétences réalisé en full remote, je suis en
              reconversion dans le domaine du développement web et web mobile.
              💻{" "}
            </p>
            <p>
              Après une formation intensive et passionnate à la Wild Code
              School, je souhaite passer mon titre RNCP et m&apos;épanouir dans
              un travail porteur d&apos;avenir et de sens.
            </p>
          </div>
          <div className="intro-social-medias">
            <div className="intro-linkedin">
              <img
                src={linkedin}
                alt="linkedin"
                className="intro-linkedin-img"
              />
              <a
                href="https://www.linkedin.com/in/wendy-baqu%C3%A9/"
                target="_blanck"
              >
                LinkedIn
              </a>
            </div>
            <div className="intro-github">
              <img src={github} alt="github" className="intro-github-img" />
              <a href="https://github.com/wendybaque" target="_blanck">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-bg" />
        <img src={photocv} alt="Wendy Baqué" className="intro-img" />
        <div className="intro-right-wrapper" />
      </div>
    </div>
  );
}
export default Intro;
