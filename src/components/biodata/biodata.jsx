import React from 'react';
import Ticket from '../../UI/ticket/ticket';

import './biodata.scss';

//npm install --save particles-bg
const Biodata = () => {
    const ticketValues = [
        {
            key: 'prog-language', title: 'Programming Language', substances: [
                { skillTitle: 'HTML & CSS', rating: 85 },
                { skillTitle: 'Javascript', rating: 83 },
                { skillTitle: 'PHP', rating: 65 },
                { skillTitle: 'Java', rating: 80 },
            ]
        },
        {
            key: 'website', title: 'Web Development Frameworks', substances: [
                { skillTitle: 'ReactJS', rating: 85 },
                { skillTitle: 'Bootstrap', rating: 78 },
                { skillTitle: 'CakePHP', rating: 60 },
            ]
        }
    ]
    return (
        <div id="biodata" className="section biodata">
            <div className="about-me-container">
                <div className="motto">
                    <span>" Be meaningful for others</span>
                    <span>If you can't, then try to be! "</span>
                </div>
                <div className="skills">
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