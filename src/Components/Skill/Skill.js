import React from "react";
import SkillBox from "./SkillBox.js";

function Skill() {

    const skills = [
        {
            title: "HTML",
            content: ""
        },
        {
            title: "CSS",
            content: ""
        },
        {
            title: "JavaScript",
            content: ""
        },
        {
            title: "React.js",
            content: ""
        },
        {
            title: "Java",
            content: ""
        },
        {
            title: "jQuery",
            content: ""
        },
        {
            title: "Bootstrap",
            content: ""
        },
        {
            title: "Laravel",
            content: ""
        }
    ]

    const skillList = skills.map((skill) => {
        return <SkillBox title={skill.title} content={skill.content} />
    });

    return (
        <div id="skill-section" className="skill-section">
            <div className="skill-intro">
                <h1>My Skills</h1>
            </div>
            <div className="skill-subsection">
                {skillList}
            </div>
        </div>  
    );
}

export default Skill;