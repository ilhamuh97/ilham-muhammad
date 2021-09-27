import React, {useState} from 'react';
import './SkillCollection.scss';
import SkillCard from "../SkillCard/SkillCard";

const SkillCollection = ({list}) => {
    const [show, setShow] = useState(false);
    const limit = 5;

    const openMoreSkill = () => {
        setShow(!show);
        console.log(show);
    }
    const skillListWrapper = list.map((skill, i) => {
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
        <div className="skill-collection">
            <div className="card-deck">
                {
                    skillListWrapper
                }
            </div>
            {
                list.length >3 ? (
                    <div className="button-wrapper">
                        <div className={`show-more-skill-btn ${show?'show':'not-show'}`} onClick={() => openMoreSkill()}>
                            {show?'Show Less':'Show More'}
                        </div>
                    </div>
                ):''
            }
        </div>
    );
};

export default SkillCollection;