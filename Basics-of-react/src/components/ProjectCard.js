import React from "react";
import "./css/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <>
      <div className="card-out">
        <div className="card">
          <span>
            <h1>{props.number}</h1>
          </span>
          <div className="content">
            <img src="https://picsum.photos/200" alt="profile" />
            <h4>{props.name}</h4>
            <div className="progress">
              <h4>Progress: {props.progress}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
