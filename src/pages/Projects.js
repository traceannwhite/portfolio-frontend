import React from "react";
import ProjectsBody from "../components/ProjectsBody/ProjectsBody";
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div>
      Projects Page
      <ProjectsBody>
        <ProjectCard />
      </ProjectsBody>
    </div>
  );
};

export default Projects;
