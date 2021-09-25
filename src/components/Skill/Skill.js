import React from 'react';
import './Skill.scss';

const Skill = () => {
    return (
        <div className="skill">
            <div className="container">
                <h1 className="title">
                    <span>S</span>kills
                </h1>
                <div className="skill-collection">
                    <h2 className="skill-title">
                        Key Skill
                    </h2>
                    <div className="card-deck">
                        <div className="card">
                            <div className="skill-name">
                                Story Telling
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Public Speaking
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Content Writing
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skill-collection">
                    <h2 className="skill-title">
                        Software
                    </h2>
                    <div className="card-deck">
                        <div className="card">
                            <div className="skill-name">
                                Adobe Photoshop
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Microsoft Office
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Visual Studio Code
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Adobe Illustrator
                            </div>
                        </div>
                        <div className="card">
                            <div className="skill-name">
                                Canva
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;