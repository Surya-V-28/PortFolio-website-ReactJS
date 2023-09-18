import React from "react";
import "./HeroImgStyle.css";
import Typedauto from "./Typedauto";
import SocialMedia from "./SocialMedia";
import GlowButton from "./GlowButton";
const HeroImg = () => {
  return (
   
      <div className="Align-all-mid-in-img">
         <Typedauto></Typedauto>
         <div className="Description-about-me">
          An Indian Based Software Developer with also passion to code and Learn !!
         </div>
         <div>
          <GlowButton/>
         </div>
         <div className="adjust-scocial-icons">
          <SocialMedia></SocialMedia>
          </div>
  
      </div>
  
  );
};

export default HeroImg;
