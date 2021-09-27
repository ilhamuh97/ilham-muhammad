import React from 'react';
import './SkillCard.scss';

const SkillCard = ({title, className}) => {
    return (
        <div className={`skill-card ${className}`}>
            <div className="skill-name">
                {title}
            </div>
        </div>
    );
};

export default SkillCard;