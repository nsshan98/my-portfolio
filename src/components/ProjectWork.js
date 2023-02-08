import ProjectCard from "./ProjectCard";
import "./ProjectCardStyle.css";
import ProjectWorkCardData from "./ProjectWorkCardData";

import React from 'react';

const ProjectWork = () => {
  return (
        <div className="project-card">
          
          {ProjectWorkCardData.map((val, ind)=>{
            return (
              <ProjectCard
                key={ind}
                imgscr={val.projectimg}
                title={val.title}
                text={val.text}
                view={val.view}
              />
            )
          })}
        </div>
  )
}

export default ProjectWork