import React from "react";
import ExperienceBox from "./ExperienceBox.js";

function Organization() {

    const organizations = [
        {
            title: "Bina Nusantara Computer Club",
            job: "LnT Praetorian - Mobile Application Development",
            time: "October 2021 - September 2022",
            desc: "Taught basic Android application development with Java using Android Studio"
        },
        // {
        //     title: "Bina Nusantara Computer Club",
        //     job: "LnT Member - Front End Development",
        //     time: "October 2020 - July 2021",
        //     desc: "Learned about basic front-end website development with HTML, CSS, and JavaScript"
        // }
    ]

    const organizationList = organizations.map((organization) => {
        return <ExperienceBox title={organization.title} job={organization.job} time={organization.time} desc={organization.desc} />
    });

    return (
        <div className="flex flex-col items-center justify-between gap-8">
            {organizationList}
        </div>
    );
}

export default Organization;