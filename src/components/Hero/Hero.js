import React from 'react';
import './Hero.scss';

const Hero = () => {
    const heroText = {
        name: "Hi, I'm Ilham",
        shortStory: "I was born in Indonesia and currently live and study in Berlin. I have worked as a working student in a medium sized digital agency. I like to participate in creating an awesome website that is useful for others."
    }
    return (
        <header className="hero">
            <div className="welcome-message">
                <div className="name">
                    {heroText.name}
                </div>
                <div className="short-story">
                    {heroText.shortStory}
                </div>
            </div>
            <div className="social-media">
                <a className="social-icon" href="https://www.instagram.com/">
                    <i className="fab fa-instagram" />
                </a>
                <a className="social-icon" href="https://www.facebook.com/">
                    <i className="fab fa-facebook" />
                </a>
                <a className="social-icon" href="https://twitter.com/">
                    <i className="fab fa-twitter" />
                </a>
            </div>
        </header>
    );
};

export default Hero;