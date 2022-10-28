import React from "react";

function SkillBox(props) {
    return (
        <div className="skill-box">
            <div className="skill-box-title">
                <h1>{props.title}</h1>
            </div>
            <div className="skill-box-content">
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default SkillBox;