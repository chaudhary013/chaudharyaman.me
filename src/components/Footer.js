import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone, FaTimes, FaTwitter } from  "react-icons/fa"


const Footer = () => {
  return ( 
  <div className="footer">
    <div className="footer-container">
       <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
          <div>
            <p>Varanasi, LalPur</p>
            <p>UttarPradesh</p>
          </div>
        </div>
        <div className="phone">
           <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
            6393026507
            </h4>
        </div>
        <div className="email">
           <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem"}}/>
            chaudharyaman0013@gmail.com
            </h4>
        </div>
       </div>
        <div className="right">
          <h4>Something about ME</h4>
          <p>This is Aman Kumar Chaudhary. A fullstack devloper , </p>
          <div className="social">
    <a href="https://www.facebook.com">
        <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
    </a>
    <a href="https://www.instagram.com">
        <FaInstagram size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
    </a>
    <a href="https://www.twitter.com">
        <FaTwitter size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
    </a>
    <a href="https://www.linkedin.com">
        <FaLinkedinIn size={20} style={{ color: "#fff", marginRight: "1rem"}}/>
    </a>
</div>
        </div>

    </div>
  </div>
  )
};

export default Footer;
