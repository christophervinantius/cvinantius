import React from "react";

function ProjectBox(props) {
    return (
        <div className="w-3/4 flex items-center justify-between text-center bg-red p-8 gap-8 shadow-xl">
            <div className="w-1/2">
                <img className="border-4 border-white" src={props.image} alt={props.alt} />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-between gap-4">
                <div className="text-2xl font-bold text-white">
                    <h1>{props.title}</h1>
                </div>
                <div className="text-sm text-white">
                    <p>{props.content}</p>
                </div>
                <div className="text-sm w-1/4 font-light p-1 bg-red text-white rounded-full border-2 border-white">
                    <a href={props.href} target="_blank" rel="noreferrer">Go to repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectBox;