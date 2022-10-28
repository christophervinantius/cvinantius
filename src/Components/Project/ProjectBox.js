import React from "react";

function ProjectBox(props) {
    return (
        <div className="project-box">
            <div className="project-image">
                <img src={props.image} alt={props.alt} />
            </div>
            <div className="project-box-title">
                <h1>{props.title}</h1>
            </div>
            <div className="project-box-content">
                <p>{props.content}</p>
            </div>
            <div className="project-box-link">
                <a href={props.href} target="_blank" rel="noreferrer">Go to repository</a>
            </div>
        </div>
    );
}

export default ProjectBox;