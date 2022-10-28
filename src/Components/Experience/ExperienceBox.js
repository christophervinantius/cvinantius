import React from "react";

function ExperienceBox(props) {
    return (
        <div class="experience-box">
                <div class="experience-box-title">
                    <h1>{props.title}</h1>
                </div>
                <div class="experience-box-content">
                    <p class="experience-job">{props.job}</p>
                    <p class="experience-time">{props.time}</p>
                    <p class="experience-desc">{props.desc}</p>
                </div>
        </div>
    );
}

export default ExperienceBox;