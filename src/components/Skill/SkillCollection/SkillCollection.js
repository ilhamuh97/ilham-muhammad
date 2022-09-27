import React from 'react';
import './SkillCollection.scss';
import SkillCard from "./SkillCard/SkillCard";

const SkillCollection = ({ list }) => {

    const skillListWrapper = list.map((skill, i) => {
        return (
            <SkillCard key={skill.id} className="card" title={skill.title} />
        )
    })

    return (
        <div className="skill-collection">
            <div className="card-deck">
                {
                    skillListWrapper
                }
            </div>
        </div>
    );
};

export default SkillCollection;