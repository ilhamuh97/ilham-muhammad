import React from 'react';
import Ticket from '../../UI/ticket/ticket';
import ticketValues from '../../assets/ticketValues'

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
                <div id="skills" className="skills">
                    <h1 className="super-title">Professional Skills</h1>
                    <div className="tickets">
                        <Ticket
                            key={ticketValues[0].key}
                            title={ticketValues[0].title}
                            substances={ticketValues[0].substances} />
                        <Ticket
                            key={ticketValues[1].key}
                            title={ticketValues[1].title}
                            substances={ticketValues[1].substances} />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Biodata;