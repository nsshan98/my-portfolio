import "./HeroImgStyle.css";

import React from "react";

import { Link } from "react-router-dom";
import IntroImg from "../assets/intro.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hello There</p>
        <h1>Nothing To Do</h1>
      
      <div>
        <Link to="/project" className="btn2">Project</Link>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default HeroImg;
