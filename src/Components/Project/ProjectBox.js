import React from "react";

function ProjectBox(props) {
    return (
        <div className="w-3/4 flex items-center justify-between text-center bg-red-800 p-8 gap-8 shadow-xl rounded-xl">
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
                <div className="text-sm font-light px-8 py-2 bg-red-800 text-white hover:bg-white hover:text-red-800 transition duration-500 ease-in-out rounded-xl border-2 border-white">
                    <a href={props.href} target="_blank" rel="noreferrer">Go to repository</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectBox;