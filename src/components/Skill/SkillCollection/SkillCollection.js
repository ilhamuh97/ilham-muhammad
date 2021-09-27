import React, {useState} from 'react';
import './SkillCollection.scss';
import SkillCard from "../SkillCard/SkillCard";

const SkillCollection = ({list}) => {
    const [show, setShow] = useState(true);
    const limit = 5;

    const openMoreSkill = () => {
        setShow(!show);
        console.log(show);
    }
    const skillListWrapper = list.map((skill, i) => {
        let result
        if(!show){
            if(i+1<limit){
                result = <SkillCard key={skill.id} className="card" title={skill.title}/>
            }
        }else{
            result = <SkillCard key={skill.id} className="card" title={skill.title}/>
        }
        return(
            result
        )
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