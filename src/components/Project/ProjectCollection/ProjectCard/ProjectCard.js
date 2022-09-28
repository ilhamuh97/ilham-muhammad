import React from 'react';
import './ProjectCard.scss';

const ProjectCard = ({ project, className }) => {
    console.log(project.techStack);
    const techStack = project.techStack.map((item) => (
        <div className="project-tech">
            {item}
        </div>
    ));

    const source = project.source.map((item, i) => (
        <div className="source">
            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.text}</a>
            <span>{i === project.source.length - 1 ? "" : ","}</span>
        </div>
    ));

    return (
        <div className={`project-card ${className}`}>
            <div className="project-title">
                {project.title}
            </div>
            <div className="project-year">
                {project.year}
            </div>
            <div className="project-description">
                {project.description}
            </div>
            <div className="project-sources">
                <span>
                    See live on:
                </span>
                {source}
            </div>
            <div className="project-description">
                Type of project: {project.type}
            </div>
            <div className="project-tech-stacks">
                {techStack}
            </div>
        </div>
    );
};

export default ProjectCard;