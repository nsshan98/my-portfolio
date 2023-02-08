import "./FooterSyle.css";

import React from 'react';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            
            <div className="location" >
                <FaHome size={20} style={{color:"#fff"}}/>
                <p>This is a demo address</p>
            </div>
            <div className="phone">
                <FaPhoneAlt size={20} style={{color:"#fff"}}/>
                <p>0123-456-789</p>
            </div>
            <div className="mail">
                <FaMailBulk size={20} style={{color:"#fff"}}/>
                <p>demo@email.com</p>
            </div>
        </div>
        <div className="right">
          <h3>About the Portfolio</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam voluptates adipisci, asperiores natus totam libero. Repudiandae voluptates magnam soluta animi ipsum ratione modi fugit laborum dicta est qui, impedit numquam?</p>
          <div className="social">
            <FaFacebook size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            <FaTwitter size={20} style={{color:"#fff", marginRight: "2rem"}}/>
            <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
          </div>

        </div>

      </div>
    </div>
  )
}

export default footer
