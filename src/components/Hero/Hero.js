import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container">
                <div className="welcome-message">
                    <div className="name">
                        Hi, I'm Anon
                    </div>
                    <div className="short-story">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna ligula, vulputate gravida placerat ac, pharetra quis mauris. Nam efficitur pellentesque euismod. Nunc sodales turpis elit, non consectetur velit elementum nec.
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;