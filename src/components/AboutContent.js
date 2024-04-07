import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import meingoggles from  "../assets/meingoggles.jpg"


import React from "react";

const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <img src={meingoggles} className="me" alt="it's me" />
      <h1>Who Am I</h1>
      <p>I am a react dveloper . I create responsive secure websites for my ckients</p>
      <Link to="/contact">
        <button className="btn">Contact Me</button>
      </Link>
    </div>
    <div className="right">
      <div  className="img-container">
        <div className="img-stack top">
          <img src={React1} className="img" alt="true" />
        </div>
          <div className="img-stack bottom">
          <img src={React2} className="img" alt="true" />
        </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
