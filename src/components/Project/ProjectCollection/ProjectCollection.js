import React from "react";
import "./ProjectCollection.scss";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectCollection = ({ list }) => {
    const projectListWrapper = list.map((project, i) => {
        return <ProjectCard key={i} className="card" project={project} />;
    });

    return (
        <div className="project-collection">
            <div className="card-deck">{projectListWrapper}</div>
        </div>
    );
};

export default ProjectCollection;
