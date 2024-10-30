import React from "react";
import Work from "./Work.js";
import Organization from "./Organization.js";

function Experience() {
    return (
        <div id="experience-section" className="pt-4 pb-8 px-8 flex flex-col items-center justify-center gap-4">
            <div class="text-3xl font-bold text-red-800">
                <h1>Experiences</h1>
            </div>
            <div class="flex flex-col items-center justify-center gap-8">
                <Work />
                <Organization />
            </div>
        </div>
    );
}

export default Experience;