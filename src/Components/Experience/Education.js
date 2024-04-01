import React from "react";
import ExperienceBox from "./ExperienceBox.js";

function Education() {

    const educations = [
        {
            title: "Bina Nusantara University",
            job: "Bachelor of Computer Science",
            time: "September 2020 - present",
            desc: "GPA: 3.88"
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
        <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-bold text-red pb-4">
                    <h1 className="underline">Education</h1>
                </div>
                <div className="flex flex-col items-center justify-between gap-8">
                    {educationList}
                </div>
        </div>
    );
}

export default Education;