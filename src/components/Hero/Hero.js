import React from "react";
import "./Hero.scss";
import { GrMail } from "react-icons/gr";

const Hero = () => {
    const heroText = {
        name: "Hi, I'm Ilham",
        shortStory:
            "As a frontend website developer, I specialize in creating visually appealing and user-friendly websites. I am also interested in incorporating visual computing techniques to enhance the look and feel of my websites.",
    };
    return (
        <header className="hero">
            <div className="welcome-message">
                <h1 className="name">{heroText.name}</h1>
                <p className="short-story">{heroText.shortStory}</p>
            </div>
            <div className="social-media">
                <a
                    className="social-icon"
                    href="https://www.linkedin.com/in/ilhammuhammad-735b2b187"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin" />
                </a>
                <a
                    className="social-icon"
                    href="https://github.com/ilhamuh97"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github" />
                </a>
                <a className="social-icon" href="mailto:ilhamuh97@gmail.com">
                    <GrMail />
                </a>
            </div>
        </header>
    );
};

export default Hero;
