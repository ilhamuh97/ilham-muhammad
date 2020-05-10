import React from 'react';

import './biodata.scss';
import Wave from '../../assets/bioWave.svg'
import ParticlesBg from 'particles-bg'

//npm install --save particles-bg
const Biodata = () => {
    return (
        <div id="section2" className="biodata">
            <ParticlesBg className="particle" num={30} type="cobweb" bg={true} />
            <div className="about-me-container">
                <h1 className="name">Ilham Muhammad</h1>
                <div className="image-holder">
                    <div className="background-image"></div>
                </div>
                <h2 className="title">My biodata and current states of me:</h2>
                <div className="tickets">
                    <div className="ticket">
                        <h2>Born</h2>
                        <p>On 6th June 1997</p>
                        <p>In Jakarta, Indonesia</p>
                    </div>
                    <div className="ticket">
                        <h2>Live</h2>
                        <p>In Rhinstr.51</p>
                        <p>Berlin, Germany</p>
                    </div>
                    <div className="ticket">
                        <h2>Contact</h2>
                        <p>Phone: +49 179 2851 483</p>
                        <p>Email: ilhamuh97@gmail.com</p>
                    </div>
                </div>
                <div className="tickets">
                    <div className="ticket">
                        <h2>Study</h2>
                        <p>Univerity of Applied Sciences</p>
                        <p>In Berlin, Germany</p>
                    </div>
                    <div className="ticket">
                        <h2>Motto</h2>
                        <p>Be meaningful for others</p>
                        <p>When you can't, then try to be</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biodata;