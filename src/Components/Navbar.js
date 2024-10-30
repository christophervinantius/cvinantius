import React from "react";

function Navbar() {
    return (
        <div className="bg-red-700 flex items-center justify-between px-12 py-8 w-full">
            <div className="w-1/5">
                <a id="logo-white" href="#hero-section"><img className="w-1/4" src="assets/CVLogoWhite.png" alt="CV Logo White"></img></a>
            </div>
            <div className="w-2/5">

            </div>
            <div className="w-2/5">
                <ul className="text-xl text-white flex justify-between">
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;