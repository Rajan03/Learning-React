import React from "react";
import "./css/ProjectCard.css";
import Sidebar from "./Sidebar";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  return (
    <>
      <Sidebar />
      <div className="projects">
        <ProjectCard name="GitHub Account Finder" number="01" progress="87%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
        <ProjectCard name="The Pig Game" number="02" progress="100%" />
      </div>
    </>
  );
}
export default Portfolio;
