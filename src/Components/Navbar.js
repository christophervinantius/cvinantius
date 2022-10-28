import React from "react";

function Navbar() {
    return (
        <div className="nav">
            <div className='nav-brand'>
                <a id="logo-red" href="#hero-section"><img src="assets/CVLogo.png" alt="CV Logo"></img></a>
                <a id="logo-white" href="#hero-section"><img src="assets/CVLogoWhite.png" alt="CV Logo White"></img></a>
                </div>
            <div className="nav-menu">
                <ul>
                    <li><a href="#project-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>
                    <li><a href="#contact-section">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;