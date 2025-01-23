import React from "react";

function ProjectBox(props) {
    return (
        <div className="w-4/5 h-full flex flex-col md:flex-row items-center justify-between text-center bg-red-800 p-8 gap-4 md:gap-8 shadow-xl rounded-xl">
            <div className="w-full md:w-2/5">
                <img className="border-3 border-white rounded-xl" src={props.image} alt={props.alt} />
            </div>
            <div className="w-full md:w-3/5 flex flex-col items-center justify-between gap-4">
                <div className="text-lg md:text-2xl font-bold text-white">
                    <h1>{props.title}</h1>
                </div>
                <div className="text-sm md:text-md text-white">
                    <p>{props.content}</p>
                </div>
                {props.hrefDemo && (
                    <a className="text-sm md:text-md font-light px-8 py-2 bg-red-800 text-white hover:bg-white hover:text-red-800 transition duration-500 ease-in-out rounded-xl border-2 border-white" href={props.hrefDemo} target="_blank" rel="noreferrer">Go to live demo</a>
                )}
                <a className="text-sm md:text-md font-light px-8 py-2 bg-red-800 text-white hover:bg-white hover:text-red-800 transition duration-500 ease-in-out rounded-xl border-2 border-white" href={props.href} target="_blank" rel="noreferrer">Go to repository</a>
            </div>
        </div>
        
    );
}

export default ProjectBox;