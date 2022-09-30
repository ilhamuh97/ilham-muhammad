import React from "react";
import { AiFillGithub } from "react-icons/ai";

import "./AboutWebsite.scss";

const AboutWebsite = () => {
    return (
        <div className="about-website">
            <div className="container">
                <a
                    className="about-website-link"
                    href="https://github.com/ilhamuh97/cv-template"
                    target="_blank"
                    rel="noopener noreferrer">
                    <div className="text">
                        <span>This website was created using React.</span>
                        <span>
                            See it on Github <AiFillGithub />.
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AboutWebsite;
