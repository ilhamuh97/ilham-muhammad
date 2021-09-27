import React, {useState} from 'react';
import SkillCard from "./SkillCard/SkillCard";
import './Skill.scss';

const Skill = () => {
    const [show, setShow] = useState(false);
    const openMoreSkill = () => {
        setShow(!show);
        console.log(show);
    }

    const skillList = [
        {
            id: '1',
            title: 'Story Telling',
        },
        {
            id: '2',
            title: 'Public Speaking',
        },
        {
            id: '3',
            title: 'Content Writing',
        },
        {
            id: '4',
            title: 'Website Designing',
        },
        {
            id: '5',
            title: 'Poster Designing',
        },
        {
            id: '6',
            title: 'Project Managing',
        },
        {
            id: '8',
            title: 'Coffee Brewing',
        },
    ];

    const skillListWrapper = skillList.map((skill, i) => {
        const limit = 5;
        if(!show){
            if(i+1<limit){
                return(
                    <SkillCard className="card" title={skill.title}/>
                )
            }
        }else{
            return(
                <SkillCard className="card" title={skill.title}/>
            )
        }

    })

    return (
        <div id="skill" className="skill">
            <div className="container">
                <h1 className="title">
                    <span>S</span>kills
                </h1>
                <div className="skill-collection">
                    <h2 className="skill-title">
                        Key Skill
                    </h2>
                    <div className="card-deck">
                        {
                            skillListWrapper
                        }
                    </div>
                    <div className="button-wrapper">
                        <div className={`show-more-skill-btn ${show?'show':'not-show'}`} onClick={() => openMoreSkill()}>
                            {show?'Show Less':'Show More'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;