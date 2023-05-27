import React from "react";
import "./HeroImgStyle.css";
import { NavLink } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <div className="mask-back-image">
          <img src="/workfh.jpeg" className="image-back" alt="back"></img>
        </div>
      </div>
      <div className="Align-all-mid-in-img">
        <h1 className="Intro-Name"> I'm Surya. </h1>
        <p className="about-in-short">
          Passionate developer with expertise in AI, ML, and analytics. Let's
          innovate together
          <a
            href="https://drive.google.com/file/d/1_ZegNL2uHS1Q-bCdYJqB2dGCChCaiNVO/view?usp=share_link"
            target="blank"
            style={{color: "blueviolet", textDecorationLine: "underline" }}
          >
            {" "}
            resume
          </a>
        </p>
        <div className="contollers-home">
          <NavLink to="/project" className="btn-projects">
            Project
          </NavLink>
          <NavLink to="/contact" className="btn-contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
