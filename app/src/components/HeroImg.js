import React from "react";
import "./HeroImgStyle.css";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="mask-back-image">
          <img src="/workfh.jpeg" className="image-back" alt="back"></img>
        </div>
      </div>
      <div className="Align-all-mid-in-img">
        <h1 className="Intro-Name"> I'm Surya </h1>
        <p className="about-in-short">
          Passionate developer with expertise in AI, ML, and analytics. Let's
          innovate together!
        </p>
        <div className="contollers-home">
          <a href="/project" className="btn-projects">
            Project
          </a>
          <a href="/contact" className="btn-contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
