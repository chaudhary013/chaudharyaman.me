import "./HeroImgStyles.css";
import IntroImg from  "../assets/intro-bg.jpg"
import React from "react";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return <div className="hero">
         <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
      <h1>Hi, I'm <span>Aman Kumar Chaudhary</span></h1>
      <p> A full stack developer </p>
      <br/>
      <br/>


      
      <Link to="/project" className="btn">Projects</Link>
            
      <Link to="/contact" className="btn btn-light">Contacts</Link>
     
    
    </div>
  </div>;
};

export default HeroImg;
