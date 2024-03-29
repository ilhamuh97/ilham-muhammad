import React from "react";
import { MdWork } from "react-icons/md";
import "./Work.scss";

const Work = ({ item, i }) => {
    return (
        <div key={i} className="journey-item-work">
            <div className="icon-and-title">
                <MdWork />
                <h3 className="journey-item-title">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {item.title}
                    </a>
                </h3>
            </div>
            <span className="journey-item-year">
                {item.role} {item.typeOfJob}, {item.year}
            </span>
            <div>
                <p>{item.description.text}</p>
                <ul className="journey-desc-items">
                    {item.description.list.map((desc, descIdx) => (
                        <li key={descIdx} className="desc-item">
                            <span>{desc}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {item.projects ? (
                <div className="journey-projects">
                    <span>List of contributed projects:</span>
                    {item.projects?.map((project, projectIdx) => (
                        <div key={projectIdx} className="journey-project">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer">
                                {project.text}
                            </a>
                            <span>
                                {projectIdx === item.projects.length - 1
                                    ? ""
                                    : ", "}
                            </span>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default Work;
