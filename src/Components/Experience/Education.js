import React from "react";
import ExperienceBox from "./ExperienceBox.js";

function Education() {

    const educations = [
        {
            title: "Bina Nusantara University",
            job: "Bachelor of Computer Science",
            time: "September 2020 - present",
            desc: "GPA: 3.81"
        },
        {
            title: "SMA Kalam Kudus 2 Jakarta",
            job: "Senior High School",
            time: "July 2017 - June 2020",
            desc: "Final Score: 89.00"
        }
    ]

    const educationList = educations.map((education) => {
        return <ExperienceBox title={education.title} job={education.job} time={education.time} desc={education.desc} />
    });

    return (
        <div class="experience-education-section">
                <div class="experience-education-title">
                    <h1>Education</h1>
                </div>
                <div class="experience-education-content">
                    {educationList}
                </div>
        </div>
    );
}

export default Education;