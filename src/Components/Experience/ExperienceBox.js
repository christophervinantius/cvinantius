import React from "react";

function ExperienceBox(props) {
    return (
        <div class="text-center bg-red-800 text-white flex flex-col p-8 gap-8 shadow-xl rounded-xl">
                <div class="text-2xl font-bold">
                    <h1>{props.title}</h1>
                </div>
                <div class="flex flex-col gap-2">
                    <p>{props.job}</p>
                    <p>{props.time}</p>
                    <p>{props.desc}</p>
                </div>
        </div>
    );
}

export default ExperienceBox;