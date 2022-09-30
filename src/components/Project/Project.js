import React from "react";
import ProjectCollection from "./ProjectCollection/ProjectCollection";
import { projectList } from "../../assets/data/projects";
import "./Project.scss";

const Project = () => {
    return (
        <div id="project" className="project">
            <div className="container">
                <h2 className="title">My Projects</h2>
                <ProjectCollection list={projectList.list} />
            </div>
        </div>
    );
};

export default Project;
