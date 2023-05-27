import React from "react";
import "./FooterStyle.css";
import { AiFillHome ,AiTwotonePhone,AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaKaggle } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-container">
                <div className="Footer-left">
                    <div className="Footer-left-Location">
                        <AiFillHome
                            style={{ fontSize: "30px", color: "white", margin: "10px" }}
                        ></AiFillHome>
                        <p > Tiruvannamali ,Tamil Nadu</p>
                    </div>
                    <div className="Footer-left-phone">
                        <AiTwotonePhone
                            style={{ fontSize: "30px", color: "white", margin: "10px" }}
                        ></AiTwotonePhone>
                        <p style={{marginLeft:'50px',marginTop:"-40px"}}> +916379521173</p>
                    </div>
                    <div className="Footer-left-email">
                        <MdEmail
                            style={{ fontSize: "30px", color: "white", margin: "10px" }}
                        >
                        </MdEmail>
                       <a href="mailto:surya.woot.231@gmail.com" style={{color:'white'}}> <p style={{marginLeft:'50px',marginTop:"-40px"}} > surya.woot.231@gmail.com</p></a>
                    </div>
                </div>
                <div className="Footer-Right">
                    <div className="Footer-Right-Container">
                        <h4> About me</h4>
                        <p>Passionate technologist, hungry learner, experienced in app/web development and ML & AI algorithms. Loves AI projects. Tech is my passion!</p>
                        <div className="Footer-Right-Social-Icons">
                            <a href="https://www.linkedin.com/in/surya-v-835b94237/" target="blank">
                            <AiFillLinkedin style={{fontSize:'35px', color:'white',paddingLeft:'10px'}}></AiFillLinkedin>
                            </a>
                            <a href="https://github.com/Surya-V-28" target="blank">
                            <AiFillGithub style={{fontSize:'35px', color:'white',paddingLeft:'10px'}}></AiFillGithub>
                            </a>
                            <a href="https://www.kaggle.com/" target="blank">
                            <FaKaggle style={{fontSize:'25px', color:'white',paddingLeft:'10px',marginBottom:'5px'}}></FaKaggle>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
