import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from  "react-icons/fa"
import me2dot0 from "../assets/me2dot0.jpg"  

const Navbar = () => {

const [click, setClick] = useState(false);
const handleClick = () => setClick(!click)

const[color, setColor] = useState(false)
const  changeColor = () => {
    window.scrollY >100 ? setColor(true):setColor(false)
}
window.addEventListener('scroll',changeColor)
  return ( 
  <div className={color ? "header header-bg" :  "header"}>
    <Link to="/">
      <img src={me2dot0} className="me2" alt="me" />
      <h1>Portfolio</h1>
    </Link> 
    <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/project">Project</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
    <div className="hamburger" onClick={handleClick}>
      {
        click ? (
         <FaTimes size={20} style={{color: "#fff"}
    }/>
        ):
        (
           <FaBars size={20} style={{color: "#fff"}
    }/>

          
        )
      }
       
    
    </div>
  </div>
  );
};

export default Navbar;
