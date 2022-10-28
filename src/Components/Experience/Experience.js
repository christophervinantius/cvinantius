import React from "react";
import Organization from "./Organization.js";
import Education from "./Education.js";

function Experience() {
    return (
        <div id="experience-section" className="experience-section">
            <div class="experience-intro">
                <h1>My Experiences</h1>
            </div>
            <div class="experience-subsection">
                <Organization />
                <hr></hr>
                <Education />
            </div>
        </div>
    );
}

export default Experience;