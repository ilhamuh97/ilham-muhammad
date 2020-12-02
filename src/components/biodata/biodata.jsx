import React from 'react';

import './biodata.scss';

//npm install --save particles-bg
const Biodata = () => {
    return (
        <div id="biodata" className="section biodata">
            <div className="about-me-container">
                <div className="motto">
                    <span>" Be meaningful for others</span>
                    <span>If you can't, then try to be! "</span>
                </div>
                <div className="tickets">
                    <div className="ticket">
                        <h2>Activities</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <p>consectetur adipiscing elit.</p>
                    </div>
                    <div className="ticket">
                        <h2>Skills</h2>
                        <p>Praesent non enim convallis</p>
                        <p>vitae sagittis urna </p>
                    </div>
                    
                </div>
                <div className="tickets">
                    <div className="ticket">
                        <h2>Projects</h2>
                        <p>pharetra quis</p>
                        <p>Nullam cursus ornare nulla</p>
                    </div>
                    <div className="ticket">
                        <h2>Others</h2>
                        <p>In in est id nisl vulputate</p>
                        <p>Phasellus sapien massa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biodata;