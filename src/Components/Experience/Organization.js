import React from "react";
import ExperienceBox from "./ExperienceBox.js";

function Organization() {

    const organizations = [
        {
            title: "Bina Nusantara Computer Club",
            job: "LnT Praetorian - Mobile Application Development",
            time: "October 2021 - July 2022",
            desc: "Teaching basic Java programming and basic Android application development with Java using Android Studio"
        },
        {
            title: "Bina Nusantara Computer Club",
            job: "LnT Member - Front End Development",
            time: "October 2020 - July 2021",
            desc: "Learning about basic front-end website development with HTML, CSS, and JavaScript"
        }
    ]

    const organizationList = organizations.map((organization) => {
        return <ExperienceBox title={organization.title} job={organization.job} time={organization.time} desc={organization.desc} />
    });

    return (
            <div class="experience-organization-section">
                <div class="experience-organization-title">
                    <h1>Organization</h1>
                </div>
                <div class="experience-organization-content">
                    {organizationList}
                </div>
            </div>
    );
}

export default Organization;