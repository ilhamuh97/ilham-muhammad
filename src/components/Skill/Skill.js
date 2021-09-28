import React, {useState} from 'react';
import SkillCollection from "./SkillCollection/SkillCollection";
import './Skill.scss';

const Skill = () => {
    const [selectedValue, setSelectedValue] = useState(0)
    const skillList = [
        {
            id: '1',
            type:'Professional Skills',
            list: [
                {
                    id: '11',
                    title: 'Story Telling',
                },
                {
                    id: '12',
                    title: 'Public Speaking',
                },
                {
                    id: '13',
                    title: 'Content Writing',
                },
                {
                    id: '14',
                    title: 'Website Designing',
                },
                {
                    id: '15',
                    title: 'Poster Designing',
                },
                {
                    id: '16',
                    title: 'Project Managing',
                },
                {
                    id: '17',
                    title: 'Coffee Brewing',
                },
            ]
        },
        {
            id: '2',
            type:'Software Skills',
            list: [
                {
                    id: '21',
                    title: 'Adobe Photoshop',
                },
                {
                    id: '22',
                    title: 'Microsoft Word',
                },
                {
                    id: '23',
                    title: 'Power Point',
                }
            ]
        }
    ];
    const options = skillList.map((list,i) => {
        return(
            <option key={list.id} value={i}>
                {list.type}
            </option>
        )
    })

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div id="skill" className="skill">
            <div className="container">
                <h1 className="title">
                    Skills
                </h1>
                <div className="select-wrapper">
                    <select
                        className="skill-selector"
                        onChange={(e) => handleChange(e)}
                    >
                        {
                            options
                        }
                    </select>
                </div>
                <SkillCollection
                        list={skillList[selectedValue].list}
                    />
                </div>
        </div>
    );
};

export default Skill;