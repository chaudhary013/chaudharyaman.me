import "./WorkCardStyles.css";

import WorkCard from "./WorkCard";
// import WorkCradData from "./WorkCradData";
import ProjectCardData from "./WorkCradData";
import React from "react";
// import pro1 from "../assets/project1.png";
// import { NavLink } from "react-router-dom";

const Work = (props) => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {ProjectCardData.map((val, ind) => {
        return(
          <WorkCard 
          key={ind}
          imgsrc={val.imgsrc}
          title={val.title}
          desc={val.desc}
          view={val.view}
          />
        )
      })}
    </div>
  </div>;
};

export default Work;
