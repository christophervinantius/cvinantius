import React from "react";

function Navbar() {
    return (
        <div className="bg-red flex items-center justify-between px-12 py-8">
            <div className="w-1/4">
                <a id="logo-white" href="#hero-section"><img className="w-1/4" src="assets/CVLogoWhite.png" alt="CV Logo White"></img></a>
            </div>
            <div className="w-3/4">
                <ul className="text-xl text-white flex justify-end gap-12">
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;