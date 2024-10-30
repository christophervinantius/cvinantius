import React from "react";
import ExperienceBox from "./ExperienceBox.js";

function Work() {

    const works = [
        {
            title: "PT Kalbe Farma Tbk",
            job: "Front-End Web Developer Intern",
            time: "February 2023 - February 2024",
            desc: "Helped finishing integrations in K-Partner web application in e-Sourcing and e-P2P modules"
        },
    ]

    const workList = works.map((work) => {
        return <ExperienceBox title={work.title} job={work.job} time={work.time} desc={work.desc} />
    });

    return (
        <div className="flex flex-col items-center justify-between gap-8">
            {workList}
        </div>
    );
}

export default Work;