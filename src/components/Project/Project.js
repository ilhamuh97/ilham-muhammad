import React from 'react';
import ProjectCollection from "./ProjectCollection/ProjectCollection";
import { projectList } from '../../assets/data/projects';
import './Project.scss';

const Project = () => {

    return (
        <div id="project" className="project">
            <div className="container">
                <h1 className="title">
                    My Projects
                </h1>
                <ProjectCollection
                    list={projectList.list}
                />
            </div>
        </div>
    );
};

export default Project;