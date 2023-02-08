import "./ProjectCardStyle.css";
// import projectimg from "../assets/pro.jpg";

import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (

        <div className="prject-card-container">
            <img src={props.projectimg} alt="Testing" />
            <h2 className="project-head">{props.title}</h2>
            <h5 className="project-content">{props.text}</h5>
            <div className="project-btn">
                <NavLink to={props.view} className="btn"> View </NavLink>
                <NavLink to={props.view} className="btn"> Source </NavLink>
            </div>
        </div>

  )
}

export default ProjectCard
