import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <header className="hero">
            <div className="welcome-message">
                <div className="name">
                    Hi, I'm Anon
                </div>
                <div className="short-story">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna ligula, vulputate gravida placerat ac, pharetra quis mauris. Nam efficitur pellentesque euismod. Nunc sodales turpis elit, non consectetur velit elementum nec.
                </div>
            </div>
            <div className="social-media">
                <a className="social-icon" href="https://www.instagram.com/">
                    <i className="fab fa-instagram"/>
                </a>
                <a className="social-icon" href="https://www.facebook.com/">
                    <i className="fab fa-facebook"/>
                </a>
                <a className="social-icon" href="https://twitter.com/">
                    <i className="fab fa-twitter"/>
                </a>
            </div>
        </header>
    );
};

export default Hero;