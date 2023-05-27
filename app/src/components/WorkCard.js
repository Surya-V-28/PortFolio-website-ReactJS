import React from "react";
import "./WorkCardStyle.css";
import EachCard from "./EachCard";
const WorkCard = () => {
  return (
    <div className="work-card-page-with-title">
    <h1> Projects </h1>
    <div className="Work-Card-Container">
      <EachCard
        heading=" Instagram Clone"
        description="A solo project Instagram UI clone done completely fromscratch by myself.Uses FirebaseAuth for authentication and Firestore as theDatabase."
        imgs="/instabacj.png"
        linkveiw ="https://drive.google.com/file/d/1I_PSk7sd9B1q-QSd5OUsfCn4uFUzN619/view?usp=share_link" 
        sourceCode="https://github.com/Surya-V-28/Flutter-clone-insta"
      ></EachCard>
      <EachCard
        heading="Disney+ UI/UX"
        description="Disney+ UI created using Styled Components and ReactJS uses Transition, transforms, Responsive Sliders, With Google Auth, and Storages using Redux for faster access"
        imgs="/Disney+Hotstar.jpg"
        linkveiw ="https://drive.google.com/file/d/1OFxJz34S0mE3bq1X9gPILoiM2FBqQmLY/view?usp=share_link" 
        sourceCode="https://github.com/Surya-V-28/DisneyPlus-UI-UX"
      ></EachCard>
      <EachCard
        heading="Blog Website"
        description=" Functions include User Registration and Login,User Profiles,Blog Post Creation,Blog Post display of others,Comments,Likes ,Search and Filtering,Mobile Responsiveness"
        imgs="/imagesblogapp.jpeg"
        linkveiw ="https://github.com/Surya-V-28/notes-web" 
        sourceCode="https://github.com/Surya-V-28/notes-web"
      ></EachCard>
      <EachCard
        heading="Protfolio."
        description="Its Created using the React JS and has the functionality of sending Message and Good responsive for mobile application also"
        imgs="/projectback.jpeg"
        linkveiw ="https://github.com/Surya-V-28/PortFolio-website-ReactJS" 
        sourceCode="https://github.com/Surya-V-28/PortFolio-website-ReactJS"
      ></EachCard>
    </div>
  </div>
  );

};

export default WorkCard;
