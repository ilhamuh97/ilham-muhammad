import React from 'react';
import SkillCollection from "./SkillCollection/SkillCollection";
import './Skill.scss';

const Skill = () => {
    const skillList =
    {
        id: '1',
        type: 'Programming Skills',
        list: [
            {
                id: '11',
                title: 'HTML',
            },
            {
                id: '12',
                title: 'CSS',
            },
            {
                id: '13',
                title: 'Javascript',
            },
            {
                id: '14',
                title: 'React',
            },
            {
                id: '15',
                title: 'Next.js',
            },
            {
                id: '16',
                title: 'Vue.js',
            },
            {
                id: '17',
                title: 'Bootstrap',
            },
            {
                id: '18',
                title: 'Tailwind',
            },
            {
                id: '19',
                title: 'Material UI',
            },
        ]
    };

    return (
        <div id="skill" className="skill">
            <div className="container">
                <h1 className="title">
                    Skills
                </h1>
                <SkillCollection
                    list={skillList.list}
                />
            </div>
        </div>
    );
};

export default Skill;